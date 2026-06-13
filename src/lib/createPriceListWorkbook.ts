type PriceListRow = {
  category: string
  price: number
  productId: number | string
  title: string
}

type ZipEntry = {
  data: Buffer
  name: string
}

const encoder = new TextEncoder()

export function createPriceListWorkbook(rows: PriceListRow[]) {
  const createdAt = new Date().toISOString()
  const entries: ZipEntry[] = [
    xmlEntry(
      '[Content_Types].xml',
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
</Types>`,
    ),
    xmlEntry(
      '_rels/.rels',
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>`,
    ),
    xmlEntry(
      'docProps/app.xml',
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>V-NRG</Application>
</Properties>`,
    ),
    xmlEntry(
      'docProps/core.xml',
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:creator>V-NRG</dc:creator>
  <cp:lastModifiedBy>V-NRG</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">${createdAt}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">${createdAt}</dcterms:modified>
</cp:coreProperties>`,
    ),
    xmlEntry(
      'xl/workbook.xml',
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets><sheet name="Товари" sheetId="1" r:id="rId1"/></sheets>
</workbook>`,
    ),
    xmlEntry(
      'xl/_rels/workbook.xml.rels',
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`,
    ),
    xmlEntry('xl/styles.xml', createStylesXml()),
    xmlEntry('xl/worksheets/sheet1.xml', createWorksheetXml(rows)),
  ]

  return createZip(entries)
}

function createWorksheetXml(rows: PriceListRow[]) {
  const lastRow = Math.max(2, rows.length + 2)
  const dataRows = rows
    .map((row, index) => {
      const rowNumber = index + 3

      return `<row r="${rowNumber}">
  ${numberCell(`B${rowNumber}`, row.productId)}
  ${stringCell(`C${rowNumber}`, '', 1)}
  ${stringCell(`D${rowNumber}`, row.title, 1)}
  ${stringCell(`E${rowNumber}`, row.category, 1)}
  ${numberCell(`F${rowNumber}`, row.price, 1)}
  ${stringCell(`G${rowNumber}`, '', 1)}
  ${stringCell(`H${rowNumber}`, '', 1)}
</row>`
    })
    .join('')

  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <dimension ref="A2:H${lastRow}"/>
  <sheetViews><sheetView workbookViewId="0"/></sheetViews>
  <sheetFormatPr defaultRowHeight="15"/>
  <cols>
    <col min="1" max="1" width="3" customWidth="1"/>
    <col min="2" max="2" width="42.44140625" customWidth="1"/>
    <col min="3" max="3" width="47.109375" customWidth="1"/>
    <col min="4" max="4" width="40" customWidth="1"/>
    <col min="5" max="5" width="12.88671875" customWidth="1"/>
    <col min="6" max="6" width="7.6640625" customWidth="1"/>
    <col min="7" max="7" width="9.33203125" customWidth="1"/>
  </cols>
  <sheetData>
    <row r="2" ht="27" customHeight="1">
      ${stringCell('B2', 'PosterID product_id (не змінювати!)', 2)}
      ${stringCell('C2', 'PosterID modificator_id (не змінювати!)', 3)}
      ${stringCell('D2', 'Назва', 3)}
      ${stringCell('E2', 'Категорія', 3)}
      ${stringCell('F2', 'Ціна', 3)}
      ${stringCell('G2', '', 3)}
      ${stringCell('H2', '', 3)}
    </row>
    ${dataRows}
  </sheetData>
</worksheet>`
}

function createStylesXml() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="2">
    <font><sz val="11"/><name val="Calibri"/><family val="2"/></font>
    <font><b/><sz val="11"/><name val="Calibri"/><family val="2"/></font>
  </fonts>
  <fills count="2">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
  </fills>
  <borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="4">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="top"/></xf>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="top"/></xf>
  </cellXfs>
  <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>`
}

function stringCell(reference: string, value: string, style?: number) {
  const styleAttribute = style === undefined ? '' : ` s="${style}"`

  return `<c r="${reference}"${styleAttribute} t="inlineStr"><is><t xml:space="preserve">${escapeXml(value)}</t></is></c>`
}

function numberCell(reference: string, value: number | string, style?: number) {
  const numericValue = Number(value)
  const styleAttribute = style === undefined ? '' : ` s="${style}"`

  if (!Number.isFinite(numericValue)) {
    return stringCell(reference, String(value), style)
  }

  return `<c r="${reference}"${styleAttribute}><v>${numericValue}</v></c>`
}

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function xmlEntry(name: string, xml: string): ZipEntry {
  return {
    data: Buffer.from(encoder.encode(xml)),
    name,
  }
}

function createZip(entries: ZipEntry[]) {
  const localParts: Buffer[] = []
  const centralParts: Buffer[] = []
  let offset = 0

  for (const entry of entries) {
    const name = Buffer.from(entry.name, 'utf8')
    const checksum = crc32(entry.data)
    const localHeader = Buffer.alloc(30)

    localHeader.writeUInt32LE(0x04034b50, 0)
    localHeader.writeUInt16LE(20, 4)
    localHeader.writeUInt16LE(0x0800, 6)
    localHeader.writeUInt16LE(0, 8)
    localHeader.writeUInt32LE(0, 10)
    localHeader.writeUInt32LE(checksum, 14)
    localHeader.writeUInt32LE(entry.data.length, 18)
    localHeader.writeUInt32LE(entry.data.length, 22)
    localHeader.writeUInt16LE(name.length, 26)
    localHeader.writeUInt16LE(0, 28)
    localParts.push(localHeader, name, entry.data)

    const centralHeader = Buffer.alloc(46)
    centralHeader.writeUInt32LE(0x02014b50, 0)
    centralHeader.writeUInt16LE(20, 4)
    centralHeader.writeUInt16LE(20, 6)
    centralHeader.writeUInt16LE(0x0800, 8)
    centralHeader.writeUInt16LE(0, 10)
    centralHeader.writeUInt32LE(0, 12)
    centralHeader.writeUInt32LE(checksum, 16)
    centralHeader.writeUInt32LE(entry.data.length, 20)
    centralHeader.writeUInt32LE(entry.data.length, 24)
    centralHeader.writeUInt16LE(name.length, 28)
    centralHeader.writeUInt32LE(0, 38)
    centralHeader.writeUInt32LE(offset, 42)
    centralParts.push(centralHeader, name)

    offset += localHeader.length + name.length + entry.data.length
  }

  const centralDirectory = Buffer.concat(centralParts)
  const end = Buffer.alloc(22)

  end.writeUInt32LE(0x06054b50, 0)
  end.writeUInt16LE(entries.length, 8)
  end.writeUInt16LE(entries.length, 10)
  end.writeUInt32LE(centralDirectory.length, 12)
  end.writeUInt32LE(offset, 16)

  return Buffer.concat([...localParts, centralDirectory, end])
}

function crc32(buffer: Buffer) {
  let crc = 0xffffffff

  for (const byte of buffer) {
    crc ^= byte

    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0)
    }
  }

  return (crc ^ 0xffffffff) >>> 0
}
