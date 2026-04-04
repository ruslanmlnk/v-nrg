'use client'

import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

type FaqItemData = {
  answer?: string
  isActive?: boolean
  question: string
}

type FaqSectionProps = {
  columns?: ReadonlyArray<ReadonlyArray<FaqItemData>>
  eyebrow?: string
  sectionClassName?: string
  title?: ReactNode
}

export const defaultFaqColumns: ReadonlyArray<ReadonlyArray<FaqItemData>> = [
  [
    {
      answer:
        'Ні. Обладнання має зрозумілий інтерфейс, а також відео-інструкції з налаштування та використання. Це дозволяє швидко розпочати роботу навіть без попереднього досвіду.',
      isActive: true,
      question: 'Чи складно працювати з апаратом V-NRG?',
    },
    {
      answer:
        '18 PRO підходить для більшості базових і салонних задач, а 36 PRO розрахований на розширений набір маніпул і вищу інтенсивність роботи. Остаточний вибір залежить від ваших процедур і навантаження.',
      question: 'У чому різниця між 18 PRO та 36 PRO?',
    },
    {
      answer:
        'Так. На обладнання надається офіційна гарантія, а також підтримка по запуску, сервісу та консультаціях під час експлуатації.',
      question: 'Чи надається гарантія на обладнання?',
    },
  ],
  [
    {
      answer:
        'Так, для частини моделей доступні варіанти поетапної оплати. Деталі залежать від способу купівлі та актуальних умов на момент замовлення.',
      question: 'Чи доступна оплата частинами?',
    },
    {
      answer:
        'Так. Ви можете залишити заявку на консультацію або демонстрацію, і ми підберемо зручний формат показу обладнання.',
      question: 'Чи можна записатися на демонстрацію?',
    },
    {
      answer:
        'Для дилерської співпраці достатньо зв’язатися з командою V-NRG через форму або контакти на сайті. Ми окремо обговоримо умови, регіон і формат партнерства.',
      question: 'Як стати дилером V-NRG?',
    },
  ],
]

export default function FaqSection({
  columns = defaultFaqColumns,
  eyebrow = 'FAQ',
  sectionClassName = 'px-6 pb-[100px] pt-[100px]',
  title = 'Відповіді на поширені запитання',
}: FaqSectionProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  useEffect(() => {
    setOpenItems(
      columns.flatMap((column, columnIndex) =>
        column.flatMap((item, itemIndex) => (item.isActive ? [`${columnIndex}-${itemIndex}`] : [])),
      ),
    )
  }, [columns])

  return (
    <section className={sectionClassName}>
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-[16px] font-bold uppercase leading-[145%] text-[#4FACF5]">{eyebrow}</div>
          <h2 className="max-w-[780px] text-[32px] font-medium leading-[125%] text-[#22354A] md:text-[48px]">{title}</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {columns.map((column, columnIndex) => (
            <div key={`faq-column-${columnIndex}`} className="flex flex-col gap-5">
              {column.map((item, itemIndex) => {
                const itemKey = `${columnIndex}-${itemIndex}`

                return (
                  <FaqItem
                    key={item.question}
                    {...item}
                    isActive={openItems.includes(itemKey)}
                    onToggle={() =>
                      setOpenItems((current) =>
                        current.includes(itemKey) ? current.filter((key) => key !== itemKey) : [...current, itemKey],
                      )
                    }
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqItem({
  answer,
  isActive = false,
  onToggle,
  question,
}: {
  answer?: string
  isActive?: boolean
  onToggle: () => void
  question: string
}) {
  return (
    <div className="rounded-[20px] bg-white p-8 shadow-[0_20px_60px_rgba(34,53,74,0.04)]">
      <button type="button" onClick={onToggle} className="flex w-full items-start gap-6 text-left">
        <div
          className={`flex-1 text-[24px] font-medium leading-[145%] transition-colors ${
            isActive ? 'text-[#4FACF5]' : 'text-[#22354A]'
          }`}
        >
          {question}
        </div>
        <div className={`transition-colors ${isActive ? 'text-[#4FACF5]' : 'text-[#22354A]'}`}>
          <FaqChevron active={isActive} />
        </div>
      </button>

      <div className={`grid transition-[grid-template-rows,padding-top] duration-300 ${isActive ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          {answer ? <p className="text-[18px] font-medium leading-[165%] text-[#22354A]">{answer}</p> : null}
        </div>
      </div>
    </div>
  )
}

function FaqChevron({ active }: { active: boolean }) {
  const path = active ? 'M4 8L12 16L20 8' : 'M4 16L12 8L20 16'

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={path} stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
