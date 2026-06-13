import 'dotenv/config'

import { copyFile, unlink } from 'fs/promises'
import { tmpdir } from 'os'
import path from 'path'

import type { Media } from '@/payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

const socialNetworks = [
  { label: 'Telegram', url: 'https://t.me/', file: 'contacts-contacts-page-telegram.svg' },
  { label: 'WhatsApp', url: 'https://wa.me/380975468820', file: 'contacts-contacts-page-whatsapp.svg' },
  { label: 'Instagram', url: 'https://instagram.com/', file: 'contacts-contacts-page-instagram.svg' },
  { label: 'Facebook', url: 'https://facebook.com/', file: 'contacts-contacts-page-facebook.svg' },
] as const

async function seedContacts() {
  const payload = await getPayload({ config: configPromise })
  const socials = []

  for (const social of socialNetworks) {
    const icon = await upsertIcon(payload, social.label, social.file)
    socials.push({ icon: icon.id, label: social.label, url: social.url })
  }

  await payload.updateGlobal({
    slug: 'contacts',
    data: {
      title: "Зв'яжіться з нами",
      description:
        'Маєте запитання щодо обладнання або співпраці? Наша команда готова допомогти',
      phone: '+38 (097) 546-88-20',
      email: '0870758@gmail.com',
      address: 'м. Бровари, вул. Підприємницька, 22',
      form: {
        title: "Зв'яжіться з нами",
        description:
          "Щоб отримати консультацію, дізнатися більше про обладнання або домовитися про демонстрацію, залиште заявку онлайн або зв'яжіться з нами у робочий час",
        socialNetworks: socials,
      },
    },
  })

  console.log('Contacts seeded')
}

async function upsertIcon(
  payload: Awaited<ReturnType<typeof getPayload>>,
  label: string,
  fileName: string,
) {
  const alt = `Contacts: ${label}`
  const existing = await payload.find({
    collection: 'media',
    depth: 0,
    limit: 1,
    where: { alt: { equals: alt } },
  })
  if (existing.docs[0]) return existing.docs[0] as Media

  const source = path.resolve(
    'src',
    'app',
    '(frontend)',
    'public',
    'icon',
    'generated',
    fileName,
  )
  const target = path.resolve(tmpdir(), `contacts-${label.toLowerCase()}.svg`)
  await copyFile(source, target)

  try {
    return (await payload.create({
      collection: 'media',
      data: { alt },
      depth: 0,
      filePath: target,
    })) as Media
  } finally {
    await unlink(target).catch(() => undefined)
  }
}

seedContacts()
  .catch((error: unknown) => {
    console.error(error)
    process.exitCode = 1
  })
  .finally(() => process.exit())
