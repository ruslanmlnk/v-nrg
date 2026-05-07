'use client'

import Link from 'next/link'

export function EmptyState({
  actionHref,
  actionLabel,
  description,
  title,
}: {
  actionHref: string
  actionLabel: string
  description: string
  title: string
}) {
  return (
    <div className="rounded-[20px] bg-[#F5F8F9] px-6 py-8">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">{title}</h3>
          <p className="max-w-[720px] text-[18px] font-medium leading-[165%] text-[#22354A]">
            {description}
          </p>
        </div>

        <Link
          href={actionHref}
          className="inline-flex h-[50px] w-fit items-center justify-center rounded-full bg-[#4FACF5] px-6 text-[18px] font-bold leading-[145%] text-white"
        >
          {actionLabel}
        </Link>
      </div>
    </div>
  )
}
