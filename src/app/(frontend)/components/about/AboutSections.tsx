import Image from 'next/image'

import aboutCertificate from '@public/assets/about/about-certificate.jpg'
import aboutTeam1 from '@public/assets/about/about-team-1.jpg'
import aboutTeam2 from '@public/assets/about/about-team-2.jpg'

import AboutMapSection from './AboutMapSection'
import PageHero from '../shared/PageHero'
import SectionHeading from '../shared/SectionHeading'
import { aboutHighlights, aboutPrinciples } from './data'

export function AboutHeroSection() {
  return (
    <PageHero
      currentLabel="Про бренд"
      title="Про бренд V-NRG"
      description="Міжнародний виробник професійного обладнання для вакуумного масажу з понад 15-річним досвідом."
      contentClassName="max-w-[845px]"
    />
  )
}

export function AboutStorySection() {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-[500px_minmax(0,1fr)]">
      <div className="relative mx-auto h-[479px] w-full max-w-[500px]">
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
        <AboutStatCard className="bottom-0 left-5 bg-[#22354A]" value="20+" label="країн присутності" />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="text-[16px] font-bold uppercase leading-[145%] text-[#4FACF5]">Про нас</div>
          <h2 className="text-[36px] font-medium leading-[125%] text-[#22354A] md:text-[48px]">
            Наша мета це розвивати професійну вакуумну терапію
          </h2>
        </div>

        <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
          V-NRG створює інноваційні апарати вакуумного масажу для професійного використання. Ми поєднуємо
          технології та практичний досвід, щоб допомогти спеціалістам працювати ефективніше і безпечніше.
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

export function AboutCertificatesSection() {
  return (
    <section className="mt-24 rounded-[48px] bg-[#22354A] py-[100px]">
      <div className="mx-auto flex max-w-[1288px] flex-col items-center gap-12 px-6">
        <SectionHeading
          align="center"
          eyebrow="Надійність та підтримка"
          title="Офіційне обладнання з гарантією та сервісом"
          titleClassName="max-w-[700px] text-white"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={`certificate-${index}`}
              className="flex justify-center rounded-[20px] bg-white p-8 shadow-[0_24px_64px_rgba(0,0,0,0.08)]"
            >
              <Image
                src={aboutCertificate}
                alt={`Сертифікат V-NRG ${index + 1}`}
                className="h-[210px] w-[150px] rounded-[5px] border border-[#D5E0E8] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AboutPrinciplesSection() {
  return (
    <section className="mx-auto max-w-[1288px] px-6 py-[100px]">
      <div className="flex flex-col gap-12">
        <SectionHeading align="center" eyebrow="Наші принципи" title="Основа бренду V-NRG" />

        <div className="grid gap-5 lg:grid-cols-3">
          {aboutPrinciples.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-6 rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.06)]"
            >
              <Image src={item.icon} alt="" width={32} height={32} aria-hidden />

              <div className="flex flex-col gap-4">
                <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">{item.title}</h3>
                <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AboutMapSectionBlock() {
  return (
    <section className="mx-auto max-w-[1288px] px-6 pb-[100px]">
      <div className="flex flex-col gap-12">
        <SectionHeading align="center" eyebrow="Географія" title="Де скористатися V-NRG" />
        <AboutMapSection />
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
