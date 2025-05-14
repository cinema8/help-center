import Image from 'next/image'
import Link from 'next/link'

export default function KBCard({ title, href, icon, desc }) {
  return (
    <Link
      href={href}
      className="group relative block h-full p-6 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-transparent hover:bg-gradient-to-br hover:from-white hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-700/50"
      aria-labelledby={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-400/20"></div>
      
      <div className="relative flex flex-col items-center text-center space-y-4 sm:space-y-6 z-10">
        {/* Icon Container */}
        <div 
          className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl group-hover:from-purple-200 group-hover:to-pink-200 dark:group-hover:from-purple-800/40 dark:group-hover:to-pink-800/40 transition-colors duration-300 shadow-inner"
          aria-hidden="true"
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <Image
              src={icon}
              alt=""
              width={32}
              height={32}
              className="transition-all duration-300 dark:invert"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="space-y-2 sm:space-y-3">
          <h3 
            id={`card-title-${title.replace(/\s+/g, '-').toLowerCase()}`}
            className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200"
          >
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            {desc}
          </p>
        </div>
        
        {/* CTA */}
        <div 
          className="mt-2 text-purple-600 dark:text-purple-400 font-medium flex items-center justify-center group-hover:underline underline-offset-4 decoration-2"
          aria-hidden="true"
        >
          Learn more
          <svg
            className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </Link>
  )
}