import Image from 'next/image'
import Link from 'next/link'

import arrowSideIcon from '@public/icon/arrow_side.svg'

type AccentLinkProps = {
  className?: string
  href: string
  label: string
  theme?: 'dark' | 'light'
}

export default function AccentLink({ className, href, label, theme = 'light' }: AccentLinkProps) {
  const baseThemeClasses = theme === 'dark' ? 'bg-[#22354A] text-white' : 'bg-white text-[#22354A]'

  return (
    <Link
      href={href}
      className={`group relative inline-flex h-[54px] items-center rounded-[40px] pl-6 pr-[86px] text-[18px] font-medium leading-[165%] transition-colors duration-300 group-hover:text-white ${baseThemeClasses} ${className ?? ''}`}
    >
      <span className="relative z-10">{label}</span>
      <span className="pointer-events-none absolute inset-y-0 right-0 w-[54px] rounded-full bg-[#4FACF5] transition-[width,border-radius] duration-300 ease-out group-hover:w-full group-hover:rounded-[40px]" />
      <span className="pointer-events-none absolute right-0 top-0 z-10 flex h-[54px] w-[54px] items-center justify-center">
        <Image src={arrowSideIcon} alt="" aria-hidden="true" />
      </span>
    </Link>
  )
}
