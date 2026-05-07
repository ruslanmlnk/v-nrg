'use client'

export function RadioIndicator({ active }: { active: boolean }) {
  return active ? (
    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#4FACF5]">
      <span className="h-2.5 w-2.5 rounded-full bg-white" />
    </span>
  ) : (
    <span className="mt-1 inline-flex h-6 w-6 rounded-full border-2 border-[#D5E0E8]" />
  )
}
