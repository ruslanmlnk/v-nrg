import SuccessStateCard from '../shared/SuccessStateCard'
import checkIconAsset from '@public/icon/generated/dealer-application-sent-dealer-success-page-check.svg'

export function DealerSuccessSection() {
  return (
    <SuccessStateCard
      iconSrc={checkIconAsset}
      title="Дякуємо за заявку!"
      description="Ми отримали ваш запит і зв’яжемося з вами найближчим часом."
      primaryAction={{ href: '/', label: 'На головну' }}
      secondaryAction={{ href: '/contacts', label: 'Контакти', variant: 'secondary' }}
    />
  )
}
