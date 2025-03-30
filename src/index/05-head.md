---
# 这是文章的标题
title: 美化自定义头部
# 这是页面的图标
icon: fa-solid fa-rocket-launch
# 这是侧边栏的顺序
order: 35
# 设置作者
author: 安稳
# 设置写作时间
date: 2023-01-01
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - AList美化教程
  - 自定义头部
  - Head
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
# footer: true

# 你可以自定义版权信息
# copyright: 无版权
headerDepth: 6
---

<!-- 你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。 -->

<!-- more -->

:::: center
==**代码中每一行的代码都有注释说明，请仔细查看并使用**==
::: details  <i class="fa-solid fa-circle-video" style="color: #409EFF;"></i> 视频教程

<BiliBili bvid="BV1Wg41187Bf" />

<BiliBili bvid="BV1HG4y1h7Gz" />

<BiliBili bvid="BV1FP411P7d3" />

<BiliBili bvid="BV1me411A7Ha" />

:::
::::

## **自定义头部代码**

::: tip

V3.31.0 优化了部分功能，导致个别位置CSS未修改看起冲突一样，新增功能部分CSS代码已经更新，不同版本可以参考以下两个不同选项框內的代码

- v3.31.0 新增代码已高亮显示，具体颜色数值可以自行打磨

:::

::: tabs#css

@tab 大于等于v3.31.0版本

```html{34-46,139-157}
<!--Alist V3建议添加的，已经默认添加了，如果你的没有建议加上-->
<script src="https://polyfill.alicdn.com/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>

<!--引入字体，全局字体使用-->
<link rel="stylesheet" href="https://npm.elemecdn.com/lxgw-wenkai-webfont@1.1.0/lxgwwenkai-regular.css" />

<!--评论系统使用的js-->
<script src="https://unpkg.com/valine/dist/Valine.min.js"></script>

<!--不蒜子计数器-->
<script async src="https://busuanzi.9420.ltd/js"></script>

<!-- Font6，自定义底部使用和看板娘使用的图标和字体文件-->
<link type="text/css" rel="stylesheet" href="https://npm.elemecdn.com/font6pro@6.3.0/css/fontawesome.min.css" media="all" />
<link href="https://npm.elemecdn.com/font6pro@6.3.0/css/all.min.css" rel="stylesheet" />

<!--音乐播放器所用的文件-->
<!-- require APlayer -->
<link rel="stylesheet" href="https://npm.elemecdn.com/aplayer@1.10.1/dist/APlayer.min.css" />
<script src="https://npm.elemecdn.com/aplayer@1.10.1/dist/APlayer.min.js"></script>
<!-- require MetingJS -->
<script src="https://npm.elemecdn.com/meting2@0.0.1/js/Meting.min.js"></script>

<style>
  /* 去除通知栏 右上角 X */
  .notify-render .hope-close-button {
    display: none;
  }
  /*去掉底部*/
  .footer {
    display: none !important;
  }

  /* 此选项两处CSS 在v3.31.0中已优化 滚动显示 和 右下角设置网格模式尺寸大小 */
  /* 文字超长自动换行 */
  /*.name-box .name {
    white-space: unset !important;
    overflow: unset !important;
    }*/
  /* 缩略图图片变大 代码中的160px 自己改 现在是注释状态若需要自行解除注释 */
  /*.obj-box > div {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr))
    }
    .obj-box > div .item-thumbnail{
    height: 100px;
    }*/

  /*
    图片API用法点进去都会有食用说明的,API来自网络不保证实效性稳定性自己测试
    樱花：https://www.dmoe.cc
    夏沫：https://cdn.seovx.com
    搏天：https://api.btstu.cn/doc/sjbz.php
    姬长信：https://github.com/insoxin/API
    小歪：https://api.ixiaowai.cn/
    保罗：https://api.paugram.com
    墨天逸：https://api.mtyqx.cn
    岁月小筑：https://img.xjh.me
    东方Project：https://img.paulzzh.com
    */
  /*白天背景图*/
  .hope-ui-light {
    background-image: url("https://pic.rmb.bdstatic.com/bjh/7569b014a1abafd5481298763300ae1d.png") !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position-x: center;
  }
  /*夜间背景图*/
  .hope-ui-dark {
    background-image: url("https://pic.rmb.bdstatic.com/bjh/ebe942a9de49856f389c65f25a338335.png") !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position-x: center;
  }

  /*主列表白天模式透明*/
  .obj-box.hope-stack.hope-c-dhzjXW.hope-c-PJLV.hope-c-PJLV-igScBhH-css {
    background-color: rgba(255, 255, 255, 0.5) !important;
  }
  /*主列表夜间模式透明*/
  .obj-box.hope-stack.hope-c-dhzjXW.hope-c-PJLV.hope-c-PJLV-iigjoxS-css {
    background-color: rgb(0 0 0 / 50%) !important;
  }
  /*readme白天模式透明*/
  .hope-c-PJLV.hope-c-PJLV-ikSuVsl-css {
    background-color: rgba(255, 255, 255, 0.5) !important;
  }
  /*readme夜间模式透明*/
  .hope-c-PJLV.hope-c-PJLV-iiuDLME-css {
    background-color: rgb(0 0 0 / 50%) !important;
  }


  /*顶部右上角切换按钮透明*/
  .hope-ui-light .hope-c-ivMHWx-hZistB-cv.hope-icon-button {
    background-color: rgba(255, 255, 255, 0.5) !important;
  }
  .hope-ui-dark .hope-c-ivMHWx-hZistB-cv.hope-icon-button {
    background-color: rgb(0 0 0 / 50%) !important;
  }


  /*右下角侧边栏按钮透明 第一个是白天 第二个是夜间*/
  .hope-ui-light .hope-c-PJLV-ijgzmFG-css {
    background-color: rgba(255, 255, 255, 0.5) !important;
  }
  .hope-ui-dark .hope-c-PJLV-ijgzmFG-css {
    background-color: rgb(0 0 0 / 50%) !important;
  }
  /*白天模式代码块透明*/
  .hope-ui-light pre {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
  /*夜间模式代码块透明*/
  .hope-ui-dark pre {
    background-color: rgba(255, 255, 255, 0) !important;
  }


  /*左侧侧边栏目录*/
  /*白天模式*/
  .hope-ui-light .hope-c-PJLV-ieGWMbI-css {
    background: rgba(255, 255, 255, 0.5) !important;
  }
  /*夜间模式*/
  .hope-ui-dark .hope-c-PJLV-ieGWMbI-css {
    background-color: rgb(0 0 0 / 50%) !important;
  }
  /* 返回顶部 */
  .hope-c-PJLV-ihVEsOa-css {
    background: rgba(255, 255, 255, 0.5) !important;
  }
  .hope-ui-dark .hope-c-PJLV-ihVEsOa-css {
    background-color: rgb(0 0 0 / 50%) !important;
  }


  /*顶部*/
  #root > .header {
    background: rgba(255, 255, 255, 0);
  }
  /*导航条*/
  /*白天模式*/
  .hope-ui-light .body > .nav {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: var(--hope-radii-xl);
  }
  /*夜间模式*/
  .hope-ui-dark .body > .nav {
    background-color: rgb(0 0 0 / 50%);
    border-radius: var(--hope-radii-xl);
  }
  /*隐藏导航条遮罩*/
  .body > .nav::after {
    display: none;
  }


  /*底部CSS，.App .table这三个一起的*/
  dibu {
    border-top: 0px;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 0px;
    padding: 0px;
  }
  .App {
    min-height: 85vh;
  }
  .table {
    margin: auto;
  }

  
  /*全局字体*/
  * {
    font-family: LXGW WenKai;
  }
  * {
    font-weight: bold;
  }
  body {
    font-family: LXGW WenKai;
  }

  /*以下为评论系统专用*/
  /*适配大小契合度*/
  .newValine {
    width: min(96%, 940px);
    flex-direction: column;
    row-gap: var(--hope-space-2);
    border-radius: var(--hope-radii-xl);
    padding: var(--hope-space-2);
    box-shadow: var(--hope-shadows-lg);
  }
  /*评论区 - 白天模式透明度*/
  .hope-ui-light .newValine {
    background-color: rgba(255, 255, 255, 0.5) !important;
  }
  /*评论区 - 夜间模式透明度*/
  .hope-ui-dark .newValine {
    background-color: rgb(0 0 0 / 50%) !important;
  }
  /*输入栏里面跳舞的小人背景图,jsdelivr加载慢的可以自己替换或者删掉*/
  .vedit {
    background-image: url("https://cdn.jsdelivr.net/gh/anwen-anyi/imgAnwen/images/OuNiJiang.gif");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right bottom;
    transition: all 0.25s ease-in-out 0s;
  }
  textarea#comment-textarea:focus {
    background-position-y: 120px;
    transition: all 0.25s ease-in-out 0s;
  }


  /*渐变背景CSS*/
  #canvas-basic {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -999;
  }


  /* 以下为音乐播放器额外配置 */
  /* 如果你想要音乐播放器不是很靠底部可以自己设置一下数值 0是靠最底部 */
  .aplayer .aplayer-body,
  .aplayer.aplayer-withlist {
    bottom: 0rem !important;
  }
  /*音乐播放器进一步进行隐藏*/
  /* 需要就加不需要就不用加 */
  .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body {
    left: -66px !important;
  }
  .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body:hover {
    left: 0 !important;
  }
</style>

```



@tab 小于v3.31.0版本

```html
<!--Alist V3建议添加的，已经默认添加了，如果你的没有建议加上-->
<script src="https://polyfill.alicdn.com/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>

<!--引入字体，全局字体使用-->
<link rel="stylesheet" href="https://npm.elemecdn.com/lxgw-wenkai-webfont@1.1.0/lxgwwenkai-regular.css" />

<!--评论系统使用的js-->
<script src='https://unpkg.com/valine/dist/Valine.min.js'></script>

<!--不蒜子计数器-->
<script async src="https://busuanzi.9420.ltd/js"></script>

<!-- Font6，自定义底部使用和看板娘使用的图标和字体文件-->
<link type='text/css' rel="stylesheet" href="https://npm.elemecdn.com/font6pro@6.3.0/css/fontawesome.min.css" media='all'>
<link href="https://npm.elemecdn.com/font6pro@6.3.0/css/all.min.css" rel="stylesheet">

<!--音乐播放器所用的文件-->
<!-- require APlayer -->
<link rel="stylesheet" href="https://npm.elemecdn.com/aplayer@1.10.1/dist/APlayer.min.css">
<script src="https://npm.elemecdn.com/aplayer@1.10.1/dist/APlayer.min.js"></script>
<!-- require MetingJS -->
<script src="https://npm.elemecdn.com/meting2@0.0.1/js/Meting.min.js"></script>

<style>
  /* 去除通知栏 右上角 X */
  .notify-render .hope-close-button {
    display: none;
  }
  /*去掉底部*/
  .footer {
    display: none !important;
  }

  /* 文字超长自动换行 */
  .name-box .name {
    white-space: unset !important;
    overflow: unset !important;
  }
  /* 缩略图图片变大 代码中的160px 自己改 现在是注释状态若需要自行解除注释 */
  /*.obj-box > div {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr))
    }
    .obj-box > div .item-thumbnail{
    height: 100px;
    }*/

  /* 图片API用法点进去都会有食用说明的,API来自网络不保证实效性稳定性自己测试
    樱花：https://www.dmoe.cc
    夏沫：https://cdn.seovx.com
    搏天：https://api.btstu.cn/doc/sjbz.php
    姬长信：https://github.com/insoxin/API
    小歪：https://api.ixiaowai.cn/
    保罗：https://api.paugram.com
    墨天逸：https://api.mtyqx.cn
    岁月小筑：https://img.xjh.me
    东方Project：https://img.paulzzh.com
    */
  /*白天背景图*/
  .hope-ui-light {
    background-image: url("https://pic.rmb.bdstatic.com/bjh/7569b014a1abafd5481298763300ae1d.png") !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position-x: center;
  }
  /*夜间背景图*/
  .hope-ui-dark {
    background-image: url("https://pic.rmb.bdstatic.com/bjh/ebe942a9de49856f389c65f25a338335.png") !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position-x: center;
  }

  /*主列表白天模式透明*/
  .obj-box.hope-stack.hope-c-dhzjXW.hope-c-PJLV.hope-c-PJLV-igScBhH-css {
    background-color: rgba(255, 255, 255, 0.5) !important;
  }
  /*主列表夜间模式透明*/
  .obj-box.hope-stack.hope-c-dhzjXW.hope-c-PJLV.hope-c-PJLV-iigjoxS-css {
    background-color: rgb(0 0 0 / 50%) !important;
  }
  /*readme白天模式透明*/
  .hope-c-PJLV.hope-c-PJLV-ikSuVsl-css {
    background-color: rgba(255, 255, 255, 0.5) !important;
  }
  /*readme夜间模式透明*/
  .hope-c-PJLV.hope-c-PJLV-iiuDLME-css {
    background-color: rgb(0 0 0 / 50%) !important;
  }
  /*顶部右上角切换按钮透明*/
  .hope-ui-light .hope-c-ivMHWx-hZistB-cv.hope-icon-button {
    background-color: rgba(255, 255, 255, 0.5) !important;
  }
  .hope-ui-dark .hope-c-ivMHWx-hZistB-cv.hope-icon-button {
    background-color: rgb(0 0 0 / 50%) !important;
  }

  /*右下角侧边栏按钮透明 第一个是白天 第二个是夜间*/
  .hope-ui-light .hope-c-PJLV-ijgzmFG-css {
    background-color: rgba(255, 255, 255, 0.5) !important;
  }
  .hope-ui-dark .hope-c-PJLV-ijgzmFG-css {
    background-color: rgb(0 0 0 / 50%) !important;
  }
  /*白天模式代码块透明*/
  .hope-ui-light pre {
    background-color: rgba(255, 255, 255, 0.1) !important;
  }
  /*夜间模式代码块透明*/
  .hope-ui-dark pre {
    background-color: rgba(255, 255, 255, 0) !important;
  }

  /*底部CSS，.App .table这三个一起的*/
  dibu {
    border-top: 0px;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin: 0px;
    padding: 0px;
  }
  .App {
    min-height: 85vh;
  }
  .table {
    margin: auto;
  }

  /*全局字体*/
  * {
    font-family: LXGW WenKai;
  }
  * {
    font-weight: bold;
  }
  body {
    font-family: LXGW WenKai;
  }

  /*以下为评论系统专用*/
  /*适配大小契合度*/
  .newValine {
    width: min(96%, 940px);
    flex-direction: column;
    row-gap: var(--hope-space-2);
    border-radius: var(--hope-radii-xl);
    padding: var(--hope-space-2);
    box-shadow: var(--hope-shadows-lg);
  }
  /*评论区 - 白天模式透明度*/
  .hope-ui-light .newValine {
    background-color: rgba(255, 255, 255, 0.5) !important;
  }
  /*评论区 - 夜间模式透明度*/
  .hope-ui-dark .newValine {
    background-color: rgb(0 0 0 / 50%) !important;
  }
  /*输入栏里面跳舞的小人背景图,jsdelivr加载慢的可以自己替换或者删掉*/
  .vedit {
    background-image: url(https://cdn.jsdelivr.net/gh/anwen-anyi/imgAnwen/images/OuNiJiang.gif);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right bottom;
    transition: all 0.25s ease-in-out 0s;
  }
  textarea#comment-textarea:focus {
    background-position-y: 120px;
    transition: all 0.25s ease-in-out 0s;
  }

  /*渐变背景CSS*/
  #canvas-basic {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -999;
  }

  /* 以下为音乐播放器额外配置 */
  /* 如果你想要音乐播放器不是很靠底部可以自己设置一下数值 0是靠最底部 */
  .aplayer .aplayer-body,
  .aplayer.aplayer-withlist {
    bottom: 0rem !important;
  }
  /*音乐播放器进一步进行隐藏*/
  /* 需要就加不需要就不用加 */
  .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body {
    left: -66px !important;
  }
  .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body:hover {
    left: 0 !important;
  }
</style>

```

:::

### **其他音乐播放器链接**

上面那个自带的失效了，可以试试下面提供的，下面三个随机几个都可以

```html
<!-- 新的，添加 require MetingJS 优先使用这个吧 -->
<script src="https://npm.elemecdn.com/meting2@0.0.1/js/Meting.min.js"></script>
<!-- 新的备用，添加 require MetingJS -->
<script src="https://jsd.haorwen.tk/gh/lemonmous/Source-material@1.0/js/Meting.min.js"></script>
<!-- 备用，添加 require MetingJS -->
<script src="https://cdn.jsdelivr.net/gh/lemonmous/Source-material@1.0/js/Meting.min.js"></script>

<!-- 旧的，已失效的请删除 require MetingJS -->
<!--<script src="https://npm.elemecdn.com/meting@2.0.1/dist/Meting.min.js"></script>-->
```

如果提供的这些也失效了可以考虑自建十分的简单

- [**https://github.com/anwen-anyi/Meting2-API#华为云**](https://github.com/anwen-anyi/Meting2-API#华为云)

- [**一键部署到Vercel**](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fxizeyoupan%2FMeting-API)
- [**Cloudflare Workers**](https://github.com/xizeyoupan/Meting-API#cloudflare-workers)

如果你要部署到华为云可以看我写的我改了一些比较详细



### **只单独添加一个音乐播放器**

::: tabs

@tab 方案1

分开写自定义头部和自定义内容

- 自定义头部

```html
<!--音乐播放器所用的文件-->
<!-- require APlayer -->
<link rel="stylesheet" href="https://npm.elemecdn.com/aplayer@1.10.1/dist/APlayer.min.css">
<script src="https://npm.elemecdn.com/aplayer@1.10.1/dist/APlayer.min.js"></script>
<!-- require MetingJS -->
<script src="https://npm.elemecdn.com/meting2@0.0.1/js/Meting.min.js"></script>
```

- 自定义内容

```html{6}
<!--延迟加载-->
<!--如果要写自定义内容建议都加到这个延迟加载的范围内-->
<div id="customize" style="display: none;">
    <div>
		<!--音乐播放器 自行配置 auto 内容-->
        <meting-js fixed="true" autoplay="false" theme="#409EFF" list-folded="true" auto="QQ音乐或者网易云的链接"></meting-js>
    </div>
<!--延迟加载范围到这里结束-->
</div>

<!--延迟加载配套使用JS-->
<script>
    let interval = setInterval(() => {
        if (document.querySelector(".footer")) {
            document.querySelector("#customize").style.display = "";
            clearInterval(interval);
        }
    }, 200);
</script>
```

@tab 方案2

将全部内容直接都写到自定义头部

```html{9}
<!--音乐播放器所用的文件-->
<!-- require APlayer -->
<link rel="stylesheet" href="https://npm.elemecdn.com/aplayer@1.10.1/dist/APlayer.min.css">
<script src="https://npm.elemecdn.com/aplayer@1.10.1/dist/APlayer.min.js"></script>
<!-- require MetingJS -->
<script src="https://npm.elemecdn.com/meting2@0.0.1/js/Meting.min.js"></script>

<!-- 自行配置音乐选项 auto 内容 -->
<meting-js fixed="true" autoplay="false" theme="#409EFF" list-folded="true" auto="QQ音乐或者网易云的链接"></meting-js>
```

:::

#### 一些对播放器适配的CSS

```css
<style>
  /* 以下为音乐播放器额外配置 */
  /* 如果你想要音乐播放器不是很靠底部可以自己设置一下数值 0是靠最底部 */
  .aplayer .aplayer-body,
  .aplayer.aplayer-withlist {
    bottom: 0rem !important;
  }
  /*音乐播放器进一步进行隐藏*/
  /* 需要就加不需要就不用加 */
  .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body {
    left: -66px !important;
  }
  .aplayer.aplayer-fixed.aplayer-narrow .aplayer-body:hover {
    left: 0 !important;
  }
</style>
```



==至于音乐选项`auto`内容请查看[**详细说明**](06-body.md#音乐播放器添加说明)==





#### **上述音乐播放器部署到国内和国外有什么区别吗**

- 如果部署在国外咱们解析QQ音乐的时候就无法播放了
- 网易不论部署在国内还是国外都可以解析播放

<br/>



## **看板娘代码**

::: tip

看板娘上游提供的大佬暂时不提供了，如果那天恢复了这里会修改说明

（挺费流量的QAQ :joy: :joy:）

![](/img/head/kanbanniang.png)

:::

::: details 看板娘代码 暂时未提供（无法使用），详情可以看上方绿色提示信息

```html
### 新的看板娘
<!--看板娘 新的链接，来自Github[stevenjoezhang/live2d-widget]-->
<script src="https://fastly.jsdelivr.net/gh/username/live2d-widget@latest/autoload.js"></script>
只需要在头部引用这一段js即可

<!--看板娘 -自定义大小，隐藏对话框和对话框高度-->
<style type="text/css">
  #waifu #live2d {
    height: 350px!important;
    width: 350px!important;
  }
  #waifu-tips {
    top: -60px;
    /*display:none !important;隐藏对话框*/
  }
</style>

<!--看板娘加载指定模型-->
<script>
  localStorage.setItem('modelId', '7');
  localStorage.setItem('modelTexturesId', '3');
</script>

<!--以下四个两个主用两个备用的,选一条使用即可-->
<!--自己选左右-->
<script src="https://api.itggg.cn/live2dnew/left/index.js"></script>
<script src="https://api.itggg.cn/live2dnew/right/index.js"></script>

<!--备用的，自己选左右-->
<script src="https://luluossfile.lulufind.com/work/teacher_u20221017ce7b5991_1666420843832_19934968_file.js"></script>
<script src="https://luluossfile.lulufind.com/work/teacher_u20221017bb6d7454_1666420849979_19584065_file.js"></script>
```

:::

<br/>



#### **新增**

- 来自 网友 提供的：**https://github.com/nova1751/live2d-api** 

<br/><br/>



## **搜索栏美化代码**

::: tabs

@tab **带毛玻璃效果**

```css
<style>
/*白天模式 搜索主体+毛玻璃*/
.hope-ui-light .hope-c-PJLV-iiBaxsN-css{
   background-color: rgba(255,255,255,0.2)!important;
   backdrop-filter: blur(10px)!important;
}

/*白天模式 搜索栏输入框+毛玻璃*/
.hope-ui-light .hope-c-kvTTWD-hYRNAb-variant-filled{
   background-color: rgba(255,255,255,0.2)!important;
   backdrop-filter: blur(10px)!important;
}

/*白天模式 搜索按钮+毛玻璃*/
.hope-ui-light .hope-c-PJLV-ikEIIxw-css{
   background-color: rgba(255,255,255,0.2)!important;
   backdrop-filter: blur(10px)!important;
   padding: var(--hope-space-1)!important;
}

/*夜间模式搜索主体+毛玻璃*/
.hope-ui-dark .hope-c-PJLV-iiBaxsN-css{
    background-color: rgb(0 0 0 / 10%)!important;
    backdrop-filter: blur(10px)!important;
}

/*夜间模式搜索栏+毛玻璃*/
.hope-ui-dark .hope-c-kvTTWD-hYRNAb-variant-filled{
    background-color: rgb(0 0 0 / 10%)!important;
    backdrop-filter: blur(10px)!important;
}

/*夜间模式 搜索按钮+毛玻璃*/
.hope-ui-dark .hope-c-PJLV-ikEIIxw-css{
    background-color: rgb(0 0 0 / 10%)!important;
    backdrop-filter: blur(10px)!important;
    padding: var(--hope-space-1)!important;
}
</style>
```



@tab **不带毛玻璃效果**

```css
<style>
/*白天模式 搜索主体*/
.hope-ui-light .hope-c-PJLV-iiBaxsN-css{
   background-color: rgba(255,255,255,0.2)!important;
}

/*白天模式 搜索栏输入框*/
.hope-ui-light .hope-c-kvTTWD-hYRNAb-variant-filled{
   background-color: rgba(255,255,255,0.2)!important;
}

/*白天模式 搜索按钮*/
.hope-ui-light .hope-c-PJLV-ikEIIxw-css{
   background-color: rgba(255,255,255,0.2)!important;
   padding: var(--hope-space-1)!important;
}

/*夜间模式搜索主体*/
.hope-ui-dark .hope-c-PJLV-iiBaxsN-css{
    background-color: rgb(0 0 0 / 10%)!important;
}

/*夜间模式搜索栏*/
.hope-ui-dark .hope-c-kvTTWD-hYRNAb-variant-filled{
    background-color: rgb(0 0 0 / 10%)!important;
}

/*夜间模式 搜索按钮*/
.hope-ui-dark .hope-c-PJLV-ikEIIxw-css{
    background-color: rgb(0 0 0 / 10%)!important;
    padding: var(--hope-space-1)!important;
}
</style>
```

:::

#### **<i class="fa-solid fa-bell fa-shake" style="color: #63E6BE;"></i> 效果预览**

::: center
**左侧为不带毛玻璃效果，右侧为带毛玻璃效果.推荐右侧带毛玻璃效果的**
:::

<div class="image-preview2">
  <img src="/img/head/baitian.png" />
  <img src="/img/head/heiye.png" />
</div>

<br/>

## **自行替换鼠标样式说明**

~~**因为CDN的 HTTPS证书失效了，无法使用暂时**~~

~~**但是着急的话可以一个一个点击然后把哪个文件下载下来，然后自己上传一个换成自己的链接也可以..**~~

::: caution

提供的链接已经失效，有需要的可以自己找一些相关的鼠标手动去替换，按照下面的格式即可

:::

::: details 指针添加代码

```html
<!--较为个性化的鼠标指针样式，可结合个人需要自行修改-->
<style>
  body {
    cursor: url(http://luluossfile.lulufind.com/work/teacher_u20221021b3a89013_1666841028833_10660845_file.cur), default;
  }
  select{
    cursor: url(http://luluossfile.lulufind.com/work/teacher_u2021090299b56677_1666842679271_10490748_file.cur), pointer;
  }
  button,a:hover{
    cursor: url(http://luluossfile.lulufind.com/work/teacher_u20221017ac9f1124_1666842626270_11086578_file.cur), pointer;
  }
  input{
    cursor:url(http://luluossfile.lulufind.com/work/teacher_u2021090299b56677_1666842633386_14976764_file.cur), text;	
  }
  textarea,input:focus{
    cursor:url(http://luluossfile.lulufind.com/work/teacher_u202210176ba36766_1666842640146_15845280_file.cur), text;	
  }
  code{
    cursor: url(http://luluossfile.lulufind.com/work/teacher_u20221021b3a89013_1666842646779_15864973_file.cur), default;	
  }
  pre>code{
    cursor: url(http://luluossfile.lulufind.com/work/teacher_u202210176ba36766_1666842653500_10010236_file.cur), default;	
  }
</style>
```

:::

![](/img/head/shubiao.png)

<br/>



## **卜蒜子(计数器)**

来自：**https://busuanzi.9420.ltd**、Api：**https://busuanzi.apifox.cn**、GitHub：**https://github.com/soxft/busuanzi**

如果丢数据或者觉的不稳定可自建卜蒜子计数器，支持 Windows、Linux、Docker，使用 Golang + Redis 实现

搭建方法：**https://busuanzi.apifox.cn/doc-5083724**

<br/>



#### **详细搭建方法**

这里以Windows为例

首先得安装了 [**Redis**](https://github.com/tporadowski/redis/releases)，安装好后启动 **`redis-server.exe`** 就可以，可以看到和下面的一样的，就是启动了Redis 数据库

- Linux Redis 下载地址：**http://redis.io/download**

![Redis Server](/img/head/busuanzi/redis_server.png)

把之前 [BuSuanZi GitHub](https://github.com/soxft/busuanzi) 下载好的配置文件进行修改（如果不想显示这个黑窗口，可以使用脚步启动隐藏黑窗口）

分别下载源代码和二进制启动程序（主要是`config.yaml`和`dist`文件夹）都在一个目录里面才可以启动

- 分别修改（看需求），默认不需要修改可以直接运行
  - `config.yaml`
  - `dist/busuanzi.js`
- 如果你修改了`config.yaml`的端口号  那就也需要修改 `dist/busuanzi.js`的配置，如果不修改可以直接启动

```yaml title="config.yaml" :collapsed-lines=8
Web:
  Address: 0.0.0.0:8080 # 监听地址 // [!code ++]
  Cors: "https://xsot.cn,https://google.com" # 跨域访问
  Debug: false # 是否开启debug模式
  Log: true # 是否开启日志
Redis:
  Address: redis:6379 # redis地址
  Password:
  Database: 0
  TLS: false      # 是否使用TLS连接redis
  Prefix: bsz     # redis前缀
  MaxIdle: 25     # 最大空闲连接数
  MaxActive: 100  # 最大连接数
  MinIdle: 25     # 最小空闲连接数
  MaxRetries: 3   # 最大重试次数
Bsz:
  Expire: 0        # 统计数据过期时间 单位秒, 请输入整数 (无任何访问, 超过这个时间后, 统计数据将被清空, 0为不过期)
  Secret: "bsz"    # JWT签名密钥 // 请设置为任意长度的随机值
  Encrypt: "MD516" # 加密算法 (MD516 / MD532) 老版本请使用 MD532
  PathStyle: true  # 路径样式 (false: url&path, true: path) 老版本请使用 false,  true 更便于数据迁移


# TIPS, 所有 config 内的设置, 均可使用 环境变量 覆盖
# Ex BSZ_SECRET=123 将覆盖 config.yaml 中的 Bsz.Secret
```

`dist/busuanzi.js`这个js文件我进行了格式化，默认是一行代码显示的，这里为了方便查看进行了格式化操作

- 如果在公网进行部署，建议修改成绑定的域名信息

```js title="dist/busuanzi.js" :collapsed-lines=8
! function () {
    var t = ["site_pv", "site_uv", "page_pv", "page_uv"],
        e = document.currentScript,
        a = e.hasAttribute("pjax"),
        n = e.getAttribute("data-api") || "http://127.0.0.1:8080/api", // [!code ++]
        n = e.getAttribute("data-api") || "https://bsz.explorer.com/api", // [!code --]
        i = e.getAttribute("data-prefix") || "busuanzi",
        r = "bsz-id",
        s = function () {
            var e = new XMLHttpRequest;
            e.open("POST", n, !0);
            var a = localStorage.getItem(r);
            null != a && e.setRequestHeader("Authorization", "Bearer " + a), e.setRequestHeader("x-bsz-referer", window
                .location.href), e.onreadystatechange = function () {
                if (4 === e.readyState && 200 === e.status) {
                    var a = JSON.parse(e.responseText);
                    if (!0 === a.success) {
                        t.map((function (t) {
                            var e = document.getElementById("".concat(i, "_").concat(t));
                            null != e && (e.innerHTML = a.data[t]);
                            var n = document.getElementById("".concat(i, "_container_").concat(t));
                            null != n && (n.style.display = "inline")
                        }));
                        var n = e.getResponseHeader("Set-Bsz-Identity");
                        null != n && "" != n && localStorage.setItem(r, n)
                    }
                }
            }, e.send()
        };
    if (s(), a) {
        var o = window.history.pushState;
        window.history.pushState = function () {
            o.apply(this, arguments), s()
        }, window.addEventListener("popstate", (function (t) {
            s()
        }), !1)
    }
}();
```

<br/>

::: tip

具体导入网站使用方法 **https://busuanzi.apifox.cn/doc-5083722**

:::

<br/>

查看 Redis 链接访问的数据，我们可以使用可视化 Redis 管理工具 [**AnotherRedisDesktopManager**](https://github.com/qishibo/AnotherRedisDesktopManager)

下载好后连接 Redis，地址我在本地搭建的就写 `127.0.0.1`，端口号如果默认没改过就是 `6379`

![Redis Manage](/img/head/busuanzi/redis_manage.png)

<br/>

连接好后如果我们要修改数据，可以参考下面的示例

![Redis busuanzi](/img/head/busuanzi/redis_busuanzi.png)
