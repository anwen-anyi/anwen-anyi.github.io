---
# 这是文章的标题
title: AList如何在安卓手机安装
# 这是页面的图标
icon: fa-solid fa-rocket-launch
# 这是侧边栏的顺序
order: 10
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
  - Android
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

想在安卓运行AList我们需要使用 `termux` 来运行

Termux官网：**https://termux.dev/cn/index.html**

<br/>



## **下载地址**

::: center

<VPCard
  title="F-Droid"
  desc="‪ "
  logo="/img/termux/fdroid-logo.svg"
  link="https://f-droid.org/zh_Hans/packages/com.termux"
  background="rgba(253, 230, 138, 0.15)"
/>

<VPCard
  title="GitHub"
  desc="‪ "
  logo="/img/termux/github.svg"
  link="https://github.com/termux/termux-app/releases"
  background="rgba(253, 230, 138, 0.15)"
/>

<VPCard
  title="阿里云盘备份"
  desc="‪ "
  logo="home.png"
  link="https://www.alipan.com/s/mqNwyYKCMJq"
  background="rgba(253, 230, 138, 0.15)"
/>

<VPCard
  title="百度云盘备份"
  desc="‪ "
  logo="home.png"
  link="https://pan.baidu.com/s/1EtZvTHiiZzhiKIzf3zXfXQ?pwd=anwn"
  background="rgba(253, 230, 138, 0.15)"
/>

<VPCard
  title="天翼云盘备份"
  desc="提取码: zrm9"
  logo="home.png"
  link="https://cloud.189.cn/web/share?code=3eUbuyNviUB3"
  background="rgba(253, 230, 138, 0.15)"
/>

:::

universal：通用版本兼容无论有什么架都会兼容，缺点就是比较大，正常单架构就30MB，通用的100多MB

^荐^ arm64-v8a：**64位架构常用于现在的手机，最近四五年的都支持，以及未来的手机**

armeabi-v7a：相当于手机端32位架构，N年前的老手机，

x86、x86_64：amd的？好像市场很少不 目前还没见过，可能折腾手机的见过，正常用户不用了解这个

<br/>



## **使用一键脚本安装**

安装好 `Termux` 之后，打开软件先执行一段命令更换源

```bash
sed -i 's@^\(deb.*stable main\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/apt/termux-main stable main@' $PREFIX/etc/apt/sources.list
apt update && apt upgrade
```

源获取链接：**https://mirrors.tuna.tsinghua.edu.cn/help/termux**

![](/img/termux/install_termux.png)



<br/>



更换源后我们使用一键脚步命令来安装AList（后续也有手动安装教程）

```bash
pkg install alist -y
```

等待安装 `-y` 参数是可以看到安装过程

等安装好了就会输出如下内容就代表安装好了

```bash
Preparing to unpack .../alist_3.37.1_arrch64.deb
Unpacking alist (3.37.1)...
Setting up alist (3.37.1)...
```

安装好后剩下的和正常使用 `AList` 一样了，例如先看看密码（第一次输入这个命令会出现密码，第二次就不会出现了第二次及以后需要用另一个命令）

```bash
alist admin
```

第二次就不会出现了第二次及以后需要用另一个命令

```bash
# 随机生成一个密码
./alist admin random
# 手动设置一个密码,`NEW_PASSWORD`是指你需要设置的密码
./alist admin set NEW_PASSWORD
```

然后查看一下手机的内网IP使用命令 `ifconfig` ，或者去WiFi查看

如果你不想在内网其他设备使用，直接使用120.0.0.1:5244也可以，这样只能在手机，使用内网IP可以在同一WiFi下的都能使用



<br/>

打开AList去登录后挂载本机存储驱动，可以挂载但是我们得知道我们要挂载那个路径

先使用命令看一下 `AList` 安装到了那个位置，因为我们也不知道在那个位置，使用搜索命令

```bash
~ $ whereis alist
alist: /data/data/com.termux/files/usr/bin/alist	#alist所在位置
```

不过不直接挂载这个路径，我们挂载另外一个，就是我们光标命令所在的位置

```bash
~ $ pwd
/data/data/com.termux/files/home
```

我们在 `/home` 这个路径下新建一个文件夹进行挂载

```bash
~ $ mkdir alist-temp
```

查看是否创建好了使用命令查看可以看到我们新建的文件夹，`data`文件夹是AList的数据存储文件夹

```bash{2}
~ $ ls -l
drwx------. x xx_xxxx xx_xxxx xxxx xxx x xx xx alist-temp
drwx------. x xx_xxxx xx_xxxx xxxx xxx x xx xx data
```

在 `AList` 根文件夹路径填写 **/data/data/com.termux/files/home/alist-temp** 然后保存

保存后我们使用 内网ip:5244去打开，登录帐号密码，提示 `permission denied`（表示没权限）

```txt
failed get objs: faile to list objs: open /data/data/com.termux/files/home: permission denied
```

1. 长按 `termux` 应用图标进入应用信息 :point_right: 权限管理 :point_right: 读写手机存储 改成 **允许** 或者 **始终允许** 再不行 **运行时允许**

2. 设置 :point_right: 应用设置 :point_right: 应用管理 :point_right: 找到 `termux` :point_right: 权限管理 :point_right: 读写手机存储 改成 **允许** 或者 **始终允许** 再不行 **运行时允许**

改好权限后就可以正常访问了

<div class="image-preview2">
  <img src="/img/termux/install_alist.png" />
  <img src="/img/termux/alist_shell.png" />
</div>



<br/>



## **打开新命令窗口**

我们如果启动了命令后就无法使用命令窗口了，我们得新建一个命令窗口

在软件左上角的部分从左往右滑就能出现一个新的选项，点击 `NEW SESSION` 新建一个命令终端窗口

::: center

<img src="/img/termux/new_shell.png" style="zoom:20%;" />

:::

<br/>



## **挂载文件夹其他文件夹如何查找目录**

很简单，可以使用文件自带的文件管理(测试机是小米)、MIT管理器、ES文件管理器

<div class="image-preview">
  <img src="/img/termux/add_other.png" />
  <img src="/img/termux/mit_other.png" />
  <img src="/img/termux/es_other.png" />
</div>



<br/>



## **手动安装更新版本**

因为有时候AList的大更新/重要更新，然而我们急需更新使用，然后 `Termux` 更新的不及时，我们只好手动去下载安装更新

<br/>

 AList 在两周前已经是 <Badge text="v3.37.4" type="info" vertical="middle" /> 版本了，一键脚本还在 <Badge text="v3.37.1" type="note" vertical="middle" /> 版本

<a href="https://github.com/AlistGo/alist/releases">
    <img src="https://camo.githubusercontent.com/9c391f26faa88aeda3edceafdb035e63e70b29f569fe861b77c4df634baad4c4/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f72656c656173652f58686f66652f616c697374" alt="latest version" data-canonical-src="https://img.shields.io/github/release/Xhofe/alist" style="max-width: 100%;">
  </a>

```bash
Preparing to unpack .../alist_3.37.1_arrch64.deb
Unpacking alist (3.37.1)...
Setting up alist (3.37.1)...
```

我们之前不是挂载了  **/data/data/com.termux/files/home/alist-temp** 这个路径吗

![](/img/termux/add_alist_temp.png)

然后去 [**AList Github**](https://github.com/AlistGo/alist/releases) 下载 ，我们只需要下载 **alist-android-arm64.tar.gz** 这个版本就行(第四个)

- 下载好后解压出来，可能需要解压两次，第一次解压出来还是压缩包格式 `alist-android-arm64.tar` 再解压一次就是 `alist`
- 然后上传到 **/data/data/com.termux/files/home/alist-temp** 这个路径下使用 AList的上传功能，进行上传

<br/>

上传好后查询，已经有文件了

```yaml{10} title="bash"
~ $ pwd
/data/data/com.termux/files/home
~ $ ls
alist-temp  data
~ $ cd alist-temp/
~/alist-temp $ ls								#查询目录內文件 // [!code focus]
termux-app_v0.118.1+github-debug_arm64-v8a.apk	#只有这个原本又的文件 // [!code focus]
~/alist-temp $ ls -l							#上传好后再查询// [!code focus]
total 117424 // [!code focus]
-rw-------. 1 u0_a242 u0_a242 87057520 Sep 19 01:31 alist	#可以看到已经上传好了 // [!code focus]
-rw-------. 1 u0_a242 u0_a242 33172989 Oct  1 23:05 termux-app_v0.118.1+github-debug_arm64-v8a.apk
```



等上传好了之后我们停止运行 `AList` ,

- 如何停止？我也不知道，但是可以直接把 `Termux` 直接划后台重新打开就可以

前面的都做好了，新版的AList上传好了，旧的AList停止了，我们就开始下面的步骤

```yaml title="bash"
~ $ whereis alist									#先查找alist软件所在的位置
alist: /data/data/com.termux/files/usr/bin/alist	#找到alist所在位置
~ $ rm /data/data/com.termux/files/usr/bin/alist	#删除旧的alist
~ $ whereis alist									#可以看到已经删除
alist:
~ $ ls -l											#看一下当前目录都有什么文件
total 16
drwx------. 2 u0_a242 u0_a242 4096 Oct  2 20:55 alist-temp	#我们之前提前把新版alist上传的位置
drwx------. 4 u0_a242 u0_a242 4096 Oct  1 23:37 data
~ $ pwd								#查看当前命令光标所在位置路径
/data/data/com.termux/files/home
~ $ cp /data/data/com.termux/files/home/alist-temp/alist /data/data/com.termux/files/usr/bin/	#复制新alist到旧alist位置
~ $ whereis alist											#查找alist软件所在的位置看看alist是否复制过去了
alist: /data/data/com.termux/files/usr/bin/alist			#可以看到之前删除后是空的，现在有了
~ $ alist server													#启动alist
bash: /data/data/com.termux/files/usr/bin/alist: Permission denied	#发现启动不了，没有权限
~ $ chmod +x /data/data/com.termux/files/usr/bin/alist				#使用chmod +x 进行授权
~ $ alist server													#授权后再启动alist
INFO[2024-10-02 13:33:03] reading config file: data/config.json		#启动成功
		………………………………………………………………………………………………
		………………………………………………………………………………………………
		………………………………………………………………………………………………
```

换了新版本后，重新启动可以看到已经是最新的 <Badge text="v3.37.4" type="info" vertical="middle" /> 版本

![](/img/termux/alist_version.png)



之前使用一键脚本 **`pkg install alist -y`** 命令是 v3.37.1 版本

```yaml title="bash"
Preparing to unpack .../alist_3.37.1_arrch64.deb
Unpacking alist (3.37.1)...
Setting up alist (3.37.1)...
```

