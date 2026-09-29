import type { ProductCategoryData, ProductRichTextNode } from './productModel'

/** Card previews stay plain text, so editor links cannot nest inside the card link. */
export function categoryDescriptionText(description: ProductCategoryData['description']): string {
  if (typeof description === 'string') return description

  return description.root?.children?.map(nodeText).join('\n') ?? ''
}

function nodeText(node: ProductRichTextNode): string {
  if (node.type === 'linebreak') return '\n'
  if (typeof node.text === 'string') return node.text
  return node.children?.map(nodeText).join(node.type === 'list' ? '\n' : '') ?? ''
}
