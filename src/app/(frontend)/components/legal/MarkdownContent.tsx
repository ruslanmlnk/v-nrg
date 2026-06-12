type MarkdownBlock =
  | {
      items: string[]
      type: 'list'
    }
  | {
      level: 1 | 2 | 3
      text: string
      type: 'heading'
    }
  | {
      text: string
      type: 'paragraph'
    }

export function MarkdownContent({ content }: { content: string }) {
  const blocks = parseMarkdown(content)

  return (
    <div className="flex flex-col gap-8 text-[18px] font-medium leading-[165%] text-[#22354A]">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          if (block.level === 1) {
            return (
              <h2 key={index} className="pt-2 text-[34px] font-medium leading-[125%] md:text-[40px]">
                {block.text}
              </h2>
            )
          }

          return (
            <h3
              key={index}
              className={
                block.level === 2
                  ? 'text-[28px] font-medium leading-[125%] md:text-[32px]'
                  : 'text-[22px] font-bold leading-[145%] md:text-[24px]'
              }
            >
              {block.text}
            </h3>
          )
        }

        if (block.type === 'list') {
          return (
            <ul key={index} className="flex list-disc flex-col gap-3 pl-7 marker:text-[#4FACF5]">
              {block.items.map((item) => (
                <li key={item}>{renderInlineMarkdown(item)}</li>
              ))}
            </ul>
          )
        }

        return <p key={index}>{renderInlineMarkdown(block.text)}</p>
      })}
    </div>
  )
}

function parseMarkdown(markdown: string): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = []
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  let paragraph: string[] = []
  let listItems: string[] = []

  const flushParagraph = () => {
    if (paragraph.length === 0) return

    blocks.push({
      text: paragraph.join(' ').trim(),
      type: 'paragraph',
    })
    paragraph = []
  }

  const flushList = () => {
    if (listItems.length === 0) return

    blocks.push({
      items: listItems,
      type: 'list',
    })
    listItems = []
  }

  for (const rawLine of lines) {
    const line = rawLine.trim()

    if (!line) {
      flushParagraph()
      flushList()
      continue
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/)

    if (headingMatch) {
      flushParagraph()
      flushList()
      blocks.push({
        level: headingMatch[1].length as 1 | 2 | 3,
        text: headingMatch[2].trim(),
        type: 'heading',
      })
      continue
    }

    const listMatch = line.match(/^[-—]\s*(.+)$/)

    if (listMatch) {
      flushParagraph()
      listItems.push(listMatch[1].trim())
      continue
    }

    flushList()
    paragraph.push(line)
  }

  flushParagraph()
  flushList()

  return blocks
}

function renderInlineMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>
    }

    return part
  })
}
