---
# 这是文章的标题
title: 常见问题
# 这是页面的图标
icon: fa-solid fa-rocket-launch
# 这是侧边栏的顺序
order: 28
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
  - 使用AList的常见问题
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

::: center
**本页面纪录一些AList中经常看到的一些问题..**
:::



## 1. 刚搭建好AList打开进去就这样是怎么回事？

![](/img/wenti/1.jpg)

这是刚搭建好还没挂载网盘，你去下面登录然后去后台添加一个账号挂载一个网盘就行

<br>

## 2. 怎么刷新应用？为什么我网盘上传后Alist没更新?

登录管理员账号的前提下，右下角就能刷新了.

如果在首页刷新不行，去你有变动的哪个文件夹里面刷新

![](/img/wenti/2.png)

<br>

## 3. 怎么打开 AList 提示 System error: TypeError:n.replaceAll is not a function？

![](/img/wenti/3.png)

现在安装的应该没了已经默认添加进去了帮你，如果你的还提示这样的那么去后台，自定义头部里面添加如下代码即可

```html
<!--Alist V3建议添加的，已经默认添加了，如果你的没有建议加上-->
<script src="https://polyfill.io/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>
```

这个 **`polyfill.min.js `** 如果觉的加载慢，可以试试这个[点击这里查看如何更换](#_28-polyfill-min-js-加载太慢怎么办)

<br>

## 4. 怎么首次打开强制默认白天或者夜间模式 ❎

~~不是很好用现在，不推荐使用，可以尝尝怎么样不建议实装~~

```javascript
<script>window.onload=function(){localStorage.setItem("hope-ui-color-mode","light")}</script>
```

```javascript
<script>window.onload=function(){localStorage.setItem("hope-ui-color-mode","dark")}</script>
```

<br>

## 5. 密码忘记了怎么办？

安装后查看密码

  1. **Windows： alist.exe admin**
  2. **Linux	 :** **./alist admin**
  3. **docker	 :** **docker exec -it alist ./alist admin**

**注：Windows，Linux**，要到文件的的目录里面去执行喔~

- **比如下图的，AList执行程序在V3这个文件夹，我们就要进入V3这个文件夹在执行命令**
- ![](/img/wenti/5.png)
- **Linux**：一键脚本安装的在 **`/opt/alist`** 
  -  **我们就输入** `cd /opt/alist`**,进入AList文件夹，**
  -  **我们再输入查看密码命令 /alist admin**
  -  **如果是自定义就自己 cd 进入你安装的文件夹里面去就行，不多说了**

<br>

## 6.挂载的网盘提示(Client. Timeout exceeded while awating headers) 

比如下图情况?当然了不止阿里这样，前面的域名会变化，后面的 **(Client. Timeout exceeded while awating headers) ，**不会变化出现如下情况 **因为网络问题，连接超时导致的**

![](/img/wenti/6.png)

![](/img/wenti/6-2.jpg)

<br>

## 7. 挂载不了谷歌网盘

如果你是国内的服务器，或者更直白的说，**你能不借助任何代理连接谷歌吗？**

国外服务器能挂，国内的不行。



<br>

## 8. 两个不同的上传有什么不同

**1️⃣ stream**直接把文件二进制内容放进body中，这样后端可以使用很少的内存，但是浏览器可能会限制大小因为要一次性把文件读进内存。

**2️⃣ form**是把文件包裹成formdata上传，后端使用的内存会多一些，但是不限制大小。  



<br>

## 9. 那些网盘是强制中转(代理)的?

夸克，迅雷**普通版**，115，或者看文档添加存储时底部的流程图



<br>

## 10. 怎么没有了推送到Aria2下载按钮？

- 需要先打开复选框，
- 然后选择好文件，
- 选好了下面有个下载按钮，
- 里面有推送到 **Aria2** ~
	- 前提是要配置好 **Aria2** 喔~

![](/img/wenti/10.png)

<br>

## 11. 怎么批量复制链接?

- 打开右下角的复选框，
- 然后去左侧选择好文件，
- 下面有个复制链接的选项，
- 具体需要哪个你自己选择即可
	- 三个选项分别是干嘛的看你自己的需求自己选择吧 我这里就不多赘述了

![](/img/wenti/11.png)

<br>

## 12. 添加挂载保存不了提示两个情况：

### 一：x_storages.mount_path

因为挂载路径是唯一的，你写的挂载路径和你现在已经挂载的路径重复了。

![](/img/wenti/12-1.png)

### 二：'MountPath' failed on the 'required' tag

你的挂载路径没写，填写一下就行。

![](/img/wenti/12-2.png)

<br>

## 13. 如何设置夜间和白天不同的logo

进入后台 ——> 样式 ——> 图标，自己设置一行一个，第一行是白天的，第二行是夜间的。

![](/img/wenti/13.png)



<br>

## 14. 登录有效期那么短就失效了

现在登录状态默认登录有效期48小时，觉的短的可以自己改，具体最长多少没试过.

位置在你Alist程序同级 **data文件夹** 里面的 **config.json** 里面修改

![](/img/wenti/14.png)

<br>

## 15. 点视频下面的potplayer播放器报错

尝试更新 **Potplayer** 更新成最新版的试试看.

网盘下载地址：[**Potplayer | 云盘下载**](https://www.aliyundrive.com/s/zvfVX9x6M1M)

或者自己去官网：[**Global Potplayer**](http://potplayer.tv/?lang=zh_CN)，[**官网64位直链下载**](https://t1.daumcdn.net/potplayer/PotPlayer/Version/Latest/PotPlayerSetup64.exe)，[**官网32位直链下载**](https://t1.daumcdn.net/potplayer/PotPlayer/Version/Latest/PotPlayerSetup.exe)

![](/img/wenti/15.jpg)

<br>

## 16. RaiDrive 复制粘贴百度的失败

因为百度大文件(大于20MB)是需要 **User-Agent** 这个请求头的的，RaiDrive没有添加这个请求头的位置，所以就别想从 RaiDrive 复制粘贴文件出来了.

![](/img/wenti/16-1.png)

![](/img/wenti/16-2.png)

百度如何挂载看这里：**https://www.yuque.com/anwenya/alist/phht17#YklA9**

<br>

## 17. 一大批因为因为网络问题

 1. **TLS handshake timeout?**
 2.  **read: connection reset by peer?** 
 3. **dns lookup failed?** 
 4. **connect: connection refused** 
 5. **Client.Timeout exceeded while awaiting headers?**

以上网络问题自行排查解决~

<br>

## 18. 添加 天翼189时：设备 ID 不存在，需要二次设备验证 或者验证码

可能是触发了风控。更改密码后，再次添加即可

建议添加的时候选择**天翼云盘客户端**，能不用天翼云盘就不用天翼云盘

![](/img/wenti/18.png)

### 出现验证码怎么解决?

![](/img/wenti/18-2.png)

#### 解决办法1：

把上图中出现的验证码点击编辑填到验证码那一栏然后点击保存

![](/img/wenti/18-3.png)

#### 解决办法2：

点击编辑 最后哪个 **不使用OCR**勾选（看上图最后哪个选项勾选上），然后保存即可

#### 天翼云盘和天翼云盘客户端有什么区别？

- 区别就在于
  - 天翼云盘		：用的手机端API，可能会需要OCR验证码? 然后你可能链接不上
  - 天翼云盘客户端：是用的天翼云盘PC端的API~

<br>

## 19. 为什么不能网页看视频

- 需要浏览器支持的编码
- 一般浏览器不支持 H.265 编码视频
- 一般浏览器不支持 AC3 编码的音频

特别是对于 Safari：

- 对于跨域媒体，content-type 必须是媒体类型，而不是通用的 application/octet-stream。所以如果直链返回的 content-type 是 application/octet-stream，那么 Safari 就无法播放了。（PS：为什么 AliyunDrive 可以在 Safari 中播放？因为官网的视频播放不是使用的下载链接，是经过 AliyunDrive 转码后的）

综上大家要啥看视频的话建议调用视频下方相对应的播放器来看吧~~

<br>

## 20. 怎么给直链添加过期时间

直链链接的过期时间，以小时为单位。如果为 0，则不会过期。默认值为 0。

不过只有**加了密码的路径的直链**才会有过期时间，否则不会过期。因为过期时间是加到sign查询参数中的，没有加密码的路径是不会检查sign的，如何加密码下面也写了。

![](/img/wenti/20.png)

加密的话，如果你不勾选后面的应用到子文件夹只会加密当前路径里面的文件，勾选了应用到子文件夹才会加密到这个下面的二级文件夹以及多级文件夹里面的文件.

如何加密：[**点击查看**](./01-home.md#_2-1-加密)

<br>

## 21. 怎么挂载SMB？

下面这个链接可能对你有帮助~你试试看呢：https://github.com/alist-org/alist/discussions/2215

<br>

## 22. AList如何让网盘显示文件夹容量?

目前我知道的只有 **OneDrive** 网盘支持显示文件夹文件容量...别的不知道..没办法人工干预显示

具体怎么搞不知道，建议去问相对应的网盘为什么不支持显示~



<br>

## 23. 如何禁止游客访问？

### 方法1：
直接在用户里面将 **`guest`** 启用关闭 

### 方法2：
在元信息把不想让游客看到的隐藏了，加密码。

### 方法3：
去用户名里面把 **guest** 这个游客账户里面 基本路径 给他选择到一个空文件夹里面去（随便一个都行）

![](/img/wenti/23.png)



<br>

## 24. AList v3版本如何备份？

1. 直接把Alist同级目录下的文件夹data/data.db 这个文件备份了
2. 或者直接把data这个文件夹备份也行...
3. 后台支持导出数据备份

以上三个自己选一个

还有一个就是我在用的我把数据库换成了MySQL，每天(每周)自动备份数据库也可以.

<BiliBili bvid="BV1iV4y1T7kh" />

<br>

## 25. 元信息里面的隐藏正则表达式怎么写?

粗略的看看吧，写的可能不是很明白，如果不太懂，自己去写一下保存去看看效果大概应纳就能懂了..

1. 如果你想使用正则表达式，用法如下：
   - ^** 匹配开始位置		**$** 匹配结束位置：		

- **^index	——> 隐藏以** **index** **开头的**	
- **ipa$		——> 隐藏以** **ipa** **结尾的**
- **[^\w]**	**——> 隐藏全部汉字开头的文件和文件夹**
- **[^\w]**	**——> 隐藏全部非汉字开头的文件和文件夹，就是全部符合开头的[a-z A-Z 0-9]**
- **[^A-Z] 表示一个区间，匹配所有大写字母，[^a-z] 表示所有小写字母。**



2. **比如你要隐藏mp4，jpg，png这几种类型**
   - **mp4$   png$  jpg$，写进隐藏哪里，一行一个喔~**

可以查看：[点击查看详情](./01-home.md#_2-2-隐藏)

<br>

## 26. 如何禁止打包下载？

可以的 去后台 全局 ——> 打包下载  关闭即可

![](/img/wenti/26.png)

<br>

## 27. 如何挂载某网盘的指定文件夹

在挂载的时候把你想挂载的根文件夹ID填到挂载信息里面就行，不同网盘的ID获取方式不一样自己看文档，文档没有的自己试验一下文件夹的名字哩.

这里举例截图的天翼云盘，不过别的云盘也是这个知道每家网盘获取文件夹ID的方式不一样，详情看上一条.

![](/img/wenti/27.png)

<br>

## 28. polyfill.min.js 加载太慢怎么办？

第一个是默认的，自带的

第二个是阿里的，加速了 应该比较快 试试第二个吧

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>

<script src="https://polyfill.alicdn.com/v3/polyfill.min.js?features=String.prototype.replaceAll"></script>  
```



<br>

## 29. 两个 Aria2 有什么不同

- 图1后台管理中设置的Aria2：用于离线下载，即给定链接和路径后会使用这里的aria2进行下载，完成后上传的路径对应的存储。这里的aria2需要是安装alist的机器可以访问的。
- 右侧哪个离线下载是前端界面的喔~管理员才能用~

![](/img/wenti/29.png)

- 图2发送到Aria2即发送到右侧本地设置的aria2，一般用于本地下载，即下载选中的文件到自己的电脑。这里的aria2不需要安装alist的机器可以访问。
- 游客用户也能用~游客自己设置自己的就行 和上面的完全不冲突

![](/img/wenti/29-2.png)

<br>

## 30. 输入错误密码次数过多

密码输入次数太多了，等几分钟重试吧，具体多少分钟现在还不晓得...后面如果知道了会更新

![](/img/wenti/30.png)

密码忘记怎么办：[点击查看详情](./01-home.md#安装后查看密码)

<br>

## 31. 本机代理、使用代理URL、302重定向、Web代理 这四个有什么不同

- **302 重定向：重定向到真实链接**	

  - 例如你下载的是  **`pan.xx.cn/d/阿里云/图片.mp4`** 这个文件
  - 等你点击下载后就变成 **`https://cn-beijing-data.aliyundrive.net/oI2jtWhu`** 这个链接，参考下图
  - ![](/img/wenti/31.png)

- **使用代理 URL：重定向到代理 URL**

  - 就是重定向到指定的下载链接来下载，具体下看下面的链接说明吧，一般用于谷歌等这种需要代理才能访问的网盘，当然了你要是想折腾可以在阿里云等这种也加上也不是不行
  - [**Alist 下载代理 URL 说明**](https://alist.nn.ci/zh/guide/drivers/common.html#下载代理-url)

- **本机代理：直接通过本地中转返回数据（最佳兼容性）**

  - 就是中转本机，用本机(搭建Alist的机器)流量来中转，这个看你本机的宽带大不大，如果本机的宽带很大，那么你看视频下载东西就会很快，反之很慢.

    - 使用本机代理的例子，夸克，迅雷普通版，115....(强制中转代理)

- **Web代理**

  - **网页预览、下载和直接链接是否通过中转。**

    - 也就是第三个选项的意思差不多，这个一般是用于在网页预览的时候。

      - 详情查看Alist文档说明：https://alist.nn.ci/zh/guide/drivers/common.html#web-代理

<br>

## 32. 怎么给游客上传权限?

元信息  ——> 添加路径 ——> 勾选**写入** 即可，后面的 **应用到子文件夹** 我就不说了自己看着办.

![](/img/wenti/32.png)

左侧未打开游客上传权限，右侧打开了游客上传权限

![](/img/wenti/32-2.png)

<br>

## 33. 为什么无法打包下载?

与 PDF 预览相同，需要 **HTTPS** 和 **CORS** 支持，并且：

- AList 使用浏览器的 stream API 来支持打包下载，所以需要浏览器支持。通常这个 API 会被新的浏览器支持，例如 Chrome、Firefox、Edge 等。
- **CORS** 好像不能人为修改...如果不支持就是不能用了吧~

<br>

### 打开PDF文档以及打包下载长时间转动无反应

可能是没有打开Https，还有一种情况，耽搁了一些人大量的时间，就是你的电脑装有IDM，或者IDM类似的浏览器下载托管软件，因为fetch会被IDM软件拦截，所以PDF文件将无法加载，你可能会收到如下报错：

```htm
PDF.js v2.12.305 (build: d3e1d7090)
信息：Failed to fetch
```

解决方案其实很简单，你可以在IDM等软件中设置取消在本站点自动下载，~~也可以直接删除IDM等软件。。。bushi~~  IDM里面自己试试看吧~

![](/img/wenti/33.png)

<br>

## 34. 123网盘 json: cannot unmarshal string into Go struct field TokenResp.code of type int

这个是123的api限制，请求稍微过快就会触发这个错误。



<br>

## 35. System error: SyntaxError: Invalid regular expression: /?/: Nothing to repeat 

出现如下报错应该是插件冲突了导致的，比如油猴的或者脚本猫中的一个答题脚本导致的，具体的可以看下面标题

解决办法把油猴答题插件关闭：https://github.com/alist-org/alist/discussions/2399

![](/img/wenti/35.png)

<br>

## 36. 如何添加设置 ".epub" 预览.

📣3.7.x 版本及更高的版本已经支持  ".epub" 阅读，

但是需要自己手动添加(因为已经创建过数据库了 不好给你覆盖会出错)

如果是第一次安装启动（3.7.x版本及更高的版本）不用手动添加



📣添加方式：后台 ——>设置——>预览——>Iframe 预览，写在PDF后面，

📣开头有个逗号 "," 英文的，具体怎么写可以参考下面的图片

```css
/*下面的这个逗号也是哦，这个注释就不要复制了，从第二行开始复制*/
,
  "epub": {
    "EPUB.js":"/static/epub.js/viewer.html?url=$e_url"
  }
```

参考链接：https://github.com/alist-org/alist-web/commit/6e6012d5918589bead414cb3f479421b5e911e66



### 添加方式

![](/img/wenti/36.png)

<br>

## 37. 如何添加 3D 模型预览/展示功能

📣此方式在任何版本都能用，可能如果预览 OneDrive 网盘需要 3.8.x版本

📣结尾的 **$durl**，是需要 V3.8.x 版本及更高版本才能用，

其他的版本是 **\$url** (使用OneDrive会有问题，本地倒是可以,因为$url 预览不了OnedRIVE, 3.8.X才修复了)

📣添加方式：后台 ——>设置——>预览——>Iframe 预览，写在 epub 后面

```css
/*下面的这个逗号也是哦，这个注释就不要复制了，从第二行开始复制*/
,
  "glb": {
    "3dviewer":"https://3dviewer.net/#model=$durl"
  }
```

参考连接^1^：https://github.com/alist-org/alist/issues/2788

参考链接^2^：https://github.com/alist-org/alist/issues/2805



### 样式预览

![](/img/wenti/37.png)

<br>

## 38. Docker 更新 / 升级 最新版

1. docker ps -a #查看容器(找Alist容器的ID)

2. docker stop ID #停止Alist运行,不然无法删除(这次Alist容器的ID是d429749a6e69，每一次安装都不一样自己看)

3. docker rm ID #删除Alist容器(数据还在只要你不手动删除)

4. 输入安装命令 

   - ```dockerfile
     docker run -d --restart=always -v /etc/alist:/opt/alist/data -p 5244:5244 -e PUID=0 -e PGID=0 -e UMASK=022 --name="alist" xhofe/alist:latest
     ```


1. 更新好了 去看看吧..就这么简单

![](/img/wenti/38.png)

<br>

## 39. RaiDrive挂载百度网盘，可以下载文件，不能上传文件。往挂载目录丢文件提示“提示“你需要权限来执行此操作”。这个怎么解决？

Raidrive 是因为上传文件会预先创建一个空文件 而百度网盘不允许创建空文件

AListv2可以成功是因为v2会忽略空文件上传



<br>

## 40. 为什么 Terabox 挂载成功了 但是不显示内容？

因为 **Terabox** 限制IP，如果你是本机非海外IP访问，是无法访问的，自然不会显示内容。

（可以用海外的机器，如果非得用本机(或者国内的机器)搭建，哪你自己想办法让Alist吃到**proxy**就可以）

比如我用的是**v2rayN**，启动Alist的客户端是 [**Git Bash**](https://git-scm.com/)

```bash
export https_proxy=http://127.0.0.1:10809 http_proxy=http://127.0.0.1:10809 all_proxy=socks5://127.0.0.1:10808
```

如果是 **Clash**

```bash
export https_proxy=http://127.0.0.1:7890 http_proxy=http://127.0.0.1:7890 all_proxy=socks5://127.0.0.1:7890
```

### 示例

![](/img/wenti/40.png)



## 41. 123云盘挂载时出现 json: cannot unmarshal string into Go struct field TokenResp.data of type struct { Token string "json:"token"" }

![](/img/wenti/41.png)

大概率是你的这台搭建Alist的设备 暂时被 拉黑，冻结，封禁，限制了。先不要挂载了，等几个小时再试试看或者等一天

（以上问题已经经过测试得出的结论）

<br>

## 42. 现在文件后面多了个 sign 的参数是干嘛的？

加密了为了账号安全一些，查看详情可以[AList 全局设置](https://alist.nn.ci/zh/config/global.html#签名所有)



<br>

## 43. lib64/libc.so.6: version `GLIBC_2.28' not found (required by ./alist)或者 accept: function not implemented

考虑使用 **musl** 版本作为替代，因为在您的平台上的 **glibc** 版本太低

<br>

## 44. 登陆时要求输入OTP代码，请问是什么原因?

你是不是在登录别人的账号？如果是自己的请输入2FA(两步验证)验证码

什么？不知道验证码？[AList 去换取消2FA](https://alist.nn.ci/zh/guide/advanced/2fa.html)

<br>

## 45. 使用 **sqlite3** 发现 data 文件夹里面出现 data.db-shm、data.db-wal 两个多的文件

具体的你可以查看这里：https://stackoverflow.com/questions/7778723/what-are-the-db-shm-and-db-wal-extensions-in-sqlite-databases



<br>

## 46. 添加文件上传时，有一个“添加为任务“的选项，是做什么的?

- 勾选后上传到服务器(搭建AList的机器)，再由服务器上传时到网盘时后台似乎能看到（好像是这样的）
- 未勾选不会看到，具体的大家可以看下图应该能看出什么问题.

![](/img/wenti/46.jpeg)

<br>

## 47. Too many unsuccessful sign-in attempts have been made using an incorrect username or password, Try again later.

连续登录输入6次密码错误就会锁定，重启Alist即可重置。

![](/img/wenti/47.png)

<br>

## 48. 添加阿里云盘(分享)时提示 提示Post "[https://auth.aliyundrive.com/v2/account/tokenopen in new window](https://auth.aliyundrive.com/v2/account/token)": net/http: TLS handshake timeout

原因：VPS在中国大陆境外，且启用了IPv6 解决方法： 

方法一：在vps的hosts中添加以下三条并重启网络或者重启vps

- 47.94.245.197 [api.aliyundrive.comopen in new window](http://api.aliyundrive.com/)
- 47.94.245.197 [auth.aliyundrive.comopen in new window](http://auth.aliyundrive.com/)
- 121.89.3.30 [cn-beijing-data.aliyundrive.netopen in new window](http://cn-beijing-data.aliyundrive.net/)

方法二：关闭并且禁用vps的IPv6
