import type { ReactNode } from 'react'

type SectionHeadingProps = {
  align?: 'left' | 'center'
  className?: string
  description?: ReactNode
  descriptionClassName?: string
  eyebrow: string
  title: ReactNode
  titleClassName?: string
}

export default function SectionHeading({
  align = 'left',
  className,
  description,
  descriptionClassName,
  eyebrow,
  title,
  titleClassName,
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div
      className={`flex flex-col gap-4 ${centered ? 'items-center text-center' : 'items-start text-left'} ${
        className ?? ''
      }`}
    >
      <div className="text-[16px] font-bold uppercase leading-[145%] text-[#4FACF5]">{eyebrow}</div>
      <h2
        className={`max-w-[780px] text-[32px] font-medium leading-[125%] text-[#22354A] md:text-[48px] ${
          titleClassName ?? ''
        }`}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={`max-w-[720px] text-[18px] font-medium leading-[165%] text-[#5C7288] ${
            descriptionClassName ?? ''
          }`}
        >
          {description}
        </div>
      ) : null}
    </div>
  )
}
