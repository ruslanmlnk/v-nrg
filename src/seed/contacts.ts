import 'dotenv/config'

import { copyFile, unlink } from 'fs/promises'
import { tmpdir } from 'os'
import path from 'path'

import type { Media } from '@/payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

const socialNetworks = [
  {
    file: 'contacts-contacts-page-telegram.svg',
    label: 'Telegram',
    type: 'telegram',
    url: 'https://t.me/pvv_x',
  },
  {
    file: 'contacts-contacts-page-whatsapp.svg',
    label: 'WhatsApp',
    type: 'whatsapp',
    url: 'https://wa.me/380975468820',
  },
  {
    file: 'contacts-contacts-page-instagram.svg',
    label: 'Instagram',
    type: 'instagram',
    url: 'https://www.instagram.com/v_nrg_pro',
  },
  {
    file: 'contacts-contacts-page-facebook.svg',
    label: 'Facebook',
    type: 'facebook',
    url: 'https://www.facebook.com/v.nrg.pro/',
  },
] as const

async function seedContacts() {
  const payload = await getPayload({ config: configPromise })
  const socials = []

  for (const social of socialNetworks) {
    const icon = await upsertIcon(payload, social.label, social.file)
    const socialNetwork = await upsertSocialNetwork(payload, {
      icon: icon.id,
      label: social.label,
      type: social.type,
      url: social.url,
    })
    socials.push(socialNetwork.id)
  }

  const favicon = await upsertFile(
    payload,
    'Site favicon',
    path.resolve('src', 'app', '(frontend)', 'public', 'logo.svg'),
  )

  await payload.updateGlobal({
    slug: 'contacts',
    data: {
      title: "Зв'яжіться з нами",
      description: 'Маєте запитання щодо обладнання або співпраці? Наша команда готова допомогти',
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

  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      favicon: favicon.id,
      footer: {
        socialNetworks: [
          socials[socialNetworks.findIndex((social) => social.type === 'instagram')],
          socials[socialNetworks.findIndex((social) => social.type === 'facebook')],
        ].filter(Boolean),
        contactSocialNetworks: [
          socials[socialNetworks.findIndex((social) => social.type === 'telegram')],
          socials[socialNetworks.findIndex((social) => social.type === 'whatsapp')],
        ].filter(Boolean),
      },
    },
  })

  console.log('Contacts seeded')
}

async function upsertSocialNetwork(
  payload: Awaited<ReturnType<typeof getPayload>>,
  social: {
    icon: number
    label: string
    type: (typeof socialNetworks)[number]['type']
    url: string
  },
) {
  const existing = await payload.find({
    collection: 'social-networks',
    depth: 0,
    limit: 1,
    where: { type: { equals: social.type } },
  })

  if (existing.docs[0]) {
    return payload.update({
      collection: 'social-networks',
      data: social,
      depth: 0,
      id: existing.docs[0].id,
    })
  }

  return payload.create({
    collection: 'social-networks',
    data: social,
    depth: 0,
  })
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

  const source = path.resolve('src', 'app', '(frontend)', 'public', 'icon', 'generated', fileName)
  const target = path.resolve(tmpdir(), `contacts-${label.toLowerCase()}.svg`)
  return upsertFile(payload, alt, source, target)
}

async function upsertFile(
  payload: Awaited<ReturnType<typeof getPayload>>,
  alt: string,
  source: string,
  target = path.resolve(tmpdir(), `${alt.toLowerCase().replace(/\W+/g, '-')}.svg`),
) {
  const existing = await payload.find({
    collection: 'media',
    depth: 0,
    limit: 1,
    where: { alt: { equals: alt } },
  })
  if (existing.docs[0]) return existing.docs[0] as Media

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
