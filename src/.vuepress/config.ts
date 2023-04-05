import { defineUserConfig } from "vuepress";
import { autoCatalogPlugin } from "vuepress-plugin-auto-catalog";
import theme from "./theme.js";


export default defineUserConfig({
  // plugins: [
  //   autoCatalogPlugin({
  //     //插件选项
  //     // level:2,
  //     // index:true,
  //     // exclude:["/encrypt.md/"]
  //   }),
  // ],
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "安稳教程自留地",
      description: "A docs demo for vuepress-theme-hope",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "文档演示",
    //   description: "vuepress-theme-hope 的文档演示",
    // },
  },
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
