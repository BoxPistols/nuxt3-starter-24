/** @format */

// nuxt.config.ts

function detectInAppBrowser(ua: string): string | null {
  ua = ua.toLowerCase().trim();
  const isIOS =
    ua.includes("iphone") || ua.includes("ipod") || ua.includes("ipad");
  const isAndroid = ua.includes("android");

  // LINE
  if (ua.includes("line")) {
    return isIOS
      ? "is_line_ios"
      : isAndroid
      ? "is_line_android"
      : "is_line_unknown";
  }

  return null;
}

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
        prefix: "og: http://ogp.me/ns#",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "My Stylish Website",
      meta: [
        {
          name: "description",
          // @ts-ignore
          content: () =>
            process.server
              ? useRequestHeaders()["user-agent"]?.includes("line")
                ? "LINE用の説明文"
                : "A stylish website built with Nuxt"
              : "A stylish website built with Nuxt",
        },
        {name: "keywords", content: "Nuxt, Vue, website, stylish, modern"},
        {name: "author", content: "Your Name"},
        {name: "theme-color", content: "#ff5a5f"},
        {property: "og:type", content: "website"},
        {property: "og:url", content: "https://yourwebsite.com"},
        {
          property: "og:title",
          // @ts-ignore
          content: () =>
            process.server
              ? useRequestHeaders()["user-agent"]?.includes("line")
                ? "LINE用のタイトル"
                : "My Stylish Website"
              : "My Stylish Website",
        },
        {
          property: "og:description",
          // @ts-ignore
          content: () =>
            process.server
              ? useRequestHeaders()["user-agent"]?.includes("line")
                ? "LINE用の説明文"
                : "A stylish website built with Nuxt"
              : "A stylish website built with Nuxt",
        },
        {
          property: "og:image",
          // @ts-ignore
          content: () =>
            process.server
              ? useRequestHeaders()["user-agent"]?.includes("line")
                ? "https://placehold.jp/20d523/ffffff/1200x630.png?text=LINE"
                : "https://placehold.jp/ff5a5f/ffffff/1200x630.png?text=OGP"
              : "https://placehold.jp/ff5a5f/ffffff/1200x630.png?text=OGP",
        },
        // Twitter Card
        {name: "twitter:card", content: "summary_large_image"},
        {name: "twitter:title", content: "My Stylish Website"},
        {
          name: "twitter:description",
          content: "A stylish website built with Nuxt",
        },
        {
          name: "twitter:image",
          content: "https://placehold.jp/3d97eb/ffffff/1200x630.png?text=Twi",
        },
      ],
    },
  },
  nitro: {
    preset: "node",
    output: {
      dir: ".output",
      publicDir: ".output/public",
    },
  },
  devServer: {
    host: "localhost",
  },
  srcDir: "src",
  typescript: {
    tsConfig: {
      extends: "@tsconfig/strictest/tsconfig.json",
      compilerOptions: {
        noImplicitReturns: false, // For middleware
      },
    },
  },
  vite: {
    server: {
      hmr: {
        clientPort: 24678, // HMRクライアントポートを指定（デフォルトは24678）
      },
    },
  },
  hooks: {
    listen: (server, {host, port}) => {
      const address = `http://${host}:${port}`;
      console.log(`Nuxt.js application is running at ${address}`);
    },
  },
});
