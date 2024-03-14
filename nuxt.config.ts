// nuxt.config.ts
function detectInAppBrowser(ua: string): string | null {
  ua = ua.toLowerCase().trim()
  const isIOS =
    ua.includes('iphone') || ua.includes('ipod') || ua.includes('ipad')
  const isAndroid = ua.includes('android')

  // LINE
  if (ua.includes(' line/')) {
    return isIOS
      ? 'is_line_ios'
      : isAndroid
      ? 'is_line_android'
      : 'is_line_unknown'
  }

  return null
}

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: http://ogp.me/ns#'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'My Stylish Website',
      meta: [
        { name: 'description', content: 'A stylish website built with Nuxt' },
        { name: 'keywords', content: 'Nuxt, Vue, website, stylish, modern' },
        { name: 'author', content: 'Your Name' },
        { name: 'theme-color', content: '#ff5a5f' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://yourwebsite.com' },
        {
          property: 'og:title',
          //@ts-ignore
          content: () => {
            if (process.server) {
              const userAgent = useRequestHeaders()['user-agent']
              const inAppBrowser = detectInAppBrowser(userAgent || '')
              return inAppBrowser?.includes('line')
                ? 'LINE用のタイトル'
                : 'My Stylish Website'
            }
            return 'My Stylish Website'
          }
        },
        {
          property: 'og:description',
          //@ts-ignore
          content: () => {
            if (process.server) {
              const userAgent = useRequestHeaders()['user-agent']
              const inAppBrowser = detectInAppBrowser(userAgent || '')
              return inAppBrowser?.includes('line')
                ? 'LINE用の説明文'
                : 'A stylish website built with Nuxt'
            }
            return 'A stylish website built with Nuxt'
          }
        },
        {
          property: 'og:image',
          //@ts-ignore
          content: () => {
            if (process.server) {
              const userAgent = useRequestHeaders()['user-agent']
              const inAppBrowser = detectInAppBrowser(userAgent || '')
              return inAppBrowser?.includes('line')
                ? 'https://placehold.jp/20d523/ffffff/150x150.png?text=LINE'
                : 'https://placehold.jp/ff5a5f/ffffff/150x150.png?text=OGP'
            }
            return 'https://placehold.jp/ff5a5f/ffffff/150x150.png?text=OGP'
          }
        },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'My Stylish Website' },
        {
          name: 'twitter:description',
          content: 'A stylish website built with Nuxt'
        },
        {
          name: 'twitter:image',
          content: 'https://placehold.jp/3d97eb/ffffff/150x150.png?text=Twi'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto'
        }
      ]
    }
  },
  nitro: {
    preset: 'node',
    output: {
      dir: '.output',
      publicDir: '.output/public'
    }
  },
  devServer: {
    host: 'localhost'
  },
  srcDir: 'src',
  typescript: {
    tsConfig: {
      extends: '@tsconfig/strictest/tsconfig.json',
      compilerOptions: {
        noImplicitReturns: false // For middleware
      }
    }
  },
  vite: {
    server: {
      hmr: {
        clientPort: 24678 // HMRクライアントポートを指定（デフォルトは24678）
      }
    }
  },
  hooks: {
    listen: (server, { host, port }) => {
      const address = `http://${host}:${port}`
      console.log(`Nuxt.js application is running at ${address}`)
    }
  }
})
