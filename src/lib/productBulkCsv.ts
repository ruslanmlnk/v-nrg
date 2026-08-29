export const PRODUCT_CSV_HEADERS = ['ID', 'Назва', 'Характеристики', 'Переваги'] as const

export type ProductCsvRow = {
  advantages: string[]
  characteristics: Array<{ label: string; value: string }>
  id: string
  title: string
}

export function createProductCsv(rows: ProductCsvRow[]) {
  const records = [
    [...PRODUCT_CSV_HEADERS],
    ...rows.map((row) => [
      row.id,
      row.title,
      row.characteristics.map((item) => `${item.label} = ${item.value}`).join('\n'),
      row.advantages.join('\n'),
    ]),
  ]

  return `\uFEFF${records.map((record) => record.map(escapeCsvCell).join(',')).join('\r\n')}`
}

export function parseProductCsv(source: string): ProductCsvRow[] {
  const records = parseCsvRecords(source.replace(/^\uFEFF/, ''))
  const headers = records.shift()?.map((value) => value.trim())

  if (!headers || PRODUCT_CSV_HEADERS.some((header, index) => headers[index] !== header)) {
    throw new Error(`Очікувані колонки: ${PRODUCT_CSV_HEADERS.join(', ')}`)
  }

  return records.flatMap((record, index) => {
    if (record.every((cell) => !cell.trim())) return []
    const id = record[0]?.trim()
    const title = record[1]?.trim()

    if (!id || !title) throw new Error(`Рядок ${index + 2}: ID і Назва обов'язкові`)

    return [{
      advantages: splitLines(record[3]),
      characteristics: splitLines(record[2]).map((line) => {
        const separatorIndex = line.indexOf(' = ')
        if (separatorIndex <= 0 || separatorIndex === line.length - 3) {
          throw new Error(`Рядок ${index + 2}: характеристика має формат "Назва = Значення"`)
        }
        return {
          label: line.slice(0, separatorIndex).trim(),
          value: line.slice(separatorIndex + 3).trim(),
        }
      }),
      id,
      title,
    }]
  })
}

function escapeCsvCell(value: string) {
  return /[",\r\n]/.test(value) ? `"${value.replaceAll('"', '""')}"` : value
}

function splitLines(value = '') {
  return value.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
}

function parseCsvRecords(source: string) {
  const records: string[][] = []
  let record: string[] = []
  let cell = ''
  let quoted = false

  for (let index = 0; index < source.length; index += 1) {
    const character = source[index]
    if (quoted) {
      if (character === '"' && source[index + 1] === '"') {
        cell += '"'
        index += 1
      } else if (character === '"') quoted = false
      else cell += character
    } else if (character === '"') quoted = true
    else if (character === ',') {
      record.push(cell)
      cell = ''
    } else if (character === '\n' || character === '\r') {
      if (character === '\r' && source[index + 1] === '\n') index += 1
      record.push(cell)
      records.push(record)
      record = []
      cell = ''
    } else cell += character
  }

  if (quoted) throw new Error('Незакрита лапка у CSV')
  if (cell || record.length) {
    record.push(cell)
    records.push(record)
  }
  return records
}
