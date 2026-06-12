import PageHero from '../shared/PageHero'
import { LegalRichTextContent } from './LegalRichTextContent'
import { MarkdownContent } from './MarkdownContent'

type LegalPageViewProps = {
  content?: {
    root?: {
      children?: unknown[]
    }
  } | null
  contentMarkdown?: string | null
  title: string
}

export function LegalPageView({ content, contentMarkdown, title }: LegalPageViewProps) {
  return (
    <div className="pt-5">
      <div className="mx-auto flex max-w-[1288px] flex-col gap-12 px-6 pb-[100px]">
        <PageHero currentLabel={title} title={title} contentClassName="max-w-[920px]" />

        <section className="mx-auto w-full max-w-[1240px]">
          {content?.root?.children?.length ? (
            <LegalRichTextContent content={content} />
          ) : (
            <MarkdownContent content={contentMarkdown ?? ''} />
          )}
        </section>
      </div>
    </div>
  )
}
