---
# 这是文章的标题
title: AList使用指南从入门到跑路
# 这是页面的图标
icon: fa-solid fa-rocket-launch
# 这是侧边栏的顺序
order: 1
# 设置作者
author: 安稳
# 设置写作时间
date: 2023-01-01
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - AList入门使用教程
  - 使用指南
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
首先我们来安装，可以自己看文档 "https://alist.nn.ci/zh/guide/" 写很清楚了，再看不懂看视频教程吧

## 1.安装Alist，并且使用

视频教程是 Windows，Linux一键脚本，docker

<BiliBili bvid="BV1kP411J7YN" />

### 安装以及脚本

1. Alist Windows启动脚本(开机自启可用)：
   - 如何添加开机自启查看下面：**[BV1DG411s7j5](https://www.bilibili.com/video/BV1DG411s7j5?t=266.0)**
2. **AList** 手动下载GitHub地址:**https://github.com/alist-org/alist/releases**
3. 路由器等**opwert**安装(大白维护编译发布的)：**https://github.com/sbwml/luci-app-alist**
4. 群辉NAS安装：
   - Dsm6.x矿神SPK套件源：https://spk.imnks.com/
   - Dsm7.x矿神SPK套件源：https://spk7.imnks.com/

### 安装后查看密码

1. **Windows：alist.exe admin**
2. **Linux	 :** **./alist admin**
3. **docker	 :** **docker exec -it alist ./alist admin**
   - 注：**Windows，Linux**，要到文件的的目录里面去执行喔~
     - **比如下图的，Alist执行程序在V3这个文件夹，我们就要进入V3这个文件夹在执行命令**
     - ![](/img/home/01-install.png)
     
   - **Linux**：一键脚本安装的在 **`/opt/alist`**
	  1. **我们就输入** **`cd /opt/alist `**,进入alist文件夹
      2. **我们再输入查看密码命令 /alist admin**
      3. **如果是自定义就自己 cd 进入你安装的文件夹里面去就行，不多说了**

#### 坑^1^:有的人说手动查看的密码和脚本启动查看的密码不一样..就是因为没有手动进入哪个Alist程序所在的文件夹查看密码导致的.....

**比如下图图所示.**

![](/img/home/01-keng.png)

<br>

## 2.Alist进阶用法

**[加密](#_2-1-加密) / [隐藏](#_2-2-隐藏) / [2FA](#_2-3-2fa)/ [别名](#_2-4-别名) / [地址树](#_2-5-地址树) / [虚拟路径](#_2-6-虚拟路径)/ [挂载取消](#_2-8-挂载取消)/ [用户管理](#_2-9-用户管理)/ [负载均衡](#_2-9-负载均衡) / [Readme](#_2-10-readme) / [单点登录](#_2-11-单点登录)/  [IOS安装](#_2-12-ios16-ipa安装-永久安装) / [离线下载](#_2-13-alist时候aria2离线下载)/ [改数据库](#_2-14-修改alist使用的数据库为mysql)**

<BiliBili bvid="BV18e411M7Hn" />

### 2.1 - 加密

![](/img/home/02-jiami.png)

加密很简单，就是加访问密码

- 以前路径是得手写，现在可以右侧手动选择

- 密码如果不勾选后面的 应用到子文件 ，如果知道你文件夹里面的某个文件或者文件夹能直接访问

  - **比如**

    - **没勾**选应用到子文件：alist.pan.com/ce/图片	:heavy_check_mark:	知道你里面的文件夹能直接访问

    - **勾**选应用到子文件：alist.pan.com/ce/图片	:x:	就算知道也访问不进去...

<br>

### 2.2 - 隐藏

![](/img/home/03-yincnag.png)

开始的两个正则表达式写法先不用管，我们看下面。

左侧是隐藏后，右侧是还没隐藏的。

我们把 **139 189 Alist** 三个文件夹隐藏了先，输入好保存后，我们保存看到左侧是已经看不到我们刚刚隐藏的三个文件夹了，

当然了你可以用正则表达式写.....具体怎么用看这里[**正则表达式 – 语法 | 菜鸟教程**](https://www.runoob.com/regexp/regexp-syntax.html),下面我举了几个例子

如果你想使用正则表达式，用法如下：

- **^** 匹配开始位置		**$** 匹配结束位置：		
  - **^index	——> 隐藏以** **index** **开头的**	
  - **ipa$		——> 隐藏以** **ipa** **结尾的**
  - **[^\w]**	**——> 隐藏全部汉字开头的文件和文件夹**
  - **[^\w]**	**——> 隐藏全部非汉字开头的文件和文件夹，就是全部符合开头的[a-z A-Z 0-9]**
  - **[^A-Z] 表示一个区间，匹配所有大写字母，[^a-z] 表示所有小写字母。**

- **比如你要隐藏mp4，jpg，png这几种类型**
  - **mp4$   png$  jpg$**，写进隐藏选项里面，一行一个喔~

<br>

### 2.3 - 2FA

2FA，就是登录管理员账号的时需要二次验证，挺安全的.哈哈

![](/img/home/03-2fa.gif)

打开手机的 **Authentiacator(各大应用商店都有下载)** 扫码，扫描后能看到一个 **Alist** 的添加进去了，把下面的6位随机数填进后台哪个输入验证码哪里即可

![](/img/home/03-2fa.jpg)

这样就绑定好了，你下次登录管理员账号的时候会找你要一个OPT代码，哪个代码就是这个六位随机数.

有的人就是想试试这个是什么玩意，干嘛用的，发现每次登录都需要这个验证码好麻烦怎么解绑吖。

#### **如何解除2FA验证：**

-  [**如何进入Alist所在的文件夹**](#安装后查看密码)

  1. **Windows**：进入到Alist所在的文件夹，具体怎么进看上面的提示然后输入:**alist.exe cancel2fa**

  2. **Linux**	：也一样进入Alist所在的文件夹输入，**./alist cancel2fa**

  3. **docker**	：docker直接输入 **docker exec -it alist ./alist cancel2fa**

- **以上输入删除后发现还有重启即可~**

<br>

### 2.4 - 别名

`别名-alias`是什么？  `别名-alias`是路径合并的功能



除了 **`下载预览(只读)`**  操作之外    ^(复制,删除,重命名,离线下载,上传)^ 均不可以

举个例子：云盘账号1、云盘账号2 里面均有`电影`这个文件夹，但内容未必(全部)重合

**`以前(虚拟路径)`**：只能分别挂载到两个不同的路径上（云盘1/电影 ，云盘2/电影）或者（电影\云盘1，电影\云盘2）
**`现在(alias)`**：提供一个聚合的文件夹 （电影）里面可以同时包含云盘1和云盘2的内容



展示时文件夹内容规则如下

1. 同名合并：文件(夹)一样的自动合并成一个
2. 同名优先：访问资源时，每次固定访问填写路径时顶部(靠前)的那个路径文件(夹)
   - 若同名文件合并后，点击 **`播放，下载`** 时优先调用填写 `Paths` 时最靠前使用302模式路径的文件




下面解释一下 **`同名优先²`** 访问规则，强烈建议查看个举例都查看

:::tabs#alias

@tab 例1

例1、 根据下面路径填写访问(302模式有优先权)

```
本地:/本地测试/本地1
本地:/本地测试/本地2
本地:/本地测试/本地3
本地:/本地测试/本地4
```

- 1，一个视频 1 2 3 4 都有的话每次访问的是 `1`
  - 如果1 3 4 使用的本地代理，2 使用的`302`，优先调用 2

- 2，一个视频 3 4 有 那么每次访问的都是`3`
  - 如果 3 使用的本地代理，4 使用的`302`，优先调用 4


@tab 例2

例2、根据下面的路径填写访问(302模式有优先权)

```
本地:/本地测试/本地4
本地:/本地测试/本地3
本地:/本地测试/本地2
本地:/本地测试/本地1
```

- 1，一个视频 1 2 3 4 都有的话每次访问的是 `4`
  - 如果1 3 4 使用的本地代理，2 使用的`302`，优先调用 2

- 2，一个视频 2 4 有 那么每次访问的都是`4`
  - 如果 4 使用的本地代理，2 使用的`302`，优先调用 2

@tab 例3

例3、根据下面的路径填写访问(302模式有优先权)

当然了不限于只有2个文件夹，根据个人需求来写即可

```
本地测试:/本地1/video
本地测试:/本地2/video
测试其他:/测试3/images
测试其他:/测试4/video/电视
```

- 本地1 本地2 合并在一起了
  - 如果2 使用的本地代理，1 使用的`302`，优先调用 2
- 测试3 测试4 合并在一起了
  - 如果3 使用的本地代理，4 使用的`302`，优先调用 4
- 以上两种情况会出现两个不同的文件夹来展示，会如下展示，不会互相干扰

![](/img/home/alias-3.png)

:::

我们先看一张示意图

![](/img/home/alias.png)

我们看到两个不同的文件夹合并在一个文件夹里面了，名字一样的文件文件夹也都合并在一起了，独有的单独显示了

- 例1 `riluo.jpg` 是本地1 独有的，在上面显示了

- 例2 两个文件夹都有`video`文件夹，但是里面的内容也会进行合并，子文件夹也同样适用于`同名合并`的展示规则
  - 两个文件夹分别有两个视频，但是有一个是同名的，最后根据 `同名合并` 的展示规则 合并后 变成了`3`个文件进行展示

#### 填写方式

填写方式有两种

1. 第一种是只可以填写子文件夹路径并且最后结尾时必须同名文件夹才可以，不推荐使用 :x:

   - Paths填写示例：

     ```path
     /本地1/本地
     /本地2/本地
     ```

     

2. 第二种是可以直接挂载根文件夹路径，利用重命名的方式，强烈推荐使用  :heavy_check_mark:

   - Paths填写示例：

     ```path
     #示例1 直接写根文件夹
     本地:/本地1
     本地:/本地2
     
     #示例2 挂载不同路径文件夹进行合并
     测试:/本地1/本地测试233
     测试:/本地2/视频/电视剧
     测试:/本地2/电视/国产电视剧/某某台
     ```
     

根据第二种这样我们可以将不同的文件夹进行合并展示，方便快捷



#### 如果你不知道你添加的云盘是什么方式怎么办?

1. 可以前往文档的相对应的文档最底部查看，有一份流程图说明 

   - 如果有302的就是默认使用302方式，如果只有本地代理和下载代理URL默认的就是使用本地代理，前提是你没有进行手动选择

2. 可以前往添加存储时进行查看，选择对应的存储进行查看，例如我们查看一下阿里云和115分别是什么 方式

   - 从下图中看到，阿里云盘有 `web代理`选择，`webdav策略`默认是302，可以判断出阿里云盘默认使用的是302方式
   - 从下图中看到，115网盘没有 `web代理`选择，`webdav策略`默认是本地代理，可以判断出115网盘默认使用的是本地代理方式

   - ![](/img/home/alias-2.png)



#### 其他说明

> 如果你是使用的`Windows`，会出现如下情况，有大小写不同的文件夹也会进行二次生成
> 例如本地1，本地2 分别有 `video` 小写的v ，文件夹 OneDrive 有一个大写的 V  `Video` 文件夹
> 然后会生成一个小写的 video文件夹里面只有 `本地1，本地2` 两个的文件夹所合并的文件
> 同时 大写的 `Video` 里面 会集合三个文件夹的文件

这是因为Windows 大小写不敏感，video和Video会被认为是同一个文件夹,你换成Linux或者Mac就不会有这个问题了

> 暂时不支持别名进行负载均衡（后期若支持了这里会进行文档修改，如果没有修改就是还不支持）

<br>

### 2.5 - 地址树

#### 用法

具体的用法大概讲解一下，建议将下面不同用法都看看越往后越进阶玩法

别看写的看起来很难很啰嗦实际上自己操作一下秒懂。

:::tabs#UrlTree
@tab 1

<Badge text="1" type="info" vertical="middle" />最简单的用法，直接写链接即可

##### 输入

``` 
http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg
https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md
```

##### 输出

```
│ aff9c9c8817d943d6857a73188958d45.jpeg
│ README_cn.md
```



@tab 2

<Badge text="2" type="info" vertical="middle" />有文件的同时，也可以创建文件夹^第一个代码示例^，也可以创建多个文件夹^第二个代码示例^

##### 输入

``` 
http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg
folder:
  http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg
  https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md
```
``` 
http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg
folder:
  http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg
  https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md
http://pic.rmb.bdstatic.com/bjh/a66923e9bfefd03c2998ee998d3b55e7.jpeg
folde2r:
  http://pic.rmb.bdstatic.com/bjh/e919290bf3b8396817d369cedf33b8cd.jpeg
  https://raw.githubusercontent.com/alist-org/alist/main/CONTRIBUTING.md
```

##### 输出

```
│  aff9c9c8817d943d6857a73188958d45.jpeg
└─folder
        aff9c9c8817d943d6857a73188958d45.jpeg
        README_cn.md
```

```
│  	aff9c9c8817d943d6857a73188958d45.jpeg
├─folder
│      aff9c9c8817d943d6857a73188958d45.jpeg
│      README_cn.md
│
├─	a66923e9bfefd03c2998ee998d3b55e7.jpeg
│
└─folder2
        CONTRIBUTING.md
        e919290bf3b8396817d369cedf33b8cd.jpeg
```

开头要空两个空格~



@tab 3

<Badge text="3" type="info" vertical="middle" />可以将文件资源二次命名，实际上下载的还是原来的，并且可以填写文件大小

格式：`新命名的名字.后缀:文件大小:链接.后缀`

```
新名称.jpeg:1024:http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg
新名称2.md:2048:https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md
```

文件大小不用写也是可以重新命名的

```
新名称.jpeg:1024:http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg
新名称2.md:2048:https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md
```



@tab 4

<Badge text="4" type="info" vertical="middle" />多个层级目录套娃玩法

- 第一层目录文件夹不需要空格，但是第一层目录里面的文件需要空两个空格

```
folder:
  http://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg
  https://raw.githubusercontent.com/alist-org/alist/main/README_cn.md
```



- 如果你写好第一层了还想在第一个文件夹里面再套一个那就在这个文件夹下面套一层，写法如下，很简单
  - 目录进行空两格，文件加两个空格就是四个，如果继续想往下套一层继续加2个空格即可

```
folder11:
  http://pic.rmb.bdstatic.com/bjh/111.jpeg
  folder111:
    http://pic.rmb.bdstatic.com/bjh/111.jpeg
    folder1111:
      http://pic.rmb.bdstatic.com/bjh/111.jpeg
  folder222:
    http://pic.rmb.bdstatic.com/bjh/222.jpeg
    folder2222:
      http://pic.rmb.bdstatic.com/bjh/222.jpeg
folder22:
  http://pic.rmb.bdstatic.com/bjh/222.jpeg
  folder222:
    http://pic.rmb.bdstatic.com/bjh/222.jpeg
    folder2222:
      http://pic.rmb.bdstatic.com/bjh/2223.jpeg
folder33:
  http://pic.rmb.bdstatic.com/bjh/333.jpeg
  folder333:
    http://pic.rmb.bdstatic.com/bjh/333.jpeg
    folder3333:
      http://pic.rmb.bdstatic.com/bjh/333.jpeg
```



- 不建议的写法，像 **`2.jpeg，5.jpeg`** 这样写法，建议想往那一层文件夹就去那一层文件夹增加链接按照格式，不要这样下面这样写

##### 错误写法

```
folder22:
  http://pic.rmb.bdstatic.com/bjh/222.jpeg
  folder222:
    http://pic.rmb.bdstatic.com/bjh/222.jpeg
    folder2222:
      http://pic.rmb.bdstatic.com/bjh/2222.jpeg
      folder22222:
        http://pic.rmb.bdstatic.com/bjh/2222.jpeg
        folder222222:
          http://pic.rmb.bdstatic.com/bjh/2222.jpeg
    http://pic.rmb.bdstatic.com/bjh/2.jpeg
        http://pic.rmb.bdstatic.com/bjh/5.jpeg
```

##### 正确写法

像 **`2.jpeg，5.jpeg`** 这样文件添加时候，添加到对应的目录里面去，分别对应的是 `folder222 和 folder22222` 两个文件夹

```
folder22:
  http://pic.rmb.bdstatic.com/bjh/222.jpeg
  folder222:
    http://pic.rmb.bdstatic.com/bjh/222.jpeg
    http://pic.rmb.bdstatic.com/bjh/2.jpeg
    folder2222:
      http://pic.rmb.bdstatic.com/bjh/2222.jpeg
      folder22222:
        http://pic.rmb.bdstatic.com/bjh/2222.jpeg
        http://pic.rmb.bdstatic.com/bjh/5.jpeg
        folder222222:
          http://pic.rmb.bdstatic.com/bjh/2222.jpeg
```

@tab 5

<Badge text="5" type="info" vertical="middle" />全部整合起来的举例用法，有常规的，有分类，有重命名，有标注文件大小

```
https://jsd.nn.ci/gh/alist-org/alist/README.md
文档:
  Readme.md:https://pic.rmb.bdstatic.com/bjh/说明.md
  Doc:
    文档.doc:https://pic.rmb.bdstatic.com/bjh/测试文档.doc
  pdf:
    pdf2.pdf:https://pic.rmb.bdstatic.com/bjh/测试.pdf
  Excel:
    表格3.xlsx:https://pic.rmb.bdstatic.com/bjh/测试表格.xlsx 
视频:
  https://pic.rmb.bdstatic.com/bjh/222.jpeg
  电视剧:
    https://pic.rmb.bdstatic.com/bjh/222.pm4
  电影:
    https://pic.rmb.bdstatic.com/bjh/222.flv
音乐:
  https://pic.rmb.bdstatic.com/bjh/222.jpeg
  古典:
    https://pic.rmb.bdstatic.com/bjh/222.mp3
  轻音乐:
    https://pic.rmb.bdstatic.com/bjh/222.flac
    https://pic.rmb.bdstatic.com/bjh/222.wav
软件:
  https://pic.rmb.bdstatic.com/bjh/222.jpeg
  PJ:
    xx软件.exe:252525:https://pic.rmb.bdstatic.com/bjh/222.exe
    xx安装包.zip:259555:https://pic.rmb.bdstatic.com/bjh/222.zip
  IPA:
    GPT.ipa:https://pic.rmb.bdstatic.com/bjh/222.ipa
  APK:
    P图.apk:https://pic.rmb.bdstatic.com/bjh/222.apk
```

:::

#### 提示

1. 如果你点击下载发现没有跳转到下载而是预览，这是因为是根据你原本链接来决定的,例如你原本的链接就是下载他就会跳转到下载
2. 如果你一个文件夹内有相同的文件，会合并只显示一个，默认使用预览查看下载的是你靠上(前)也就是顶部的文件
   - Tips:请勿同时在一个目录内新建两个同名的文件/夹哦~就像你在资源管理器新建两个一样的文件/夹 都会提醒你不能重复
3. 如果你在添加时在同级目录下写了两个相同的文件夹名字，会合并成一个文件夹但是合并后靠后(下)的文件夹的文件不会显示，但是可以通过浏览器地址栏访问（参考上一条的提示）
4. 排序默认是按照你填写从上到下依次排序的和 `alist-别名`的一样

<br>

### 2.6 - 虚拟路径

虚拟路径就是创建一个假的路径，创建一个二级目录，方便我们整理挂载（我是这么理解的），不理解也没事儿，我举个栗子~

**没用虚拟路径情况下	：**

- **比如我们要挂载天翼云盘，天翼云盘不是有个人云盘和家庭云盘吗**
- **我们挂载的时候就写：	天翼云盘个人云	天翼云盘家庭云	这两个，到时候会在根目录占用两个文件夹显示。**

**用了虚拟路径情况下	：**

- **我们挂载的时候就写：	天翼云/天翼云盘个人云	天翼云/天翼云盘家庭云	这两个，到时候会在根目录占用一个文件夹显示，显示的是天翼云这个目录，我们点进去才会显示另外两个**



**以上情况比如在你添加几十个挂载的时候你总不能都挂载到根目录来吧**

- **现在不是可以挂载阿里云盘分享链接吗?你挂载别人的分享链接，挂了几十个到时候多不好看都在根目录**

- **我们就用虚拟路径来写，添加挂载的时候 这样写，**
  1. **阿里云盘分享/动漫**
  2. **阿里云盘分享/电影**
  3. **阿里云盘分享/韩剧**
  4. **阿里云盘分享/美剧**
  5. **………………**
  6. **阿里云盘分享/电视剧**

**这样写到时候在根目录显示的只有一个阿里云盘分享文件夹，看起来多舒服~**

![](/img/home/04-xuni.png)

   - **比如我这样这其实是我在后台挂载了三个阿里云盘的文件夹这样写看起来好多啦~**

<br>

### 2.7 - 挂载取消

这个就很好理解什么意思了

之前在V2版本的时候，比如我某个网盘不想挂载了，我得删除了它不然别还是能访问（不加密码不隐藏）

现在在V3版本不用删除了，直接到后台 --- 存储 取消挂载就行，等你想挂载的时候点击启用即可恢复挂载~

![](/img/home/05-quxiao.png)

<br>

### 2.8 - 用户管理

用户管理也很好理解，

1. V2版本的时候只有一个 admin（管理员）的账号可以登录，有些不方便
2. V3版本大家可以自己添加不是管理员的用户了，并且还能只让他看到指定的文件夹(不过现在只能指定一个文件夹)，同时呢也能授予不同的权限，下面的权限自己选择吧~就不多说了，大家自己体验吧~

![](/img/home/06-user.png)

<br>

### 2.9 - 负载均衡

负载均衡也很简单

继续举栗子，比如阿里云盘流量大不是会封号吗，那我们弄十几个，甚至几十个来分流 负载~这样请求下载的时候就不会每次都是一个云盘了导致封号了，下载的时候轮着对负载的网盘下载，

进行负载均衡的网盘可以不是一样的网盘，但是文件结构目录要一样，就是这个挂载的文件夹打开是什么样子的，哪些进行负载均衡的网盘打开就是什么样子的

添加方式，我们先添加一个网盘进行挂载，就叫：**动漫合集分享** 这个名字吧，

我们进行负载的就要这么写

   -  存储1：**动漫合集分享	（这个是我第一次要挂载的）**
   -  存储2：**动漫合集分享**.balance1
   -  存储3：**动漫合集分享**.balance阿里云
   -  存储4：**动漫合集分享**.balance天翼
   -  存储5：**动漫合集分享**.balance阿巴巴巴

  - 主挂载的网盘名.balance这里随便写	——> 开始是哪个要进行负载均衡的网盘 然后是 .balance 这个是进行负载用的,写好后后面就随便写了(就当是备注吧) 格式就是这样的,

负载均衡的挂载好了但是不会在主页显示，只会在后台有显示~大家可以试试效果如何~

<br>

### 2.10 - Readme

Readme也很简单，就是一个类似说明的东西吧

![](/img/home/08-fuzai.png)

**添加方式：后台——>元信息——>添加——>说明**

![](/img/home/08-2fuzai.png)

**添加的时候可以直接写 Markdown语法，也能放一个链接，自己写语法和链接只能二选一哦**

[Markdown | Nice](https://editor.mdnice.com/)，[MD语法 教程 | 菜鸟教程](https://www.runoob.com/markdown/md-tutorial.html)，[MD语法-CSDN](https://blog.csdn.net/rice2020/article/details/126075809)，[md语法-码农教程](http://www.manongjc.com/detail/26-rzbuenlpearlgfm.html)

路径自己选择，当然了这个可以和之前写好的加密 隐藏里面一起混合使用，默认是只会出现在你指定的目录里面显示，如果你想着要在下级目录所有的文件夹里面显示的话就勾选后面的应用到子文件

比如：我想在根目录添加，知道怎么添加

可以在路径哪里写		：	/

然后说明里面写你的内容	：	语法或者链接二选一自己选择

应用到子文件夹		：	**☑** 

这样就添加好了...在根目录显示并且下面所有目录都展示这个Readme说明

<br>

### 2.11 - 单点登录

支持 钉钉微软 谷歌 GitHub 四种不同的登录方式

::: warning 注意事项

1. AList 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用

2. 四种单点登录暂时只能启用一种，如果你之前用的是别的单点登录方式然后换了新的单点登录方式 那么你回到个人资料绑定的时候需要先将之前的解绑（点击一下即可）然后再绑定现在你要使用的单点登录方式。

:::



::::tabs#sso

@tab GitHub

::: warning
若想使用GitHub登录，首选需要你搭建Alist的机器能连接访问GitHub才可以调用使用，不然连接不上无法使用
:::



打开 **https://github.com/settings/developers**  点击  **`New OAuth App`**

### Register OAuth 填写说明


- Application name
  - 随便写想叫什么叫什么
- ==**Homepage URL**== 
  - 主页网址地址
    - 可以使用http https都可以
- Application description
  - 随便写
- ==**Authorization callback URL**==
  - 回调URL地址
  - **https://你的域名/api/auth/sso_callback**
    - 可以使用http https都可以



填写完毕后记得获取一下 **Client secrets**，然后填写到Alist后台。




#### 完整填写参考示意图

![sso](/img/home/github.png)



### 视频教程

<BiliBili bvid="BV1KA41117m5" />

**视频若失效可以前往观看: https://b23.tv/Fm8AkC5**

@tab 钉钉



首先打开 **https://open-dev.dingtalk.com/fe/app#/corp/app**

右上角先 `新建应用`，类型选择 `H5微应用` ,内容自己填写点击确认创建

点击新建好好的应用我们就会看到应用凭证选项，里面的 `AppKey` 就是客户端ID，`AppSecret` 是客户端秘钥

- 填写到Alist后台单点登录内对应的参数即可

来到左侧栏找到 `登录与分享`  ==填写回调参数 **`http://127.0.0.1:5234/api/auth/sso_callback`**== 

```回调参数示例
http://127.0.0.1:5244/api/auth/sso_callback
```

- 注：我这里回调参数是本地测试就使用了 http://127.x 大家使用的时候写 **http(s)://自己域名/api/auth/sso_callback**

回调参数写好好我们来到左侧栏找到 `权限管理` 找到 **`通讯录个人信息读权限`** 然后点击进行授权

Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用

#### 完整填写参考示意图

![](/img/home/dingding.png)



@tab 微软

首先打开 **https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade**

然后注册创建应用，我这里就不多说了可以看完整示意图

账户类型必须选择：**任何组织目录(任何 Azure AD 目录 - 多租户)中的帐户**

微软回调参数：必须以"HTTPS"或"http://localhost开头 （我这里是本地测试就用了localhost）

```回调参数示例
http://localhost:5244/api/auth/sso_callback?method=sso_get_token
http://localhost:5244/api/auth/sso_callback?method=get_sso_id
```
- 大家使用的时候写 **http(s)://自己域名/api/auth/sso_callback?method=sso_get_token**
- 大家使用的时候写 **http(s)://自己域名/api/auth/sso_callback?method=get_sso_id**
- 注：在新建应用时添加重定向URL的时候只能添加一条，第二条等应用好注册好后点击应用看到 重定向 URI 后面的选项

填写好后我们点击左侧栏的 `证书和密码` 新建一个 `客户端密码`即可获得我们的客户端秘钥

- 客户端密码创建好后 **`值`** 参数是我们的`客户端秘钥`，记得保存，出现一次就不会在出现了，如果没有及时保存新建一个客户端密码即可

客户端ID在左侧栏顶部的 `概述`，找到 应用程序(客户端)ID 就是我们需要填写到Alist里面的客户端ID

- 客户端ID和秘钥我们都拿到了填写到AList单点登录配置里面去即可


Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用



#### 完整填写参考示意图

![](/img/home/weiruan.png)



@tab 谷歌

::: warning
若想使用Google登录，首选需要你搭建Alist的机器能连接访问Google才可以调用使用，不然连接不上无法使用
:::

1. 首先打开 **https://console.cloud.google.com/projectselector2/apis/dashboard?hl=zh-cn**

2. 如果是第一次使用需要先新建一个项目（随便写就行，如果已创建跳过）

3. 然后配置[同意屏幕](#同意屏幕配置)（如何配置文档中有单独说明，如果已经配置好跳过）

4. 配置好统一屏幕后我们点左侧的凭据，创建凭据，选择OAuth 客户端ID

- 应用类型 选择 Web 应用，名称随便写
- 然后在 已获授权的重定向 URI 添加我们的两个回调参数
```回调参数示例
http://127.0.0.1:5244/api/auth/sso_callback?method=get_sso_id
http://127.0.0.1:5244/api/auth/sso_callback?method=sso_get_token
```
- 大家使用的时候写 **http(s)://自己域名/api/auth/sso_callback?method=get_sso_id**
- 大家使用的时候写 **http(s)://自己域名/api/auth/sso_callback?method=sso_get_token**

填写好后，点击创建就能拿到  OAuth的客户端ID和秘钥

- （在这里如果你不小心关闭了也没关系，点击我们创建的应用名称进去在右上的位置就能看到）

客户端ID和秘钥我们都拿到了填写到AList单点登录配置里面去即可

Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用

#### 同意屏幕配置

如已配置好 忽略本图即可(如果看不清楚可以放大)

![](/img/home/Google-6.png)

#### 完整填写参考示意图

![](/img/home/google.png)

::::

<br>



### 2.12 - IOS16 IPA安装 & 永久安装

<BiliBili bvid="BV1bT411N7tT" />

1. **我使用的Git命令窗口:**		[**https://git-scm.com/download/win**](https://git-scm.com/download/win)
2. **iPhone 装IPA文档地址：**		[**https://alist.nn.ci/zh/guide/advanced/ipa.html**](https://alist.nn.ci/zh/guide/advanced/ipa.html)
3. **IPA文件重命名软件下载地址**	[**https://github.com/Xhofe/ipa-renamer/releases**](https://github.com/Xhofe/ipa-renamer/releases )

**如何下载 只IPA文件，看下图，有个下拉框可以选择  "download" ,即可下载.**

![](/img/home/iosdw.png)

#### **上面的视频只是教如何修改IOS16包名，跟下面的永久安装IPA无关喔~**

<BiliBili bvid="BV1kX4y1X7vo" />



#### 如何永久安装 IPA

使用以下两款软件即可~但是有系统要求的喔~大概的看一下下面的表格里面的吧~再详情具体的可以点进去自己查看~

- TrollStore：https://github.com/opa334/TrollStore/
- 轻松签+    ：https://esign.yyyue.xyz/

手机用户看的话记得右侧还有哦~记得滑动一下

|     开始     |     截止     |                       arm64 (A8 - A11)                       |                 arm64e (A12 - A17 / M1 - M2)                 |
| :----------: | :----------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|  13.7及更早  |  13.7及更早  |                            不支持                            |                            不支持                            |
|     14.0     |    14.8.1    | [Installing TrollStore (TrollHelper)](https://ios.cfw.guide/installing-trollhelper) | [Installing TrollStore (TrollHelperOTA)](https://ios.cfw.guide/installing-trollhelperota) |
|     15.0     | 15.5 beta 4  | [Installing TrollStore (TrollHelperOTA)](https://ios.cfw.guide/installing-trollhelperota) | [Installing TrollStore (TrollHelperOTA)](https://ios.cfw.guide/installing-trollhelperota) |
|     15.5     |     15.5     | [Installing TrollStore (TrollInstallerMDC)](https://ios.cfw.guide/installing-trollhelper-mdc) | [Installing TrollStore (TrollHelperOTA)](https://ios.cfw.guide/installing-trollhelperota) |
| 15.6 beta 1  | 15.6 beta 5  | [Installing TrollStore (TrollHelperOTA)](https://ios.cfw.guide/installing-trollhelperota) | [Installing TrollStore (TrollHelperOTA)](https://ios.cfw.guide/installing-trollhelperota) |
|     15.6     |    15.6.1    | [Installing TrollStore (TrollInstallerMDC)](https://ios.cfw.guide/installing-trollhelper-mdc) | [Installing TrollStore (TrollHelperOTA)](https://ios.cfw.guide/installing-trollhelperota) |
|     15.7     |    15.7.1    | [Installing TrollStore (TrollInstallerMDC)](https://ios.cfw.guide/installing-trollhelper-mdc) | [Installing TrollStore (TrollInstallerMDC)](https://ios.cfw.guide/installing-trollhelper-mdc) |
|    15.7.2    |    15.8.1    | [Installing TrollStore (TrollMisaka)](https://ios.cfw.guide/installing-trollhelper-trollmisaka) | [Installing TrollStore (TrollMisaka)](https://ios.cfw.guide/installing-trollhelper-trollmisaka) |
|     16.0     |    16.1.2    | [Installing TrollStore (TrollInstallerMDC)](https://ios.cfw.guide/installing-trollhelper-mdc) | [Installing TrollStore (TrollInstallerMDC)](https://ios.cfw.guide/installing-trollhelper-mdc) |
|     16.2     |    16.6.1    | [Installing TrollStore (TrollStar)](https://ios.cfw.guide/installing-trollhelper-trollstar) | [Installing TrollStore (TrollStar)](https://ios.cfw.guide/installing-trollhelper-trollstar) |
|   16.7 RC    |   16.7 RC    | [Installing TrollStore (TrollHelper)](https://ios.cfw.guide/installing-trollhelper) |                 没有安装方法（等待后续完善）                 |
|     16.7     |    16.7.5    |                            不支持                            |                            不支持                            |
|     17.0     |     17.0     | [Installing TrollStore (TrollHelper)](https://ios.cfw.guide/installing-trollhelper) |                 没有安装方法（等待后续完善）                 |
| 17.0.1及以后 | 17.0.1及以后 |                            不支持                            |                            不支持                            |

|      |  轻松签  |                     轻松签+ A12+                     |                    轻松签+ iOS15+                    |
| :--: | :------: | :--------------------------------------------------: | :--------------------------------------------------: |
| CPU  |   All    |                      A12 - A15                       |                         All                          |
| 设备 | 任意设备 |                   iPhone XS/XR-13                    |                       任意设备                       |
| 系统 |  iOS12+  | iOS14.0 - 15.4.1 iOS15.5 beta1 - 4 iOS15.6 beta1 - 5 | iOS15.0 - 15.4.1 iOS15.5 beta1 - 4 iOS15.6 beta1 - 5 |
| 证书 |   需要   |                        不需要                        |                        不需要                        |

**具体如果使用，十分的简单，我就不说教程啦~自己看吧里面都有教程**

如果你不是以上版本的没办法永久安装，但是又想自己安装，那只能买证书自己签名然后安装了，右侧哪个 轻松签，里面有卖证书的 自己看吧...

<br>



### 2.13 - AList离线下载

::::tabs#lixian

@tab Aria2

<BiliBili bvid="BV1ie411T7oD" />

**我使用的「Aria2.zip」：**[**https://www.alipan.com/s/CY61gzf7zV4**](https://www.alipan.com/s/CY61gzf7zV4)

#### 纠正说明：

我发布视频没多久就更新了，将哪个填写**下载目录**的选项取消了，(老是有人问我怎么没看到哪个选项...)
没关系的，这样更方便了，我们直接去你想添加Aria2任务的目录里面
然后选择右下角的哪个添加Aria2任务的选项，添加好链接就开始下载了
除了这个填写下载目录的没了其他的没变化，如果不懂可以看下这个图

![](/img/home/lixianpng.png)

比如我想把我要离线的文件离线到 **189CloudFamliy** 这个目录里面来，那我进入到**189CloudFamliy** 这个文件夹，然后在右下角选择添加到Aria2下载，填入我们要离线下载的链接即可~就会离线下载到 **189CloudFamliy** 这个文件夹里面了把文件~

@tab qBittorrent

详细的可以去看AList文档：https://alist.nn.ci/zh/guide/advanced/offline-download.html#_2-qbittorrent

<BiliBili bvid="BV1NT411q7EN" />

<BiliBili bvid="BV1NT411q7EN" />

::::

<br>



### 2.14 - 修改Alist使用的数据库为MySQL

有的人不想用Sqlite3数据库,想换成MySql数据库，自己看教程吧~😁

虽然我也换成了MySQL数据库哈哈..挺方便的~

**Sqlite3  ——>  MySQL**  转换的时候有一个小坑噢~就是时间写法不一样具体看视频吧

<BiliBili bvid="BV1iV4y1T7kh" />
