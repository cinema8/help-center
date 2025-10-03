// app/[[...mdxPath]]/page.jsx
import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '../../../mdx-components'
import { notFound } from 'next/navigation'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

const OG = 'https://static-01.cinema8.com/gallery/19500/8cbb3795-ba34-4971-a86d-fe6f72bd4856/logo.webp'
const OG_ALT = 'Cinema8 Logo'
const RESERVED = ['.well-known', 'api', '_next']

export async function generateMetadata(props) {
  const params = await props.params
  const slug = Array.isArray(params.mdxPath) ? params.mdxPath : []

  // Rezerv yolları dışla
  if (slug[0] && (RESERVED.includes(slug[0]) || slug[0].endsWith('.json'))) {
    // Meta üretme, indexlenmesin
    return { robots: { index: false, follow: false } }
  }

  try {
    const { metadata } = await importPage(slug)

    const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://help.cinema8.com'
    const isIndex = slug.length === 0 || (slug.length === 1 && (slug[0] === '' || slug[0] === 'index'))
    const pathname = isIndex ? '/' : `/${slug.join('/')}`
    const url = new URL(pathname, base).toString()

    return {
      ...metadata,
      alternates: { ...(metadata?.alternates || {}), canonical: url },
      openGraph: {
        ...(metadata?.openGraph ?? {}),
        url,
        images: [{ url: OG, width: 1200, height: 630, alt: OG_ALT, type: 'image/webp' }],
      },
      twitter: {
        card: 'summary_large_image',
        images: [{ url: OG, alt: OG_ALT }],
        ...(metadata?.twitter ?? {}),
      },
    }
  } catch {
    // İçerik bulunamadıysa meta üretme
    return { robots: { index: false, follow: false } }
  }
}

const Wrapper = getMDXComponents().wrapper

export default async function Page(props) {
  const params = await props.params
  const slug = Array.isArray(params.mdxPath) ? params.mdxPath : []

  // Rezerv yolları dışla
  if (slug[0] && (RESERVED.includes(slug[0]) || slug[0].endsWith('.json'))) {
    notFound()
  }

  try {
    const result = await importPage(slug)
    const { default: MDXContent, toc, metadata } = result
    return (
      <Wrapper toc={toc} metadata={metadata}>
        <MDXContent {...props} params={params} />
      </Wrapper>
    )
  } catch {
    notFound()
  }
}
