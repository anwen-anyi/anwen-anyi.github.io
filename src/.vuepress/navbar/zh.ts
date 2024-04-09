import { DarkmodeOptions } from "vuepress-theme-hope";
import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "监控",
    link: "/other/",
    icon: "fa-solid fa-solar-system",
  },
  {
    text: "收藏",
    link: "/collect/",
    icon: "fa-solid fa-stars",
  },
  {
    text: "视频",
    icon: "fa-solid fa-circle-video",
    children: [
      {
        text: "哔哩哔哩",
        icon: "fa-brands fa-bilibili",
        link: "https://space.bilibili.com/36411485",
      },
      { 
        text: "YouTube", 
        icon:"fa-brands fa-youtube",
        link: "https://www.youtube.com/@anwenya/videos" 
      },
    ],
  },
]);

