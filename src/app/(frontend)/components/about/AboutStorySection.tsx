import Image from 'next/image'
import aboutTeam1 from '@public/assets/about/about-team-1.jpg'
import aboutTeam2 from '@public/assets/about/about-team-2.jpg'
import { aboutHighlights } from './data'

export function AboutStorySection() {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-[500px_minmax(0,1fr)]">
      <div className="relative order-2 mx-auto h-[280px] w-full max-w-[280px] md:h-[479px] md:max-w-[500px] lg:order-1">
        <Image
          src={aboutTeam1}
          alt="Команда V-NRG"
          className="absolute left-0 top-[10px] h-[140px] w-[128px] rounded-[14px] object-cover md:top-5 md:h-[260px] md:w-[240px] md:rounded-[20px]"
        />
        <AboutStatCard
          className="right-[8px] top-0 h-[128px] w-[120px] bg-[#4FACF5] md:right-5 md:h-[179px] md:w-[220px]"
          value="15+"
          label="років досвіду"
        />

        <Image
          src={aboutTeam2}
          alt="Виробництво V-NRG"
          className="absolute bottom-0 right-0 h-[160px] w-[128px] rounded-[14px] object-cover md:h-[260px] md:w-[240px] md:rounded-[20px]"
        />
        <AboutStatCard
          className="bottom-0 left-[10px] h-[120px] w-[120px] bg-[#22354A] md:left-5 md:h-[179px] md:w-[220px]"
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
      className={`absolute flex flex-col items-center justify-center rounded-[14px] p-4 text-center text-white md:rounded-[20px] md:p-8 ${className}`}
    >
      <div className="text-[28px] font-bold leading-[145%] md:text-[48px]">{value}</div>
      <div className="text-[11px] font-medium leading-[165%] md:text-[16px]">{label}</div>
    </div>
  )
}
