import { LinkJSXConverter, RichText } from '@payloadcms/richtext-lexical/react'
import type { SerializedLinkNode } from '@payloadcms/richtext-lexical'
import type { SerializedEditorState } from 'lexical'

import type { ProductRichTextContent as ProductRichTextContentData } from '../../data/products'

const richTextClassName = [
  'product-rich-text pt-8 text-[18px] font-medium leading-[165%] text-[#22354A]',
  '[&_>*+*]:mt-4',
  '[&_a]:font-bold [&_a]:text-[#4FACF5] [&_a]:underline-offset-4 hover:[&_a]:underline',
  '[&_blockquote]:border-l-4 [&_blockquote]:border-[#4FACF5] [&_blockquote]:pl-5 [&_blockquote]:text-[#5C7288]',
  '[&_code]:rounded [&_code]:bg-[#F5F8F9] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.92em]',
  '[&_h1]:text-[30px] [&_h1]:font-medium [&_h1]:leading-[125%]',
  '[&_h2]:text-[26px] [&_h2]:font-medium [&_h2]:leading-[125%]',
  '[&_h3]:text-[22px] [&_h3]:font-bold [&_h3]:leading-[145%]',
  '[&_h4]:text-[20px] [&_h4]:font-bold [&_h4]:leading-[145%]',
  '[&_hr]:my-6 [&_hr]:border-[#D5E0E8]',
  '[&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-[20px]',
  '[&_picture]:block',
  '[&_table]:w-full [&_table]:border-collapse [&_table]:overflow-hidden [&_table]:rounded-[12px]',
  '[&_td]:border [&_td]:border-[#D5E0E8] [&_td]:p-3 [&_td]:align-top',
  '[&_th]:border [&_th]:border-[#D5E0E8] [&_th]:bg-[#F5F8F9] [&_th]:p-3 [&_th]:text-left [&_th]:font-bold',
].join(' ')

export function ProductRichTextContent({ content }: { content: ProductRichTextContentData }) {
  return (
    <RichText
      className={richTextClassName}
      converters={({ defaultConverters }) => ({
        ...defaultConverters,
        ...LinkJSXConverter({ internalDocToHref }),
      })}
      data={content as SerializedEditorState}
    />
  )
}

function internalDocToHref({ linkNode }: { linkNode: SerializedLinkNode }) {
  const relationTo = linkNode.fields?.doc?.relationTo
  const value = linkNode.fields?.doc?.value
  const doc = value && typeof value === 'object' ? value : undefined
  const slug = getStringField(doc, 'slug')

  if (!relationTo || !slug) {
    return '#'
  }

  if (relationTo === 'products') {
    const categorySlug = getCategorySlug(doc)

    return `/catalog/${categorySlug ?? 'product'}/${slug}`
  }

  if (relationTo === 'category') {
    return `/catalog/${slug}`
  }

  if (relationTo === 'articles') {
    return `/blog/${slug}`
  }

  if (relationTo === 'legal-pages') {
    return `/${slug}`
  }

  return `/${slug}`
}

function getCategorySlug(doc: Record<string, unknown> | undefined) {
  const category = doc?.category

  if (Array.isArray(category)) {
    return category.map((item) => getStringField(item, 'slug')).find(Boolean)
  }

  return getStringField(category, 'slug')
}

function getStringField(value: unknown, field: string) {
  return value && typeof value === 'object' && field in value
    ? typeof (value as Record<string, unknown>)[field] === 'string'
      ? ((value as Record<string, unknown>)[field] as string)
      : undefined
    : undefined
}
