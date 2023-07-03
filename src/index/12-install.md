---
# 这是文章的标题
title: AList如何同时安装多个运行
# 这是页面的图标
icon: fa-solid fa-rocket-launch
# 这是侧边栏的顺序
order: 4
# 设置作者
author: 安稳
# 设置写作时间
date: 2023-01-01
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - AList
  - Windows
  - Linux
  - install
  - 安装
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

## Windows

Windows的运行多个AList没什么好说的，直接改端口号启动就行

<BiliBili bvid="BV14s4y1h7yZ" />

::: right

[**BV14s4y1h7yZ**](https://www.bilibili.com/video/BV14s4y1h7yZ)

:::

## Linux

最方便的办法安装多个AList同时运行

:::: tabs#video

@tab 哔哩哔哩

<BiliBili bvid="BV1rF41197Qv" />

::: right

[**BV1rF41197Qv**](https://www.bilibili.com/video/BV1rF41197Qv)

:::

@tab YouTube

<YouTube id="3Kb8Vr7uNws" />

::: right

[**3Kb8Vr7uNws**](https://www.youtube.com/watch?v=3Kb8Vr7uNws)

:::

::::

#### **另手动安装AList**

==推荐先使用视频中的哪种办法，如果你非要试试手动安装你再看下面的教程==

1. 先下载适合自己的架构**https://github.com/alist-org/alist/releases/**

   - 如果提示 **lib64/libc.so.6: version `GLIBC_2.28' not found (required by ./alist)或者 accept: function not implemented**，我们就要换成文件名带musl的，就像下面的
   - alist-linux-amd64.tar.gz     ===>     alist-linux-musl-amd64.tar.gz
   - alist-linux-arm-X.tar.gz     ===>     alist-linux-musl-armX.tar.gz

2. 下载好后解压出来上传到服务器，或者直接上传到服务器再解压

   - 记得要使用cd命令到这个文件夹才可以的

   -  ```bash
      # 解压下载的文件，得到可执行文件：
      tar -zxvf alist-xxxx.tar.gz
      ```

3. 然后再进行授权 `chmod +x alist`

   - 记得cd到文件夹

4. 然后使用命令启用就好

5. 到这里就结束了已经可以使用了

:warning: 还是建议使用视频中的哪种办法，这种手动安装可以自己试试看就知道方便不方便了，适合自己魔改上传的程序