import { expect, it } from 'vitest'
import { toggleComparedProduct } from '@/app/(frontend)/components/compare/toggleComparedProduct'

const products = {
  a1: { category: 'chairs' },
  a2: { category: 'chairs' },
  a3: { category: 'chairs' },
  a4: { category: 'chairs' },
  b1: { category: 'vacuum' },
  b2: { category: 'vacuum' },
  b3: { category: 'vacuum' },
}

it('keeps three products in each category, six total', () => {
  let ids: string[] = []
  for (const id of ['a1', 'b1', 'a2', 'b2', 'a3', 'b3']) {
    ids = toggleComparedProduct(ids, id, products)
  }
  expect(ids).toEqual(['a1', 'b1', 'a2', 'b2', 'a3', 'b3'])
  expect(toggleComparedProduct(ids, 'a4', products)).toEqual(['b1', 'a2', 'b2', 'a3', 'b3', 'a4'])
})

it('removes an existing product and ignores unknown products', () => {
  expect(toggleComparedProduct(['a1', 'b1'], 'a1', products)).toEqual(['b1'])
  expect(toggleComparedProduct(['a1', 'b1'], 'missing', products)).toEqual(['a1', 'b1'])
})
