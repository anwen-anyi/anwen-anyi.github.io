import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      icon: "fa-solid fa-scroll",
      text: "AList的玩法以及问题",
      prefix: "index/",
      // link: "index/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "其他",
      icon: "fa-solid fa-solar-system",
      prefix: "other/",
      // like: "other/"
      collapsible: true,
      children: "structure",
    },
  ],
});
