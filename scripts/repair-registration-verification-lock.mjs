import dotenv from 'dotenv'
import pg from 'pg'

dotenv.config({ path: '.env' })
dotenv.config({ path: '.env.local', override: true })

const client = new pg.Client({ connectionString: process.env.DATABASE_URL })

try {
  await client.connect()
  await client.query(
    'ALTER TABLE payload_locked_documents_rels ADD COLUMN IF NOT EXISTS registration_verifications_id integer',
  )
  const constraint = await client.query(
    "SELECT 1 FROM pg_constraint WHERE conname = 'payload_locked_documents_rels_registration_verifications_fk'",
  )
  if (!constraint.rowCount) {
    await client.query(`
      ALTER TABLE payload_locked_documents_rels
      ADD CONSTRAINT payload_locked_documents_rels_registration_verifications_fk
      FOREIGN KEY (registration_verifications_id)
      REFERENCES registration_verifications(id)
      ON DELETE CASCADE
    `)
  }
  await client.query(`
    CREATE INDEX IF NOT EXISTS payload_locked_documents_rels_registration_verifications_id_idx
    ON payload_locked_documents_rels (registration_verifications_id)
  `)
  console.log('Registration verification lock relation repaired')
} finally {
  await client.end()
}
