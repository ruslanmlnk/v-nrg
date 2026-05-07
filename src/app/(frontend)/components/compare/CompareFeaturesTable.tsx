'use client'

import type { CSSProperties } from 'react'
import { type ProductData } from '../../data/products'

export function CompareFeaturesTable({
  compareColumnsStyle,
  compareProducts,
  featureLabels,
}: {
  compareColumnsStyle?: CSSProperties
  compareProducts: ProductData[]
  featureLabels: string[]
}) {
  return (
    <div className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      {featureLabels.length === 0 ? (
        <div className="text-[18px] font-medium leading-[165%] text-[#6F8498]">
          Характеристики для порівняння відсутні.
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          <section className="border-b border-[#D5E0E8] pb-4">
            <div className="mb-4 text-[24px] font-medium leading-[145%] text-[#22354A]">
              Характеристика
            </div>
            <div className="grid gap-4 md:gap-[81px]" style={compareColumnsStyle}>
              {compareProducts.map((product) => (
                <div
                  key={`${product.id}-heading`}
                  className="text-[18px] font-medium leading-[165%] text-[#22354A]"
                >
                  {product.title}
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-col gap-8">
            {featureLabels.map((label, featureIndex) => (
              <section
                key={label}
                className={`flex flex-col gap-4 ${
                  featureIndex === featureLabels.length - 1 ? '' : 'border-b border-[#D5E0E8] pb-4'
                }`}
              >
                <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">{label}</h3>
                <div className="grid gap-4 md:gap-[81px]" style={compareColumnsStyle}>
                  {compareProducts.map((product) => (
                    <div
                      key={`${product.id}-${label}`}
                      className="text-[18px] font-medium leading-[165%] text-[#22354A]"
                    >
                      {product.compareFeatures.find((feature) => feature.label === label)?.value}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
