import Image from 'next/image'
import aboutTeam1 from '@public/assets/about/about-team-1.jpg'
import aboutTeam2 from '@public/assets/about/about-team-2.jpg'
import aboutCertificate from '@public/assets/about/about-certificate.jpg'

import AboutMapSection from './AboutMapSection'
import SiteFooter from '../SiteFooter'

const aboutHighlights = [
  'Власні розробки та інженерні рішення',
  'Сертифіковане виробництво',
  'Підтримка спеціалістів та навчання',
]

const aboutPrinciples = [
  {
    description:
      'Покращувати якість життя людей через сучасні технології вакуумного масажу',
    icon: <MissionIcon />,
    title: 'Місія',
  },
  {
    description:
      'V-NRG — результат багаторічних досліджень та розвитку у сфері вакуумної терапії',
    icon: <HistoryIcon />,
    title: 'Історія',
  },
  {
    description:
      'Дотримання міжнародних стандартів виробництва та багаторівневий контроль якості на кожному етапі',
    icon: <QualityIcon />,
    title: 'Якість',
  },
]

const AboutPage = () => {
  return (
    <div className="pt-12">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 lg:gap-24">
        <section className="flex min-h-[268px] items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white">
          <div className="flex max-w-[845px] flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
              <span>Головна</span>
              <span>/</span>
              <span className="text-[#4FACF5]">Про бренд</span>
            </div>
            <h1 className="text-[36px] font-medium leading-[145%] md:text-[48px]">Про бренд V-NRG</h1>
            <p className="text-[18px] font-medium leading-[165%]">
              Міжнародний виробник професійного обладнання для вакуумного масажу з понад 15-річним досвідом
            </p>
          </div>
        </section>

        <section className="grid items-center gap-12 lg:grid-cols-[500px_minmax(0,1fr)]">
          <div className="relative mx-auto h-[479px] w-full max-w-[500px]">
            <Image
              src={aboutTeam1}
              alt="Команда V-NRG"
              className="absolute left-0 top-5 h-[260px] w-[240px] rounded-[20px] object-cover"
            />
            <div className="absolute right-5 top-0 flex h-[179px] w-[220px] flex-col items-center justify-center rounded-[20px] bg-[#4FACF5] p-8 text-center text-white">
              <div className="text-[48px] font-bold leading-[145%]">15+</div>
              <div className="text-[16px] font-medium leading-[165%]">років досвіду</div>
            </div>
            <Image
              src={aboutTeam2}
              alt="Виробництво V-NRG"
              className="absolute bottom-0 right-0 h-[260px] w-[240px] rounded-[20px] object-cover"
            />
            <div className="absolute bottom-0 left-5 flex h-[179px] w-[220px] flex-col items-center justify-center rounded-[20px] bg-[#22354A] p-8 text-center text-white">
              <div className="text-[48px] font-bold leading-[145%]">20+</div>
              <div className="text-[16px] font-medium leading-[165%]">країн присутності</div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="text-[16px] font-bold uppercase leading-[145%] text-[#4FACF5]">Про нас</div>
              <h2 className="text-[36px] font-medium leading-[125%] text-[#22354A] md:text-[48px]">
                Наша мета — розвивати професійну вакуумну терапію
              </h2>
            </div>
            <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
              V-NRG створює інноваційні апарати вакуумного масажу для професійного використання. Ми
              поєднуємо технології та практичний досвід, щоб допомогти спеціалістам працювати
              ефективніше й безпечніше
            </p>
            <ul className="flex flex-col gap-4">
              {aboutHighlights.map((item) => (
                <li key={item} className="flex items-center gap-4">
                  <span className="flex h-[22px] min-w-[22px] items-center justify-center rounded-full bg-[#4FACF5] text-[11px] font-semibold leading-[165%] text-white">
                    0
                  </span>
                  <span className="text-[18px] font-medium leading-[165%] text-[#22354A]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <section className="mt-24 rounded-[48px] bg-[#22354A] py-[100px]">
        <div className="mx-auto flex max-w-[1288px] flex-col items-center gap-12 px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="text-[16px] font-bold uppercase leading-[145%] text-[#4FACF5]">
              Надійність та підтримка
            </div>
            <h2 className="max-w-[700px] text-[36px] font-medium leading-[125%] text-white md:text-[48px]">
              Офіційне обладнання з гарантією та сервісом
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
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

      <section className="mx-auto max-w-[1288px] px-6 py-[100px]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="text-[16px] font-bold uppercase leading-[145%] text-[#4FACF5]">Наші принципи</div>
            <h2 className="text-[36px] font-medium leading-[125%] text-[#22354A] md:text-[48px]">
              Основа бренду V-NRG
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {aboutPrinciples.map((item) => (
              <div key={item.title} className="flex flex-col gap-6 rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.06)]">
                {item.icon}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">{item.title}</h3>
                  <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1288px] px-6 pb-[100px]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="text-[16px] font-bold uppercase leading-[145%] text-[#4FACF5]">Географія</div>
            <h2 className="text-[36px] font-medium leading-[125%] text-[#22354A] md:text-[48px]">
              Де скористатися V-NRG
            </h2>
          </div>

          <AboutMapSection />
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

function MissionIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4L19.7082 11.3463L28 12.5451L22 18.3639L23.4164 26.5451L16 22.7263L8.58359 26.5451L10 18.3639L4 12.5451L12.2918 11.3463L16 4Z" stroke="#4FACF5" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="3" fill="#4FACF5" />
    </svg>
  )
}

function HistoryIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8V16L21 19" stroke="#4FACF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 16C27 22.0751 22.0751 27 16 27C9.92487 27 5 22.0751 5 16C5 9.92487 9.92487 5 16 5C20.0017 5 23.5046 7.1361 25.4199 10.3281" stroke="#4FACF5" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 4V10H20" stroke="#4FACF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function QualityIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4L24 7V14C24 19.5228 20.4183 24.5001 16 26C11.5817 24.5001 8 19.5228 8 14V7L16 4Z" stroke="#4FACF5" strokeWidth="2" strokeLinejoin="round" />
      <path d="M12.5 15.5L15 18L20 13" stroke="#4FACF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default AboutPage
