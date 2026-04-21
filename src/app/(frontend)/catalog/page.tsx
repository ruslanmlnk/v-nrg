import { CatalogCategoriesSection, CatalogHeroSection } from '../components/catalog/CatalogSections'

export const metadata = {
  title: 'Каталог V-NRG',
}

export default function CatalogPage() {
  return (
    <div className="pt-12">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-5 px-6 pb-[100px]">
        <CatalogHeroSection />
        <CatalogCategoriesSection />
      </div>
    </div>
  )
}
