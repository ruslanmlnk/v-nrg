import Image, { type StaticImageData } from 'next/image'

import model18Image from '@public/assets/product/model-v-nrg-18-pro.png'
import model36Image from '@public/assets/product/model-v-nrg-36-pro.png'

import SectionHeading from '../shared/SectionHeading'
import { ProductPageSection } from '../productDetail/ProductPageSection'

type ModelComparisonItem = {
  description: string
  features: string[]
  image: StaticImageData
  title: string
}

const models: ModelComparisonItem[] = [
  {
    description: 'Ідеально для початку роботи та одного спеціаліста',
    features: [
      'Кількість маніпул: 18',
      'Помірне навантаження',
      'Компактний формат',
      'Швидкий старт роботи',
    ],
    image: model18Image,
    title: 'V-NRG 18 PRO',
  },
  {
    description: 'Для постійного потоку клієнтів та декількох спеціалістів',
    features: [
      'Кількість маніпул: 36',
      'Інтенсивна робота',
      'Розширені можливості процедур',
      'Для декількох спеціалістів',
    ],
    image: model36Image,
    title: 'V-NRG 36 PRO',
  },
]

export default function ModelComparisonSection() {
  return (
    <ProductPageSection
      fullWidth
      className="gap-12 rounded-t-[48px] bg-[#F5F8F9] pt-[100px] mt-[-40px] text-white"
    >
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-12">
        <SectionHeading
          align="center"
          eyebrow="Порівняння моделей"
          title={
            <>
              Яка конфігурація підійде
              <br />
              саме вам
            </>
          }
        />

        <div className="grid w-full gap-5 xl:grid-cols-2">
          {models.map((model) => (
            <article
              key={model.title}
              className="flex flex-col items-center gap-6 rounded-[20px] bg-white p-8 md:flex-row"
            >
              <Image
                src={model.image}
                alt={model.title}
                className="h-[255px] w-[180px] shrink-0 object-contain"
                sizes="180px"
              />

              <div className="flex min-w-0 flex-1 flex-col items-start gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">
                    {model.title}
                  </h3>
                  <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                    {model.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#4FACF5]" />
                      <span className="text-[18px] font-medium leading-[165%] text-[#22354A]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </ProductPageSection>
  )
}
