import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const legacyInfoTopics: Record<string, string> = {
  accessories: '/aksesuari',
  chairs: '/stilci-dlya-masazhu',
  components: '/komplektuyuchi',
  materials: '/rashidniki',
}

export function proxy(request: NextRequest) {
  const topic = request.nextUrl.searchParams.get('topic')
  const destination = topic ? legacyInfoTopics[topic] : undefined

  if (!destination) {
    return NextResponse.next()
  }

  const redirectUrl = request.nextUrl.clone()
  redirectUrl.pathname = destination
  redirectUrl.search = ''

  return NextResponse.redirect(redirectUrl, 301)
}

export const config = {
  matcher: '/info',
}
