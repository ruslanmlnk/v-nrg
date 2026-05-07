import Image from 'next/image'
import SectionHeading from '../shared/SectionHeading'
import { aboutPrinciples } from './data'

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
                <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">
                  {item.title}
                </h3>
                <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
