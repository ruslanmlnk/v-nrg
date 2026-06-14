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
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <BlogCard key={article.id} {...article} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-2 md:items-center md:gap-5">
          <ArrowPillButton
            href="/blog"
            isDark
            className="mr-[50px] md:mr-[54px] md:justify-self-start"
          >
            Усі статті
          </ArrowPillButton>
          <SectionHeading
            eyebrow="Блог"
            title="Блог та корисні матеріали"
            className="items-center text-center md:items-start md:text-left"
          />
        </div>
      </div>
    </section>
  )
}
