import configPromise from '@payload-config'
import { getPayload } from 'payload'

import type { Media } from '@/payload-types'
import {
  ContactRequestSection,
  ContactsHeroSection,
  ContactsPillsSection,
} from '../components/contacts/ContactsSections'

export default async function ContactsPage() {
  const payload = await getPayload({ config: configPromise })
  const contacts = await payload.findGlobal({ slug: 'contacts', depth: 2 })
  const socialNetworks = (contacts.form.socialNetworks ?? []).flatMap((social) => {
    const icon = getMedia(social.icon)
    return icon?.url ? [{ icon: icon.url, label: social.label, url: social.url }] : []
  })

  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <ContactsHeroSection description={contacts.description} title={contacts.title} />
        <ContactsPillsSection
          address={contacts.address}
          email={contacts.email}
          phone={contacts.phone}
        />
        <ContactRequestSection
          description={contacts.form.description}
          socialNetworks={socialNetworks}
          title={contacts.form.title}
        />
      </div>
    </div>
  )
}

function getMedia(value: number | Media | null | undefined) {
  return typeof value === 'object' && value ? value : null
}
