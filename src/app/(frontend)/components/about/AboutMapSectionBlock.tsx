import config from '@payload-config'
import { getPayload } from 'payload'
import aboutSalon from '@public/assets/about/about-salon-1.webp'

import AboutMapSection, { type Salon } from './AboutMapSection'
import SectionHeading from '../shared/SectionHeading'
import { getSiteLocale } from '../../lib/getSiteLocale'

export async function AboutMapSectionBlock() {
  const payload = await getPayload({ config })
  const locale = await getSiteLocale()
  const result = await payload.find({
    collection: 'locations',
    locale,
    depth: 1,
    limit: 100,
    sort: 'sortOrder',
    where: {
      isActive: {
        equals: true,
      },
    },
  })

  const locations = result.docs.flatMap<Salon>((location) => {
    const image =
      typeof location.image === 'object' && location.image?.url ? location.image.url : aboutSalon.src

    return [
      {
        id: String(location.id),
        name: location.name,
        country: location.country,
        city: location.city,
        address: location.address,
        image,
        coordinates: [location.latitude, location.longitude],
        instagram: location.instagram ?? undefined,
        phone: location.phone ?? undefined,
      },
    ]
  })

  return (
    <section className="mx-auto max-w-[1288px] px-6 pb-12 md:pb-[100px]">
      <div className="flex flex-col gap-6 md:gap-12">
        <SectionHeading align="center" eyebrow="Географія" title="Де скористатися V-NRG" />
        <AboutMapSection locations={locations.length ? locations : undefined} />
      </div>
    </section>
  )
}
