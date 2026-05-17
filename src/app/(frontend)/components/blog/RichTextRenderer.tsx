import type { ReactNode } from 'react'

type LexicalNode = {
  children?: LexicalNode[]
  format?: string | number
  tag?: string
  text?: string
  type?: string
}

type LexicalContent = {
  root?: {
    children?: LexicalNode[]
  }
}

export function RichTextRenderer({ content }: { content: LexicalContent }) {
  const nodes = content.root?.children ?? []
  let h2Index = 0

  return (
    <div className="flex flex-col gap-8 text-[18px] font-medium leading-[165%] text-[#22354A]">
      {nodes.map((node, index) => {
        const headingId = node.type === 'heading' && node.tag !== 'h3' ? `article-section-${h2Index++}` : undefined

        return <RichTextNode key={index} headingId={headingId} node={node} />
      })}
    </div>
  )
}

function RichTextNode({ headingId, node }: { headingId?: string; node: LexicalNode }) {
  const children = renderChildren(node.children)

  if (node.type === 'heading') {
    if (node.tag === 'h3') {
      return <h3 className="text-[28px] font-medium leading-[125%] text-[#22354A]">{children}</h3>
    }

    return (
      <h2 id={headingId} className="scroll-mt-28 text-[32px] font-medium leading-[125%] text-[#22354A]">
        {children}
      </h2>
    )
  }

  if (node.type === 'list') {
    return <ul className="flex flex-col gap-2">{node.children?.map((child, index) => <RichTextNode key={index} node={child} />)}</ul>
  }

  if (node.type === 'listitem') {
    return <li>{children}</li>
  }

  return <p>{children}</p>
}

function renderChildren(children: LexicalNode[] | undefined): ReactNode {
  return children?.map((child, index) => {
    if (child.type === 'text') {
      return child.text
    }

    return <RichTextNode key={index} node={child} />
  })
}
