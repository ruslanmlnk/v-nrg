'use client'

import type { ReactNode } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import ProductImagePlaceholder from '../shared/ProductImagePlaceholder'
import IconAsset from '@/app/(frontend)/components/ui/IconAsset'
import productTabCheckIconAsset from '@public/icon/generated/product-tab-check.svg'
import {
  type ProductSpecification,
  type ProductTabData,
  type ProductVideoItem,
} from '../../data/products'
import { ProductRichTextContent } from './ProductRichTextContent'

export function ProductTabsSection({
  activeTab,
  activeTabId,
  displayTabs,
  onSelectTab,
}: {
  activeTab?: ProductTabData
  activeTabId: string
  displayTabs: ProductTabData[]
  onSelectTab: (tabId: string) => void
}) {
  if (displayTabs.length === 0 || !activeTab) {
    return null
  }

  return (
    <div className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      <div className="flex flex-wrap gap-x-12 gap-y-4 border-b border-[#D5E0E8]">
        {displayTabs.map((tab) => (
          <TabLabel
            key={tab.id}
            active={tab.id === activeTabId}
            onClick={() => onSelectTab(tab.id)}
          >
            {tab.label}
          </TabLabel>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeTab.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <TabContent tab={activeTab} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function TabLabel({
  active = false,
  children,
  onClick,
}: {
  active?: boolean
  children: ReactNode
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border-b-2 pb-4 text-[20px] font-medium leading-[145%] md:text-[24px] ${
        active ? 'border-[#4FACF5] text-[#22354A]' : 'border-transparent text-[#22354A]'
      }`}
    >
      {children}
    </button>
  )
}

function TabContent({ tab }: { tab: ProductTabData }) {
  if (tab.content.type === 'richText') {
    return <ProductRichTextContent content={tab.content.content} />
  }

  if (tab.content.type === 'paragraphs') {
    return (
      <div className="flex flex-col gap-4 pt-8">
        {tab.content.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-[18px] font-medium leading-[165%] text-[#22354A]">
            {paragraph}
          </p>
        ))}
      </div>
    )
  }

  if (tab.content.type === 'specifications') {
    return <SpecificationTabContent items={tab.content.items} />
  }

  if (tab.content.type === 'videos') {
    return <VideoTabContent description={tab.content.description} items={tab.content.items} />
  }

  return <ChecklistTabContent items={tab.content.items} />
}

function SpecificationTabContent({ items }: { items: ProductSpecification[] }) {
  const columns = splitIntoColumns(items)

  return (
    <div className="grid gap-8 pt-8 md:grid-cols-2 md:gap-x-12">
      {columns.map((column, columnIndex) => (
        <div key={`spec-column-${columnIndex}`} className="flex flex-col gap-8">
          {column.map((item) => (
            <div
              key={`${item.label}-${item.value}`}
              className="flex items-center justify-between gap-6 border-b border-[#D5E0E8] pb-2"
            >
              <span className="text-[18px] font-bold leading-[145%] text-[#22354A] md:text-[20px]">
                {item.label}:
              </span>
              <span className="min-w-0 max-w-[55%] text-right text-[18px] font-medium leading-[165%] text-[#22354A]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function ChecklistTabContent({ items }: { items: string[] }) {
  const columns = splitIntoColumns(items)

  return (
    <div className="grid gap-8 pt-8 md:grid-cols-2 md:gap-x-12">
      {columns.map((column, columnIndex) => (
        <div key={`checklist-column-${columnIndex}`} className="flex flex-col gap-8">
          {column.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 border-b border-[#D5E0E8] pb-2 text-[18px] font-medium leading-[165%] text-[#22354A]"
            >
              <IconAsset src={productTabCheckIconAsset} width={18} height={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function VideoTabContent({
  description,
  items,
}: {
  description?: string
  items: ProductVideoItem[]
}) {
  const isSingleVideo = items.length === 1

  return (
    <div className="flex flex-col gap-5 pt-8">
      {items.length > 0 ? (
        <div className={isSingleVideo ? 'grid gap-5' : 'grid gap-5 md:grid-cols-2'}>
          {items.map((item) => (
            <VideoCard key={`${item.src}-${item.alt}`} item={item} />
          ))}
        </div>
      ) : null}

      {description ? (
        <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">{description}</p>
      ) : null}
    </div>
  )
}

function VideoCard({ item }: { item: ProductVideoItem }) {
  const isVideo = item.mimeType?.startsWith('video/')

  return (
    <a
      href={item.src}
      target="_blank"
      rel="noreferrer"
      className="group block overflow-hidden rounded-[20px] bg-[#22354A]"
    >
      <div className="relative aspect-[98/50]">
        {isVideo ? (
          <video
            src={item.src}
            poster={item.previewImage ?? undefined}
            preload="metadata"
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : item.previewImage ? (
          <Image
            src={item.previewImage}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <ProductImagePlaceholder className="absolute inset-0" label="Відео" />
        )}

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <VideoPlayButton />
        </div>
      </div>
    </a>
  )
}

function VideoPlayButton() {
  return (
    <div className="flex h-[84px] w-[84px] items-center justify-center rounded-full bg-white shadow-[0_16px_40px_rgba(34,53,74,0.18)] md:h-[120px] md:w-[120px]">
      <span className="ml-[6px] block h-0 w-0 border-y-[12px] border-l-[18px] border-y-transparent border-l-[#4FACF5] md:border-y-[14px] md:border-l-[22px]" />
    </div>
  )
}

function splitIntoColumns<T>(items: T[]) {
  const midpoint = Math.ceil(items.length / 2)
  return [items.slice(0, midpoint), items.slice(midpoint)].filter((column) => column.length > 0)
}
