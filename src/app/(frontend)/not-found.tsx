import Link from 'next/link'

import ArrowPillButton from './components/ui/ArrowPillButton'

export default function NotFoundPage() {
  return (
    <main className="px-6 py-12">
      <section className="mx-auto flex min-h-[calc(100vh-260px)] max-w-[1288px] items-center justify-center rounded-[28px] bg-[#22354A] px-6 py-16 text-center text-white shadow-[0_24px_80px_rgba(34,53,74,0.16)]">
        <div className="flex max-w-[760px] flex-col items-center gap-8">
          <div className="flex h-[132px] min-w-[220px] items-center justify-center rounded-[28px] border border-white/16 bg-white/8 px-8 text-[72px] font-bold leading-none text-[#4FACF5] md:h-[168px] md:min-w-[280px] md:text-[96px]">
            404
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[16px] font-bold uppercase leading-[145%] text-[#4FACF5]">
              Сторінку не знайдено
            </p>
            <h1 className="text-[34px] font-medium leading-[125%] md:text-[52px]">
              Такої сторінки немає
            </h1>
            <p className="mx-auto max-w-[560px] text-[18px] font-medium leading-[165%] text-white/78">
              Можливо, посилання змінилося або сторінку було видалено. Перейдіть на головну чи
              поверніться до каталогу.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <ArrowPillButton href="/" className="mr-[50px] md:mr-[54px]">
              На головну
            </ArrowPillButton>
            <Link
              href="/catalog"
              className="flex h-[50px] items-center justify-center rounded-full border border-white/24 px-8 text-[18px] font-medium leading-[145%] text-white transition-colors hover:border-[#4FACF5] hover:text-[#4FACF5] md:h-[54px]"
            >
              До каталогу
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
