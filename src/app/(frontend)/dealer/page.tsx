import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'
import { getSiteLocale } from '../lib/getSiteLocale'
import { createSeoMetadata } from '../lib/seo'

import Link from 'next/link'

import IconAsset from '../components/ui/IconAsset'
import facebookIconAsset from '@public/icon/generated/components-site-footer-facebook.svg'
import instagramIconAsset from '@public/icon/generated/components-site-footer-instagram.svg'
import telegramIconAsset from '@public/icon/generated/components-site-footer-telegram.svg'
import whatsappIconAsset from '@public/icon/generated/components-site-footer-whatsapp.svg'

import { DealerHeroSection } from '../components/dealer/DealerHeroSection'
import ArrowPillButton from '../components/ui/ArrowPillButton'

const getDealerPage = cache(async () => {
  const payload = await getPayload({ config: configPromise })
  return payload.findGlobal({ slug: 'dealer-page', locale: await getSiteLocale(), depth: 0 })
})

export async function generateMetadata() {
  const page = await getDealerPage()
  return createSeoMetadata(page.seo, 'Стати дилером V-NRG', '/dealer')
}

const socialLinks = [
  { href: '#', icon: telegramIconAsset, label: 'Telegram' },
  { href: '#', icon: whatsappIconAsset, label: 'WhatsApp' },
  { href: '#', icon: instagramIconAsset, label: 'Instagram' },
  { href: '#', icon: facebookIconAsset, label: 'Facebook' },
]

export default async function DealerPage() {
  const page = await getDealerPage()
  const benefits = page.benefits ?? []
  return (
    <main className="pt-5">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col px-4 pb-[100px] sm:px-6 xl:px-0">
        <section className="flex flex-col items-center">
          <div className="w-full">
            <DealerHeroSection title={page.hero?.title} description={page.hero?.description} />
          </div>

          {benefits.length > 0 ? (
            <div className="-mt-[35px] grid w-[calc(100%-32px)] max-w-[1100px] grid-cols-1 gap-8 rounded-[20px] bg-[#4FACF5] p-8 text-white md:grid-cols-2 lg:w-full lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex min-w-0 flex-col gap-4">
                  <h2 className="break-words text-[24px] font-medium leading-[145%]">
                    {benefit.title}
                  </h2>
                  <p className="whitespace-pre-line break-words text-[18px] font-medium leading-[165%]">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </section>

        <section className="grid items-start gap-12 pt-12 lg:grid-cols-[minmax(0,1fr)_610px]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6 border-b border-[#D5E0E8] pb-6">
              <h2 className="text-[38px] font-medium leading-[125%] text-[#22354A] md:text-[48px]">
                {page.applicationIntro?.title}
              </h2>
              <p className="whitespace-pre-line text-[18px] font-medium leading-[165%] text-[#22354A]">
                {page.applicationIntro?.description}
              </p>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-[24px] font-bold leading-[125%] text-[#22354A]">
                Ми на зв’язку:
              </h3>
              <div className="flex items-center gap-3">
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4FACF5] text-white transition-transform duration-300 hover:scale-105"
                  >
                    <IconAsset src={item.icon} height={20} width={20} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="flex w-full flex-col justify-center gap-8 rounded-[24px] bg-[#22354A] p-8 text-white">
            <div className="flex flex-col gap-6 border-b border-white/20 pb-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-[18px] font-bold leading-[165%]">Вже маєте акаунт?</h2>
                <p className="text-[18px] font-medium leading-[165%]">
                  Увійдіть в особистий кабінет та подайте заявку на дилерство
                </p>
              </div>
              <div className="flex">
                <ArrowPillButton href="/login" labelClassName="leading-[145%]">
                  Увійти
                </ArrowPillButton>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-[18px] font-bold leading-[165%]">Ще не зареєстровані?</h2>
                <p className="text-[18px] font-medium leading-[165%]">
                  Створіть акаунт, щоб подати заявку та стати дилером
                </p>
              </div>
              <div className="flex">
                <ArrowPillButton href="/register" labelClassName="leading-[145%]">
                  Зареєструватися
                </ArrowPillButton>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
