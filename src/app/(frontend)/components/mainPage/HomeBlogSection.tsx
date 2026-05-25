import { BlogCard, type BlogCardData } from '../blog/BlogCard'
import SectionHeading from '../shared/SectionHeading'
import ArrowPillButton from '../ui/ArrowPillButton'

export default function HomeBlogSection({ articles }: { articles: BlogCardData[] }) {
  if (articles.length === 0) {
    return null
  }

  return (
    <section className="px-6 pt-[100px] lg:px-[100px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-6 md:gap-12">
        <div className="contents md:flex md:items-center md:justify-between md:gap-6">
          <SectionHeading
            eyebrow="Блог"
            title="Блог та корисні матеріали"
            className="order-1 items-center text-center md:items-start md:text-left"
          />
          <ArrowPillButton href="/blog" className="order-3 mr-[50px] self-center md:order-none md:mr-[54px] md:self-center">
            Усі статті
          </ArrowPillButton>
        </div>

        <div className="order-2 grid gap-5 md:order-none md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <BlogCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}
