import { GraphQLClient } from 'graphql-request'
import { headers as getHeaders } from 'next/headers'

import { POST as graphQLPost } from '@/app/(payload)/api/graphql/route'

const GRAPHQL_ENDPOINT = 'http://payload.local/api/graphql'

function mergeHeaders(...headersList: Array<HeadersInit | undefined>) {
  const merged = new Headers()

  for (const headerSet of headersList) {
    if (!headerSet) {
      continue
    }

    new Headers(headerSet).forEach((value, key) => {
      merged.set(key, value)
    })
  }

  return merged
}

async function internalGraphQLFetch(input: RequestInfo | URL, init?: RequestInit) {
  const url =
    typeof input === 'string' || input instanceof URL ? input.toString() : input.url

  return graphQLPost(new Request(url, init))
}

export function createGraphQLClient(options?: { headers?: HeadersInit }) {
  return new GraphQLClient(GRAPHQL_ENDPOINT, {
    fetch: (input, init) =>
      internalGraphQLFetch(input, {
        ...init,
        headers: mergeHeaders(options?.headers, init?.headers),
      }),
  })
}

export async function createRequestGraphQLClient() {
  const requestHeaders = await getHeaders()

  return createGraphQLClient({ headers: requestHeaders })
}
