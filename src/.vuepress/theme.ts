import { hopeTheme, getComponentsPlugin } from "vuepress-theme-hope";
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

  repo: "anwen-anyi/anwen-anyi.github.io",

  docsDir: "/src",

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
    copyCode: {},

    // {rootComponents: { backToTop: true }},

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
    components: {
      components: [
        "ArtPlayer",
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Replit",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "VideoPlayer",
        "XiGua",
        "YouTube",
      ],
      rootComponents: {
        notice: [
          {
            path: "/",
            title: "温馨提示",
            content: "<span>1.因API更改内容会有视频自动播放</br>2.建议提前将此标签设置为静音 </br>3.方法右键此浏览器标签</br>4.选择将这个网站静音</span>",
            actions: [
              {
                text: "进入首页",
                link: "/",
                type: "primary",
              },
              // { text: "Default Action" },
            ],
            fullscreen: true,
            showOnce: true,
            key: "/",
          },
        ],
      },
    },
  },
});
