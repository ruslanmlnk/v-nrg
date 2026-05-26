import type { ButtonHTMLAttributes, ReactNode } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import arrowSideIcon from '@public/icon/arrow_side.svg'

type ArrowPillButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  className?: string
  href?: string
  isDark?: boolean
  labelClassName?: string
}

export default function ArrowPillButton({
  children,
  className = '',
  href,
  isDark = false,
  labelClassName = '',
  type = 'button',
  ...props
}: ArrowPillButtonProps) {
  const content = (
    <>
      <span
        className={`relative z-10 text-[16px] font-medium leading-[145%] md:text-[18px] md:leading-[165%] ${labelClassName}`}
      >
        {children}
      </span>
      <span className="pointer-events-none absolute inset-y-0 right-[-50px] w-[50px] rounded-full bg-[#4FACF5] transition-[width,border-radius] duration-300 ease-out group-hover/arrow-pill:w-[calc(100%+50px)] group-hover/arrow-pill:rounded-[40px] md:right-[-54px] md:w-[54px] md:group-hover/arrow-pill:w-[calc(100%+54px)]" />
      <span className="pointer-events-none absolute right-[-50px] top-0 z-10 flex h-[50px] w-[50px] items-center justify-center md:right-[-54px] md:h-[54px] md:w-[54px]">
        <Image
          src={arrowSideIcon}
          alt=""
          aria-hidden="true"
          className="h-auto w-[26px] md:w-[28px]"
        />
      </span>
    </>
  )

  const colorClassName = isDark ? 'bg-[#22354A] text-white' : 'bg-white text-[#22354A]'
  const buttonClassName = `group/arrow-pill relative flex h-[50px] items-center rounded-[40px] px-4 ${colorClassName} transition-colors duration-300 hover:text-white md:h-[54px] md:px-6 ${className}`

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
