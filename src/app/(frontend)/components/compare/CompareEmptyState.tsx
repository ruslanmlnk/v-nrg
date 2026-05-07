'use client'

export function CompareEmptyState({ compareCount }: { compareCount: number }) {
  return (
    <div className="rounded-[20px] bg-white px-8 py-8 text-[24px] font-medium leading-[145%] text-[#22354A] shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      {compareCount === 0 ? 'Додайте товари для порівняння' : 'Недостатньо товарів для порівняння'}
    </div>
  )
}
