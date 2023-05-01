---
# 这是文章的标题
title: 编译教程
# 这是页面的图标
icon: fa-solid fa-rocket-launch
# 这是侧边栏的顺序
order: 29
# 设置作者
author: 安稳
# 设置写作时间
date: 2023-01-01
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - AList魔攻教程
  - 自己编译
  - 编译AList教程
  - Build
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

有的小伙伴想着自己编译一下 Alist
不管是出于自己想折腾还是自己想改改源码哩.大家都可以编译~ (๑•́₃ •)

## 一、Windows版本编译教程

## 1.编译前准备

### 1.1 编译视频版教程

<BiliBili bvid="BV1ye4y1m7e1" />

### 1.2 编译之前的前提条件
大家可以看一下这里需要啥：https://github.com/alist-org/alist/blob/main/CONTRIBUTING.md

编译Alist Go竟然需要 1.19+了...呜呜呜

我没记错前几个月才升级了1.18+...升级真快(´◔‸◔')”



**编译之前我们需要先准备安装好以下软件:**

1. [**git**](https://git-scm.com/download/win)
2. [**golang 1.19+**](https://golang.org/doc/install)
3. [**gcc**](https://gcc.gnu.org/)
4. [**nodejs**](https://nodejs.org/)
5. [**pnpm**](https://www.npmjs.com/package/pnpm)

以上安装过程我就不赘述了...**（安装问题都解决不了的话编译也够呛）**

以上软件安装好后我们先把 **Go的代理改为国内** 的..

安装好Golang后并且也将 "**环境变量"** 配置好，然后win+R 输入CMD打开DDos黑窗口(这里是用的Windows)

根据自己的配置输入：

```bash
go env -w GOPROXY=https://goproxy.cn,direct      // Windows
export GOPROXY=https://goproxy.cn,direct         // macOS 或 Linux
```

将代理改为国内,不然编译时会出错,前人血泪史之一... **（踩坑一号）**

**然后我们改好后看看生效没有：**

```bash
CMD黑窗口输入go env查看（需要配置好环境变量哦先）

安装好默认的是：
set GOPROXY="https://proxy.golang.org,direct"
修改代理后是
set GOPROXY=https://goproxy.cn,direct
```

**反正不管他默认的是啥，改就完事了！！！**

**以上就是编译前需要的准备 安装好5个软件，改一下代理 ..不难吧(ฅ'ω'ฅ)**



### 1.3 编译前端前准备

**编译前我们看看文档怎么编译**：https://github.com/alist-org/alist/blob/main/CONTRIBUTING.md

![](/img/build/build02.jpeg)

我们需要编译前肯定是要先克隆一下**前端**和**后端**的代码（clone）

执行图上的两行命令在我们安装的 **git** 终端里面

![](/img/build/build01.jpeg)

你克隆到任意地方都行建议放到一个文件夹里面去,这样我们修改的时候也方便

```bash
alist.git是后端，alist-web.git是前端
无代理
git clone https://github.com/alist-org/alist.git
git clone --recurse-submodules https://github.com/alist-org/alist-web.git

代理 - （大白提供）
git clone https://hub.cooluc.com/alist-org/alist.git
git clone --recurse-submodules https://hub.cooluc.com/alist-org/alist-web.git
```

前后端 拉取/克隆(clone)好了

但是我们拉取/克隆(clone)下来的前端里面只有一个 默认的英文语言文件

我们还需要去下载一个带中文的语言文件

### 1.4 手动下载语言包地址

**https://crowdin.com/project/alist/zh-CN**

这里是手动下载，还有命令自动下的哪个我没研究明白...害,卡了好几天了这个语言文件..

![](/img/build/build03.gif)

![](/img/build/build04.gif)

### 1.5 直接下载语言包直链：

**https://crowdin.com/backend/download/project/alist/zh-CN.zip**

上面的语言文件放进去后我们去终端里面输入命令：

```vue
node ./scripts/i18n.mjs
```

执行完毕语言里面会出现一个 **entry.ts** 的文件，这样我们就可以用了

![](/img/build/build05.gif)

以上软件安装并且配置好环境变量了，Go 代理设置好了，语言包文件下载好了 ，我们编译前准备工作就可以了



## 2.编译前端

首先CD进入 **`alist-web`**  前端文件夹内，

然后输入 **pnpm install** 将 **node_modules** （包管理工具下载安装的包的文件夹），下载下来，

别问问什么不用 **npm** 要用 **pnpm** ...问就是用 **pnpm** 就完了...这个也是血的教训.. **%>_<%  ^（踩坑2号）^**



中间自己改源码的过程就不演示了，自己想怎么改就怎怎么改

改完了 执行如下命令将前端文件进行编译： **`pnpm build`** **`npm run build`** 这两个二选一都行



编译好后，会看到一个叫 <Badge text="dist" type="info" /> 的文件夹，这个就是我们编译好的内容一会我们移动到后端里面去

![](/img/build/build06.png)



### 2.1 编译前端期间可能会遇到的问题

#### 输入`pnpm install`会报错 ^(三号坑)^

#### 如果你输入 pnpm install 出现如下图中的错误

![](/img/build/build07.png)

#### 上述报错中的解决方案

![](/img/build/build08.png)

如果没出现上述的错误能正常编译 忽略即可！

#### 输入 pnpm install 会报错 (四号坑)

#### 如果你输入 pnpm install 出现如下图中的错误

![](/img/build/build09.png)

**上述问题的问题所在以及解决方案**

问题所在

- 看看你前端的 **` solid-router`** 这个文件夹里面是不是空的..估计是空的

- 下载前端的时候没有带 `--recurse-submodules` 参数导致附属的文件没有下载下来

解决方案

- 下载前端带上 `--recurse-submodules` 参数去下载

```bash
无代理
git clone --recurse-submodules https://github.com/alist-org/alist-web.git

代理 - （大白提供）
git clone --recurse-submodules https://hub.cooluc.com/alist-org/alist-web.git
```



## 3.编译后端

1. 在前端编译好后我们就会看到一个 **`"dist"`** 的文件夹
2. 我们移动一下把 **`"dist"`**  目录移动到的后端的 **`"public"`** 目录里面去即可
3. 虽然里面已经有了一个 **"dist"** 文件夹，不用管直接覆盖

![](/img/build/build10.gif)

将编译好的前端移文件动到后端里面去，准备编译

**"dist"** 目录移动到 **`"public"`** 去之后，我们就可以编译了（如果有改代码的需求自己改完再编译）

```bash
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

有人看到这么一大坨这怎么执行...我们可以创建一个 " **.sh**" 后缀的文件，然后把这一坨复制粘贴进去即可

‪如果怕自己创建的 **.sh** 后缀 文件不能用我们可以复制粘贴一个已经有的然后把里面的内容替换了即可

### 3.1 [演示创建.sh](#_3-1-演示创建-sh)

![](/img/build/build11.gif)

我们创建好了，**可以直接双击执行**，或者在命令行运行 这个我们刚刚修改的 **run.sh** 文件也行

运行好了 **（可能大概需要1-2分钟）** 目录里面会出现一个<Badge text="alist.exe" type="info" />  的文件 这就是编译好了

我这里的Windows自然是.exe后缀的，如果是Linux，那肯定出现的是二进制文件

![](/img/build/build12.gif)

‪好了，以上教程就是本次编译的教程啦... 想折腾的自己折腾吧...有想试试的 可以试试看...**(‾◡◝)**

## 二、Linux版本编译教程

## 1. 编译前准备

### 1.1 编译前说明

编译Linux版本教程我们使用 `GitHub code space` 来演示

原本我们需要安装 **`git nodejs pnpm gcc golang 1.19+`** 这些软件并且配置环境的，

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

关于如何交叉编译（Linux编译Windows和mac的）在研究中.......