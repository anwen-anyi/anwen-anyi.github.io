---
# 这是文章的标题
title: 在线调试开发AList前端
# 这是页面的图标
icon: fa-solid fa-spider-web
# 这是侧边栏的顺序
order: 112
# 设置作者
author: 安稳
# 设置写作时间
date: 2023-01-01
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - AList魔改教程
  - AList教程
  - Build
  - 在线调试
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

## **前言：什么是在线调试开发?**

对我来说就是在线修改代码查看效果，不用每次修改一处位置然后编译再查看效果。



## **如何在线调试开发？**

### **1.1 调试前准备**

我们先下载一个编译好的AList，然后将AList前端代码([**alist-web**](https://github.com/alist-org/alist-web))下载到本地

- 下载已经可以直接使用的AList，然后启动
- 下载AList前端代码：**git clone --recurse-submodules https://github.com/alist-org/alist-web.git**
  - 仔细看有 **`--recurse-submodules`** 参数，如果不加会缺少`solid-router`运行的时候会报错

<br/>

### **1.2 加载包管理器所需要的安装项目依赖**

我们这里在线调试使用的开发工具是 **VS Code** ^(Visual_Studio_Code)^ ，如果你使用 **WebStorm**^JetBrains^ 也可以

进入调试工具打开前端的代码，执行如下代码

```pnpm
pnpm install
```

然后就会加载`package.json`这里面提到的我们需要的项目依赖，会在同级目录的`node_modules`暂时存储

(第一次加载可能会慢一些，如果你后续继续开发的话`node_modules`留着不要删除后续继续用)

#### **1.2.1 后续继续开发调试**

我们后续继续开发调试的时候，AList版本也会更新依赖也会更新，到时候我们继续使用`pnpm install`安装命令来更新就好

之要之前使用的`node_modules`文件夹没有删除后续更新基本几秒钟的时间

<br/>

### **1.3 修改调试配置**

- 进入开发调试工具后我们先修改两个文件

  - 如果你需要在局域网其他电脑查看效果需要修改两个文件

  - 如果你只是在本地这台电脑修改不需要要修改
- 两个文件都需要修改，缺一不可

::: tabs

@tab 文件1

文件1：alist-web/`package.json`

我们这里在线调试用 `dev` 启动我们就修改`dev`即可

#### 修改前

```json{3}
......
    "start": "vite",
    "dev": "vite",
    "build": "vite build",
......
```
```log{2,8}
> alist-web@0.0.0 dev alist-web
> vite


  VITE v3.0.8  ready in 952 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

#### 修改后

```json{3}
......    
    "start": "vite",
    "dev": "vite --host 0.0.0.0",
    "build": "vite build",
......
```

```log{2,8-11}
> alist-web@0.0.0 dev alist-web
> vite --host 0.0.0.0


  VITE v3.0.8  ready in 1994 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.137.1:5173/
  ➜  Network: http://192.168.140.1:5173/
  ➜  Network: http://192.168.200.1:5173/
  ➜  Network: http://192.168.31.14:5173/
```

这样修改的好处就是  启动 Vite 构建工具时并指示它在本地主机的所有 IP 地址上监听请求，方便我们在其他设备也能预览

像开始那样如果我们不添加参数,只能使用`http://localhost:5173/`然后用本机访问，无法使用局域网内或者其他设备预览查看

@tab 文件2

文件2：alist-web/`.env.development`

#### **修改前**

```bash
VITE_API_URL = "http://localhost:5244/"
```

#### **修改后**

```bash
VITE_API_URL = "http://192.168.31.14:5244/"
```

当然这里修改不限于只能启动本地的，你也可以填写远程服务器的只要能访问的到就可以，例如我写我远程服务区的地址

```bash
VITE_API_URL = "https://alist.xxxx.com/"
```

这里如果不修改，也只能在本机访问 因为默认的是`localhost`，其他机器没办法访问到AList

所以需要我们改一下地址，改成内网IP^(第二种)^或者远程服务器^(第三种)^

:::

<br/>

## **结语**

呃呃呃 看起来我说的很啰嗦，很繁琐，主要是照顾一下  ==**真·小白**== 让他们知道如何使用，大佬基本上也不需要看直接上手多多担待啦

然后可以愉快并且奔放的去**编译或者魔改**啦 :call_me_hand::call_me_hand::call_me_hand::call_me_hand::call_me_hand:

:::center
```card
title: Windows版编译教程¹
desc: ------------------------------
logo: /home.png
link: win.md
color: rgba(153, 255, 255, 0.20)
```

```card
title: Linux版-编译教程²
desc: ------------------------------
logo: /home.png
link: linux.md
color: rgba(153, 255, 255, 0.30)
```

```card
title: 自用的AList魔改教程³
desc: ------------------------------
logo: /home.png
link: ../03-code.md
color: rgba(153, 255, 255, 0.40)
```
:::
