import configPromise from '@payload-config'
import { getPayload } from 'payload'

import type { Media, SocialNetwork } from '@/payload-types'
import {
  ContactRequestSection,
  ContactsHeroSection,
  ContactsPillsSection,
} from '../components/contacts/ContactsSections'
import { getSiteLocale } from '../lib/getSiteLocale'

export default async function ContactsPage() {
  const payload = await getPayload({ config: configPromise })
  const locale = await getSiteLocale()
  const contacts = await payload.findGlobal({ slug: 'contacts', depth: 2, locale })
  const socialNetworks = (contacts.form.socialNetworks ?? []).flatMap((social) =>
    mapSocialNetwork(social),
  )

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

function getSocialNetwork(value: number | SocialNetwork | null | undefined) {
  return typeof value === 'object' && value ? value : null
}

function mapSocialNetwork(value: number | SocialNetwork | null | undefined) {
  const social = getSocialNetwork(value)
  const icon = getMedia(social?.icon)

  return social && icon?.url ? [{ icon: icon.url, label: social.label, url: social.url }] : []
}
