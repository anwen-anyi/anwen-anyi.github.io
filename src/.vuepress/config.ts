import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// import { docsearchPlugin } from "@vuepress/plugin-docsearch";
// import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  bundler: viteBundler(),
  theme,
  plugins: [
    //   autoCatalogPlugin({
    //     //插件选项
    //     // level:2,
    //     // index:true,
    //     // exclude:["/encrypt.md/"]
    //   }),

    // Algolia DocSearch Algolia搜索插件
    // docsearchPlugin({
    // appId: "G9WNTTQL4R",
    // apiKey: "b4c123a561b0166b7015df8147771950",
    // indexName: "anwen-anyiio",
    // }),
  ],
  shouldPrefetch: false,
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
        src: "https://busuanzi.9420.ltd/js",
      }
    ],
    [
      // 站点
      "script",
      {
        defer: true,
        "data-domain": "anwen-anyi.github.io",
        src: "https://site.izyt.cc/js/script.js"
      }
    ],
    [
      // site
      "script",
      {
        async: true,
        src: "https://site.izyt.cc/js/embed.host.js"
      }
    ]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "安安稳稳",
      // description: "A docs demo for vuepress-theme-hope",
    },
  },
  // 解析 h4 标头
  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6]
    }
  },

  // Enable it with pwa
  // shouldPrefetch: false,

});
