'use client'

import type { StaticImageData } from 'next/image'

import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { ReactCompareSlider } from 'react-compare-slider'

type BeforeAfterSliderProps = {
  afterAlt: string
  afterImage: StaticImageData
  afterLabel?: string
  beforeAlt: string
  beforeImage: StaticImageData
  beforeLabel?: string
  className?: string
  defaultPosition?: number
}

export default function BeforeAfterSlider({
  afterAlt,
  afterImage,
  afterLabel = 'Після',
  beforeAlt,
  beforeImage,
  beforeLabel = 'До',
  className,
  defaultPosition = 58,
}: BeforeAfterSliderProps) {
  const position = useMotionValue(defaultPosition)
  const smoothPosition = useSpring(position, {
    damping: 34,
    mass: 0.4,
    stiffness: 260,
  })

  const beforeOpacity = useTransform(smoothPosition, [0, 50, 100], [1, 0.86, 0.42])
  const afterOpacity = useTransform(smoothPosition, [0, 50, 100], [0.42, 0.86, 1])
  const beforeX = useTransform(smoothPosition, [0, 100], [0, -8])
  const afterX = useTransform(smoothPosition, [0, 100], [8, 0])

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.35, once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className={`relative h-[200px] overflow-hidden rounded-[20px] bg-[#22354A] shadow-[0_24px_64px_rgba(0,0,0,0.18)] ${className ?? ''}`}
    >
      <div className="pointer-events-none absolute inset-x-5 top-5 z-20 flex items-center justify-between">
        <motion.span
          style={{ opacity: beforeOpacity, x: beforeX }}
          className="rounded-full bg-white/88 px-3 py-1 text-[14px] font-bold uppercase tracking-[0.08em] text-[#22354A] backdrop-blur"
        >
          {beforeLabel}
        </motion.span>

        <motion.span
          style={{ opacity: afterOpacity, x: afterX }}
          className="rounded-full bg-[#22354A]/68 px-3 py-1 text-[14px] font-bold uppercase tracking-[0.08em] text-white backdrop-blur"
        >
          {afterLabel}
        </motion.span>
      </div>

      <ReactCompareSlider
        boundsPadding="0px"
        className="h-full w-full"
        defaultPosition={defaultPosition}
        onPositionChange={(value) => position.set(value)}
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
              <HandleIcon />
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

function HandleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 7L5 12L10 17"
        stroke="white"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7L19 12L14 17"
        stroke="white"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
