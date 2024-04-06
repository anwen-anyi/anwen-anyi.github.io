---
# 这是文章的标题
title: Linux编译教程
# 这是页面的图标
icon: fa-brands fa-centos fa-lg
# 这是侧边栏的顺序
order: 109
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
  - 自己编译
  - 编译AList教程
  - Build
  - Linux
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

有的小伙伴想着自己编译一下 Alist
不管是出于自己想折腾还是自己想改改源码哩.大家都可以编译~ (๑•́₃ •)

<BiliBili bvid="BV1GW4y1s742" />

-----

## Linux版本编译教程

## 1. 编译前准备

::: tip 

`GitHub code space`编译的似乎只有一个版本，如果你想要像AList官方那样编译很多可以使用 [GitHub Actions](./github.md) 来进行编译

- 如果你只有修改前端的想法，==**强烈推荐**== 单独只进行编译前端即可，后端(二进制)应用程序继续使用AList官方原版的文件
  - 因为现在支持引用第三方前端文件使用：参考 https://alist.nn.ci/zh/config/configuration.html#bleve-dir
- 这样就不用担心设备不同不会交叉编译，以及编译过程中出现的问题无法解决

:::

### 1.1 编译前说明

编译Linux版本教程我们使用 `GitHub code space` 来演示

原本我们需要安装 **`git nodejs pnpm gcc golang 1.20+`** 这些软件并且配置环境的，

但是呢code space帮我们已经配置好了，不用我们手动安装了 挺好的~（对于想自己编译，但是不会安装环境的简直美滋滋~~~~）

而且Go代理都不用换成国内的~我们直接进行克隆代码开始编译吧



打开[**Build software better, together**](https://github.com/codespaces/templates)创建一个空白模板即可

![](/img/build/build13.png)

### 1.2 首先先把前后端代码克隆下来

- 后端：**git clone https://github.com/alist-org/alist.git**
- 前端：**git clone --recurse-submodules https://github.com/alist-org/alist-web.git**



1. **找不到输入的终端在哪里......**
2. ![](/img/build/build14.png)

### 1.3 然后安装 pnpm

使用npm安装pnpm  输入 **npm install -g pnpm** 执行安装

如果出现  `xxxxxx 317` 是内存不够导致的

```powershell
@anwen-anyi ➜ /workspaces/codespaces-blank $ npm install -g pnpm

added 1 package, and audited 2 packages in 2s

1 package is looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

### 1.4 下载语言文件并且初始化

```powershell
cd alist-web 
wget https://crowdin.com/backend/download/project/alist/zh-CN.zip 
unzip zh-CN.zip 
node ./scripts/i18n.mjs
rm zh-CN.zip
```

代码说明（应该都懂吧）：

1. 进入前端文件夹里面
2. 下载中文语言包
3. 解压
4. 初始化一下语言包，不然无法使用
5. 删除语言包压缩包

#### 安装项目所有依赖，同时编译前端文件

**中间修改代码的过程就不说了，大家就当我已经修改好了就行 嘿嘿~我们直接编译**



## 2.编译前端

输入 `pnpm install && pnpm run build` 编译前端，

也可以分开运行，先执行 `pnpm install`再执行 `pnpm run build`

我是一起执行了（看你自己呗~）

![](/img/build/build15.png)

## 3.编译后端

### 3.1 编译后端前准备

先将编译好的前端文件，移动到后端目录里面，再进行编译

1. **手动**将前端里面的dist文件夹，移动到后端public文件夹
2. 或者**使用命令**将前端里面的dist文件夹，移动到后端public文件夹

```powershell
cp -r /workspaces/codespaces-blank/alist-web/dist /workspaces/codespaces-blank/alist/public/
```

以上方法自己二选一

### 3.2 开始编译

```powershell
appName="alist"
builtAt="$(date +'%F %T %z')"
goVersion=$(go version | sed 's/go version //')
gitAuthor=$(git show -s --format='format:%aN <%ae>' HEAD)
gitCommit=$(git log --pretty=format:"%h" -1)
version=$(git describe --long --tags --dirty --always)
webVersion=$(wget -qO- -t1 -T2 "https://api.github.com/repos/alist-org/alist-web/releases/latest" | grep "tag_name" | head -n 1 | awk -F ":" '{print $2}' | sed 's/\"//g;s/,//g;s/ //g')
ldflags="\
-w -s \
-X 'github.com/alist-org/alist/v3/internal/conf.BuiltAt=$builtAt' \
-X 'github.com/alist-org/alist/v3/internal/conf.GoVersion=$goVersion' \
-X 'github.com/alist-org/alist/v3/internal/conf.GitAuthor=$gitAuthor' \
-X 'github.com/alist-org/alist/v3/internal/conf.GitCommit=$gitCommit' \
-X 'github.com/alist-org/alist/v3/internal/conf.Version=$version' \
-X 'github.com/alist-org/alist/v3/internal/conf.WebVersion=$webVersion' \
"
go build -ldflags="$ldflags" .
```

把上面的代码复制粘贴进去

![](/img/build/build16.png)

粘贴进去后，他会像下面这个图这样，

![](/img/build/build17.png)

粘贴好了开始执行，稍等1-2分钟就会好，第一次可能会比较慢（1-2分钟），再编译就快了

![](/img/build/build18.png)

编译好后我们左侧里面就会看到我们编译好的二进制 文件

![](/img/build/build19.png)



### 3.3 编译结束

我们去看看能不能用吧

我们先手动把这个新编译好的 alist 二进制文件移动出去，不然在这里看着怪乱糟糟的到时候，而且我们后面还有用哩~

先授权`chmod +x alist`

![](/img/build/build20.png)

看到右下角的 按钮了吗，在浏览器中打开，不过这个属于私人的，会效验GitHub账号和你的这个是不是匹配的.

![](/img/build/build21.png)

打开后看到了我们熟悉的界面，后面我就不展示了。没有问题

![](/img/build/build22.png)

Linux 二进制的编译就到这里结束啦~ 有兴趣的小伙伴可以去试试啦~

~~关于如何交叉编译（Linux编译Windows和mac的）在研究中.......~~ 别交叉编译啦看开头的提示吧

-----

<SiteInfo
  name="Windows 编译教程"
  desc=""
  url="./win.md"
  logo="/img/start/windows.svg"
  repo=""
  preview=""
/>

<SiteInfo
  name="GitHub Actions"
  desc=""
  url="./github.md"
  logo="/img/start/github.svg"
  repo=""
  preview=""
/>