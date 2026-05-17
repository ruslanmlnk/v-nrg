'use client'

import { useEffect, useState } from 'react'

export type ArticleTocItem = {
  id: string
  title: string
}

export function ArticleTableOfContents({ items }: { items: ArticleTocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')

  useEffect(() => {
    if (items.length === 0) {
      return
    }

    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element))

    if (elements.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top)

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-120px 0px -55% 0px',
        threshold: [0, 1],
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) {
    return null
  }

  return (
    <nav className="flex flex-col gap-4 text-[18px] font-medium leading-[145%] text-[#22354A]">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => {
            document.getElementById(item.id)?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }}
          className={`text-left transition-colors hover:text-[#4FACF5] ${
            activeId === item.id ? 'text-[#4FACF5]' : ''
          }`}
        >
          {item.title}
        </button>
      ))}
    </nav>
  )
}
