import 'dotenv/config'
import { createHash } from 'node:crypto'
import { mkdir, writeFile } from 'node:fs/promises'
import pg from 'pg'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import {
  convertMarkdownToLexical,
  defaultEditorConfig,
  sanitizeServerEditorConfig,
} from '@payloadcms/richtext-lexical'
import { legalEnglish } from '../src/seed/legalEnglish'

// Refuse to apply a translation if its Ukrainian source has changed.
const sourceHashes: Record<string, string> = {
  warranty: '94862d001c03cdcf0fdc2cc0f985ac9302eaf5d06e8775ce6c57ff6afaf5e2a0',
  privacy: '9b0e85fe4ced702f1916d5df7878265184ad03e3cdd0afc453492dbd35191ac5',
  terms: '746407e82a9a9d9caeaf458299b31ea2c74c7c92e510225bdcbdd1cdf0236102',
  cookie: 'ce59b2607b357fdbb0ad999d4981d18819b1dab5e27e2c6564895b559de6561c',
  offer: 'd2a6d9dd059e49c155bade7f1c711a40ae9ef57cc577b49d053aa1deb3346bc7',
  deliverypayment: '16d90b933f6ce2c450f527b41492f6b881597ae9be9bf62236564b37649b56bd',
}

function hasContent(value: unknown): boolean {
  if (!value || typeof value !== 'object') return false
  const node = value as Record<string, unknown>
  if (typeof node.text === 'string' && node.text.trim()) return true
  if (['block', 'upload', 'horizontalrule'].includes(String(node.type))) return true
  return Object.values(node).some((child) =>
    Array.isArray(child) ? child.some(hasContent) : hasContent(child),
  )
}

const apply = process.argv.includes('--apply')
const config = await buildConfig({
  secret: 'offline-legal-content-conversion',
  collections: [],
  db: postgresAdapter({ pool: { connectionString: process.env.DATABASE_URL }, push: false }),
})
const editorConfig = await sanitizeServerEditorConfig(defaultEditorConfig, config, true)
const convert = (markdown: string) => convertMarkdownToLexical({ markdown, editorConfig })
const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 10000,
})
try {
  await client.connect()
  await client.query('BEGIN')
  const pages = (await client.query('SELECT * FROM legal_pages ORDER BY id FOR UPDATE')).rows
  const locales = (await client.query('SELECT * FROM legal_pages_locales ORDER BY id FOR UPDATE'))
    .rows
  if (apply) {
    await mkdir('db_backups', { recursive: true })
    const backup = `db_backups/legal-pages-before-lexical-${Date.now()}.json`
    await writeFile(backup, JSON.stringify({ pages, locales }, null, 2), { flag: 'wx' })
    console.log(`Backup: ${backup}`)
  }
  let count = 0
  for (const page of pages) {
    for (const locale of ['uk', 'en']) {
      const row = locales.find((item) => item._parent_id === page.id && item._locale === locale)
      if (!row) throw new Error(`Missing ${locale} row for ${page.slug}`)
      if (hasContent(row.content)) continue
      const markdown = locale === 'uk' ? page.content_markdown : legalEnglish[page.slug]
      if (!markdown) throw new Error(`Missing source for ${page.slug}/${locale}`)
      if (
        locale === 'en' &&
        createHash('sha256').update(page.content_markdown).digest('hex') !== sourceHashes[page.slug]
      ) {
        throw new Error(`Ukrainian source changed for ${page.slug}; review translation first`)
      }
      const content = convert(markdown)
      if (!hasContent(content)) throw new Error(`Empty conversion for ${page.slug}/${locale}`)
      // Verify that headings and lists remain structured editor nodes.
      const nodes = JSON.stringify(content)
      if (markdown.includes('\n- ') && !nodes.includes('"type":"list"'))
        throw new Error('List conversion failed')
      if (markdown.includes('# ') && !nodes.includes('"type":"heading"'))
        throw new Error('Heading conversion failed')
      if (apply) {
        await client.query('UPDATE legal_pages_locales SET content=$1::jsonb WHERE id=$2', [
          JSON.stringify(content),
          row.id,
        ])
        await client.query('UPDATE legal_pages SET updated_at=now() WHERE id=$1', [page.id])
      }
      console.log(`${apply ? 'Updated' : 'Would update'} ${page.slug}/${locale}`)
      count++
    }
  }
  await client.query(apply ? 'COMMIT' : 'ROLLBACK')
  console.log(
    `${count} locale documents ${apply ? 'updated' : 'validated (dry run)'}. Original Markdown columns retained.`,
  )
} catch (error) {
  await client.query('ROLLBACK').catch(() => undefined)
  throw error
} finally {
  await client.end()
}
