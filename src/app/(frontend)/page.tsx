import './styles.css'
import Hero from './components/mainPage/Hero'
import HowItWorks from './components/mainPage/HowItWorks'
import ModelComparisonSection from './components/mainPage/ModelComparisonSection'
import BeforeAfterGrid from './components/ui/BeforeAfterGrid'
import beforeAfterAfter from '@public/assets/product/before-after-after.jpg'
import beforeAfterBefore from '@public/assets/product/before-after-before.jpg'
import { ProductComparisonSection } from './components/productDetail/ProductComparisonSection'


const demoHref = `mailto:0870758@gmail.com?subject=${encodeURIComponent(`Демонстрація`)}`

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ProductComparisonSection demoHref={demoHref} title={"Результати наших клієнтів"} />
      <ModelComparisonSection />
    </>
  )
}
