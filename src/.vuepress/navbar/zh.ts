import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "guide",
  "perfect",
  "introduction/",
  {
    text: "计算机基础",
    icon: 'ppmb  icon-circle-info',
    prefix: '/basic/',
    children:[
        "datastr"
    ]
  }
]);
