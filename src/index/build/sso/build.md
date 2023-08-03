---
# 这是文章的标题
title: 编译Cadoor使用
# 这是页面的图标
icon: fa-solid fa-chalkboard-user
# 这是侧边栏的顺序
order: 121
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
  - 编译Cadoor教程
  - Build
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

**Cadoor是什么?**

Cadoor是什么我这里就不说了，有需要的应该知道是什么，不知道的可以看看[Cadoor官网](https://casdoor.org/zh/docs/overview)

不多废话了我们直接开始编译

<br/>



## **编译Cadoor前准备工作**

开发Cadoor需要使用 `Go > 1.17+`，`Node.js ≥ 14&16`，`Yarn 1.x` 版本

官网推荐使用  [Yarn 1.x](https://classic.yarnpkg.com/en/docs/install) 运行 & Casdoor 前端，使用 NPM可能会导致UI 风格问题。 更多详细信息见： [Casdoor#294](https://github.com/casdoor/casdoor/issues/294)



然后我们将开源代码下载下来，或者使用 [Git Bash](https://git-scm.com/download/win) clone到本地

```git
git clone https://github.com/casdoor/casdoor
```

然后我们打开开发工具，我这里使用的开发工具是 **VS Code ^(Visual_Studio_Code)^** ，如果你使用 **GoLand^(JetBrains)^** 也可以

<br/>

我们根据`Cadoor`的[文档](https://casdoor.org/zh/docs/basic/server-installation#%E7%94%9F%E4%BA%A7%E6%A8%A1%E5%BC%8F)来使用

我们这里是将`Cadoor`接入到其他应用属于是生产环境吧，如果使用开发环境会缺少前端静态资源然后`404错误`

下面先构建一下`后端`，我们再构建一下`前端`

::: tabs#build

@tab Windows

```
go build
casdoor.exe
```

@tab Linux

```
go build
./casdoor
```

:::

后端构建好了 我们来构建一下前端吧

```bash{2,4,6}
#先进入前端文件夹
cd web
#安装`package.json`里面我们所需要的包依赖
yarn install
#构建前端
yarn build
```

`yarn install`安装我们所需要的依赖的时候有点儿慢，文件太多 我第一次构建这个包等待了30多分钟

所有的都下载完后有 **`130,752`** 个文件， **`13,201`** 个文件夹，文件大小 **1GB** ，所以构建的时间比较久

- Q：可能会有人好奇先构建后端，前端的文件会打包进去吗？
- A：没问题的，我们把 ` web/build/*` 这个文件夹带走就行,当然如果要带走的话还要我们的 `/conf/*`配置文件
  - `conf`配置文件里面是一些我们要启动`casdoor`前的一些配置，例如数据库使用哪种,端口号 名字等具体的可以自己打开看看

<br/>

==到这里你已经可以去使用`Casdoor`啦，下面是`Casdoor`的配置文件如果你知道如何修改可以不用看，如果不知道可以看看==

-----



## **casdoor配置文件**

```conf
appname = casdoor
httpport = 8000
runmode = dev
copyrequestbody = true
driverName = mysql
dataSourceName = root:123123@tcp(localhost:3306)/
dbName = casdoor
tableNamePrefix =
showSql = false
redisEndpoint =
defaultStorageProvider = 
isCloudIntranet = false
authState = "casdoor"
socks5Proxy = "127.0.0.1:10808"
verificationCodeTimeout = 10
initScore = 2000
logPostOnly = true
origin =
staticBaseUrl = "https://cdn.casbin.org"
isDemoMode = false
batchSize = 100
ldapServerPort = 389
quota = {"organization": -1, "user": -1, "application": -1, "provider": -1}
logConfig = {"filename": "logs/casdoor.log", "maxdays":99999, "perm":"0770"}
initDataFile = "./init_data.json"
```

配置文件所有参数的作用我这里细说了,下面我只说一下如何配置数据库和`8000端口`是做什么的吧[详情查看Casdoor官网](https://casdoor.org/zh/docs/basic/server-installation#%E9%80%9A%E8%BF%87-ini-%E6%96%87%E4%BB%B6%E9%85%8D%E7%BD%AE)

casdoor默认使用的是**MySQL**数据库，如果你也是使用**MySQL**可以按照以下格式填写,应该看得懂什么意思 实在不懂可以评论区问问

```conf{2-4}
	......
driverName = mysql
dataSourceName = root:123123@tcp(localhost:3306)/
dbName = casdoor
	......
```

如果你要使用**Sqlite3**，可以改成如下配置

```conf{2-4}
	......
driverName = sqlite
dataSourceName = "file:casdoor.db?cache=shared"
dbName = casdoor
	......
```

还有更多的数据库用法，有需要的可以前往[Casdoor官网](https://casdoor.org/zh/docs/basic/server-installation#%E6%95%B0%E6%8D%AE%E5%BA%93)看看

<br/>

```conf{2}
appname = casdoor
httpport = 8000
runmode = dev
```

`8000端口`是后端应用程序正在监听的端口，也是你要接入的时候需要填写的

例如我们接入`AList`在单点登录选项,`SSO端点名称`就是我们要写的 http(s)\://192.168.31.1:8000，写进AList单点登录配置的选项里面

- 注:如果8000端口号和你的冲突你可以随便改
- 如果你嫌弃有端口号不方便，你可以将`8000`端口号进行反向代理，像AList那样反向代理把端口号去掉

<br/>

那里不清楚大家可以留言 会回复的。
