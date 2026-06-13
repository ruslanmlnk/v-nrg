'use client'

import PageHero from '../shared/PageHero'

export function ContactsHeroSection({
  description,
  title,
}: {
  description: string
  title: string
}) {
  return (
    <PageHero
      currentLabel="Контакти"
      title={title}
      description={description}
      contentClassName="max-w-[760px]"
      descriptionClassName="text-[16px] text-[#D5E0E8] md:text-[18px]"
    />
  )
}
