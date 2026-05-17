'use client'

import PageHero from '../shared/PageHero'

export function ContactsHeroSection() {
  return (
    <PageHero
      currentLabel="Контакти"
      title="Зв'яжіться з нами"
      description="Маєте запитання щодо обладнання або співпраці? Наша команда готова допомогти"
      contentClassName="max-w-[760px]"
      descriptionClassName="text-[16px] text-[#D5E0E8] md:text-[18px]"
    />
  )
}
