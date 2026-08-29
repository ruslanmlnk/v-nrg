import ExcelJS from 'exceljs'

export const PRODUCT_EXCEL_HEADERS = ['ID', 'Назва', 'Характеристики', 'Переваги'] as const

export type ProductExcelRow = {
  advantages: string[]
  characteristics: Array<{ label: string; value: string }>
  id: string
  title: string
}

export async function createProductWorkbook(rows: ProductExcelRow[]) {
  const workbook = new ExcelJS.Workbook()
  workbook.creator = 'V-NRG'
  workbook.created = new Date()
  const sheet = workbook.addWorksheet('Товари', {
    views: [{ state: 'frozen', ySplit: 1 }],
  })
  sheet.columns = [
    { header: PRODUCT_EXCEL_HEADERS[0], key: 'id', width: 14 },
    { header: PRODUCT_EXCEL_HEADERS[1], key: 'title', width: 42 },
    { header: PRODUCT_EXCEL_HEADERS[2], key: 'characteristics', width: 55 },
    { header: PRODUCT_EXCEL_HEADERS[3], key: 'advantages', width: 55 },
  ]
  sheet.autoFilter = 'A1:D1'
  sheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } }
  sheet.getRow(1).fill = {
    pattern: 'solid',
    type: 'pattern',
    fgColor: { argb: 'FF22354A' },
  }

  for (const row of rows) {
    const excelRow = sheet.addRow({
      advantages: row.advantages.join('\n'),
      characteristics: row.characteristics.map((item) => `${item.label} = ${item.value}`).join('\n'),
      id: row.id,
      title: row.title,
    })
    excelRow.alignment = { vertical: 'top', wrapText: true }
  }

  return Buffer.from(await workbook.xlsx.writeBuffer())
}

export async function parseProductWorkbook(buffer: Buffer): Promise<ProductExcelRow[]> {
  const workbook = new ExcelJS.Workbook()
  await workbook.xlsx.load(buffer)
  const sheet = workbook.worksheets[0]
  if (!sheet) throw new Error('Excel-файл не містить аркушів')
  if (sheet.rowCount > 10_001) throw new Error('Файл містить забагато рядків')

  const headers = PRODUCT_EXCEL_HEADERS.map((_, index) => sheet.getRow(1).getCell(index + 1).text.trim())
  if (PRODUCT_EXCEL_HEADERS.some((header, index) => headers[index] !== header)) {
    throw new Error(`Очікувані колонки: ${PRODUCT_EXCEL_HEADERS.join(', ')}`)
  }

  const rows: ProductExcelRow[] = []
  for (let rowNumber = 2; rowNumber <= sheet.rowCount; rowNumber += 1) {
    const row = sheet.getRow(rowNumber)
    const values = [1, 2, 3, 4].map((column) => row.getCell(column).text.trim())
    if (values.every((value) => !value)) continue

    const [id, title, characteristicsValue, advantagesValue] = values
    if (!id || !title) throw new Error(`Рядок ${rowNumber}: ID і Назва обов'язкові`)

    rows.push({
      advantages: splitLines(advantagesValue),
      characteristics: splitLines(characteristicsValue).map((line) => {
        const separatorIndex = line.indexOf(' = ')
        if (separatorIndex <= 0 || separatorIndex === line.length - 3) {
          throw new Error(`Рядок ${rowNumber}: характеристика має формат "Назва = Значення"`)
        }
        return {
          label: line.slice(0, separatorIndex).trim(),
          value: line.slice(separatorIndex + 3).trim(),
        }
      }),
      id,
      title,
    })
  }
  return rows
}

function splitLines(value = '') {
  return value.split(/\r?\n/).map((line) => line.trim()).filter(Boolean)
}
