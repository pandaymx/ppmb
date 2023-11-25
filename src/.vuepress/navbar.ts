import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/guide",
  "/intro/",
  {
    text: '基础',
    icon: "ppmb icon-circle-info",
    prefix: '/basic/',
    children: [
      'datastr/'
    ]
  }
]);
