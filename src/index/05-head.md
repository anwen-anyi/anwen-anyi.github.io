---
# 这是文章的标题
title: 自定义头部
# 这是页面的图标
icon: fa-solid fa-rocket-launch
# 这是侧边栏的顺序
order: 5
# 设置作者
author: 安稳
# 设置写作时间
date: 2023-01-01
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - 页面配置
  - 使用指南
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
footer: <p id="hitokoto">  <a href="#" id="hitokoto_text">:D 获取中...</a> </p>
# 你可以自定义版权信息
# copyright: 无版权
---

<!-- 你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。 -->

<!-- more -->

::: center
**代码中每一行的代码都有注释说明，请仔细查看并使用**
:::

## 自定义头部代码

```html
<!--Alist V3建议添加的，已经默认添加了，如果你的没有建议加上-->
<script src="https://polyfill.io/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>

<!--引入字体，全局字体使用-->
<link rel="stylesheet" href="https://npm.elemecdn.com/lxgw-wenkai-webfont@1.1.0/lxgwwenkai-regular.css" />

<!--评论系统使用的js-->
<script src='https://unpkg.com/valine/dist/Valine.min.js'></script>

<!--不蒜子计数器-->
<script async src="https://busuanzi.icodeq.com/busuanzi.pure.mini.js"></script>

<!-- Font6，自定义底部使用和看板娘使用的图标和字体文件-->
<link type='text/css' rel="stylesheet" href="https://npm.elemecdn.com/font6pro@6.0.1/css/fontawesome.min.css" media='all'>
<link href="https://npm.elemecdn.com/font6pro@6.0.1/css/all.min.css" rel="stylesheet">

<!--音乐播放器所用的文件-->
<!-- require APlayer -->
<link rel="stylesheet" href="https://npm.elemecdn.com/aplayer@1.10.1/dist/APlayer.min.css">
<script src="https://npm.elemecdn.com/aplayer@1.10.1/dist/APlayer.min.js"></script>
<!-- require MetingJS -->
<script src="https://npm.elemecdn.com/meting@2.0.1/dist/Meting.min.js"></script>

<style>
/* 去除通知栏 右上角 X */
.notify-render .hope-close-button {
    display: none;
}
/* 图片API用法点进去都会有食用说明的
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
    background-image: url("https://api.ixiaowai.cn/mcapi/mcapi.php") !important;
    background-repeat:no-repeat;
    background-size:cover;
    background-attachment:fixed;
    background-position-x:center;
}
/*夜间背景图*/
.hope-ui-dark {
    background-image: url(http://pic.rmb.bdstatic.com/bjh/ebe942a9de49856f389c65f25a338335.png) !important;
    background-repeat:no-repeat;
    background-size:cover;
    background-attachment:fixed;
    background-position-x:center;
}
/*主列表白天模式透明*/
.obj-box.hope-stack.hope-c-dhzjXW.hope-c-PJLV.hope-c-PJLV-igScBhH-css {
    background-color: rgba(255, 255, 255, 0.5)!important;
}
/*主列表夜间模式透明*/
 .obj-box.hope-stack.hope-c-dhzjXW.hope-c-PJLV.hope-c-PJLV-iigjoxS-css {
    background-color:rgb(0 0 0 / 50%)!important;
}

/*readme白天模式透明*/
.hope-c-PJLV.hope-c-PJLV-ikSuVsl-css {
    background-color: rgba(255, 255, 255, 0.5)!important;
}
/*readme夜间模式透明*/
.hope-c-PJLV.hope-c-PJLV-iiuDLME-css {
    background-color:rgb(0 0 0 / 50%)!important;
}

/*顶部右上角切换按钮透明*/
.hope-ui-light .hope-c-ivMHWx-hZistB-cv.hope-icon-button {
    background-color: rgba(255, 255, 255, 0.3)!important;
}
.hope-ui-dark .hope-c-ivMHWx-hZistB-cv.hope-icon-button {
    background-color:rgb(0 0 0 / 10%)!important;
	
}

/*右下角侧边栏按钮透明 第一个是白天 第二个是夜间*/
.hope-ui-light .hope-c-PJLV-ijgzmFG-css {
    background-color: rgba(255, 255, 255, 0.5)!important;
}
.hope-ui-dark .hope-c-PJLV-ijgzmFG-css {
    background-color:rgb(0 0 0 / 50%)!important;
}

/*白天模式代码块透明*/
.hope-ui-light pre {
    background-color: rgba(255, 255, 255, 0.1)!important;
}
/*夜间模式代码块透明*/
.hope-ui-dark pre {
    background-color: rgba(255, 255, 255, 0)!important;
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

/*去掉底部*/
.footer {
    display: none!important;
}

/*全局字体*/
 * {
    font-family:LXGW WenKai
}
* {
    font-weight:bold
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
    background-color: rgba(255, 255, 255, 0.8)!important;
}
/*评论区 - 夜间模式透明度*/
.hope-ui-dark .newValine {
    background-color:rgb(0 0 0 / 80%)!important;
}
/*输入栏里面跳舞的小人背景图*/
.vedit {
    background-image:url(https://cdn.jsdelivr.net/gh/anwen-anyi/imgAnwen/images/OuNiJiang.gif);
    background-size:contain;
    background-repeat:no-repeat;
    background-position:right bottom;
    transition:all 0.25s ease-in-out 0s;
}
textarea#comment-textarea:focus {
    background-position-y:120px;
    transition:all 0.25s ease-in-out 0s;
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


/*音乐播放器进一步进行隐藏*/
.aplayer.aplayer-fixed.aplayer-narrow .aplayer-body {
    left: -66px!important;
}
.aplayer.aplayer-fixed.aplayer-narrow .aplayer-body:hover {
    left: 0!important;
}
</style>
```

### 其他音乐播放器链接

上面那个自带的失效了，可以试试下面提供的

```html
<!-- 新的，添加 require MetingJS 优先使用这个吧 -->
<script src="https://npm.elemecdn.com/meting2@0.0.1/js/Meting.min.js"></script>
<!-- 新的备用，添加 require MetingJS -->
<script src="https://jsd.haorwen.tk/gh/lemonmous/Source-material@1.0/js/Meting.min.js"></script>
<!-- 备用，添加 require MetingJS -->
<script src="https://cdn.jsdelivr.net/gh/lemonmous/Source-material@1.0/js/Meting.min.js"></script>

<!-- 旧的，删除 require MetingJS -->
<!--<script src="https://npm.elemecdn.com/meting@2.0.1/dist/Meting.min.js"></script>-->
```

如果提供的这些也失效了可以考虑自建十分的简单

- [**https://github.com/anwen-anyi/Meting2-API#华为云**](https://github.com/anwen-anyi/Meting2-API#华为云)

- [**一键部署到Vercel**](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fxizeyoupan%2FMeting-API)
- [**Cloudflare Workers**](https://github.com/xizeyoupan/Meting-API#cloudflare-workers)

如果你要部署到华为云可以看我写的我改了一些比较详细

#### 部署到国内和国外有什么区别吗

- 如果部署在国外咱们解析QQ音乐的时候就无法播放了
- 网易不论部署在国内还是国外都可以解析播放

## 看板娘代码

```html
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



## 搜索栏美化代码

### 带毛玻璃效果

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



### 不带毛玻璃效果

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



### 效果预览

::: center
左侧为不带毛玻璃效果，右侧为带毛玻璃效果.推荐右侧带毛玻璃效果的
:::

![](/img/head/baitian.png)

![](/img/head/heiye.png)



## 自行替换鼠标样式说明

**因为CDN的 HTTPS证书失效了，无法使用暂时**

**但是着急的话可以一个一个点击然后把哪个文件下载下来，然后自己上传一个换成自己的链接也可以..**

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



![](/img/head/shubiao.png)
