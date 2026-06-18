'use client'

type PartsPaymentModalProps = {
  isOpen: boolean
  monthlyPayment: number
  onClose: () => void
  onSelect: (partsCount: number) => void
  onUpdatePartsCount: (partsCount: number) => void
  partsCount: number
}

export function PartsPaymentModal({
  isOpen,
  monthlyPayment,
  onClose,
  onSelect,
  onUpdatePartsCount,
  partsCount,
}: PartsPaymentModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-[#22354A]/45 px-5 py-6"
      onClick={onClose}
    >
      <div
        className="h-[222px] w-full max-w-[989px] overflow-hidden rounded-[16px] bg-white shadow-[0_24px_80px_rgba(34,53,74,0.2)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex h-[64px] items-center justify-between border-b border-[#D5E0E8] px-[28px]">
          <h2 className="text-[18px] font-medium leading-[145%] text-[#22354A]">Кредит</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрити"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[22px] font-light leading-none text-[#22354A] transition-colors hover:bg-[#F5F8F9]"
          >
            ×
          </button>
        </div>

        <div className="grid h-[158px] grid-cols-[58px_minmax(0,1fr)_170px_190px_130px] items-center gap-[22px] px-[28px]">
          <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[9px] bg-[#111] text-[12px] font-bold lowercase leading-none text-white">
            mono
          </div>

          <div className="min-w-0">
            <h3 className="text-[16px] font-medium leading-[145%] text-[#22354A]">
              Покупка частинами monobank
            </h3>
            <div className="mt-[8px] text-[14px] font-medium leading-[145%] text-[#B7CAD1]">
              Від {formatMoney(monthlyPayment)} / місяць
            </div>
            <div className="mt-[8px] text-[14px] font-medium leading-[145%] text-[#B7CAD1]">
              3 - 8 платежів
            </div>
          </div>

          <select
            value={partsCount}
            onChange={(event) => onUpdatePartsCount(Number(event.target.value))}
            className="h-[54px] rounded-[12px] border border-[#D5E0E8] bg-white px-5 text-[14px] font-medium leading-[145%] text-[#22354A] outline-none"
          >
            {[3, 4, 5, 6, 7, 8].map((option) => (
              <option key={option} value={option}>
                {option} платежів
              </option>
            ))}
          </select>

          <div className="text-[20px] font-bold leading-[145%] text-[#22354A]">
            {formatMoney(monthlyPayment)} / місяць
          </div>

          <button
            type="button"
            onClick={() => onSelect(partsCount)}
            className="flex h-[46px] items-center justify-center rounded-full bg-[#4FACF5] text-[15px] font-bold leading-[145%] text-white"
          >
            Вибрати
          </button>
        </div>
      </div>
    </div>
  )
}

function formatMoney(value: number) {
  return `${new Intl.NumberFormat('uk-UA').format(value)} ₴`
}
