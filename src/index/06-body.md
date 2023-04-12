---
# 这是文章的标题
title: 美化自定义内容
# 这是页面的图标
icon: fa-solid fa-rocket-launch
# 这是侧边栏的顺序
order: 6
# 设置作者
author: 安稳
# 设置写作时间
date: 2023-01-01
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - AList美化教程
  - 自定义内容
  - Body
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

## 自定义内容内代码

```html
<!--延迟加载-->
<!--如果要写自定义内容建议都加到这个延迟加载的范围内-->
<div id="customize" style="display: none;">
    <div>
		<!--音乐播放器-->
        <meting-js fixed="true" autoplay="false" theme="#409EFF" list-folded="true" auto="QQ音乐或者网易云的链接"></meting-js>
		
		<!--评论模块还有下面的script也是-->
		<center>
			<div class="newValine" id="vcomments"></div>
		</center>
		<script>
			new Valine({
				visitor: true,
				el: '#vcomments',
				avatar: 'wavatar',
				appId: 'Your appId',
				appKey: 'Your appKey',
				placeholder: "有什么问题欢迎评论区留言~么么哒"
			}) 
		</script>

        <br />
        <center class="dibu">
            <div style=" line-height: 20px;font-size: 9pt;font-weight: bold;">
                <span>
                    "
                    <span style="color: rgb(13, 109, 252); font-weight: bold;" id="hitokoto">
                        <a href="#" id="hitokoto_text">
                            "人生最大的遗憾,就是在最无能为力的时候遇到一个想要保护一生的人."
                        </a>
                    </span> "
                </span>
                <p style="margin-left: 10rem;font-size: 8pt;">
                    <small>
                        —— Anwen's Cloud
                    </small>
                </p>
            </div>

            <div style="font-size: 13px; font-weight: bold;">
                <span class="nav-item">
                    <a class="nav-link" href="xxxxxxxxxx"
                        target="_blank">
                        <i class="fab fa-qq" style="color:#409EFF" aria-hidden="true">
                        </i>
                        QQ |
                    </a>
                </span>
                <span class="nav-item">
                    <a class="nav-link" href="mailto:xxxxx@foxmail.com" target="_blank">
                        <i class="fa-duotone fa-envelope-open" style="color:#409EFF" aria-hidden="true">
                        </i>
                        邮箱 |
                    </a>
                </span>
                <span class="nav-item">
                    <a class="nav-link" href="xxxxxx" target="_blank">
                        <i class="fas fa-edit" style="color:#409EFF" aria-hidden="true">
                        </i>
                        博客 |
                    </a>
                </span>
                <span class="nav-item">
                    <a class="nav-link" href="xxxxxxxx" target="_blank">
                        <i class="fas fa-comment-lines" style="color:#409EFF;" aria-hidden="true">
                        </i>
                        留言 |
                    </a>
                </span>
                <span class="nav-item">
                    <a class="nav-link" href="xxxxxxx" target="_blank">
                        <i class="fa fa-cloud-download" style="color:#409EFF;" aria-hidden="true">
                        </i>
                        云盘 |
                    </a>
                </span>
                <!--后台入口-->
                <span class="nav-item">
                    <a class="nav-link" href="/@manage" target="_blank">
                        <i class="fa-solid fa-folder-gear" style="color:#409EFF;" aria-hidden="true">
                        </i>
                        管理 |
                    </a>
                </span>
                <!--版权，请尊重作者-->
                <span class="nav-item">
                    <a class="nav-link" href="https://github.com/Xhofe/alist" target="_blank">
                        <i class="fa-solid fa-copyright" style="color:#409EFF;" aria-hidden="true">
                        </i>
                        Alist
                    </a>
                </span>
				<br />
				<!--添加一个访问量-->
				<span>
                    本"<span style="color: rgb(13, 109, 252); font-weight: bold;"><a href="#">目录</a></span>"访问量 <span id="busuanzi_value_page_pv" style="color: rgb(13, 109, 252); font-weight: bold;"></span> 次 本站总访问量 <span id="busuanzi_value_site_pv" style="color: rgb(13, 109, 252); font-weight: bold;"></span>                次 本站总访客数 <span id="busuanzi_value_site_uv" style="color: rgb(13, 109, 252); font-weight: bold;"></span> 人
                </span>
                <br />
				<!--添加备案信息-->
                <span class="nav-item">
                    <a class="nav-link" href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">
                        <i class="fa-solid fa-shield-check" style="color:#409EFF;" aria-hidden="true">
                        </i>
                        冀 ICP备2222000777号
                    </a>
                </span>
            </div>
        </center>
        <br />
        <br />
    </div>



    <!--一言API-->
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
<!--延迟加载范围到这里结束-->
</div>
<!--延迟加载配套使用JS-->
<script>
    let interval = setInterval(() => {
        if (document.querySelector(".footer")) {
            document.querySelector("#customize").style.display = "";
            clearInterval(interval);
        }
    }, 200);
</script>

<!-- 渐变背景初始化,如果要使用渐变背景把下面的那一行注释去掉即可-->
<!-- 下面的几行都是渐变的一套,自定义头部内还有一个关联的自定义CSS -->
<!--<canvas id="canvas-basic"></canvas> -->
<script src="https://npm.elemecdn.com/granim@2.0.0/dist/granim.min.js"></script>
<script>
var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#a18cd1', '#fbc2eb'],
                 ['#fff1eb', '#ace0f9'],
                 ['#d4fc79', '#96e6a1'],
                 ['#a1c4fd', '#c2e9fb'],
                 ['#a8edea', '#fed6e3'],
                 ['#9890e3', '#b1f4cf'],
                 ['#a1c4fd', '#c2e9fb'],
                 ['#fff1eb', '#ace0f9']
           
            ]
        }
    }
});
</script>
```

## 网页点击鼠标特效（两个）

::: details 核心价值观关键字

```html
<!-- 网页鼠标点击特效 - 核心价值观关键字 -->
<script>
    (function () {
        var a_idx = 0;
        window.onclick = function (event) {
            var a = new Array("❤富强❤", "❤民主❤", "❤文明❤", "❤和谐❤", "❤自由❤", "❤平等❤", "❤公正❤", "❤法治❤", "❤爱国❤",
                "❤敬业❤", "❤诚信❤", "❤友善❤");
            var heart = document.createElement("b"); //创建b元素
            heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

            document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
            a_idx = (a_idx + 1) % a.length;
            heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式

            var f = 13, // 字体大小
                x = event.clientX - f / 2 - 30, // 横坐标
                y = event.clientY - f, // 纵坐标
                c = randomColor(), // 随机颜色
                a = 1, // 透明度
                s = 0.8; // 放大缩小

            var timer = setInterval(function () { //添加定时器
                if (a <= 0) {
                    document.body.removeChild(heart);
                    clearInterval(timer);
                } else {
                    heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
                        c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
                        s + ");";

                    y--;
                    a -= 0.016;
                    s += 0.002;
                }
            }, 15)
        }
        // 随机颜色
        function randomColor() {
            return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
                .random() * 255)) + ")";
        }
    }());
</script>
```

:::

::: details 冒爱心

```html
<!-- 网页鼠标点击特效 - 爱心 -->
<script type="text/javascript">
         ! function (e, t, a) {
            function r() {
                for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[
                        e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x +
                    "px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e]
                    .scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");
                requestAnimationFrame(r)
            }
            function n() {
                var t = "function" == typeof e.onclick && e.onclick;
                e.onclick = function (e) {
                    t && t(), o(e)
                }
            }
 
            function o(e) {
                var a = t.createElement("div");
                a.className = "heart", s.push({
                    el: a,
                    x: e.clientX - 5,
                    y: e.clientY - 5,
                    scale: 1,
                    alpha: 1,
                    color: c()
                }), t.body.appendChild(a)
            }
 
            function i(e) {
                var a = t.createElement("style");
                a.type = "text/css";
                try {
                    a.appendChild(t.createTextNode(e))
                } catch (t) {
                    a.styleSheet.cssText = e
                }
                t.getElementsByTagName("head")[0].appendChild(a)
            }
 
            function c() {
                return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math
                    .random()) + ")"
            }
            var s = [];
            e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e
                .mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
                    setTimeout(e, 1e3 / 60)
                }, i(
                    ".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
                ), n(), r()
        }(window, document);
    
</script>
```

:::



## 音乐播放器添加说明

### 核心代码（记得引用头部内的喔~）

```html
<meting-js fixed="true" autoplay="false" theme="#409EFF" list-folded="true" auto="https://y.qq.com/n/yqq/playlist/7927599544.html"></meting-js>
```

### 腾讯QQ音乐

我使用的是上面这个链接~这个链接怎么获取呢来看图

1. https://y.qq.com/n/ryqq/profile/create
2. ![](/img/body/qq.png)
3. 点击这个歌单后我们能看到 这个歌单的链接是 ：https://y.qq.com/n/ryqq/playlist/7927599544
4. 然后我们复制最后的那一串数字  **`7927599544`**
5. 然后回到 https://y.qq.com/n/yqq/playlist/7927599544.html 这个链接里面把里面的数字ID替换成你的即可使用



### 网易云音乐

音乐播放器要是添加的话需要如下三个参数才行，QQ音乐好像不需要这么多参数哈哈...

```javascript
<meting-js 
  server="netease" 
  type="playlist" 
  id="60198">
</meting-js>
```

进入网易云音乐，然后找到你想听的歌单进去，然后看到顶部链接地址栏里面有一串ID，填进代码里面

![](/img/body/wangyi.png)

可以参下除了最下面三个需要加的参数我还添加了跟QQ音乐一样的几个参数

```javascript
<meting-js 
    fixed="true" 
    autoplay="false" 
    theme="#409EFF" 
    list-folded="true" 
    server="netease" 
    type="playlist" 
    id="2195404116">
  </meting-js>
```

一键复制拿去用即可.

```html
<meting-js fixed="true" autoplay="false" theme="#409EFF" list-folded="true" server="netease" type="playlist" id="2195404116"></meting-js>
```

### 其他音乐

```html
<meting-js
	name="rainymood"
	artist="rainymood"
	url="https://rainymood.com/audio1110/0.m4a"
	cover="https://rainymood.com/i/badge.jpg">
</meting-js>
```

name，artist，这俩是啥不说了自己研究吧

url 肯定是你要添加的音乐链接，cover封面呗~嘿嘿嘿



#### 加上歌词

```html
<meting-js
	name="rainymood"
	artist="rainymood"
	url="https://rainymood.com/audio1110/0.m4a"
	cover="https://rainymood.com/i/badge.jpg"
	fixed="true">
	<pre hidden>
		[00:00.00]This
		[00:04.01]is
		[00:08.02]lyric
	</pre>
</meting-js>
```

**`pre hidden`** 里面的格式就是歌词 这样就能看到歌词啦，自己掐好时间点儿就行



## 音乐的一些其他参数

### 机翻的（凑合看吧）

| **选项**     | **默认** | **描述**                                                     |
| ------------ | -------- | ------------------------------------------------------------ |
| ID           | **要求** | 歌曲ID/播放列表ID/专辑ID/搜索关键字                          |
| 服务器       | **要求** | 音乐平台：netease, tencent, kugou, xiami,baidu               |
| 类型         | **要求** | song, playlist, album, search,artist                         |
| 汽车         | 选项     | 音乐链接，支持：netease,,,tencentxiami                       |
| 固定的       | false    | 启用固定模式                                                 |
| 小型的       | false    | 开启迷你模式                                                 |
| 自动播放     | false    | 音频自动播放                                                 |
| 主题         | #2980b9  | 主色                                                         |
| 环形         | all      | 播放器循环播放，值：'all'、'one'、'none'                     |
| 命令         | list     | 播放器播放顺序，值：'list'，'random'                         |
| 预载         | auto     | 值：“无”、“元数据”、“自动”                                   |
| 体积         | 0.7      | 默认音量，注意播放器会记住用户设置，用户自己设置音量后默认音量将失效 |
| 互斥体       | true     | 防止同时播放多个播放器，当该播放器开始播放时暂停其他播放器   |
| lrc 型       | 0        | 抒情类型                                                     |
| 列表折叠     | false    | 指示列表是否应首先折叠                                       |
| 列表最大高度 | 340px    | 列出最大高度                                                 |
| 存储名称     | metingjs | 存储播放器设置的 localStorage 键                             |

### 英文原版的

| option          | default     | description                                                  |
| --------------- | ----------- | ------------------------------------------------------------ |
| id              | **require** | song id / playlist id / album id / search keyword            |
| server          | **require** | music platform: `netease`, `tencent`, `kugou`, `xiami`, `baidu` |
| type            | **require** | `song`, `playlist`, `album`, `search`, `artist`              |
| auto            | options     | music link, support: `netease`, `tencent`, `xiami`           |
| fixed           | `false`     | enable fixed mode                                            |
| mini            | `false`     | enable mini mode                                             |
| autoplay        | `false`     | audio autoplay                                               |
| theme           | `#2980b9`   | main color                                                   |
| loop            | `all`       | player loop play, values: 'all', 'one', 'none'               |
| order           | `list`      | player play order, values: 'list', 'random'                  |
| preload         | `auto`      | values: 'none', 'metadata', 'auto'                           |
| volume          | `0.7`       | default volume, notice that player will remember user setting, default volume will not work after user set volume themselves |
| mutex           | `true`      | prevent to play multiple player at the same time, pause other players when this player start play |
| lrc-type        | `0`         | lyric type                                                   |
| list-folded     | `false`     | indicate whether list should folded at first                 |
| list-max-height | `340px`     | list max height                                              |
| storage-name    | `metingjs`  | localStorage key that store player setting                   |
