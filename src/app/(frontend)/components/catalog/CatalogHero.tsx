'use client'

export function CatalogHero({ title = 'Каталог' }: { title?: string }) {
  return (
    <section className="flex min-h-[268px] items-center justify-center rounded-[20px] bg-[#22354A] px-6 py-14 text-center text-white">
      <div className="flex max-w-[845px] flex-col items-center gap-4">
        <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-bold uppercase leading-[145%]">
          <span>Головна</span>
          <span>/</span>
          <span>Каталог</span>
          <span>/</span>
          <span className="text-[#4FACF5]">{title}</span>
        </div>
        <h1 className="text-[36px] font-medium leading-[145%] md:text-[48px]">{title}</h1>
      </div>
    </section>
  )
}
