import type { ButtonHTMLAttributes, ReactNode } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import arrowSideIcon from '@public/icon/arrow_side.svg'

type ArrowPillButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
  href?: string
  labelClassName?: string
}

export default function ArrowPillButton({
  children,
  className = '',
  href,
  labelClassName = '',
  type = 'button',
  ...props
}: ArrowPillButtonProps) {
  const content = (
    <>
      <span className={`relative z-10 text-[18px] font-medium leading-[165%] ${labelClassName}`}>
        {children}
      </span>
      <span className="pointer-events-none absolute inset-y-0 right-[-54px] w-[54px] rounded-full bg-[#4FACF5] transition-[width,border-radius] duration-300 ease-out group-hover/arrow-pill:w-[calc(100%+54px)] group-hover/arrow-pill:rounded-[40px]" />
      <span className="pointer-events-none absolute right-[-54px] top-0 z-10 flex h-[54px] w-[54px] items-center justify-center">
        <Image src={arrowSideIcon} alt="" aria-hidden="true" />
      </span>
    </>
  )

  const buttonClassName = `group/arrow-pill relative flex h-[54px] items-center rounded-[40px] bg-white px-6 text-[#22354A] transition-colors duration-300 hover:text-white ${className}`

  if (href) {
    return (
      <Link href={href} className={buttonClassName}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} className={buttonClassName} {...props}>
      {content}
    </button>
  )
}
