import configPromise from '@payload-config'
import { getPayload } from 'payload'

import type { Media, SocialNetwork } from '@/payload-types'
import { ContactRequestSection } from '../contacts/ContactRequestSection'
import { getSiteLocale } from '../../lib/getSiteLocale'

export default async function HomeContactSection() {
  const payload = await getPayload({ config: configPromise })
  const contacts = await payload.findGlobal({
    slug: 'contacts',
    depth: 2,
    locale: await getSiteLocale(),
  })
  const socialNetworks = (contacts.form.socialNetworks ?? []).flatMap(mapSocialNetwork)

  return (
    <section className="py-12 md:py-[100px]">
      <div className="mx-auto max-w-[1288px] px-6">
        <ContactRequestSection
          description={contacts.form.description}
          socialNetworks={socialNetworks}
          title={contacts.form.title}
        />
      </div>
    </section>
  )
}

function mapSocialNetwork(value: number | SocialNetwork | null | undefined) {
  const social = typeof value === 'object' && value ? value : null
  const icon = typeof social?.icon === 'object' && social.icon ? (social.icon as Media) : null

  return social && icon?.url ? [{ icon: icon.url, label: social.label, url: social.url }] : []
}
