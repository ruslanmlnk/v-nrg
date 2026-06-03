import { NextResponse } from 'next/server'

const NOVA_POSHTA_API_URL = 'https://api.novaposhta.ua/v2.0/json/'
const CACHE_TTL_MS = 5 * 60 * 1000

const warehousesCache = new Map<
  string,
  {
    expiresAt: number
    warehouses: NovaPoshtaWarehouseOption[]
  }
>()

type NovaPoshtaResponse<T> = {
  data?: T[]
  errors?: string[]
  success: boolean
}

type NovaPoshtaSettlementSearch = {
  Addresses?: Array<{
    DeliveryCity?: string
    MainDescription?: string
    Present?: string
  }>
}

type NovaPoshtaWarehouse = {
  Description?: string
  Number?: string
  Ref?: string
  ShortAddress?: string
}

type NovaPoshtaWarehouseOption = {
  city: string
  description: string
  label: string
  number: string
  ref: string
}

export async function GET(request: Request) {
  const apiKey = process.env.NOVA_POSHTA_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: 'NOVA_POSHTA_API_KEY is not configured', warehouses: [] },
      { status: 500 },
    )
  }

  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')?.trim() ?? ''

  if (query.length < 3) {
    return NextResponse.json({ warehouses: [] })
  }

  const cacheKey = query.toLocaleLowerCase('uk-UA')
  const cached = warehousesCache.get(cacheKey)

  if (cached && cached.expiresAt > Date.now()) {
    return NextResponse.json({ warehouses: cached.warehouses })
  }

  try {
    const cityQuery = getCityQuery(query)
    const warehouseQuery = getWarehouseQuery(query)

    const settlements = await novaPoshtaRequest<NovaPoshtaSettlementSearch>(apiKey, {
      calledMethod: 'searchSettlements',
      methodProperties: {
        CityName: cityQuery,
        Limit: '5',
        Page: '1',
      },
      modelName: 'Address',
    })

    const addresses = settlements.data?.[0]?.Addresses ?? []
    const warehouses = (
      await Promise.all(
        addresses.slice(0, 1).map(async (address) => {
          if (!address.DeliveryCity) return []

          const result = await novaPoshtaRequest<NovaPoshtaWarehouse>(apiKey, {
            calledMethod: 'getWarehouses',
            methodProperties: {
              CityRef: address.DeliveryCity,
              FindByString: warehouseQuery,
              Limit: '12',
              Page: '1',
            },
            modelName: 'Address',
          })

          return (result.data ?? []).map((warehouse) =>
            normalizeWarehouse(warehouse, address.MainDescription ?? address.Present ?? ''),
          )
        }),
      )
    )
      .flat()
      .filter((warehouse): warehouse is NovaPoshtaWarehouseOption => Boolean(warehouse))
      .slice(0, 12)

    warehousesCache.set(cacheKey, {
      expiresAt: Date.now() + CACHE_TTL_MS,
      warehouses,
    })

    return NextResponse.json({ warehouses })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Nova Poshta request failed'

    const isRateLimit = /too many requests/i.test(message)

    return NextResponse.json(
      {
        error: isRateLimit
          ? 'Нова Пошта тимчасово обмежила кількість запитів. Спробуйте ще раз за хвилину.'
          : message,
        warehouses: [],
      },
      { status: isRateLimit ? 429 : 502 },
    )
  }
}

function getCityQuery(query: string) {
  const cityQuery = query
    .replace(/\b(відділення|відділ|поштомат|нова|пошта|np)\b/giu, ' ')
    .replace(/[№#]?\d+/gu, ' ')
    .replace(/\s+/gu, ' ')
    .trim()

  return cityQuery || query
}

function getWarehouseQuery(query: string) {
  const numberMatch = query.match(/[№#]?\s*(\d+)/u)

  return numberMatch?.[1] ?? ''
}

async function novaPoshtaRequest<T>(
  apiKey: string,
  body: {
    calledMethod: string
    methodProperties: Record<string, string>
    modelName: string
  },
) {
  const response = await fetch(NOVA_POSHTA_API_URL, {
    body: JSON.stringify({
      apiKey,
      ...body,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  if (!response.ok) {
    throw new Error(`Nova Poshta API responded with ${response.status}`)
  }

  const payload = (await response.json()) as NovaPoshtaResponse<T>

  if (!payload.success) {
    throw new Error(payload.errors?.join(', ') || 'Nova Poshta API returned an error')
  }

  return payload
}

function normalizeWarehouse(
  warehouse: NovaPoshtaWarehouse,
  city: string,
): NovaPoshtaWarehouseOption | null {
  if (!warehouse.Ref || !warehouse.Description) return null

  const label = city ? `${city}: ${warehouse.Description}` : warehouse.Description

  return {
    city,
    description: warehouse.Description,
    label,
    number: warehouse.Number ?? '',
    ref: warehouse.Ref,
  }
}
