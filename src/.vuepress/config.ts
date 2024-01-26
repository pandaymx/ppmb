import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";
export default defineUserConfig({
  base: "/ppmb/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
    },
    "/en/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
  },
  bundler: viteBundler({}),
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
