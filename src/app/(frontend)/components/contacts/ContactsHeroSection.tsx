'use client'

import Link from 'next/link'

export function ContactsHeroSection() {
  return (
    <section className="flex min-h-[268px] flex-col items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white">
      <div className="flex max-w-[760px] flex-col items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
          <Link href="/">Головна</Link>
          <span>/</span>
          <span className="text-[#4FACF5]">Контакти</span>
        </div>
        <h1 className="text-[36px] font-medium leading-[145%] md:text-[48px]">
          Зв&apos;яжіться з нами
        </h1>
        <p className="text-[16px] font-medium leading-[165%] text-[#D5E0E8] md:text-[18px]">
          Маєте запитання щодо обладнання або співпраці? Наша команда готова допомогти
        </p>
      </div>
    </section>
  )
}
