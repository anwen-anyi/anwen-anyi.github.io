import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      icon: "discover",
      text: "主要内容",
      prefix: "index/",
      link: "index/",
      children: "structure",
    },
    // {
    //   text: "Docs",
    //   icon: "note",
    //   prefix: "guide/",
    //   children: "structure",
    // },
  ],
});
