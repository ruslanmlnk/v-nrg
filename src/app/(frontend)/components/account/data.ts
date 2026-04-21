export const ORDERS_PER_PAGE = 5

export type AccountSection = 'orders' | 'profile' | 'addresses'

export type AccountSectionIconKey = 'addresses' | 'orders' | 'profile'

export type OrderStatusIconKey = 'cancelled' | 'delivered' | 'pending' | 'shipped'

export const accountHero = {
  description: 'Щоб переглянути замовлення та персональні дані, увійдіть у свій акаунт',
  loginLabel: 'Увійти',
  registerLabel: 'Зареєструватися',
  title: 'Кабінет користувача',
} as const

export const accountHeader = {
  description: 'Керуйте своїми замовленнями та даними',
  logoutLabel: 'Вийти',
  title: 'Особистий кабінет',
} as const

export const accountSidebarItems: Array<{
  iconKey: AccountSectionIconKey
  id: AccountSection
  label: string
}> = [
  {
    iconKey: 'orders',
    id: 'orders',
    label: 'Мої замовлення',
  },
  {
    iconKey: 'profile',
    id: 'profile',
    label: 'Профіль',
  },
  {
    iconKey: 'addresses',
    id: 'addresses',
    label: 'Адреси доставки',
  },
]

export const dealerCta = {
  label: 'Стати ділером',
} as const

export const accountFallbacks = {
  avatarLetter: 'V',
  customerEmail: 'Дані зʼявляться після першого замовлення',
  customerName: 'Ваш акаунт',
  emptyField: 'Ще не вказано',
  noOrders: 'Ще немає замовлень',
  unknownDate: 'Невідома дата',
} as const

export const accountSectionTitles = {
  addresses: 'Адреси доставки',
  orders: 'Історія замовлень',
  profile: 'Профіль',
} as const

export const accountEmptyStates = {
  addresses: {
    actionHref: '/checkout',
    actionLabel: 'Оформити замовлення',
    description:
      'Ми не зберегли жодної адреси доставки. Після наступного замовлення цей розділ стане інформативнішим.',
    title: 'Адреси доставки ще не додані',
  },
  orders: {
    actionHref: '/catalog/aparaty-vakuumnoho-masazhu',
    actionLabel: 'Перейти в каталог',
    description:
      'Після першого оформленого замовлення тут з’явиться детальна історія з поточними статусами.',
    title: 'У вас ще немає замовлень',
  },
} as const

export const profileFieldLabels = {
  email: 'Email',
  lastOrder: 'Останнє замовлення',
  name: 'Ім’я та прізвище',
  phone: 'Телефон',
} as const

export const profileNotice =
  'Дані профілю автоматично оновлюються після оформлення замовлення, щоб наступні покупки були швидшими.'

export const orderLabels = {
  expectedDate: 'Очікується:',
  orderPrefix: 'Замовлення №',
  pagination: {
    left: 'Попередня сторінка',
    right: 'Наступна сторінка',
  },
  pay: 'Оплатити',
  shownPrefix: 'Показано',
  shownSeparator: 'з',
  total: 'Загальна сума:',
  trackingPrefix: 'ТТН:',
  products: 'Товари:',
} as const

export const orderStatusMeta = {
  'awaiting-payment': {
    colorClassName: 'bg-[#FCF5DC] text-[#BB7A00]',
    iconKey: 'pending',
    label: 'Очікує оплати',
  },
  cancelled: {
    colorClassName: 'bg-[#FFF1F2] text-[#C70036]',
    iconKey: 'cancelled',
    label: 'Скасовано',
  },
  delivered: {
    colorClassName: 'bg-[#ECFDF3] text-[#027A48]',
    iconKey: 'delivered',
    label: 'Доставлено',
  },
  processing: {
    colorClassName: 'bg-[#FCF5DC] text-[#BB7A00]',
    iconKey: 'pending',
    label: 'Обробляється',
  },
  shipped: {
    colorClassName: 'bg-[#EEF4FF] text-[#155EEF]',
    iconKey: 'shipped',
    label: 'Відправлено',
  },
} as const
