import type { ReactNode } from 'react'
import Link from 'next/link'

type PageHeroProps = {
  currentLabel: string
  title: string
  description?: ReactNode
  sectionClassName?: string
  contentClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}

function joinClasses(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(' ')
}

export default function PageHero({
  currentLabel,
  title,
  description,
  sectionClassName,
  contentClassName,
  titleClassName,
  descriptionClassName,
}: PageHeroProps) {
  return (
    <section
      className={joinClasses(
        'flex min-h-[268px] items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white',
        sectionClassName,
      )}
    >
      <div className={joinClasses('flex max-w-[920px] flex-col items-center gap-4', contentClassName)}>
        <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
          <Link href="/">Головна</Link>
          <span>/</span>
          <span className="text-[#4FACF5]">{currentLabel}</span>
        </div>

        <h1 className={joinClasses('text-[36px] font-medium leading-[145%] md:text-[48px]', titleClassName)}>
          {title}
        </h1>

        {description ? (
          <div className={joinClasses('text-[18px] font-medium leading-[165%]', descriptionClassName)}>
            {description}
          </div>
        ) : null}
      </div>
    </section>
  )
}
