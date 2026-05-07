'use client'

import { motion } from 'motion/react'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import benefitIconAsset from '@public/icon/generated/dealer-dealer-page-benefit.svg'
import { dealerBenefits } from './data'

export function DealerBenefitsSection() {
  return (
    <section className="grid gap-5 md:grid-cols-3">
      {dealerBenefits.map((benefit, index) => (
        <motion.article
          key={benefit.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.06, duration: 0.3 }}
          className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]"
        >
          <div className="mb-5 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#F1F9FF] text-[#4FACF5]">
            <IconAsset src={benefitIconAsset} width={28} height={28} />
          </div>
          <h2 className="text-[24px] font-medium leading-[145%] text-[#22354A]">{benefit.title}</h2>
          <p className="mt-3 text-[18px] font-medium leading-[165%] text-[#22354A]">
            {benefit.description}
          </p>
        </motion.article>
      ))}
    </section>
  )
}
