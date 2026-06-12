import Image from 'next/image'

import type { ProductData } from '../../data/products'
import SectionHeading from '../shared/SectionHeading'
import { ProductPageSection } from '../productDetail/ProductPageSection'

export default function ModelComparisonSection({
  products,
  subtitle,
  title,
}: {
  products: ProductData[]
  subtitle: string
  title: string
}) {
  return (
    <ProductPageSection
      fullWidth
      className="gap-12 rounded-t-[48px] bg-[#F5F8F9] pt-12 text-white md:mt-[-40px] md:pt-[100px]"
    >
      <div className="mx-auto flex max-w-[1288px] flex-col items-center gap-6 px-6 md:gap-12">
        <SectionHeading align="center" eyebrow={subtitle} title={title} />
        <div className="grid w-full gap-5 xl:grid-cols-2">
          {products.map((product) => (
            <article key={product.id} className="flex flex-col items-center gap-6 rounded-[20px] bg-white p-8 md:flex-row">
              {product.compareImage ? (
                <Image src={product.compareImage} alt={product.title} width={180} height={255} className="h-[255px] w-[180px] shrink-0 object-contain" />
              ) : null}
              <div className="flex min-w-0 flex-1 flex-col items-start gap-5 md:gap-6">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[20px] font-medium leading-[145%] text-[#22354A] md:text-[24px]">{product.title}</h3>
                  <p className="text-base font-medium leading-[26px] text-[#22354A] md:text-[18px] md:leading-[165%]">{product.shortDescription}</p>
                </div>
                <ul className="flex flex-col gap-2">
                  {product.listFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#4FACF5]" />
                      <span className="text-base font-medium leading-[26px] text-[#22354A] md:text-[18px] md:leading-[165%]">{feature}</span>
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
