import type { ReactNode } from 'react'
import type { StaticImageData } from 'next/image'
import Link from 'next/link'

import IconAsset from '@/app/(frontend)/components/ui/IconAsset'

type SuccessAction = {
  href: string
  label: string
  variant?: 'primary' | 'secondary'
}

type SuccessStateCardProps = {
  description: ReactNode
  iconSrc: StaticImageData | string
  primaryAction: SuccessAction
  secondaryAction?: SuccessAction
  title: string
}

export default function SuccessStateCard({
  description,
  iconSrc,
  primaryAction,
  secondaryAction,
  title,
}: SuccessStateCardProps) {
  return (
    <section className="rounded-[32px] bg-white px-6 py-16 shadow-[0_20px_60px_rgba(34,53,74,0.06)] md:px-12 md:py-20">
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-8 text-center">
        <span className="flex h-[110px] w-[110px] items-center justify-center rounded-full bg-[#4FACF5] text-white shadow-[0_8px_0_rgba(34,53,74,0.08)]">
          <IconAsset src={iconSrc} width={54} height={54} />
        </span>

        <div className="flex flex-col gap-3">
          <h1 className="text-[40px] font-medium leading-[145%] text-[#22354A] md:text-[56px]">{title}</h1>
          <div className="text-[20px] font-medium leading-[165%] text-[#22354A]">{description}</div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <SuccessActionButton {...primaryAction} />
          {secondaryAction ? <SuccessActionButton {...secondaryAction} /> : null}
        </div>
      </div>
    </section>
  )
}

function SuccessActionButton({ href, label, variant = 'primary' }: SuccessAction) {
  const className =
    variant === 'primary'
      ? 'bg-[#22354A] text-white'
      : 'border border-[#D5E0E8] text-[#22354A]'

  return (
    <Link
      href={href}
      className={`flex h-[50px] items-center justify-center rounded-full px-8 text-[18px] font-medium leading-[145%] ${className}`}
    >
      {label}
    </Link>
  )
}
