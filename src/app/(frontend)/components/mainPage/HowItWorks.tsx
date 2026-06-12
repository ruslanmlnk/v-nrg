import Image from 'next/image'

type HowItWorksCard = {
  description: string
  icon: string
  title: string
}

export default function HowItWorks({
  cards,
  subtitle,
  title,
}: {
  cards: HowItWorksCard[]
  subtitle: string
  title: string
}) {
  return (
    <section className="mx-auto max-w-[1288px] px-6 py-12 md:py-[100px]">
      <p className="text-center text-base font-bold uppercase leading-[165%] text-[#4FACF5]">{subtitle}</p>
      <h2 className="mt-4 text-center text-[26px] font-medium leading-[125%] text-[#22354A] md:text-[48px]">{title}</h2>
      <div className="mt-[26px] grid grid-cols-1 gap-5 md:mt-12 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="rounded-[20px] bg-white p-8">
            <Image src={card.icon} alt="" width={32} height={32} />
            <h3 className="mt-6 text-[20px] font-medium leading-[29px] md:text-[24px] md:leading-[35px]">{card.title}</h3>
            <p className="mt-4 text-base font-medium leading-[26px] md:text-[18px] md:leading-[30px]">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
