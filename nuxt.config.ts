// nuxt.config.ts

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'My Stylish Website',
      meta: [
        // LINE https://placehold.jp/20d523/ffffff/150x150.png?text=LINE
        { name: 'description', content: 'A stylish website built with Nuxt' },
        { name: 'keywords', content: 'Nuxt, Vue, website, stylish, modern' },
        { name: 'author', content: 'Your Name' },
        { name: 'theme-color', content: '#ff5a5f' },
        { property: 'og:title', content: 'My Stylish Website' },
        {
          property: 'og:description',
          content: 'A stylish website built with Nuxt'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://yourwebsite.com' },
        {
          property: 'og:image',
          content:
            'https://images.pexels.com/photos/2891250/pexels-photo-2891250.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
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
