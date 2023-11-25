import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/guide",
  "/introduction/",
  {
    text: '基础',
    icon: "ppmb icon-circle-info",
    prefix: '/basic/',
    children: [
      'datastr/'
    ]
  }
]);
