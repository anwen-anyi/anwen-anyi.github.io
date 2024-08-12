import{_ as m}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as g,c as b,a as e,w as a,b as n,d as s,e as o}from"./app-C90w3lXH.js";const h="/img/durl/hanhua.png",v="/img/durl/install.png",k="/img/durl/name-pass.png",_="/img/durl/cn.png",f="/img/durl/en.png",y="/img/durl/durl-demo.gif",E="/img/durl/d_cn.png",w="/img/durl/d_en.png",L="/img/durl/5_other1.png",x="/img/durl/5_other2.png",R={},S={style:{"text-align":"right"}},B={href:"https://www.bilibili.com/video/BV1Ph4y1u7SG",target:"_blank",rel:"noopener noreferrer"},U=n("strong",null,"BV1Ph4y1u7SG",-1),A={style:{"text-align":"right"}},q={href:"https://www.youtube.com/watch?v=YCHMGiiG7q4",target:"_blank",rel:"noopener noreferrer"},O=n("strong",null,"YCHMGiiG7q4",-1),Y=o(`<h2 id="_1-前言-需求" tabindex="-1"><a class="header-anchor" href="#_1-前言-需求"><span><strong>1.前言 - 需求</strong></span></a></h2><p>咱们在使用AList时，复制的链接都是那么长，尤其是N层文件夹后，并且还是中文的情况下转码后，还有就是加密后更长啦</p><p>像下面这样,有中文转码了还更长啦~~复制发给小伙伴也很长</p><p>虽然AList无法内置短连接，咱也没技术实现，只好另辟蹊径来实现短连接了也不麻烦很方便</p><p>有兴趣的往下看吧~如果你要使用的话，最后的<a href="#_3-3-%E4%BD%BF%E7%94%A8%E8%BF%99%E4%B8%AA%E7%9F%AD%E8%BF%9E%E6%8E%A5%E7%9A%84%E4%B8%80%E4%BA%9B%E8%AF%B4%E6%98%8E">使用短连接的说明一定要看</a></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code>https://alist.org/d/国产/电影/速度与激情全集/速度与激情10-4k.mp4
https://alist.org/d/%E5%9B%BD%E4%BA%A7/%E7%94%B5%E5%BD%B1/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%85%E5%85%A8%E9%9B%86/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%8510-4k.mp4

https://alist.org/d/国产/电影/速度与激情全集/速度与激情10-4k.mp4?sign=QhNb42WdoWyriTkBiOcdaQ9JF76EtROA12y_aC1PB0o=:0
https://alist.org/d/%E5%9B%BD%E4%BA%A7/%E7%94%B5%E5%BD%B1/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%85%E5%85%A8%E9%9B%86/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%8510-4k.mp4?sign=QhNb42WdoWyriTkBiOcdaQ9JF76EtROA12y_aC1PB0o=:0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那我们使用短连接将链接进行缩短，缩短后就是这样</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code>https://alist.org/d/%E5%9B%BD%E4%BA%A7/%E7%94%B5%E5%BD%B1/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%85%E5%85%A8%E9%9B%86/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%8510-4k.mp4

⬇⬇⬇⬇⬇⬇⬇⬇使用短连接进行缩短⬇⬇⬇⬇⬇⬇⬇⬇

https://d.alist.org/sudu10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缩短后我们打开短连接会跳到开始的那个这样很方便</p><p>下面我们就开始说一下怎么搭建吧</p><br><h2 id="_2-开始" tabindex="-1"><a class="header-anchor" href="#_2-开始"><span><strong>2.开始</strong></span></a></h2><h3 id="_2-1-准备" tabindex="-1"><a class="header-anchor" href="#_2-1-准备"><span><strong>2.1 准备</strong></span></a></h3>`,13),N={href:"https://github.com/YOURLS/YOURLS",target:"_blank",rel:"noopener noreferrer"},T=n("ul",null,[n("li",null,[s("本地备用："),n("span",{class:"nav-item"},[n("a",{class:"nav-link",href:"https://www.alipan.com/s/wCNVf6YgCL8/folder/648980687c869f9d2db04c4083362abffc13e15d",target:"_blank",style:{"font-weight":"bold"}},[n("i",{class:"fa fa-cloud-download",style:{color:"#409EFF"},"aria-hidden":"true"}),s(" 在线云盘下载")])])])],-1),C={href:"https://github.com/taozhiyu/yourls-translation-zh_CN",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.52pojie.cn/home.php?mod=space&uid=879080&do=profile&from=space",target:"_blank",rel:"noopener noreferrer"},F=n("strong",null,"@52破解涛之雨",-1),D=n("li",null,[s("本地备用："),n("span",{class:"nav-item"},[n("a",{class:"nav-link",href:"https://www.alipan.com/s/wCNVf6YgCL8/folder/648980687c869f9d2db04c4083362abffc13e15d",target:"_blank",style:{"font-weight":"bold"}},[n("i",{class:"fa fa-cloud-download",style:{color:"#409EFF"},"aria-hidden":"true"}),s(" 在线云盘下载")])])],-1),I={href:"https://www.crxsoso.com/webstore/detail/nddaaiojgkoldnhnmkoldmkeocbooken",target:"_blank",rel:"noopener noreferrer"},z=n("ul",null,[n("li",null,[s("本地备用："),n("span",{class:"nav-item"},[n("a",{class:"nav-link",href:"https://www.alipan.com/s/wCNVf6YgCL8/folder/648980687c869f9d2db04c4083362abffc13e15d",target:"_blank",style:{"font-weight":"bold"}},[n("i",{class:"fa fa-cloud-download",style:{color:"#409EFF"},"aria-hidden":"true"}),s(" 在线云盘下载")])])]),n("li",null,[n("strong",null,"自用汉化"),s("：上述的本地备用里面有一个是我自己将插件解压汉化了的，但是 "),n("code",null,"Chrome"),s("浏览器用不了 360浏览器可以自己选择吧")])],-1),Q=o('<p>这个短连接也支持查看点击次数喔~</p><br><h3 id="_2-2-初始化" tabindex="-1"><a class="header-anchor" href="#_2-2-初始化"><span><strong>2.2 初始化</strong></span></a></h3><p>短连接程序和汉化包已经准备好了，接下来我们就开始配置一下 <strong>YOURLS<sup>短连接程序</sup></strong> 和汉化包吧</p><h4 id="配置汉化包" tabindex="-1"><a class="header-anchor" href="#配置汉化包"><span><strong>配置汉化包</strong></span></a></h4>',5),P=o('<figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><h4 id="配置短连接程序配置文件" tabindex="-1"><a class="header-anchor" href="#配置短连接程序配置文件"><span><strong>配置短连接程序配置文件</strong></span></a></h4><p>原生的配置文件里面是英文的现在进行了汉化</p><p>配置文件原来是叫 <strong><code>config-sample.php</code></strong>，我们<mark>需要手动</mark>修改为 <strong><code>config.php</code></strong></p><ul><li>自己修改前：<code>/user/config-sample.php</code></li><li>自己修改后：<code>/user/config.php</code></li></ul>',6),$=n("div",{class:"language-php line-numbers-mode","data-ext":"php","data-title":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token php language-php"},[n("span",{class:"token delimiter important"},"<?php"),s(`
`),n("span",{class:"token comment"},`/* This is a sample config file.
 * Edit this file with your own settings and save it as "config.php"
 *
 * IMPORTANT: edit and save this file as plain ASCII text, using a text editor, for instance TextEdit on Mac OS or
 * Notepad on Windows. Make sure there is no character before the opening <?php at the beginning of this file.
 */`),s(`

`),n("span",{class:"token comment"},`/*
 ** 仔细阅读MySQL设置-您可以从web主机获取此信息
 ** 用户配置是修改右侧内内容别改错咯~
 ** 例如 define( 'YOURLS_DB_USER', 'your db user name' );
 ** 我们要修改的是 your db user name ==> 改成我们的MySQL用户名
 */`),s(`

`),n("span",{class:"token doc-comment comment"},"/** 你的MySQL用户名 */"),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_DB_USER'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'your db user name'"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},"/** 你的MySQL密码 */"),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_DB_PASS'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'your db password'"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** 你的数据库名
 ** 仅使用小写字母[a-z]、数字[0-9]和下划线[_] */`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_DB_NAME'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'yourls'"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** MySQL数据库主机.
 ** 如果使用非标准端口，请将其指定为'主机名:端口'例如'localhost:9999'或'127.0.0.1:666' */`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_DB_HOST'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'localhost'"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},"/** MySQL数据库表前缀\n ** YOURLS将使用此表前缀创建表（例如`yourls_url`,`yourls_options`等)\n ** 仅使用小写字母[a-z]、数字[0-9]和下划线[_] \n ** 默认就行 */"),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_DB_PREFIX'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'yourls_'"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},`/*
 ** Site options
 */`),s(`

`),n("span",{class:"token doc-comment comment"},`/** YOURLS安装网站
 ** 全部小写，结尾没有斜杠。
 ** 如果要把它定义为"http://sho.rt"，不使用 "http://www.sho.rt"请不要在浏览器中使用www的二级域名（反之亦然）
 ** 要使用多语种域名（如http://你好.世界），请在此处写入其ascii格式 (如http://xn--6qq79v.xn--rhqv96g/) */`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_SITE'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'http://your-own-domain-here.com'"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** YOURLS语言
 ** 更改此设置以使用语言的翻译文件，而不是使用默认的英语
 ** 翻译文件（.mo文件）必须导入在 user/language 目录中
 ** 可以查看 http://yourls.org/translations 了解更多信息 
 ** 汉化包推荐使用: https://github.com/taozhiyu/yourls-translation-zh_CN */`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_LANG'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'zh_CN'"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** 允许同一个长URL包含多个短URL
 ** 如果设置为true，则同一长链接，不能有多个短链接
 ** 设置为false则允许多个短链接指向同一个长链接 */`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_UNIQUE_URLS'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant boolean"},"true"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** 私有意味着访问短链接后台需要登录
 ** 设置为false则用于公共用途
 ** 说人话就是是否允许所有人都可以生成短连接，默认是禁止的，设置成false
 ** 如果您不确定，请阅读http://yourls.org/privatepublic 了解更多 */`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_PRIVATE'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant boolean"},"true"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** 用于加密cookies的随机密码，您不需要记住它，所以可以使它更复杂
 ** 提示：在 http://yourls.org/cookie 生成随机的密码*/`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_COOKIEKEY'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'modify this text with something random'"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** 允许访问后台的用户名和密码，密码可以是纯字符的，也可以是加密的散列
 ** YOURLS将自动加密此文件中的纯文本密码
 ** 阅读 http://yourls.org/userpassword 了解更多信息 */`),s(`
`),n("span",{class:"token variable"},"$yourls_user_passwords"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
	`),n("span",{class:"token comment"},"//下方的默认username建议删除自己新建一个"),s(`
	`),n("span",{class:"token comment"},"//'username' => 'password',"),s(`
	`),n("span",{class:"token string single-quoted-string"},"'账号'"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token string single-quoted-string"},"'密码'"),s(`
	`),n("span",{class:"token comment"},"// 'username2' => 'password2',"),s(`
	`),n("span",{class:"token comment"},"// You can have one or more 'login'=>'password' lines"),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** URL缩短方法: 36 或 62
 ** 36: 生成所有小写字母数字组合 (如：13jkm)
 ** 62: 生成大小写混合的字母数字组合 (如：13jKm或13JKm) */`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_URL_CONVERT'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"36"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** 调试模式输出一些内部信息
 ** 默认值为false，编码时或提交新问题前启用 */`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_DEBUG'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant boolean"},"false"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
* 保留关键字（设置后生成的随机URL将避开保留的关键字）
* 在这里可以设置一些负面的、不需要的或潜在误导性的关键字
*/`),s(`
`),n("span",{class:"token variable"},"$yourls_reserved_URL"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
	`),n("span",{class:"token string single-quoted-string"},"'porn'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'faggot'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'sex'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'nigger'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'fuck'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'cunt'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'dick'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},`/*
 ** Personal settings would go after here.
 */`),s(`
`)])])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=n("div",{class:"language-php line-numbers-mode","data-ext":"php","data-title":"php"},[n("pre",{class:"language-php"},[n("code",null,[n("span",{class:"token php language-php"},[n("span",{class:"token delimiter important"},"<?php"),s(`
`),n("span",{class:"token comment"},`/* This is a sample config file.
 * Edit this file with your own settings and save it as "config.php"
 *
 * IMPORTANT: edit and save this file as plain ASCII text, using a text editor, for instance TextEdit on Mac OS or
 * Notepad on Windows. Make sure there is no character before the opening <?php at the beginning of this file.
 */`),s(`

`),n("span",{class:"token comment"},`/*
 ** 仔细阅读MySQL设置-您可以从web主机获取此信息
 ** 用户配置是修改右侧内内容别改错咯~
 ** 例如 define( 'YOURLS_DB_USER', 'your db user name' );
 ** 我们要修改的是 your db user name ==> 改成我们的MySQL用户名
 */`),s(`

`),n("span",{class:"token doc-comment comment"},"/** 你的MySQL用户名 */"),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_DB_USER'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'root'"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},"/** 你的MySQL密码 */"),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_DB_PASS'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'t7xxxxxxxBD'"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** 你的数据库名
 ** 仅使用小写字母[a-z]、数字[0-9]和下划线[_] */`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_DB_NAME'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'d_izyt_cc'"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** MySQL数据库主机.
 ** 如果使用非标准端口，请将其指定为'主机名:端口'例如'localhost:9999'或'127.0.0.1:666' */`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_DB_HOST'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'localhost'"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},"/** MySQL数据库表前缀\n ** YOURLS将使用此表前缀创建表（例如`yourls_url`,`yourls_options`等)\n ** 仅使用小写字母[a-z]、数字[0-9]和下划线[_] \n ** 默认就行 */"),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_DB_PREFIX'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'yourls_'"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},`/*
 ** Site options
 */`),s(`

`),n("span",{class:"token doc-comment comment"},`/** YOURLS安装网站
 ** 全部小写，结尾没有斜杠。
 ** 如果要把它定义为"http://sho.rt"，不使用 "http://www.sho.rt"请不要在浏览器中使用www的二级域名（反之亦然）
 ** 要使用多语种域名（如http://你好.世界），请在此处写入其ascii格式 (如http://xn--6qq79v.xn--rhqv96g/) */`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_SITE'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'https://d.izyt.cc'"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** YOURLS语言
 ** 更改此设置以使用语言的翻译文件，而不是使用默认的英语
 ** 翻译文件（.mo文件）必须导入在 user/language 目录中
 ** 可以查看 http://yourls.org/translations 了解更多信息 
 ** 汉化包推荐使用: https://github.com/taozhiyu/yourls-translation-zh_CN */`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_LANG'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'zh_CN'"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** 允许同一个长URL包含多个短URL
 ** 如果设置为true，则同一长链接，不能有多个短链接
 ** 设置为false则允许多个短链接指向同一个长链接 */`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_UNIQUE_URLS'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant boolean"},"true"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** 私有意味着访问短链接后台需要登录
 ** 设置为false则用于公共用途
 ** 说人话就是是否允许所有人都可以生成短连接，默认是禁止的，设置成false
 ** 如果您不确定，请阅读http://yourls.org/privatepublic 了解更多 */`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_PRIVATE'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant boolean"},"true"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** 用于加密cookies的随机密码，您不需要记住它，所以可以使它更复杂
 ** 提示：在 http://yourls.org/cookie 生成随机的密码*/`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_COOKIEKEY'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'&093#7xxxxxxx43%Q$3'"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** 允许访问后台的用户名和密码，密码可以是纯字符的，也可以是加密的散列
 ** YOURLS将自动加密此文件中的纯文本密码
 ** 阅读 http://yourls.org/userpassword 了解更多信息 */`),s(`
`),n("span",{class:"token variable"},"$yourls_user_passwords"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
	`),n("span",{class:"token comment"},"//'username' => 'password',"),s(`
	`),n("span",{class:"token string single-quoted-string"},"'axxx'"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token string single-quoted-string"},"'phpass:!2y!1xxxxxxxxxxxxT6'"),s(),n("span",{class:"token comment"},"/* Password encrypted by YOURLS */"),s(),n("span",{class:"token punctuation"},","),s(`
	`),n("span",{class:"token comment"},"// 'username2' => 'password2',"),s(`
	`),n("span",{class:"token comment"},"// You can have one or more 'login'=>'password' lines"),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** URL缩短方法: 36 或 62
 ** 36: 生成所有小写字母数字组合 (如：13jkm)
 ** 62: 生成大小写混合的字母数字组合 (如：13jKm或13JKm) */`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_URL_CONVERT'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"36"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/** 调试模式输出一些内部信息
 ** 默认值为false，编码时或提交新问题前启用 */`),s(`
`),n("span",{class:"token function"},"define"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token string single-quoted-string"},"'YOURLS_DEBUG'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant boolean"},"false"),s(),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
* 保留关键字（设置后生成的随机URL将避开保留的关键字）
* 在这里可以设置一些负面的、不需要的或潜在误导性的关键字
*/`),s(`
`),n("span",{class:"token variable"},"$yourls_reserved_URL"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
	`),n("span",{class:"token string single-quoted-string"},"'porn'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'faggot'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'sex'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'nigger'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'fuck'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'cunt'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string single-quoted-string"},"'dick'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},`/*
 ** Personal settings would go after here.
 */`),s(`

`)])])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=o('<br><h3 id="_2-3-正式安装" tabindex="-1"><a class="header-anchor" href="#_2-3-正式安装"><span><strong>2.3 正式安装</strong></span></a></h3><p>上述提到的配置文件我们可以在本地修改好上传上去，也可以直接在服务器下载好然后在服务器修改，</p><p>（看自己怎么方便怎么来，我觉得还是在本地修改好在上传上去方便 哈哈~）</p><p>然后我们访问 <code>http(s)://您的域名/admin/install.php</code> ,点击“安装YOURLS”</p><p>安装好后点击管理员页面登录我们在配置文件写的帐号密码</p><div class="image-preview"><img src="'+v+'"><img src="'+k+`"></div><p>到这里已经安装好了，可以愉快的去使用啦</p><br><h2 id="_3-使用问题" tabindex="-1"><a class="header-anchor" href="#_3-使用问题"><span><strong>3. 使用问题</strong></span></a></h2><h3 id="_3-1-访问短连接提示404" tabindex="-1"><a class="header-anchor" href="#_3-1-访问短连接提示404"><span><strong>3.1 访问短连接提示404</strong></span></a></h3><details class="hint-container details"><summary>Nginx配置</summary><p>在Nginx配置里面最底下的 <code>}</code>结束前添加一条</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># URL重写
location / {try_files $uri $uri/ /yourls-loader.php$is_args$args;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例如:</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>    access_log  /ect/xx/d.alist.org.log;
    error_log  /etc/xx/d.alist.org.error.log;
    location / {try_files $uri $uri/ /yourls-loader.php$is_args$args;}
}
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加好后回去</p></details><details class="hint-container details"><summary>Apache配置</summary><p>Apache需要启用mod_rewrite模块，请创建.htaccess文件（注意区分安装路径）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#.htaccess 文件内容，如果是根目录下（如http://您的域名/）
# BEGIN YOURLS
&lt;IfModule mod_rewrite.c&gt;
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^.*$ /yourls-loader.php [L]
&lt;/IfModule&gt;
# END YOURLS
 
#如果是二级目录下（如：http://您的域名/somedir/）
# BEGIN YOURLS
&lt;IfModule mod_rewrite.c&gt;
RewriteEngine On
RewriteBase /somedir/
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^.*$ /somedir/yourls-loader.php [L]
&lt;/IfModule&gt;
# END YOURLS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_3-2-如何配置插件来分享alist" tabindex="-1"><a class="header-anchor" href="#_3-2-如何配置插件来分享alist"><span><strong>3.2 如何配置插件来分享AList</strong></span></a></h3><p>插件我们下载下来，后添加到浏览器扩展，怎么添加可以查看下方的视频</p>`,15),G=n("code",null,"360，Chrome，Edge",-1),W={href:"https://youtu.be/PP6b0WSzYMc",target:"_blank",rel:"noopener noreferrer"},K={href:"https://www.crxsoso.com/webstore/detail/nddaaiojgkoldnhnmkoldmkeocbooken",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://www.alipan.com/s/wCNVf6YgCL8",target:"_blank",rel:"noopener noreferrer"},H=n("li",null,[n("p",null,[n("strong",null,"自用汉化"),s("：上述的本地备用里面有一个是我自己将插件解压汉化了的，但是 "),n("code",null,"Chrome"),s("浏览器用不了 360浏览器可以自己选择吧")])],-1),J=n("p",null,[s("将插件添加到浏览器后，点击插件的 "),n("code",null,"设置|setting"),s("选项进行配置，")],-1),X=n("p",null,[s("第二个选项里面的签名是在 "),n("code",null,"http(s)://你的链接/admin/tools.php"),s(" 页面里面的"),n("code",null,"安全的API调用"),s(" 标题的往下数第三行里面有个参数复制一下填写")],-1),nn=n("p",null,"大家看下面的图吧，一个是我自己汉化了的，一个是原生英文的",-1),sn=n("div",{class:"image-preview"},[n("img",{src:_}),n("img",{src:f})],-1),en=o('<figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-3-使用这个短连接的一些说明" tabindex="-1"><a class="header-anchor" href="#_3-3-使用这个短连接的一些说明"><span><strong>3.3 使用这个短连接的一些说明</strong></span></a></h3><ol><li>不推荐将所有人都可以生成短链接选项打开，防止别人使用你的短连接分发一些&quot;奇奇怪怪&quot;的东西去喝茶</li><li>建议打开 <strong><code>是否自动将结果复制到剪贴板? | Auto-copy result to clipboard?</code></strong> 这样我们点击插件后就不要手动去点copy了它会自动帮你复制你只需要去粘贴分享即可</li><li>其实在链接右键会弹出的选项中也可以选择 <strong>YOURLS<sup>短连接程序</sup></strong> 插件,然后点击顶部的插件扩展栏就会进行缩短链接</li></ol><div class="image-preview"><img src="'+E+'"><img src="'+w+'"></div>',4),tn=o(`<ol start="5"><li>防止被爆破，修改 <code>/admin</code>文件夹为你想改的名字，然后在<code>/user</code>目录新建<code>cache.php</code>内容如下：</li></ol><div class="language-php line-numbers-mode" data-ext="php" data-title="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// introduce a new filter early, before plugins are actually loaded</span>
<span class="token function">yourls_add_filter</span><span class="token punctuation">(</span> <span class="token string single-quoted-string">&#39;admin_url&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;ozh_custom_admin_url&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function-definition function">ozh_custom_admin_url</span><span class="token punctuation">(</span><span class="token variable">$url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">str_replace</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/admin/&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;/想要得目录名/&#39;</span><span class="token punctuation">,</span> <span class="token variable">$url</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),an={href:"https://github.com/YOURLS/YOURLS/pull/2747#issuecomment-689047797",target:"_blank",rel:"noopener noreferrer"},ln=o('<ol start="6"><li>其他的暂时没有了，<mark>第五条挺重要的改一下吧也不麻烦</mark></li></ol><br><h2 id="_4-结语-结束" tabindex="-1"><a class="header-anchor" href="#_4-结语-结束"><span><strong>4. 结语-结束</strong></span></a></h2><p>到这里就结束了，有兴趣的话大家去试试看吧，可能文字描述的不是很详细，视频版<a href="#">已发布</a> <s>在路上了敬请期待吧，视频发了这里会进行修改</s></p><br><h2 id="_5-其他用法" tabindex="-1"><a class="header-anchor" href="#_5-其他用法"><span><strong>5. 其他用法</strong></span></a></h2><h3 id="_5-1-随机短链接" tabindex="-1"><a class="header-anchor" href="#_5-1-随机短链接"><span><strong>5.1 随机短链接</strong></span></a></h3><p>Q：默认使用的是固定的一位数开始递增的，我想让他随机{4/5}位数的怎么设置？？</p><p>A：进入短连接程序后台，点击管理插件找到 <mark><strong>Random ShortURLs</strong></mark> 在右侧激活，激活后在管理插件下方能看到配置，点击进去可以设置自己需要的随机位数</p><figure><img src="'+L+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_5-2-自定义短链接" tabindex="-1"><a class="header-anchor" href="#_5-2-自定义短链接"><span><strong>5.2 自定义短链接</strong></span></a></h3><p>Q：我想给某个已经设置好的短链接设修改成我自己想设置的，怎么做？</p><p>A：进入短连接程序后台进行修改即可（如下图）</p><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',14);function on(cn,rn){const u=c("BiliBili"),t=c("ExternalLinkIcon"),d=c("YouTube"),r=c("Tabs"),p=c("Badge");return g(),b("div",null,[e(r,{id:"2",data:[{id:"哔哩哔哩"},{id:"YouTube"}],"tab-id":"video"},{title0:a(({value:i,isActive:l})=>[s("哔哩哔哩")]),title1:a(({value:i,isActive:l})=>[s("YouTube")]),tab0:a(({value:i,isActive:l})=>[e(u,{bvid:"BV1Ph4y1u7SG"}),n("div",S,[n("p",null,[n("a",B,[U,e(t)])])])]),tab1:a(({value:i,isActive:l})=>[e(d,{id:"YCHMGiiG7q4","disable-fullscreen":""}),n("div",A,[n("p",null,[n("a",q,[O,e(t)])])])]),_:1}),Y,n("ol",null,[n("li",null,[n("p",null,[s("短连接程序："),n("a",N,[s("https://github.com/YOURLS/YOURLS"),e(t)])]),T]),n("li",null,[n("p",null,[s("短连接汉化："),n("a",C,[s("https://github.com/taozhiyu/yourls-translation-zh_CN"),e(t)])]),n("ul",null,[n("li",null,[s("汉化是由 "),n("a",M,[F,e(t)]),s(" 提供")]),D])]),n("li",null,[n("p",null,[s("Web扩展插件："),n("a",I,[s("https://www.crxsoso.com/webstore/detail/nddaaiojgkoldnhnmkoldmkeocbooken"),e(t)])]),z])]),Q,n("p",null,[s("我们只需要把汉化包里面的两个文件(*.mo *.po)移动到 已经下载好的YOURLS程序包里面的"),e(p,{text:"/user/languages",type:"danger",vertical:"middle"}),s(" 文件夹就行")]),P,e(r,{id:"144",data:[{id:"初始化默认"},{id:"我自用填写的"}]},{title0:a(({value:i,isActive:l})=>[s("初始化默认")]),title1:a(({value:i,isActive:l})=>[s("我自用填写的")]),tab0:a(({value:i,isActive:l})=>[$]),tab1:a(({value:i,isActive:l})=>[V]),_:1}),j,n("p",null,[s("涵盖 "),G,s("三款浏览器："),n("a",W,[s("https://youtu.be/PP6b0WSzYMc"),e(t)]),s(" 只看怎么添加扩展插件即可")]),n("blockquote",null,[n("ul",null,[n("li",null,[n("p",null,[s("Web扩展插件："),n("a",K,[s("https://www.crxsoso.com/webstore/detail/nddaaiojgkoldnhnmkoldmkeocbooken"),e(t)])]),n("ul",null,[n("li",null,[n("p",null,[s("本地备用："),n("a",Z,[s("https://www.alipan.com/s/wCNVf6YgCL8"),e(t)])])]),H])])])]),J,X,nn,sn,s(" 这个配置好后，我们去试试看效果，下面的是我的一个Demo "),en,s(" 4. 记得在配置文件里面设置的帐号密码困难一些，防止别人登录 "),tn,n("p",null,[s("可能会被爆破的围观链接："),n("a",an,[s("https://github.com/YOURLS/YOURLS/pull/2747#issuecomment-689047797"),e(t)])]),ln])}const pn=m(R,[["render",on],["__file","10-dlianjie.html.vue"]]),mn=JSON.parse('{"path":"/index/10-dlianjie.html","title":"AList如何使用短链接","lang":"zh-CN","frontmatter":{"title":"AList如何使用短链接","icon":"fa-solid fa-rocket-launch","order":20,"author":"安稳","date":"2023-01-01T00:00:00.000Z","category":["使用指南"],"tag":["AList","短链接"],"sticky":true,"star":true,"headerDepth":6,"description":"1.前言 - 需求 咱们在使用AList时，复制的链接都是那么长，尤其是N层文件夹后，并且还是中文的情况下转码后，还有就是加密后更长啦 像下面这样,有中文转码了还更长啦~~复制发给小伙伴也很长 虽然AList无法内置短连接，咱也没技术实现，只好另辟蹊径来实现短连接了也不麻烦很方便 有兴趣的往下看吧~如果你要使用的话，最后的使用短连接的说明一定要看 那我...","head":[["meta",{"property":"og:url","content":"https://anwen-anyi/anwen-anyi.github.io/index/10-dlianjie.html"}],["meta",{"property":"og:site_name","content":"安安稳稳"}],["meta",{"property":"og:title","content":"AList如何使用短链接"}],["meta",{"property":"og:description","content":"1.前言 - 需求 咱们在使用AList时，复制的链接都是那么长，尤其是N层文件夹后，并且还是中文的情况下转码后，还有就是加密后更长啦 像下面这样,有中文转码了还更长啦~~复制发给小伙伴也很长 虽然AList无法内置短连接，咱也没技术实现，只好另辟蹊径来实现短连接了也不麻烦很方便 有兴趣的往下看吧~如果你要使用的话，最后的使用短连接的说明一定要看 那我..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://anwen-anyi/anwen-anyi.github.io/img/durl/hanhua.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-24T14:34:15.000Z"}],["meta",{"property":"article:author","content":"安稳"}],["meta",{"property":"article:tag","content":"AList"}],["meta",{"property":"article:tag","content":"短链接"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-24T14:34:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AList如何使用短链接\\",\\"image\\":[\\"https://anwen-anyi/anwen-anyi.github.io/img/durl/hanhua.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/durl/durl-demo.gif\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/durl/5_other1.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/durl/5_other2.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-24T14:34:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"安稳\\"}]}"]]},"headers":[{"level":2,"title":"1.前言 - 需求","slug":"_1-前言-需求","link":"#_1-前言-需求","children":[]},{"level":2,"title":"2.开始","slug":"_2-开始","link":"#_2-开始","children":[{"level":3,"title":"2.1 准备","slug":"_2-1-准备","link":"#_2-1-准备","children":[]},{"level":3,"title":"2.2 初始化","slug":"_2-2-初始化","link":"#_2-2-初始化","children":[{"level":4,"title":"配置汉化包","slug":"配置汉化包","link":"#配置汉化包","children":[]},{"level":4,"title":"配置短连接程序配置文件","slug":"配置短连接程序配置文件","link":"#配置短连接程序配置文件","children":[]}]},{"level":3,"title":"2.3 正式安装","slug":"_2-3-正式安装","link":"#_2-3-正式安装","children":[]}]},{"level":2,"title":"3. 使用问题","slug":"_3-使用问题","link":"#_3-使用问题","children":[{"level":3,"title":"3.1 访问短连接提示404","slug":"_3-1-访问短连接提示404","link":"#_3-1-访问短连接提示404","children":[]},{"level":3,"title":"3.2 如何配置插件来分享AList","slug":"_3-2-如何配置插件来分享alist","link":"#_3-2-如何配置插件来分享alist","children":[]},{"level":3,"title":"3.3 使用这个短连接的一些说明","slug":"_3-3-使用这个短连接的一些说明","link":"#_3-3-使用这个短连接的一些说明","children":[]}]},{"level":2,"title":"4. 结语-结束","slug":"_4-结语-结束","link":"#_4-结语-结束","children":[]},{"level":2,"title":"5. 其他用法","slug":"_5-其他用法","link":"#_5-其他用法","children":[{"level":3,"title":"5.1 随机短链接","slug":"_5-1-随机短链接","link":"#_5-1-随机短链接","children":[]},{"level":3,"title":"5.2 自定义短链接","slug":"_5-2-自定义短链接","link":"#_5-2-自定义短链接","children":[]}]}],"git":{"createdTime":1686751618000,"updatedTime":1703428455000,"contributors":[{"name":"AnWen-anyi","email":"anwen_anyi@foxmail.com","commits":11}]},"readingTime":{"minutes":13.08,"words":3923},"filePathRelative":"index/10-dlianjie.md","localizedDate":"2023年1月1日","autoDesc":true,"excerpt":"<!-- 你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。 -->\\n"}');export{pn as comp,mn as data};
