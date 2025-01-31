import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
// import { enNavbar, zhNavbar } from "./navbar/index.js";
import { zhNavbar } from "./navbar/index.js";
// import { enSidebar, zhSidebar } from "./sidebar/index.js";
import { zhSidebar } from "./sidebar/index.js";


export default hopeTheme({
  // 爬虫xml
  hostname: "https://anwen-anyi/anwen-anyi.github.io",
  author: {
    name: "安稳",
    url: "/",
  },
  logo: "/home.png",
  repo: "anwen-anyi/anwen-anyi.github.io",
  docsDir: "/src",

  locales: {
    "/": {
      navbar: zhNavbar,   // navbar
      sidebar: zhSidebar, // sidebar
      // footer: "默认页脚",
      footer: '<p id="hitokoto">  <a href="#" id="hitokoto_text">"人生最大的遗憾,就是在最无能为力的时候遇到一个想要保护一生的人."</a> </p> <p>本页面<span id="busuanzi_page_pv"></span>次,本站<span id="busuanzi_site_pv"></span>次,总访客<span id="busuanzi_site_uv"></span>人</p>',
      displayFooter: true,
      metaLocales: {
        editLink: "在 GitHub 上编辑此页", // page meta
      },

    },
  },

  // 密码
  encrypt: {
    config: {
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  markdown: {
    math: {
      type: "katex",   //启动支持KaTeX语法
    },
    highlighter: {
      type: "shiki", // 启用 shiki 代码高亮
      langs: ["ts", "text", 'json', 'vue', 'md', 'bash', 'php', 'diff', 'dockerfile', 'bat', 'powershell', 'sh', 'shell', 'yml', 'yaml'],
      notationDiff: true,   //是否启用差异标记
      notationFocus: true,  //是否启用聚焦标记
      notationWordHighlight: true,  //是否启用词高亮标记
      notationErrorLevel: true,      //是否启用错误级别标记
      collapsedLines: true,         //代码折叠
    },
    tabs: true,         // 否启用选项卡
    codeTabs: true,     // 代码块分组
    hint: true,         // 启用提示
    imgLazyload: true,  // 启用图片懒加载
    imgSize: true,      // 启用图片大小
    figure: true,       // 启用 figure
    component: true,    // 启用组件支持
    attrs: true,        //  启用自定义属性
    chartjs: true,      // 启用 chartjs 图表支持
    demo: true,         // 启用示例代码支持
    echarts: true,      // 启用 ECharts 图表支持
    include: true,      // 启用 include 语法
    tasklist: true,     //启用任务列表格式支持
    gfm: true,          //支持完整的 GFM 语法
    flowchart: true,    //启用流程图支持
    mark: true,         //启用标记格式支持
    mermaid: true,      //启用 Mermaid 流程图支持
    sub: true,          //上标
    sup: true,          //下标
    align: true,        //自定义对齐格式支持
    // presentation: true, //开启幻灯片
    spoiler: true,
    playground: {
      presets: ["ts", "vue"],
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
  },
  plugins: {
    icon: {
      // icon图标
      assets: [
        // "iconfont", //icon: iconfont icon-图标名称
        "//at.alicdn.com/t/c/font_2407338_9gwb60oe2m9.css",
        "https://npm.onmicrosoft.cn/font6pro@6.5.1/css/fontawesome.min.css",
        "https://npm.onmicrosoft.cn/font6pro@6.5.1/css/all.min.css",
        "https://npm.elemecdn.com/font6pro@6.4.0/css/all.min.css",
        "https://npm.elemecdn.com/font6pro@6.4.0/css/fontawesome.min.css",

      ],
      // iconAssets: "iconfont",
    },
    // slimsearch: true, // 搜索    

    // PWA
    pwa: {
      favicon: "/favicon.ico",
      // cacheHTML: true,
      // cachePic: true,
      appendBase: true,
      apple: {
        icon: "/home.png",
        statusBarColor: "black",
        maskIcon: "/home.png",
      }
    },
    // 评论
    comment: {
      provider: "Giscus",
      repo: "anwen-anyi/anwen-anyi.github.io",
      repoId: "R_kgDOJS60kw",
      category: "Announcements",
      categoryId: "DIC_kwDOJS60k84CVi7q",
    },
    copyCode: {},
    notice: [
      {
        path: "/",
        title: '温馨提示',
        content: '<span id="tips2">请仔细查看弹窗提示内容</span></br></br>如是查看美化教程,建议用两个窗口</br>分别是自定义<span id="tips3">"内容和头部"</span>两个窗口</br>因为内容在不同位置,需要同步使用</br></br><span id="tips2">随意点击任意可关闭弹窗不再显示</span>',
        actions: [
          {
            text: "查看内容",
            link: "#",
            type: "primary",
          },
          // { text: "Default Action" },
        ],
        fullscreen: true,
        confirm: true,
        // key: "#",
      },
    ],
    // 插件选项
    components: {
      components: [
        "ArtPlayer",
        "Badge",
        "BiliBili",
        "CodePen",
        "PDF",
        "Share",
        "SiteInfo",
        "StackBlitz",
        "XiGua",
        "VPCard",
        "VPBanner",
      ],
    },
  },
});
