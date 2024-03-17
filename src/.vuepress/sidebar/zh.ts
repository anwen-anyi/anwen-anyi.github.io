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
    // {
    //   icon: "fa-solid fa-scroll",
    //   text: "编译教程",
    //   prefix: "index/build",
    //   // link: "index/",
    //   collapsible: false,
    //   children: "structure",
    // },
    {
      icon: "fa-solid fa-solar-system",
      text: "服务状态监控",
      prefix: "other/",
      // like: "other/"
      collapsible: true,
      children: "structure",
    },
    // {
    //   icon: "fa-solid fa-stars",
    //   text: "软件收藏",
    //   prefix: "collect/",
    //   // like: "other/"
    //   collapsible: true,
    //   children: "structure",
    // },
  ],
});
