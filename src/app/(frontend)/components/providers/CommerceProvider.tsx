'use client'

import type { FormEvent, ReactNode } from 'react'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'motion/react'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { logoutUser, fetchCurrentUser } from '../../lib/authClient'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import arrowIconAsset from '@public/icon/generated/components-providers-commerce-provider-arrow.svg'
import closeIconAsset from '@public/icon/generated/commerce-close.svg'
import miniChevronDownIconAsset from '@public/icon/generated/commerce-mini-chevron-down.svg'
import miniChevronUpIconAsset from '@public/icon/generated/commerce-mini-chevron-up.svg'
import {
  formatPrice,
  productsToMap,
  type ProductData,
  type ProductId,
} from '../../data/products'
import type { FrontendUser } from '../../../../lib/frontendUser'

type CartItem = {
  productId: ProductId
  quantity: number
}

type LastOrder = {
  createdAt?: string
  customerName: string
  email: string
  expectedDate?: string
  id: string
  items: CartItem[]
  phone: string
  status?: 'awaiting-payment' | 'delivered' | 'shipped' | 'processing' | 'cancelled'
  total: number
  trackingNumber?: string
}

type PersistedStore = {
  cartItems: CartItem[]
  compareIds: ProductId[]
  lastOrder: LastOrder | null
  orderHistory: LastOrder[]
}

type DetailedCartItem = {
  product: ProductData
  quantity: number
  total: number
}

type CompleteOrderInput = {
  email: string
  firstName: string
  lastName: string
  phone: string
}

type CommerceContextValue = {
  addToCart: (productId: ProductId, quantity?: number, options?: { openDrawer?: boolean }) => void
  cartCount: number
  cartItems: CartItem[]
  cartItemsDetailed: DetailedCartItem[]
  cartTotal: number
  closeCart: () => void
  closeDealerModal: () => void
  closeLogoutModal: () => void
  compareCount: number
  compareIds: ProductId[]
  compareProducts: ProductData[]
  completeOrder: (input: CompleteOrderInput) => LastOrder
  currentUser: FrontendUser | null
  getProductById: (productId: ProductId) => ProductData | undefined
  isCartOpen: boolean
  isDealerModalOpen: boolean
  isInCompare: (productId: ProductId) => boolean
  isLoggedIn: boolean
  isUserLoading: boolean
  isLogoutModalOpen: boolean
  lastOrder: LastOrder | null
  orderHistory: LastOrder[]
  openCart: () => void
  openDealerModal: () => void
  openLogoutModal: () => void
  products: ProductData[]
  removeFromCart: (productId: ProductId) => void
  removeFromCompare: (productId: ProductId) => void
  signIn: (user: FrontendUser | null) => void
  signOut: () => Promise<void>
  toggleCompare: (productId: ProductId) => void
  updateCartQuantity: (productId: ProductId, quantity: number) => void
}

const STORAGE_KEY = 'v-nrg-front-store'
const MAX_COMPARE_PRODUCTS = 3

const defaultStore: PersistedStore = {
  cartItems: [],
  compareIds: [],
  lastOrder: null,
  orderHistory: [],
}

const CommerceContext = createContext<CommerceContextValue | null>(null)

export function CommerceProvider({
  children,
  initialProducts,
  initialUser,
}: {
  children: ReactNode
  initialProducts: ProductData[]
  initialUser: FrontendUser | null
}) {
  const router = useRouter()
  const pathname = usePathname()

  const [store, setStore] = useState<PersistedStore>(defaultStore)
  const [hasHydrated, setHasHydrated] = useState(false)
  const [currentUser, setCurrentUser] = useState<FrontendUser | null>(initialUser)
  const [isUserLoading, setIsUserLoading] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isDealerModalOpen, setIsDealerModalOpen] = useState(false)
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
  const productsMap = useMemo(() => productsToMap(initialProducts), [initialProducts])
  const getProductById = (productId: ProductId) => productsMap[productId]

  useEffect(() => {
    try {
      const rawStore = window.localStorage.getItem(STORAGE_KEY)
      if (rawStore) {
        const parsedStore = JSON.parse(rawStore) as PersistedStore
        setStore({
          cartItems: parsedStore.cartItems ?? [],
          compareIds: parsedStore.compareIds ?? [],
          lastOrder: parsedStore.lastOrder ? normalizeStoredOrder(parsedStore.lastOrder) : null,
          orderHistory:
            parsedStore.orderHistory?.map(normalizeStoredOrder) ??
            (parsedStore.lastOrder ? [normalizeStoredOrder(parsedStore.lastOrder)] : []),
        })
      }
    } catch {
      setStore(defaultStore)
    } finally {
      setHasHydrated(true)
    }
  }, [])

  useEffect(() => {
    let isMounted = true

    const syncUser = async () => {
      setIsUserLoading(true)

      try {
        const nextUser = await fetchCurrentUser()

        if (isMounted) {
          setCurrentUser(nextUser)
        }
      } finally {
        if (isMounted) {
          setIsUserLoading(false)
        }
      }
    }

    void syncUser()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    if (!hasHydrated) {
      return
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
  }, [hasHydrated, store])

  useEffect(() => {
    const hasOverlayOpen = isCartOpen || isDealerModalOpen || isLogoutModalOpen
    document.body.style.overflow = hasOverlayOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isCartOpen, isDealerModalOpen, isLogoutModalOpen])

  const cartItemsDetailed = useMemo<DetailedCartItem[]>(
    () =>
      store.cartItems.flatMap((item) => {
        const product = productsMap[item.productId]

        if (!product) {
          return []
        }

        return [
          {
            product,
            quantity: item.quantity,
            total: product.price * item.quantity,
          },
        ]
      }),
    [productsMap, store.cartItems],
  )

  const cartTotal = useMemo(
    () => cartItemsDetailed.reduce((total, item) => total + item.total, 0),
    [cartItemsDetailed],
  )

  const cartCount = useMemo(
    () => store.cartItems.reduce((total, item) => total + item.quantity, 0),
    [store.cartItems],
  )

  const compareProducts = useMemo(
    () =>
      store.compareIds.flatMap((productId) => {
        const product = productsMap[productId]

        return product ? [product] : []
      }),
    [productsMap, store.compareIds],
  )

  const addToCart: CommerceContextValue['addToCart'] = (productId, quantity = 1, options) => {
    if (!productsMap[productId]) {
      return
    }

    setStore((currentStore) => {
      const nextItems = [...currentStore.cartItems]
      const existingItemIndex = nextItems.findIndex((item) => item.productId === productId)

      if (existingItemIndex >= 0) {
        const existingItem = nextItems[existingItemIndex]
        nextItems[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + quantity,
        }
      } else {
        nextItems.push({ productId, quantity })
      }

      return {
        ...currentStore,
        cartItems: nextItems,
      }
    })

    if (options?.openDrawer !== false) {
      setIsCartOpen(true)
    }
  }

  const updateCartQuantity: CommerceContextValue['updateCartQuantity'] = (productId, quantity) => {
    setStore((currentStore) => ({
      ...currentStore,
      cartItems: currentStore.cartItems.map((item) =>
        item.productId === productId
          ? {
              ...item,
              quantity: Math.max(1, quantity),
            }
          : item,
      ),
    }))
  }

  const removeFromCart: CommerceContextValue['removeFromCart'] = (productId) => {
    setStore((currentStore) => ({
      ...currentStore,
      cartItems: currentStore.cartItems.filter((item) => item.productId !== productId),
    }))
  }

  const toggleCompare: CommerceContextValue['toggleCompare'] = (productId) => {
    if (!productsMap[productId]) {
      return
    }

    setStore((currentStore) => {
      if (currentStore.compareIds.includes(productId)) {
        return {
          ...currentStore,
          compareIds: currentStore.compareIds.filter((id) => id !== productId),
        }
      }

      return {
        ...currentStore,
        compareIds:
          currentStore.compareIds.length >= MAX_COMPARE_PRODUCTS
            ? [...currentStore.compareIds.slice(1), productId]
            : [...currentStore.compareIds, productId],
      }
    })
  }

  const removeFromCompare: CommerceContextValue['removeFromCompare'] = (productId) => {
    setStore((currentStore) => ({
      ...currentStore,
      compareIds: currentStore.compareIds.filter((id) => id !== productId),
    }))
  }

  const isInCompare = (productId: ProductId) => store.compareIds.includes(productId)

  const signIn = (user: FrontendUser | null) => {
    setCurrentUser(user)
    router.refresh()
  }

  const signOut = async () => {
    try {
      await logoutUser()
    } catch {
      // Even if the request fails, we still clear client auth state.
    }

    setCurrentUser(null)

    setIsLogoutModalOpen(false)
    router.refresh()

    if (pathname?.startsWith('/account')) {
      router.push('/login')
    }
  }

  const completeOrder: CommerceContextValue['completeOrder'] = ({
    email,
    firstName,
    lastName,
    phone,
  }) => {
    const createdAt = formatOrderDate(new Date())
    const order: LastOrder = {
      createdAt,
      customerName: `${firstName} ${lastName}`.trim(),
      email,
      expectedDate: formatOrderDate(addDays(new Date(), 3)),
      id: `${Math.floor(10000 + Math.random() * 90000)}`,
      items: cartItemsDetailed.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
      })),
      phone,
      status: 'awaiting-payment',
      total: cartTotal,
    }

    setStore((currentStore) => ({
      ...currentStore,
      cartItems: [],
      lastOrder: order,
      orderHistory: [order, ...currentStore.orderHistory],
    }))

    setIsCartOpen(false)
    return order
  }

  const contextValue: CommerceContextValue = {
    addToCart,
    cartCount,
    cartItems: store.cartItems,
    cartItemsDetailed,
    cartTotal,
    closeCart: () => setIsCartOpen(false),
    closeDealerModal: () => setIsDealerModalOpen(false),
    closeLogoutModal: () => setIsLogoutModalOpen(false),
    compareCount: store.compareIds.length,
    compareIds: store.compareIds,
    compareProducts,
    completeOrder,
    currentUser,
    getProductById,
    isCartOpen,
    isDealerModalOpen,
    isInCompare,
    isLoggedIn: Boolean(currentUser),
    isUserLoading,
    isLogoutModalOpen,
    lastOrder: store.lastOrder,
    orderHistory: store.orderHistory,
    openCart: () => setIsCartOpen(true),
    openDealerModal: () => setIsDealerModalOpen(true),
    openLogoutModal: () => setIsLogoutModalOpen(true),
    products: initialProducts,
    removeFromCart,
    removeFromCompare,
    signIn,
    signOut,
    toggleCompare,
    updateCartQuantity,
  }

  return (
    <CommerceContext.Provider value={contextValue}>
      {children}
      <CommerceOverlays />
    </CommerceContext.Provider>
  )
}

export function useCommerce() {
  const context = useContext(CommerceContext)

  if (!context) {
    throw new Error('useCommerce must be used within CommerceProvider')
  }

  return context
}

function CommerceOverlays() {
  const router = useRouter()
  const {
    cartItemsDetailed,
    cartTotal,
    closeCart,
    closeDealerModal,
    closeLogoutModal,
    isCartOpen,
    isDealerModalOpen,
    isLogoutModalOpen,
    openDealerModal,
    removeFromCart,
    signOut,
    updateCartQuantity,
  } = useCommerce()

  const [dealerFormState, setDealerFormState] = useState({
    city: '',
    companyName: '',
    email: '',
    firstName: '',
    lastName: '',
    message: '',
    phone: '+380',
  })

  const handleDealerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    closeDealerModal()
    router.push('/dealer/application-sent')
  }

  return (
    <AnimatePresence>
      {isCartOpen ? (
        <Overlay key="cart-overlay" onClose={closeCart}>
          <motion.aside
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="ml-auto flex h-full w-full max-w-[500px] flex-col bg-white shadow-[0_24px_80px_rgba(34,53,74,0.2)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#D5E0E8] px-8 py-7">
              <h2 className="text-[24px] font-medium leading-[145%] text-[#22354A]">Ваш кошик</h2>
              <CloseButton onClick={closeCart} />
            </div>

            {cartItemsDetailed.length === 0 ? (
              <div className="flex flex-1 items-center justify-center px-8 py-10 text-center text-[22px] font-medium leading-[165%] text-[#22354A]">
                <div className="max-w-[355px]">
                  <p>Ваш кошик порожній.</p>
                  <p>Додайте товари до кошика, щоб продовжити покупки</p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-1 flex-col overflow-y-auto">
                  {cartItemsDetailed.map((item) => (
                    <CartDrawerItem
                      key={item.product.id}
                      item={item}
                      onDecrease={() => updateCartQuantity(item.product.id, item.quantity - 1)}
                      onIncrease={() => updateCartQuantity(item.product.id, item.quantity + 1)}
                      onRemove={() => removeFromCart(item.product.id)}
                    />
                  ))}
                </div>

                <div className="border-t border-[#D5E0E8] px-8 pb-6 pt-8">
                  <div className="mb-6 flex items-center justify-between gap-6">
                    <span className="text-[22px] font-medium leading-[145%] text-[#22354A]">
                      Всього:
                    </span>
                    <span className="text-[22px] font-bold leading-[145%] text-[#22354A]">
                      {formatPrice(cartTotal)}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      closeCart()
                      router.push('/checkout')
                    }}
                    className="relative flex h-[50px] w-full items-center justify-center rounded-full bg-[#22354A] pl-8 pr-[72px] text-[18px] font-medium leading-[145%] text-white"
                  >
                    Оформити замовлення
                    <span className="absolute right-[3px] top-1/2 flex h-[44px] w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-[#4FACF5]">
                      <IconAsset src={arrowIconAsset} width={18} height={18} />
                    </span>
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </Overlay>
      ) : null}

      {isDealerModalOpen ? (
        <Overlay key="dealer-modal" onClose={closeDealerModal} centered>
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[600px] overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(34,53,74,0.2)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E7EEF3] px-8 py-7">
              <h2 className="text-[24px] font-medium leading-[145%] text-[#22354A]">
                Подати заявку
              </h2>
              <CloseButton onClick={closeDealerModal} />
            </div>

            <form className="flex flex-col gap-6 p-8" onSubmit={handleDealerSubmit}>
              <DealerField label="Назва компанії *">
                <input
                  required
                  value={dealerFormState.companyName}
                  onChange={(event) =>
                    setDealerFormState((current) => ({
                      ...current,
                      companyName: event.target.value,
                    }))
                  }
                  placeholder="Введіть назву компанії"
                  className={`${dealerFieldClasses} h-[56px]`}
                />
              </DealerField>

              <div className="grid gap-6 md:grid-cols-2">
                <DealerField label="Ім'я *">
                  <input
                    required
                    value={dealerFormState.firstName}
                    onChange={(event) =>
                      setDealerFormState((current) => ({
                        ...current,
                        firstName: event.target.value,
                      }))
                    }
                    placeholder="Введіть ваше ім'я"
                    className={`${dealerFieldClasses} h-[56px]`}
                  />
                </DealerField>

                <DealerField label="Прізвище *">
                  <input
                    required
                    value={dealerFormState.lastName}
                    onChange={(event) =>
                      setDealerFormState((current) => ({
                        ...current,
                        lastName: event.target.value,
                      }))
                    }
                    placeholder="Введіть ваше прізвище"
                    className={`${dealerFieldClasses} h-[56px]`}
                  />
                </DealerField>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <DealerField label="Телефон *">
                  <input
                    required
                    value={dealerFormState.phone}
                    onChange={(event) =>
                      setDealerFormState((current) => ({ ...current, phone: event.target.value }))
                    }
                    placeholder="+380"
                    className={`${dealerFieldClasses} h-[56px]`}
                  />
                </DealerField>

                <DealerField label="Email *">
                  <input
                    required
                    type="email"
                    value={dealerFormState.email}
                    onChange={(event) =>
                      setDealerFormState((current) => ({ ...current, email: event.target.value }))
                    }
                    placeholder="Введіть ваш email"
                    className={`${dealerFieldClasses} h-[56px]`}
                  />
                </DealerField>
              </div>

              <DealerField label="Місто/Країна *">
                <input
                  required
                  value={dealerFormState.city}
                  onChange={(event) =>
                    setDealerFormState((current) => ({ ...current, city: event.target.value }))
                  }
                  placeholder="Київ, Одеса, Львів..."
                  className={`${dealerFieldClasses} h-[56px]`}
                />
              </DealerField>

              <DealerField label="Повідомлення">
                <textarea
                  value={dealerFormState.message}
                  onChange={(event) =>
                    setDealerFormState((current) => ({ ...current, message: event.target.value }))
                  }
                  placeholder="Короткий опис вашого бізнесу"
                  className={`${dealerFieldClasses} min-h-[132px] resize-none py-5`}
                />
              </DealerField>

              <button
                type="submit"
                className="flex h-[52px] items-center justify-center rounded-full bg-[#4FACF5] text-[18px] font-bold leading-[145%] text-white"
              >
                Надіслати
              </button>
            </form>
          </motion.div>
        </Overlay>
      ) : null}

      {isLogoutModalOpen ? (
        <Overlay key="logout-modal" onClose={closeLogoutModal} centered>
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[500px] overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(34,53,74,0.2)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E7EEF3] px-8 py-7">
              <h2 className="text-[24px] font-medium leading-[145%] text-[#22354A]">Вийти</h2>
              <CloseButton onClick={closeLogoutModal} />
            </div>

            <div className="px-8 pb-8 pt-10 text-center">
              <p className="mx-auto max-w-[402px] text-[22px] font-medium leading-[165%] text-[#22354A]">
                Ви впевнені, що хочете вийти? Ви зможете увійти знову, використовуючи свої облікові
                дані
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={signOut}
                  className="flex h-[50px] items-center justify-center rounded-full bg-[#4FACF5] text-[18px] font-bold leading-[145%] text-white"
                >
                  Вийти
                </button>

                <button
                  type="button"
                  onClick={closeLogoutModal}
                  className="flex h-[50px] items-center justify-center rounded-full border border-[#D5E0E8] bg-white text-[18px] font-medium leading-[145%] text-[#22354A]"
                >
                  Скасувати
                </button>
              </div>
            </div>
          </motion.div>
        </Overlay>
      ) : null}
    </AnimatePresence>
  )
}

function Overlay({
  centered = false,
  children,
  onClose,
}: {
  centered?: boolean
  children: ReactNode
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={`fixed inset-0 z-[100] bg-[#22354A]/45 px-4 py-4 ${centered ? 'flex items-center justify-center' : 'flex justify-end'}`}
      onClick={onClose}
    >
      {children}
    </motion.div>
  )
}

function CartDrawerItem({
  item,
  onDecrease,
  onIncrease,
  onRemove,
}: {
  item: DetailedCartItem
  onDecrease: () => void
  onIncrease: () => void
  onRemove: () => void
}) {
  return (
    <div className="border-b border-[#D5E0E8] px-8 py-7">
      <div className="grid grid-cols-[100px_minmax(0,1fr)_72px] items-start gap-5">
        <div className="relative h-[100px] w-[100px] overflow-hidden rounded-[20px] border border-[#D5E0E8] bg-white">
          <Image
            src={item.product.cartImage}
            alt={item.product.title}
            fill
            className="object-contain p-3"
            sizes="100px"
          />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-[24px] font-medium leading-[145%] text-[#22354A]">
            {item.product.title}
          </h3>
          <div className="text-[18px] font-medium leading-[165%] text-[#22354A]">
            {formatPrice(item.total)}
          </div>
          <button
            type="button"
            onClick={onRemove}
            className="w-fit text-[18px] font-medium leading-[145%] text-[#4FACF5]"
          >
            Видалити
          </button>
        </div>

        <div className="flex h-[50px] items-center justify-between rounded-[16px] bg-[#F5F8F9] px-4">
          <span className="text-[18px] font-medium leading-[145%] text-[#22354A]">
            {item.quantity}
          </span>
          <div className="flex flex-col gap-[2px]">
            <button
              type="button"
              aria-label="Збільшити кількість"
              onClick={onIncrease}
              className="flex h-4 w-4 items-center justify-center text-[#22354A]"
            >
              <MiniChevron up />
            </button>
            <button
              type="button"
              aria-label="Зменшити кількість"
              onClick={onDecrease}
              className="flex h-4 w-4 items-center justify-center text-[#22354A]"
            >
              <MiniChevron />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function DealerField({ children, label }: { children: ReactNode; label: string }) {
  return (
    <label className="flex flex-col gap-3">
      <span className="text-[18px] font-medium leading-[165%] text-[#22354A]">{label}</span>
      {children}
    </label>
  )
}

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Закрити"
      className="flex h-10 w-10 items-center justify-center rounded-full text-[#22354A] transition-colors hover:bg-[#F5F8F9]"
    >
      <IconAsset src={closeIconAsset} width={24} height={24} />
    </button>
  )
}

function MiniChevron({ up = false }: { up?: boolean }) {
  return (
    <IconAsset
      src={up ? miniChevronUpIconAsset : miniChevronDownIconAsset}
      width={16}
      height={12}
    />
  )
}

const dealerFieldClasses =
  'w-full rounded-[20px] bg-[#F5F8F9] px-6 text-[18px] font-medium leading-[165%] text-[#22354A] outline-none placeholder:text-[#B7CAD1]'

function addDays(date: Date, days: number) {
  const nextDate = new Date(date)
  nextDate.setDate(nextDate.getDate() + days)
  return nextDate
}

function formatOrderDate(date: Date) {
  return new Intl.DateTimeFormat('uk-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date)
}

function normalizeStoredOrder(order: LastOrder): LastOrder {
  return {
    ...order,
    createdAt: order.createdAt ?? formatOrderDate(new Date()),
    expectedDate: order.expectedDate ?? order.createdAt ?? formatOrderDate(addDays(new Date(), 3)),
    status: order.status ?? 'processing',
  }
}
