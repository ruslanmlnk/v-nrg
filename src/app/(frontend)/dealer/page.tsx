import {
  DealerApplicationSection,
  DealerBenefitsSection,
  DealerHeroSection,
  DealerInfoSection,
} from '../components/dealer/DealerSections'

export const metadata = {
  title: 'Стати дилером V-NRG',
}

export default function DealerPage() {
  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <DealerHeroSection />
        <DealerBenefitsSection />

        <section className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,600px)]">
          <DealerInfoSection />
          <DealerApplicationSection />
        </section>
      </div>
    </div>
  )
}
