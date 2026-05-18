import './styles.css'
import { AboutCertificatesSection } from './components/about/AboutCertificatesSection'
import FaqSection from './components/FaqSection'
import Hero from './components/mainPage/Hero'
import HomeReviewsSection from './components/mainPage/HomeReviewsSection'
import HomeVideoTeaserSection from './components/mainPage/HomeVideoTeaserSection'
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
      <AboutCertificatesSection />
      <HomeVideoTeaserSection />
      <HomeReviewsSection />
      <FaqSection
        sectionClassName="px-6 pt-[96px] lg:px-[100px]"
        title={
          <>
            Відповіді на поширені
            <br />
            запитання
          </>
        }
      />
    </>
  )
}
