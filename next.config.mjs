import nextra from 'nextra'
 
const withNextra = nextra({ 
 	search: false 
 })
 
// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  // ... Other Next.js config options
   images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "9090",
        pathname: "/**",
      },
      // Cinema8 assets
      {
        protocol: "https",
        hostname: "cinema8.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.cinema8.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/portal/:slug*",
        destination: "/",
        permanent: true
      },
      {
        source: "/is-cinema8-compatible-with-embedly-api",
        destination: "/",
        permanent: true
      },
      {
        source: "/conditional-action-element",
        destination: "/",
        permanent: true
      },
      {
        source: "/use-cinema8-to-grow-your-videos",
        destination: "/",
        permanent: true
      },
      {
        source: "/authentication-sso",
        destination: "/",
        permanent: true
      },
      {
        source: "/element-properties-common-features",
        destination: "/",
        permanent: true
      }      
    ]
    
  },
})