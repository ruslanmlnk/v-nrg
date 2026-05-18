import { BlogCard, type BlogCardData } from '../blog/BlogCard'
import SectionHeading from '../shared/SectionHeading'
import ArrowPillButton from '../ui/ArrowPillButton'

export default function HomeBlogSection({ articles }: { articles: BlogCardData[] }) {
  if (articles.length === 0) {
    return null
  }

  return (
    <section className="px-6 pt-[100px] lg:px-[100px]">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <SectionHeading eyebrow="Блог" title="Блог та корисні матеріали" />
          <ArrowPillButton href="/blog" className="mr-[50px] self-start bg-[#22354A] text-white md:mr-[54px] md:self-center">
            Усі статті
          </ArrowPillButton>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <BlogCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}
