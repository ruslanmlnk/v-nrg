import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type ActionIconProps = {
  badge?: number
  href?: string
  icon: StaticImageData
  label: string
  onClick?: () => void
}

const baseClasses = 'relative inline-flex h-[18px] w-[18px] items-center justify-center'

const ActionIcon = ({ badge, href, icon, label, onClick }: ActionIconProps) => {
  const badgeMarkup =
    typeof badge === 'number' ? (
      <span className="absolute -right-[8px] -top-[8px] inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-[#4FACF5] px-[4px] text-[8px] font-semibold leading-none text-white">
        {badge}
      </span>
    ) : null

  if (onClick) {
    return (
      <button type="button" aria-label={label} onClick={onClick} className={baseClasses}>
        <Image src={icon} alt={label} />
        {badgeMarkup}
      </button>
    )
  }

  return (
    <Link href={href ?? '#'} aria-label={label} className={baseClasses}>
      <Image src={icon} alt={label} />
      {badgeMarkup}
    </Link>
  )
}

export default ActionIcon
