import Image from 'next/image'

import hero_bg from '@public/assets/hero.png'

import AccentLink from '../shared/AccentLink'

const Hero = () => {
  return (
    <section className="mx-auto mt-5 grid max-w-[1288px] grid-cols-1 gap-5 px-6 md:grid-cols-2">
      <div className="rounded-[20px] bg-[#22354A] px-8 py-12">
        <div>
          <h1 className="text-[56px] font-semibold leading-[125%] text-white">
            Професійні апарати вакуумного масажу V-NRG
          </h1>
          <p className="mt-4 text-[18px] font-medium leading-[165%] text-white">
            Допомагають працювати з болем, набряками та станом шкіри. Швидкий запуск у роботу,
            навчання та підтримка від виробника
          </p>
        </div>

        <AccentLink className="mt-[164.5px]" href="/contacts" label="Отримати консультацію" />
      </div>

      <div className="relative overflow-hidden rounded-[20px]">
        <Image src={hero_bg} alt="Обладнання V-NRG" />
      </div>
    </section>
  )
}

export default Hero
