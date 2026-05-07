'use client'

export function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[20px] bg-[#F5F8F9] px-6 py-5">
      <div className="text-[16px] font-medium leading-[165%] text-[#6F8498]">{label}</div>
      <div className="mt-2 text-[24px] font-medium leading-[145%] text-[#22354A]">{value}</div>
    </div>
  )
}
