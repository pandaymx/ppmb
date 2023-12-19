import { defineUserConfig } from "vuepress";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { getDirname, path } from "@vuepress/utils";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "皮皮萌宝的博客",
  description: "皮皮萌宝的博客",
  head: [
    [
      "script",
      {
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6269542893674001"
      }
    ],
  ],
  theme,
  plugins: [
    shikiPlugin({
      // 你的选项
      theme: "one-dark-pro",
    }),
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },
  // Enable it with pwa
  // shouldPrefetch: false,
});
