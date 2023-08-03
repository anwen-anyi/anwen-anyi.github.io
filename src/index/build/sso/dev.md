---
# 这是文章的标题
title: 在线调试Cadoor
# 这是页面的图标
icon: fa-solid fa-rectangle-terminal
# 这是侧边栏的顺序
order: 122
# 设置作者
author: 安稳
# 设置写作时间
date: 2023-01-01
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - 自己编译
  - Dev
  - 在线调试
  - Cadoor
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
# footer: true

# 你可以自定义版权信息
# copyright: 无版权
headerDepth: 6
collapsible: false
---

<!-- 你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。 -->

<!-- more -->

## **开发须知**

<!-- @include: build.md{50-62} -->

-----

在正式开发前我们需要先配置一下[配置文件](#casdoor配置文件)才能启动，最主要是配置以下数据库不然无法存放数据无法启动

<!-- @include: build.md{117-183} -->

配置文件配置的差不多了我们直接去启动一下吧

#### **先启动后端**

默认是`8000`端口号的喔~不多说了

```bash
PS casdoor> go run .\main.go
Socks5 proxy enabled: 127.0.0.1:10808
2023/05/22 xx:xx:xx Listening on 0.0.0.0:389
2023/05/22 xx:xx:xx.382 [I]  http server Running on http://:8000
```

#### 再启动前端

由于我们直接在`Casdoor`接入第三方应用属于开发模式了，否则直接接入会`404`错误，所以我们启动前端的时候要多一步

记得再打开一个命令窗口在输入命令哦

![](/img/sso/dev/cmd.png)

```bash
#进入前端文件夹
cd web
#下载package.json 包所需要的依赖
yarn install
#构建前端静态资源
yarn build
#启动Casdoor
yarn start
```

`yarn install`安装我们所需要的依赖的时候有点儿慢，文件太多 我第一次构建这个包等待了==30多分钟==

所有的都下载完后有 **`130,752`** 个文件， **`13,201`** 个文件夹，文件大小 **1GB** ，所以构建的时间比较久

输入`yarn start`启动后等待一会儿，就会自动打开一个浏览器 http://localhost:7001/

- 开发模式我们在浏览器需要使用`7001`端口号才能访问（推荐使用生产模式来）

```bash
Compiled successfully!

You can now view web in the browser.

  Local:            http://localhost:7001
  On Your Network:  http://192.168.137.1:7001

Note that the development build is not optimized.
To create a production build, use yarn build.

webpack compiled successfully
```

到这里基本上结束了，可以去愉快的给`应用`接入登录了

<br/>

那里不清楚大家可以留言 会回复的。
