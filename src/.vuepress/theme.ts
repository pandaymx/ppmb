import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://pandaymx.github.io",

  author: {
    name: "皮皮萌宝",
    url: "https://pandaymx.github.io",
    email: 'pandaymx1943575780@outlook.com'
  },

  iconAssets: ["fontawesome-with-brands","//at.alicdn.com/t/c/font_4282820_nt35g68oxoo.css"],

  logo: "/logo.jpg",
  favicon: "/logo.jpg",
  repo: "pandaymx/ppmb",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "皮皮萌宝李时珍的皮",

  displayFooter: true,
  blog: {
    description: "一个很皮的人",
    intro: "/intro.html",
    medias: {
      BiliBili: "https://example.com",
      Dingding: "https://example.com",
      Email: "mailto:panda1943575780@outlook.com",
      GitHub: "https://github.com/pandaymx",
      Gmail: "mailto:panda1943575780@gmail.com",
      Instagram: "https://example.com",
      Lark: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Steam: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
    },
  },
  pageInfo: ["Original","Author","Date","Category","Tag","ReadingTime","Word","PageView",],
  fullscreen: true,
  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    blog: true,
    prismjs: false,
    comment: {
      provider: "Waline",
      serverURL: "https://comment.ppmb.xyz",
    },
    components:{
      components:[
        "XiGua"
      ]
    },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      tasklist: true,
      // install chart.js before enabling it
      // chart: true,
      mermaid: true,
      codetabs: true,

      // insert component easily
      // component: true,

      demo: true,
      echarts: true,

      figure: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      imgLazyload: true,
      imgSize: true,
      include: true,

      // install katex before enabling it
      katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      mark: true,

      // install mermaid before enabling it
      // mermaid: true,

      playground: {
        presets: ["ts", "vue"],
      },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      // install @vue/repl before enabling it
      // vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
},{custom: true});
