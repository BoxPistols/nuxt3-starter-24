// nuxt.config.ts
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
          content: () =>
            process.server
              ? useRequestHeaders()['user-agent']?.includes('Line')
                ? 'LINE用のタイトル'
                : 'My Stylish Website'
              : 'My Stylish Website'
        },
        {
          property: 'og:description',
          //@ts-ignore
          content: () =>
            process.server
              ? useRequestHeaders()['user-agent']?.includes('Line')
                ? 'LINE用の説明文'
                : 'A stylish website built with Nuxt'
              : 'A stylish website built with Nuxt'
        },
        {
          property: 'og:image',
          //@ts-ignore
          content: () =>
            process.server
              ? useRequestHeaders()['user-agent']?.includes('Line')
                ? 'https://placehold.jp/20d523/ffffff/150x150.png?text=LINE'
                : 'https://placehold.jp/ff5a5f/ffffff/150x150.png?text=OGP'
              : 'https://placehold.jp/ff5a5f/ffffff/150x150.png?text=OGP'
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
    preset: 'node'
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
  }
})
