import Image from 'next/image'
import aboutTeam1 from '@public/assets/about/about-team-1.jpg'
import aboutTeam2 from '@public/assets/about/about-team-2.jpg'
import { aboutHighlights } from './data'

export function AboutStorySection() {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-[500px_minmax(0,1fr)]">
      <div className="relative order-2 mx-auto h-[479px] w-full max-w-[500px] lg:order-1">
        <Image
          src={aboutTeam1}
          alt="Команда V-NRG"
          className="absolute left-0 top-5 h-[260px] w-[240px] rounded-[20px] object-cover"
        />
        <AboutStatCard className="right-5 top-0 bg-[#4FACF5]" value="15+" label="років досвіду" />

        <Image
          src={aboutTeam2}
          alt="Виробництво V-NRG"
          className="absolute bottom-0 right-0 h-[260px] w-[240px] rounded-[20px] object-cover"
        />
        <AboutStatCard
          className="bottom-0 left-5 bg-[#22354A]"
          value="20+"
          label="країн присутності"
        />
      </div>

      <div className="order-1 flex flex-col gap-6 lg:order-2">
        <div className="flex flex-col gap-4">
          <div className="text-[16px] font-bold uppercase leading-[145%] text-[#4FACF5]">
            Про нас
          </div>
          <h2 className="text-[36px] font-medium leading-[125%] text-[#22354A] md:text-[48px]">
            Наша мета це розвивати професійну вакуумну терапію
          </h2>
        </div>

        <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
          V-NRG створює інноваційні апарати вакуумного масажу для професійного використання. Ми
          поєднуємо технології та практичний досвід, щоб допомогти спеціалістам працювати
          ефективніше і безпечніше.
        </p>

        <ul className="flex flex-col gap-4">
          {aboutHighlights.map((item, index) => (
            <li key={item} className="flex items-center gap-4">
              <span className="flex h-[22px] min-w-[22px] items-center justify-center rounded-full bg-[#4FACF5] text-[11px] font-semibold leading-[165%] text-white">
                {index + 1}
              </span>
              <span className="text-[18px] font-medium leading-[165%] text-[#22354A]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function AboutStatCard({
  className,
  label,
  value,
}: {
  className: string
  label: string
  value: string
}) {
  return (
    <div
      className={`absolute flex h-[179px] w-[220px] flex-col items-center justify-center rounded-[20px] p-8 text-center text-white ${className}`}
    >
      <div className="text-[48px] font-bold leading-[145%]">{value}</div>
      <div className="text-[16px] font-medium leading-[165%]">{label}</div>
    </div>
  )
}
