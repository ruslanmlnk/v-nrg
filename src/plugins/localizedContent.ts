import type { Config, Field, Plugin } from 'payload'

const localizableFieldNames = new Set([
  'address',
  'answer',
  'content',
  'description',
  'details',
  'label',
  'name',
  'question',
  'shortDescription',
  'subtitle',
  'text',
  'title',
])

function localizeFields(fields: Field[]): Field[] {
  return fields.map((field) => {
    let nextField = { ...field } as Field

    if (
      'name' in nextField &&
      localizableFieldNames.has(nextField.name) &&
      (nextField.type === 'text' || nextField.type === 'textarea' || nextField.type === 'richText')
    ) {
      nextField = { ...nextField, localized: true } as Field
    }

    if ('fields' in nextField && Array.isArray(nextField.fields)) {
      nextField = { ...nextField, fields: localizeFields(nextField.fields) } as Field
    }

    if ('blocks' in nextField && Array.isArray(nextField.blocks)) {
      nextField = {
        ...nextField,
        blocks: nextField.blocks.map((block) => ({
          ...block,
          fields: localizeFields(block.fields),
        })),
      } as Field
    }

    return nextField
  })
}

export const localizedContent: Plugin = (config: Config): Config => ({
  ...config,
  collections: config.collections?.map((collection) => ({
    ...collection,
    fields: localizeFields(collection.fields),
  })),
  globals: config.globals?.map((global) => ({
    ...global,
    fields: localizeFields(global.fields),
  })),
})
