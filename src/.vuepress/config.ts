import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";
export default defineUserConfig({
  base: "/ppmb/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "皮皮萌宝",
      description: "皮皮萌宝的博客",
    },
    "/en/": {
      lang: "en-US",
      title: "PPMB",
      description: "PiPi MengBao's blog",
    },
  },
  bundler: viteBundler({}),
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
