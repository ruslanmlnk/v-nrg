import { CheckoutSuccessSection } from '../../components/checkout/CheckoutSuccessSections'

export const metadata = {
  title: 'Дякуємо за замовлення | V-NRG',
}

export default function CheckoutSuccessPage() {
  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <CheckoutSuccessSection />
      </div>
    </div>
  )
}
