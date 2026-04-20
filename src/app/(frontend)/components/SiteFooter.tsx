import type { ReactNode } from 'react'

import Link from 'next/link'

const catalogLinks = [
  { href: '/catalog/aparaty-vakuumnoho-masazhu', label: 'Апарати вакуумного масажу' },
  { href: '/catalog', label: 'Апарати фізіотерапії' },
  { href: '/info?topic=components', label: 'Комплектуючі (маніпули / насадки, фільтри, шланги)' },
  { href: '/info?topic=materials', label: 'Витратні матеріали' },
  { href: '/info?topic=accessories', label: 'Аксесуари' },
  { href: '/info?topic=chairs', label: 'Стільці для масажу' },
]

const infoLinks = [
  { href: '/about', label: 'Про V-NRG' },
  { href: '/info?topic=delivery', label: 'Доставка та оплата' },
  { href: '/info?topic=warranty', label: 'Гарантія та сервіс' },
  { href: '/training', label: 'Навчання' },
  { href: '/review', label: 'Відгуки' },
  { href: '/info?topic=blog', label: 'Блог' },
]

const legalLinks = [
  { href: '/info?topic=privacy', label: 'Політика конфіденційності' },
  { href: '/info?topic=terms', label: 'Умови користування' },
  { href: '/info?topic=offer', label: 'Публічна оферта' },
]

export default function SiteFooter() {
  return (
    <footer className="flex flex-col items-center rounded-t-[32px] bg-[#22354A] px-6 pb-6 pt-12 text-white lg:rounded-t-[48px] lg:px-[clamp(64px,6.944vw,100px)] lg:pb-12 lg:pt-[100px]">
      <div className="flex w-full max-w-[1270px] flex-col gap-8 lg:w-[min(1270px,calc(100vw-48px))] lg:gap-[52px]">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:justify-between">
          <div className="flex w-full max-w-[373px] flex-col gap-6">
            <div className="flex flex-col items-start gap-4">
              <FooterLogoIcon />

              <p className="text-[16px] font-normal leading-[165%] text-white">
                Професійне обладнання для вакуумного масажу. Більше 20 країн довіряють нашій
                якості
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[18px] font-bold leading-[165%] text-white">
                Ми в соцмережах:
              </span>

              <div className="flex items-center gap-3">
                <FooterSocialLink href="https://instagram.com/" label="Instagram">
                  <InstagramIcon />
                </FooterSocialLink>
                <FooterSocialLink href="https://facebook.com/" label="Facebook">
                  <FacebookIcon />
                </FooterSocialLink>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-6 lg:w-auto lg:flex-row lg:gap-[90px]">
            <FooterColumn className="w-[274px] lg:w-[232px]" links={catalogLinks} title="Каталог" />
            <FooterColumn compactOnMobile links={infoLinks} title="Інформація" />

            <div className="flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-4">
                <FooterHeading>Зв&apos;яжіться з нами</FooterHeading>

                <div className="flex flex-col items-start gap-4 text-[16px] font-medium leading-[165%] text-white">
                  <div className="flex items-center gap-4">
                    <Link href="tel:+380975468820">+38 (097) 546-88-20</Link>

                    <div className="flex items-center gap-3">
                      <FooterSocialLink href="https://t.me/" label="Telegram">
                        <TelegramIcon />
                      </FooterSocialLink>
                      <FooterSocialLink href="https://wa.me/380975468820" label="WhatsApp">
                        <WhatsappIcon />
                      </FooterSocialLink>
                    </div>
                  </div>

                  <Link href="mailto:0870758@gmail.com">0870758@gmail.com</Link>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4">
                <FooterHeading>Адреса</FooterHeading>
                <p className="text-[16px] font-medium leading-[165%] text-white">
                  м. Бровари, вул. Підприємницька, 22
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 border-t border-white/20 pt-8 text-center text-[16px] font-medium leading-[165%] text-white lg:flex-row lg:justify-between lg:gap-8 lg:pt-10 lg:text-left">
          <p>© 2026 V-NRG. Всі права захищені.</p>

          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8">
            {legalLinks.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  className = '',
  compactOnMobile = false,
  links,
  title,
}: {
  className?: string
  compactOnMobile?: boolean
  links: Array<{ href: string; label: string }>
  title: string
}) {
  return (
    <div className={`flex flex-col items-start gap-4 ${className}`}>
      <FooterHeading>{title}</FooterHeading>

      <div className="flex flex-col items-start gap-4">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`text-[16px] font-medium text-white ${
              compactOnMobile ? 'leading-[21.33px] lg:leading-[165%]' : 'leading-[165%]'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[20px] font-medium leading-[145%] text-white lg:text-[24px]">
      {children}
    </h2>
  )
}

function FooterSocialLink({
  children,
  href,
  label,
}: {
  children: ReactNode
  href: string
  label: string
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#4FACF5] transition-opacity duration-200 hover:opacity-80"
    >
      {children}
    </Link>
  )
}

function FooterLogoIcon() {
  return (
    <svg width="108" height="48" viewBox="0 0 108 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.7679 0.308594L13.9574 22.8231H9.84139L0 0.308594H4.53385L12.0309 17.678L19.5899 0.308594H23.7679Z" fill="#4FACF5" />
      <path d="M24.5723 12.209H33.4156V15.5513H24.5723V12.209Z" fill="#4FACF5" />
      <path d="M58.2128 0.308594V22.8231H54.7699L42.3521 7.58132V22.8231H38.2051V0.308594H41.648L54.0658 15.5504V0.308594H58.2128Z" fill="#4FACF5" />
      <path d="M78.9929 22.8231L74.3972 16.2312C74.2038 16.2544 73.9175 16.2622 73.5307 16.2622H68.4475V22.8231H64.2695V0.308594H73.5307C75.4804 0.308594 77.1825 0.633545 78.6293 1.27571C80.0761 1.91788 81.1825 2.83857 81.9562 4.04554C82.7299 5.24476 83.1167 6.6761 83.1167 8.32406C83.1167 10.0185 82.7067 11.473 81.8788 12.6954C81.051 13.9179 79.8672 14.8308 78.3276 15.4266L83.5036 22.8231H78.9929ZM77.4765 5.00492C76.5326 4.23122 75.1477 3.84437 73.3295 3.84437H68.4397V12.8192H73.3295C75.1554 12.8192 76.5326 12.4246 77.4765 11.6432C78.4204 10.8618 78.8924 9.74766 78.8924 8.31633C78.8924 6.87725 78.4204 5.77087 77.4765 5.00492Z" fill="#4FACF5" />
      <path d="M103.149 11.3114H107.102V20.2863C105.942 21.207 104.595 21.9188 103.048 22.4062C101.501 22.8936 99.9146 23.1489 98.2898 23.1489C95.9919 23.1489 93.9262 22.6538 92.0848 21.6557C90.2434 20.6576 88.7966 19.2805 87.7444 17.5242C86.6921 15.7679 86.166 13.7795 86.166 11.5745C86.166 9.36943 86.6921 7.38104 87.7444 5.62476C88.7966 3.86847 90.2511 2.4913 92.1002 1.49323C93.9571 0.495164 96.0384 0 98.3517 0C100.24 0 101.957 0.309477 103.497 0.936169C105.044 1.55512 106.336 2.46808 107.388 3.66731L104.75 6.24371C103.033 4.52611 100.967 3.66731 98.5451 3.66731C96.959 3.66731 95.5509 4 94.313 4.66537C93.0828 5.33075 92.1157 6.25919 91.4194 7.46615C90.7231 8.66537 90.3749 10.0425 90.3749 11.5822C90.3749 13.0832 90.7231 14.4371 91.4194 15.6364C92.1157 16.8356 93.0828 17.7795 94.313 18.4681C95.5432 19.1567 96.9436 19.4971 98.5064 19.4971C100.263 19.4971 101.81 19.1102 103.141 18.3366V11.3114H103.149Z" fill="#4FACF5" />
      <path d="M42.623 33.5623H43.7449V35.1638C44.1859 34.5526 44.6965 34.0961 45.2768 33.7944C45.8494 33.4926 46.4993 33.3379 47.2033 33.3379C48.4412 33.3379 49.5012 33.7866 50.3832 34.6764C51.2652 35.5661 51.7062 36.6416 51.7062 37.8949C51.7062 39.1793 51.2729 40.2625 50.3987 41.1599C49.5244 42.0574 48.4722 42.4984 47.242 42.4984C46.5457 42.4984 45.9112 42.3514 45.331 42.0652C44.7507 41.7789 44.2246 41.3456 43.7526 40.7731V45.4617H42.6308V33.5623H42.623ZM47.1105 34.4211C46.1434 34.4211 45.3232 34.7615 44.6579 35.4346C43.9925 36.1077 43.6598 36.951 43.6598 37.9646C43.6598 38.6222 43.8068 39.218 44.1008 39.7518C44.3948 40.2779 44.8203 40.6957 45.3697 41.0052C45.919 41.3147 46.4993 41.4694 47.1182 41.4694C47.7217 41.4694 48.2865 41.3147 48.8126 41.0052C49.3387 40.6957 49.7642 40.2547 50.0815 39.6976C50.3987 39.1406 50.5534 38.5526 50.5534 37.9414C50.5534 37.3224 50.3987 36.7344 50.0892 36.1851C49.7797 35.628 49.3619 35.2025 48.8281 34.893C48.3097 34.5758 47.7294 34.4211 47.1105 34.4211Z" fill="white" />
      <path d="M53.3709 33.5623H54.516V34.8389C54.8564 34.336 55.2201 33.9647 55.5992 33.7171C55.9783 33.4695 56.3729 33.3457 56.7829 33.3457C57.0924 33.3457 57.4251 33.4463 57.7733 33.6397L57.1853 34.5836C56.9531 34.483 56.752 34.4289 56.5895 34.4289C56.2181 34.4289 55.8545 34.5836 55.5063 34.8931C55.1582 35.2026 54.8951 35.6745 54.7094 36.3244C54.5702 36.8196 54.5005 37.8254 54.5005 39.3341V42.2819H53.3555V33.5623H53.3709Z" fill="white" />
      <path d="M62.856 33.3379C64.2022 33.3379 65.3086 33.8253 66.1906 34.7924C66.9952 35.6822 67.3975 36.7267 67.3975 37.9414C67.3975 39.1561 66.972 40.2238 66.1287 41.1367C65.2776 42.0497 64.1944 42.5062 62.856 42.5062C61.5175 42.5062 60.4266 42.0497 59.5755 41.1367C58.7244 40.2238 58.3066 39.1638 58.3066 37.9414C58.3066 36.7344 58.709 35.6899 59.5136 34.8002C60.3956 33.8253 61.5097 33.3379 62.856 33.3379ZM62.856 34.4365C61.9198 34.4365 61.1229 34.777 60.4498 35.4733C59.7767 36.1619 59.444 36.9975 59.444 37.9723C59.444 38.599 59.5987 39.187 59.9004 39.7363C60.2022 40.2779 60.62 40.7035 61.1384 40.9975C61.6567 41.2915 62.2293 41.4385 62.8482 41.4385C63.4672 41.4385 64.0397 41.2915 64.5581 40.9975C65.0765 40.7035 65.4943 40.2779 65.796 39.7363C66.0977 39.1948 66.2525 38.6067 66.2525 37.9723C66.2525 36.9975 65.9198 36.1619 65.2467 35.4733C64.5813 34.7847 63.7767 34.4365 62.856 34.4365Z" fill="white" />
      <path d="M66.9479 48.0005H42.6307C39.0872 48.0005 36.2168 45.1301 36.2168 41.5866V35.0643C36.2168 31.5208 39.0872 28.6504 42.6307 28.6504H66.9479C70.4914 28.6504 73.3618 31.5208 73.3618 35.0643V41.5866C73.3618 45.1301 70.4914 48.0005 66.9479 48.0005Z" stroke="white" strokeWidth="0.773694" strokeMiterlimit="10" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5925 1.36523H4.77433C2.89154 1.36523 1.36523 2.89154 1.36523 4.77433V11.5925C1.36523 13.4753 2.89154 15.0016 4.77433 15.0016H11.5925C13.4753 15.0016 15.0016 13.4753 15.0016 11.5925V4.77433C15.0016 2.89154 13.4753 1.36523 11.5925 1.36523Z" stroke="white" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.9094 7.75301C10.9936 8.32045 10.8966 8.89998 10.6324 9.40916C10.3682 9.91834 9.95021 10.3312 9.43781 10.5892C8.92541 10.8471 8.34473 10.9368 7.77837 10.8457C7.21201 10.7546 6.68881 10.4872 6.28318 10.0815C5.87755 9.6759 5.61015 9.1527 5.51902 8.58634C5.42788 8.01998 5.51765 7.4393 5.77556 6.9269C6.03346 6.4145 6.44637 5.99647 6.95555 5.73227C7.46473 5.46806 8.04426 5.37114 8.6117 5.45528C9.19051 5.54111 9.72637 5.81083 10.1401 6.22458C10.5539 6.63834 10.8236 7.1742 10.9094 7.75301Z" stroke="white" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.9316 4.43262H11.9377" stroke="white" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.27397 16.3656H6.65349C6.21579 16.3656 5.85972 16.0096 5.85972 15.5718V9.6612H4.33087C3.89315 9.6612 3.53711 9.305 3.53711 8.8674V6.33468C3.53711 5.89695 3.89315 5.54092 4.33087 5.54092H5.85972V4.27261C5.85972 3.01504 6.25459 1.94513 7.00153 1.1787C7.75186 0.408807 8.80045 0.00195312 10.0339 0.00195312L12.0324 0.00521307C12.4694 0.00594815 12.8248 0.362017 12.8248 0.798945V3.15055C12.8248 3.58824 12.4689 3.94431 12.0313 3.94431L10.6857 3.94479C10.2753 3.94479 10.1708 4.02706 10.1485 4.05227C10.1117 4.09414 10.0679 4.21233 10.0679 4.5388V5.54082H11.9302C12.0704 5.54082 12.2062 5.5754 12.3229 5.64054C12.5748 5.78126 12.7313 6.04729 12.7313 6.33481L12.7303 8.86756C12.7303 9.305 12.3742 9.66107 11.9365 9.66107H10.0678V15.5718C10.0679 16.0096 9.7117 16.3656 9.27397 16.3656ZM6.81901 15.4063H9.10842V9.23175C9.10842 8.9395 9.34626 8.70178 9.63838 8.70178H11.771L11.7719 6.50027H9.63825C9.34614 6.50027 9.10842 6.26258 9.10842 5.9703V4.53884C9.10842 4.16407 9.14651 3.73785 9.42939 3.41748C9.77124 3.03022 10.3099 2.98554 10.6855 2.98554L11.8655 2.98502V0.964244L10.0332 0.961271C8.05085 0.961271 6.81904 2.23019 6.81904 4.27264V5.97027C6.81904 6.26239 6.58132 6.50023 6.28917 6.50023H4.49643V8.70175H6.28917C6.58132 8.70175 6.81904 8.93947 6.81904 9.23172L6.81901 15.4063Z" fill="white" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.91237 14.7873C9.93828 14.8518 9.98331 14.9069 10.0414 14.9451C10.0995 14.9833 10.168 15.0029 10.2375 15.0011C10.307 14.9993 10.3744 14.9763 10.4304 14.9352C10.4865 14.894 10.5287 14.8367 10.5512 14.7709L14.9831 1.81635C15.0049 1.75593 15.009 1.69056 14.9951 1.62786C14.9811 1.56517 14.9495 1.50775 14.9041 1.46233C14.8587 1.41691 14.8013 1.38537 14.7386 1.37139C14.6759 1.35741 14.6105 1.36157 14.5501 1.38339L1.59556 5.81521C1.52976 5.83778 1.47244 5.87993 1.43129 5.93601C1.39014 5.99209 1.36713 6.05942 1.36535 6.12896C1.36357 6.19849 1.3831 6.26691 1.42132 6.32502C1.45955 6.38314 1.51464 6.42817 1.57919 6.45407L6.98601 8.62226C7.15693 8.69069 7.31223 8.79302 7.44253 8.92309C7.57284 9.05317 7.67545 9.20828 7.74419 9.37907L9.91237 14.7873Z" stroke="white" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.9005 1.4668L7.44141 8.92521" stroke="white" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WhatsappIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.38796 13.6383C6.68926 14.3058 8.1862 14.4866 9.60902 14.1481C11.0318 13.8096 12.287 12.9741 13.1482 11.792C14.0095 10.61 14.4203 9.1592 14.3065 7.7011C14.1928 6.243 13.562 4.87347 12.5278 3.8393C11.4937 2.80513 10.1241 2.17434 8.66603 2.06059C7.20793 1.94684 5.75715 2.35761 4.57511 3.21888C3.39308 4.08016 2.55752 5.33529 2.21902 6.75811C1.88052 8.18093 2.06133 9.67787 2.72887 10.9792L1.36523 15.0019L5.38796 13.6383Z" stroke="white" strokeWidth="1.36364" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
