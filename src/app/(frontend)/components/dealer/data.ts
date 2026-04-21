export type DealerFormState = {
  city: string
  companyName: string
  email: string
  firstName: string
  lastName: string
  message: string
  phone: string
}

export const initialDealerFormState: DealerFormState = {
  city: '',
  companyName: '',
  email: '',
  firstName: '',
  lastName: '',
  message: '',
  phone: '+380',
}

export const dealerBenefits = [
  {
    description:
      'Офіційні умови співпраці, доступ до сертифікованого обладнання та зрозуміла комунікація.',
    title: 'Прозора модель партнерства',
  },
  {
    description:
      'Навчальні матеріали, демонстрації, консультації та супровід під запуск або масштабування.',
    title: 'Підтримка команди',
  },
  {
    description:
      'Готові рішення для салонів, студій та приватних кабінетів з акцентом на результат для клієнта.',
    title: 'Продукт, який легко продавати',
  },
] as const

export const dealerPoints = [
  'Маркетингові матеріали та рекомендації для запуску продажів.',
  'Допомога з підбором обладнання під формат вашого бізнесу.',
  'Сервісний супровід та консультації після старту співпраці.',
  'Навчання для вашої команди по роботі з обладнанням V-NRG.',
] as const
