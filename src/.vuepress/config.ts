import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineUserConfig({
  plugins: [
    //   autoCatalogPlugin({
    //     //插件选项
    //     // level:2,
    //     // index:true,
    //     // exclude:["/encrypt.md/"]
    //   }),
    docsearchPlugin({
      appId:"553361",
      apiKey:"",
      indexName:"",
    }),
  ],
  base: "/",
  head: [
    [
      //  一言API
      "script",
      {
        type: "text/javascript",
        charset: "UTF-8",
        src: "https://v1.hitokoto.cn/?encode=js&select=%23hitokoto",
      }
    ],
    [
      //  不蒜子
      "script",
      {
        type: "text/javascript",
        charset: "UTF-8",
        src: "https://busuanzi.icodeq.com/busuanzi.pure.mini.js",
      }
    ]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "安安稳稳",
      // description: "A docs demo for vuepress-theme-hope",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "文档演示",
    //   description: "vuepress-theme-hope 的文档演示",
    // },
  },
  theme,
  // 解析 h4 标头
  markdown: {
    headers: {
      level:[2,3,4,5,6]
    }
  },

  // Enable it with pwa
  // shouldPrefetch: false,
});
