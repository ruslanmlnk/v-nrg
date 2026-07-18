import type { ReactNode } from 'react'
import type {
  ProductRichTextContent as ProductRichTextContentData,
  ProductRichTextNode,
} from '../../data/products'

export function ProductRichTextContent({ content }: { content: ProductRichTextContentData }) {
  return (
    <div className="flex flex-col gap-4 pt-8 text-[18px] font-medium leading-[165%] text-[#22354A]">
      {content.root?.children?.map((node, index) => (
        <ProductRichTextNodeView key={index} node={node} />
      ))}
    </div>
  )
}

function ProductRichTextNodeView({ node }: { node: ProductRichTextNode }) {
  const children = renderChildren(node.children)
  const alignmentClass = getAlignmentClass(node.format)

  if (node.type === 'heading') {
    if (node.tag === 'h3') {
      return (
        <h3 className={`text-[22px] font-bold leading-[145%] text-[#22354A] ${alignmentClass}`}>
          {children}
        </h3>
      )
    }

    if (node.tag === 'h4') {
      return (
        <h4 className={`text-[20px] font-bold leading-[145%] text-[#22354A] ${alignmentClass}`}>
          {children}
        </h4>
      )
    }

    return (
      <h2 className={`text-[26px] font-medium leading-[125%] text-[#22354A] ${alignmentClass}`}>
        {children}
      </h2>
    )
  }

  if (node.type === 'list') {
    const isOrdered = node.listType === 'number'
    const ListTag = isOrdered ? 'ol' : 'ul'

    return (
      <ListTag
        className={`flex flex-col gap-2 pl-7 marker:text-[#4FACF5] ${
          isOrdered ? 'list-decimal' : 'list-disc'
        } ${alignmentClass}`}
      >
        {node.children?.map((child, index) => (
          <ProductRichTextNodeView key={index} node={child} />
        ))}
      </ListTag>
    )
  }

  if (node.type === 'listitem') {
    return <li>{children}</li>
  }

  if (node.type === 'quote') {
    return (
      <blockquote className="border-l-4 border-[#4FACF5] pl-5 text-[#5C7288]">
        {children}
      </blockquote>
    )
  }

  if (node.type === 'linebreak') {
    return <br />
  }

  return <p className={alignmentClass}>{children}</p>
}

function renderChildren(children: ProductRichTextNode[] | undefined): ReactNode {
  return children?.map((child, index) => {
    if (child.type === 'text') {
      return renderFormattedText(child, index)
    }

    if (child.type === 'link' && child.fields?.url) {
      return (
        <a
          className="font-bold text-[#4FACF5] underline-offset-4 hover:underline"
          href={child.fields.url}
          key={index}
          rel={child.fields.newTab ? 'noreferrer' : undefined}
          target={child.fields.newTab ? '_blank' : undefined}
        >
          {renderChildren(child.children)}
        </a>
      )
    }

    if (child.type === 'linebreak') {
      return <br key={index} />
    }

    return <ProductRichTextNodeView key={index} node={child} />
  })
}

function renderFormattedText(node: ProductRichTextNode, key: number) {
  let content: ReactNode = node.text

  if (hasFormat(node, 'code', 16)) {
    content = (
      <code className="rounded bg-[#F5F8F9] px-1.5 py-0.5 font-mono text-[0.92em]">{content}</code>
    )
  }

  if (hasFormat(node, 'bold', 1)) {
    content = <strong>{content}</strong>
  }

  if (hasFormat(node, 'italic', 2)) {
    content = <em>{content}</em>
  }

  if (hasFormat(node, 'underline', 8)) {
    content = <span className="underline underline-offset-4">{content}</span>
  }

  if (hasFormat(node, 'strikethrough', 4)) {
    content = <span className="line-through">{content}</span>
  }

  return <span key={key}>{content}</span>
}

function hasFormat(node: ProductRichTextNode, name: string, bit: number) {
  if (typeof node.format === 'number') {
    return (node.format & bit) === bit
  }

  return typeof node.format === 'string' && node.format.includes(name)
}

function getAlignmentClass(format: ProductRichTextNode['format']) {
  if (format === 'center') {
    return 'text-center'
  }

  if (format === 'right') {
    return 'text-right'
  }

  if (format === 'justify') {
    return 'text-justify'
  }

  return ''
}
