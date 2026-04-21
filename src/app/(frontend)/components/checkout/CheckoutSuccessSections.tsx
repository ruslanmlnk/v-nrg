'use client'

import SuccessStateCard from '../shared/SuccessStateCard'
import { useCommerce } from '../providers/CommerceProvider'
import checkIconAsset from '@public/icon/generated/checkout-success-checkout-success-page-check.svg'

export function CheckoutSuccessSection() {
  const { lastOrder } = useCommerce()

  return (
    <SuccessStateCard
      iconSrc={checkIconAsset}
      title="Дякуємо за замовлення!"
      description={<>Ваше замовлення №{lastOrder?.id ?? '12345'} успішно оформлено.</>}
      primaryAction={{ href: '/catalog/aparaty-vakuumnoho-masazhu', label: 'Продовжити покупки' }}
      secondaryAction={{ href: '/account', label: 'Мій кабінет', variant: 'secondary' }}
    />
  )
}
