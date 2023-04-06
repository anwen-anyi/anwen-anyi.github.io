import { hopeTheme } from "vuepress-theme-hope";
// import { enNavbar, zhNavbar } from "./navbar/index.js";
import { zhNavbar } from "./navbar/index.js";
// import { enSidebar, zhSidebar } from "./sidebar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "安稳",
    url: "/",
  },

  iconAssets: [
    "iconfont",
    "https://npm.elemecdn.com/font6pro@6.2.0/css/all.min.css",
    "https://npm.elemecdn.com/font6pro@6.2.0/css/fontawesome.min.css",
  ],
  // iconAssets: "iconfont",

  logo: "/home.png",

  repo: "anwen-anyi/doc",
  

  docsDir: "demo/theme-docs/src",

  locales: {
    // "/": {
    //   // navbar
    //   // navbar: enNavbar,

    //   // sidebar
    //   // sidebar: enSidebar,

    //   footer: "Default footer",

    //   displayFooter: true,

    //   metaLocales: {
    //     editLink: "Edit this page on GitHub",
    //   },
    // },

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "默认页脚",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
      
    },
  },
// 密码
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },
  plugins: {
    comment: {
      provider: "Giscus",
      repo: "anwen-anyi/doc",
      repoId: "R_kgDOJS60kw",
      category: "Announcements",
      categoryId: "DIC_kwDOJS60k84CVi7q",
        // 播放器      
    },
    components: {
      components: ["ArtPlayer","BiliBili","Badge"],
    },
    copyCode: {},
    
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      container: true,  //启用自定义容器支持,提示 警告那些
      linkCheck: "dev", //是否启用链接检查
      tabs: true,       //否启用选项卡
      tasklist: true,   //启用任务列表格式支持
      gfm: true,        //支持完整的 GFM 语法
      flowchart: true,  //启用流程图支持
      mark: true,       //启用标记格式支持
      mermaid: true,    //启用 Mermaid 流程图支持
      sub: true,        //上标
      sup: true,        //下标
      align: true,      //自定义对齐格式支持
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      vPre: true,
      vuePlayground: true,
      
    },
    

    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
