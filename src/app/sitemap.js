import { generateStaticParamsFor } from 'nextra/pages'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://help.cinema8.com'
const RESERVED = ['.well-known', 'api', '_next']
const getStaticParams = generateStaticParamsFor('mdxPath')

function toUrl(slug) {
  const isIndex = slug.length === 0 || (slug.length === 1 && (slug[0] === '' || slug[0] === 'index'))
  const pathname = isIndex ? '/' : `/${slug.join('/')}`
  return new URL(pathname, SITE_URL).toString()
}

export default async function sitemap() {
  const params = await getStaticParams()
  const now = new Date()
  const urls = new Set([new URL('/', SITE_URL).toString()])

  for (const entry of params) {
    const slug = Array.isArray(entry?.mdxPath) ? entry.mdxPath : []
    if (slug[0] && (RESERVED.includes(slug[0]) || slug[0].endsWith('.json'))) continue
    urls.add(toUrl(slug))
  }

  return Array.from(urls).map((url) => ({
    url,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: url === new URL('/', SITE_URL).toString() ? 1 : 0.8,
  }))
}
