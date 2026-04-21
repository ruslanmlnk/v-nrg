export default function ProductImagePlaceholder({
  className = '',
  label = 'Фото відсутнє',
}: {
  className?: string
  label?: string
}) {
  return (
    <div
      className={`flex items-center justify-center bg-[#F5F8F9] px-4 text-center text-[16px] font-medium leading-[145%] text-[#6F8498] ${className}`.trim()}
    >
      {label}
    </div>
  )
}
