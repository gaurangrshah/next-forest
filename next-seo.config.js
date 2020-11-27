const BASE_URL = 'https://next-forest.vercel.app/'

const title = 'gs-start'
const description = 'Next.js with Chakra UI and Forestry CMS'

const SEO = {
  title,
  description,
  canonical: `${BASE_URL}`,
  twitter: {
    handle: '@gsdev',
    site: '@gsdev',
    cardType: 'summary_large_image',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: `${BASE_URL}`,
    title,
    description,
    images: [
      {
        url: `${BASE_URL}/static/images/og.png`,
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
}

export default SEO

/**
 * * This file is a configuration file for the 'next-seo' plugin
 * README: https://tinyurl.com/y55lbgdh
 *
 */
