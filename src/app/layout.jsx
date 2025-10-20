// 🌐 Cinema8 Nextra Root Layout
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'

import Image from 'next/image'
import Link from 'next/link'

//import InjectA11yWidget from '@components/integration/InjectA11yWidget'
import InjectSearchWidget from '@components/integration/InjectSearchWidget'
import InjectChatbotWidget from '@components/integration/InjectChatbotWidget'
import PopupModalTrigger from '@components/popup/PopupModalTrigger'
import MobileSearchTriggerButton from '@components/search/MobileSearchTriggerButton'
import CustomFooter  from '@components/layout/CustomFooter'


import 'nextra-theme-docs/style.css'
import './globals.css'
const OG = 'https://static-01.cinema8.com/gallery/19500/8cbb3795-ba34-4971-a86d-fe6f72bd4856/logo.webp';

export const metadata = {
	title: 'Cinema8 Help Center',
	description: 'Help and documentation for Cinema8 interactive video platform.',
	keywords: ['Cinema8', 'Docs', 'Interactive Video', 'Help Center', 'Support'],
	openGraph: {
		title: 'Cinema8 Help Center',
		description: 'Learn how to use Cinema8 to create, publish, and analyze interactive videos.',
		url: 'https://help.cinema8.com',
		siteName: 'Cinema8 Help Center',
		locale: 'en_US',
		type: 'website',
		images: [{ url: OG, width: 1200, height: 630, alt: 'Cinema8 Logo', type: 'image/webp' }],
  },
  twitter: { card: 'summary_large_image',
			 title: 'Cinema8 Help Center',
		     description: 'Get support and explore features of the Cinema8 video platform.',
		     creator: '@cinema8com', images: [OG] },
}

// 🎉 Optional banner
const banner = (
  <Banner storageKey="cinema8-docs-banner">
    🎉 New! Explore advanced interactivity with Cinema8’s branching editor.{' '}
    <a href="/design-advanced-interactivity" style={{ textDecoration: 'underline' }}>
      Learn more →
    </a>
  </Banner>
)

const navbar = (
	<Navbar
	  align="left"
	  logo={
		<div className="flex items-center shrink-0 min-w-[260px] sm:min-w-[280px]">
 		        {/* Logo Image */}
		        <div className="relative w-36 h-8">
		          <Image
		            src="/logo.webp"
		            alt="Cinema8"
		            fill
		            className="object-contain dark:invert"
		          />
		        </div>

		        {/* Badge */}
		        <span className="px-2 py-1 text-sm font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md whitespace-nowrap leading-none">
		          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
		            HELP CENTER
		          </span>
		        </span>
 		    </div>
	  }
	>
	  {/* Navbar Content */}
	  <div className="flex items-center justify-between w-full flex-wrap gap-4">
	    
	    {/* Right section: links + search */}
	    <div className="flex items-center justify-end flex-grow gap-4 min-w-0">
	      
	      {/* Submit Ticket */}
		  <PopupModalTrigger 
		    portalId="145119654" 
		    formId="77647adc-0b19-45bd-8b89-be131595eace" 
		    region="eu1" 
		  />

	      {/* cinema8.com link */}
	      <Link
	        href="https://cinema8.com"
	        target="_blank"
	        rel="noopener noreferrer"
	        className="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300 relative group cursor-pointer"
	      >
	        Cinema8.com
	      </Link>

	      {/* Mobile search icon (visible below sm) */}
		  <MobileSearchTriggerButton />


	      {/* Full search bar for desktop */}
	      <div className="flex-shrink max-w-xs w-full hidden sm:block">
	        <div
	          id="sparc-search-container"
	          data-mode="popup"
	          className="w-full"
	        />
	      </div>
	    </div>
	  </div>
	</Navbar>



);


// 📎 Footer
const footer = (
  <CustomFooter></CustomFooter>
)

// 🌍 Root Layout
export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        
		{/*<InjectA11yWidget /> */}
        <InjectSearchWidget />
		<InjectChatbotWidget />
        <Layout
          banner={null}
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          search={null}
          docsRepositoryBase="https://github.com/cinema8/help-center/blob/main"
					editLink={null}
					feedback={{content: null}}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
