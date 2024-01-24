import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "guide",
    "perfect",
    "introduction/",
    "basic/",
  ],
  "/basic/": "structure",
  "/introduction/": 'structure',
});
