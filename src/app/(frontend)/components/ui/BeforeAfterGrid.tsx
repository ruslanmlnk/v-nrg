'use client'

import type { StaticImageData } from 'next/image'

import { motion } from 'motion/react'

import BeforeAfterSlider from './BeforeAfterSlider'

type BeforeAfterGridProps = {
  afterAlt: string
  beforeAlt: string
  cards: readonly BeforeAfterGridCard[]
  className?: string
}

type BeforeAfterGridCard = {
  afterImage: StaticImageData
  beforeImage: StaticImageData
}

export default function BeforeAfterGrid({
  afterAlt,
  beforeAlt,
  className = '',
  cards,
}: BeforeAfterGridProps) {
  return (
    <div className={`grid gap-5 lg:grid-cols-3 ${className}`.trim()}>
      {cards.map((card, index) => (
        <motion.div
          key={`comparison-${index}`}
          initial={{ opacity: 0, scale: 0.96, y: 22 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <BeforeAfterSlider
            beforeAlt={beforeAlt}
            beforeImage={card.beforeImage}
            afterAlt={afterAlt}
            afterImage={card.afterImage}
          />
        </motion.div>
      ))}
    </div>
  )
}
