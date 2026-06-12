import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl()

  return {
    rules: {
      allow: '/',
      disallow: ['/account', '/admin', '/api', '/checkout', '/login', '/register'],
      userAgent: '*',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}

function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    'http://localhost:3000'
  const url = configuredUrl.startsWith('http') ? configuredUrl : `https://${configuredUrl}`

  return url.replace(/\/+$/, '')
}
