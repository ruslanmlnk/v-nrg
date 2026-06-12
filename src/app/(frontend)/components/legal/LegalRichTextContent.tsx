import type { ReactNode } from 'react'

export type LexicalContent = {
  root?: {
    children?: LexicalNode[]
  }
}

type LexicalNode = {
  children?: LexicalNode[]
  fields?: {
    blockType?: string
    image?: {
      alt?: string | null
      url?: string | null
    } | null
    text?: LexicalContent | null
  }
  format?: number | string
  tag?: string
  text?: string
  type?: string
}

export function LegalRichTextContent({ content }: { content: LexicalContent }) {
  return (
    <div className="flex flex-col gap-8 text-[18px] font-medium leading-[165%] text-[#22354A]">
      <LegalRichTextNodes nodes={content.root?.children ?? []} />
    </div>
  )
}

function LegalRichTextNodes({ compact = false, nodes }: { compact?: boolean; nodes: LexicalNode[] }) {
  return (
    <>
      {nodes.map((node, index) => (
        <LegalRichTextNode compact={compact} key={index} node={node} />
      ))}
    </>
  )
}

function LegalRichTextNode({ compact = false, node }: { compact?: boolean; node: LexicalNode }) {
  if (node.type === 'block' && node.fields?.blockType === 'iconText') {
    return <IconTextBlock node={node} />
  }

  const children = renderChildren(node.children, compact)

  if (node.type === 'heading') {
    if (node.tag === 'h3') {
      return (
        <h3 className="text-[22px] font-bold leading-[145%] text-[#22354A] md:text-[24px]">
          {children}
        </h3>
      )
    }

    return (
      <h2 className="pt-2 text-[34px] font-medium leading-[125%] text-[#22354A] md:text-[40px]">
        {children}
      </h2>
    )
  }

  if (node.type === 'list') {
    return (
      <ul
        className={
          compact
            ? 'flex list-disc flex-col gap-2 pl-6 marker:text-[#4FACF5]'
            : 'flex list-disc flex-col gap-3 pl-7 marker:text-[#4FACF5]'
        }
      >
        {node.children?.map((child, index) => (
          <LegalRichTextNode compact={compact} key={index} node={child} />
        ))}
      </ul>
    )
  }

  if (node.type === 'listitem') {
    return <li>{children}</li>
  }

  return <p>{children}</p>
}

function IconTextBlock({ node }: { node: LexicalNode }) {
  const image = node.fields?.image
  const text = node.fields?.text

  return (
    <div className="flex w-full items-start gap-4">
      {image?.url ? (
        <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center text-[#4FACF5]">
          <span
            aria-hidden={image.alt ? undefined : true}
            aria-label={image.alt ?? undefined}
            className="inline-block h-6 w-6 bg-current"
            role={image.alt ? 'img' : undefined}
            style={{
              mask: `url(${image.url}) center / contain no-repeat`,
              WebkitMask: `url(${image.url}) center / contain no-repeat`,
            }}
          />
        </span>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        {text ? <LegalRichTextNodes compact nodes={text.root?.children ?? []} /> : null}
      </div>
    </div>
  )
}

function renderChildren(children: LexicalNode[] | undefined, compact: boolean): ReactNode {
  return children?.map((child, index) => {
    if (child.type === 'text') {
      return isBoldText(child) ? <strong key={index}>{child.text}</strong> : child.text
    }

    return <LegalRichTextNode compact={compact} key={index} node={child} />
  })
}

function isBoldText(node: LexicalNode) {
  if (typeof node.format === 'number') {
    return (node.format & 1) === 1
  }

  return typeof node.format === 'string' && node.format.includes('bold')
}
