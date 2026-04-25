'use client'

import type { StaticImageData } from 'next/image'

import Image from 'next/image'
import { motion, useMotionValue } from 'motion/react'
import { ReactCompareSlider } from 'react-compare-slider'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import handleIconAsset from '@public/icon/generated/components-ui-before-after-slider-handle.svg'

type BeforeAfterSliderProps = {
  afterAlt: string
  afterImage: StaticImageData
  beforeAlt: string
  beforeImage: StaticImageData
  className?: string
}

export default function BeforeAfterSlider({
  afterAlt,
  afterImage,
  beforeAlt,
  beforeImage,
  className,
}: BeforeAfterSliderProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.35, once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className={`relative h-[200px] overflow-hidden rounded-[20px] bg-[#22354A] shadow-[0_24px_64px_rgba(0,0,0,0.18)] ${className ?? ''}`}
    >
      <ReactCompareSlider
        boundsPadding="0px"
        className="h-full w-full"
        transition="0.4s cubic-bezier(0.22, 1, 0.36, 1)"
        handle={
          <div className="relative flex h-full w-[50px] items-center justify-center">
            <div className="absolute left-1/2 top-0 h-[75px] w-[2px] -translate-x-1/2 bg-white/95" />
            <div className="absolute bottom-0 left-1/2 h-[75px] w-[2px] -translate-x-1/2 bg-white/95" />
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full border-2 border-white bg-[#B6B6B666] backdrop-blur-[4px]"
            >
              <IconAsset src={handleIconAsset} width={24} height={24} />
            </motion.div>
          </div>
        }
        itemOne={<CompareImage alt={beforeAlt} image={beforeImage} />}
        itemTwo={<CompareImage alt={afterAlt} image={afterImage} />}
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(34,53,74,0.05)_0%,rgba(34,53,74,0)_38%,rgba(34,53,74,0.08)_100%)]" />
    </motion.div>
  )
}

function CompareImage({ alt, image }: { alt: string; image: StaticImageData }) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 400px, 100vw"
      />
    </div>
  )
}
