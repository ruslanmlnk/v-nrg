import { DealerSuccessSection } from '../../components/dealer/DealerSuccessSections'

export const metadata = {
  title: 'Заявку надіслано | V-NRG',
}

export default function DealerApplicationSentPage() {
  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <DealerSuccessSection />
      </div>
    </div>
  )
}
