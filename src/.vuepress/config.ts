import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "皮皮萌宝的博客",
      description: "皮皮萌宝的博客",
    },
    "/en/": {
      lang: "en-US",
      title: "ppmb's blog",
      description: "ppmb's blog",
    },
  },

  theme,
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },
  // Enable it with pwa
  // shouldPrefetch: false,
});
