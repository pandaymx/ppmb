import { defineUserConfig } from "vuepress";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,
  plugins: [
    shikiPlugin({
      // 你的选项
      theme: "one-dark-pro",
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
