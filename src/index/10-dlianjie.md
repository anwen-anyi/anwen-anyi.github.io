---
# 这是文章的标题
title: AList如何使用短连接
# 这是页面的图标
icon: fa-solid fa-rocket-launch
# 这是侧边栏的顺序
order: 3
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
  - 短连接
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

## **1.前言 - 需求**

咱们在使用AList时，复制的链接都是那么长，尤其是N层文件夹后，并且还是中文的情况下转码后，还有就是加密后更长啦

像下面这样,有中文转码了还更长啦~~复制发给小伙伴也很长

虽然AList无法内置短连接，咱也没技术实现，只好另辟蹊径来实现短连接了也不麻烦很方便

有兴趣的往下看吧~如果你要使用的话，最后的[使用短连接的说明一定要看](#_3-3-使用这个短连接的一些说明)

```html
https://alist.org/d/国产/电影/速度与激情全集/速度与激情10-4k.mp4
https://alist.org/d/%E5%9B%BD%E4%BA%A7/%E7%94%B5%E5%BD%B1/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%85%E5%85%A8%E9%9B%86/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%8510-4k.mp4

https://alist.org/d/国产/电影/速度与激情全集/速度与激情10-4k.mp4?sign=QhNb42WdoWyriTkBiOcdaQ9JF76EtROA12y_aC1PB0o=:0
https://alist.org/d/%E5%9B%BD%E4%BA%A7/%E7%94%B5%E5%BD%B1/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%85%E5%85%A8%E9%9B%86/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%8510-4k.mp4?sign=QhNb42WdoWyriTkBiOcdaQ9JF76EtROA12y_aC1PB0o=:0
```

那我们使用短连接将链接进行缩短，缩短后就是这样

```html
https://alist.org/d/%E5%9B%BD%E4%BA%A7/%E7%94%B5%E5%BD%B1/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%85%E5%85%A8%E9%9B%86/%E9%80%9F%E5%BA%A6%E4%B8%8E%E6%BF%80%E6%83%8510-4k.mp4

⬇⬇⬇⬇⬇⬇⬇⬇使用短连接进行缩短⬇⬇⬇⬇⬇⬇⬇⬇

https://d.alist.org/sudu10
```

缩短后我们打开短连接会跳到开始的那个这样很方便

下面我们就开始说一下怎么搭建吧



<br/>



## **2.开始**

### **2.1 准备**

1. 短连接程序：[https://github.com/YOURLS/YOURLS](https://github.com/YOURLS/YOURLS)
   - 本地备用：<span class="nav-item"><a class="nav-link" href="https://www.aliyundrive.com/s/wCNVf6YgCL8/folder/648980687c869f9d2db04c4083362abffc13e15d" target="_blank" style="font-weight: bold;"><i class="fa fa-cloud-download" style="color:#409EFF;" aria-hidden="true"></i> 在线云盘下载</a></span>

2. 短连接汉化：[https://github.com/taozhiyu/yourls-translation-zh_CN](https://github.com/taozhiyu/yourls-translation-zh_CN)
   - 汉化是由 [**@52破解涛之雨**](https://www.52pojie.cn/home.php?mod=space&uid=879080&do=profile&from=space) 提供
   - 本地备用：<span class="nav-item"><a class="nav-link" href="https://www.aliyundrive.com/s/wCNVf6YgCL8/folder/648980687c869f9d2db04c4083362abffc13e15d" target="_blank" style="font-weight: bold;"><i class="fa fa-cloud-download" style="color:#409EFF;" aria-hidden="true"></i> 在线云盘下载</a></span>

3. Web扩展插件：[https://www.crxsoso.com/webstore/detail/nddaaiojgkoldnhnmkoldmkeocbooken](https://www.crxsoso.com/webstore/detail/nddaaiojgkoldnhnmkoldmkeocbooken)
   - 本地备用：<span class="nav-item"><a class="nav-link" href="https://www.aliyundrive.com/s/wCNVf6YgCL8/folder/648980687c869f9d2db04c4083362abffc13e15d" target="_blank" style="font-weight: bold;"><i class="fa fa-cloud-download" style="color:#409EFF;" aria-hidden="true"></i> 在线云盘下载</a></span>
   - **自用汉化**：上述的本地备用里面有一个是我自己将插件解压汉化了的，但是 `Chrome`浏览器用不了 360浏览器可以自己选择吧

这个短连接也支持查看点击次数喔~

<br/>



### **2.2 初始化**

短连接程序和汉化包已经准备好了，接下来我们就开始配置一下 **YOURLS^短连接程序^** 和汉化包吧

#### **配置汉化包**

我们只需要把汉化包里面的两个文件(*.mo *.po)移动到 已经下载好的YOURLS程序包里面的<Badge text="/user/languages" type="danger" vertical="middle" /> 文件夹就行

![](/img/durl/hanhua.png)



<br/>



#### **配置短连接程序配置文件**

原生的配置文件里面是英文的现在进行了汉化

配置文件原来是叫 **`config-sample.php`**，我们==需要手动==修改为 **`config.php`**

- 自己修改前：`/user/config-sample.php`
- 自己修改后：`/user/config.php`

```php{10-13,17,20,24,28,34,44,51,62,66,71-77}
<?php
/* This is a sample config file.
 * Edit this file with your own settings and save it as "config.php"
 *
 * IMPORTANT: edit and save this file as plain ASCII text, using a text editor, for instance TextEdit on Mac OS or
 * Notepad on Windows. Make sure there is no character before the opening <?php at the beginning of this file.
 */

/*
 ** 仔细阅读MySQL设置-您可以从web主机获取此信息
 ** 用户配置是修改右侧内内容别改错咯~
 ** 例如 define( 'YOURLS_DB_USER', 'your db user name' );
 ** 我们要修改的是 your db user name ==> 改成我们的MySQL用户名
 */

/** 你的MySQL用户名 */
define( 'YOURLS_DB_USER', 'your db user name' );

/** 你的MySQL密码 */
define( 'YOURLS_DB_PASS', 'your db password' );

/** 你的数据库名
 ** 仅使用小写字母[a-z]、数字[0-9]和下划线[_] */
define( 'YOURLS_DB_NAME', 'yourls' );

/** MySQL数据库主机.
 ** 如果使用非标准端口，请将其指定为'主机名:端口'例如'localhost:9999'或'127.0.0.1:666' */
define( 'YOURLS_DB_HOST', 'localhost' );

/** MySQL数据库表前缀
 ** YOURLS将使用此表前缀创建表（例如`yourls_url`,`yourls_options`等)
 ** 仅使用小写字母[a-z]、数字[0-9]和下划线[_] 
 ** 默认就行 */
define( 'YOURLS_DB_PREFIX', 'yourls_' );

/*
 ** Site options
 */

/** YOURLS安装网站
 ** 全部小写，结尾没有斜杠。
 ** 如果要把它定义为"http://sho.rt"，不使用 "http://www.sho.rt"请不要在浏览器中使用www的二级域名（反之亦然）
 ** 要使用多语种域名（如http://你好.世界），请在此处写入其ascii格式 (如http://xn--6qq79v.xn--rhqv96g/) */
define( 'YOURLS_SITE', 'http://your-own-domain-here.com' );

/** YOURLS语言
 ** 更改此设置以使用语言的翻译文件，而不是使用默认的英语
 ** 翻译文件（.mo文件）必须导入在 user/language 目录中
 ** 可以查看 http://yourls.org/translations 了解更多信息 
 ** 汉化包推荐使用: https://github.com/taozhiyu/yourls-translation-zh_CN */
define( 'YOURLS_LANG', 'zh_CN' );

/** 允许同一个长URL包含多个短URL
 ** 如果设置为true，则同一长链接，不能有多个短链接
 ** 设置为false则允许多个短链接指向同一个长链接 */
define( 'YOURLS_UNIQUE_URLS', true );

/** 私有意味着访问短链接后台需要登录
 ** 设置为false则用于公共用途
 ** 说人话就是是否允许所有人都可以生成短连接，默认是禁止的，设置成false
 ** 如果您不确定，请阅读http://yourls.org/privatepublic 了解更多 */
define( 'YOURLS_PRIVATE', true );

/** 用于加密cookies的随机密码，您不需要记住它，所以可以使它更复杂
 ** 提示：在 http://yourls.org/cookie 生成随机的密码*/
define( 'YOURLS_COOKIEKEY', 'modify this text with something random' );

/** 允许访问后台的用户名和密码，密码可以是纯字符的，也可以是加密的散列
 ** YOURLS将自动加密此文件中的纯文本密码
 ** 阅读 http://yourls.org/userpassword 了解更多信息 */
$yourls_user_passwords = [
	//下方的默认username建议删除自己新建一个
	//'username' => 'password',
	'账号' => '密码'
	// 'username2' => 'password2',
	// You can have one or more 'login'=>'password' lines
];

/** URL缩短方法: 36 或 62
 ** 36: 生成所有小写字母数字组合 (如：13jkm)
 ** 62: 生成大小写混合的字母数字组合 (如：13jKm或13JKm) */
define( 'YOURLS_URL_CONVERT', 36 );

/** 调试模式输出一些内部信息
 ** 默认值为false，编码时或提交新问题前启用 */
define( 'YOURLS_DEBUG', false );

/**
* 保留关键字（设置后生成的随机URL将避开保留的关键字）
* 在这里可以设置一些负面的、不需要的或潜在误导性的关键字
*/
$yourls_reserved_URL = [
	'porn', 'faggot', 'sex', 'nigger', 'fuck', 'cunt', 'dick',
];

/*
 ** Personal settings would go after here.
 */
```



<br/>



### **2.3 正式安装**

上述提到的配置文件我们可以在本地修改好上传上去，也可以直接在服务器下载好然后在服务器修改，

（看自己怎么方便怎么来，我觉得还是在本地修改好在上传上去方便 哈哈~）

然后我们访问 `http(s)://您的域名/admin/install.php` ,点击“安装YOURLS”

安装好后点击管理员页面登录我们在配置文件写的帐号密码

<div class="image-preview">
  <img src="/img/durl/install.png" />
  <img src="/img/durl/name-pass.png" />
</div>

到这里已经安装好了，可以愉快的去使用啦





<br/>



## **3. 使用问题**

### **3.1 访问短连接提示404**

::: details Nginx配置

在Nginx配置里面最底下的 `}`结束前添加一条

```
# URL重写
location / {try_files $uri $uri/ /yourls-loader.php$is_args$args;}
```

例如:
```conf{3}
    access_log  /ect/xx/d.alist.org.log;
    error_log  /etc/xx/d.alist.org.error.log;
    location / {try_files $uri $uri/ /yourls-loader.php$is_args$args;}
}
```

添加好后回去

:::

::: details Apache配置

Apache需要启用mod_rewrite模块，请创建.htaccess文件（注意区分安装路径）

```
#.htaccess 文件内容，如果是根目录下（如http://您的域名/）
# BEGIN YOURLS
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^.*$ /yourls-loader.php [L]
</IfModule>
# END YOURLS
 
#如果是二级目录下（如：http://您的域名/somedir/）
# BEGIN YOURLS
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /somedir/
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^.*$ /somedir/yourls-loader.php [L]
</IfModule>
# END YOURLS
```

:::

### **3.2 如何配置插件来分享AList**

插件我们下载下来，后添加到浏览器扩展，怎么添加可以查看下方的视频

涵盖 `360，Chrome，Edge`三款浏览器：https://youtu.be/PP6b0WSzYMc 只看怎么添加扩展插件即可

>- Web扩展插件：[https://www.crxsoso.com/webstore/detail/nddaaiojgkoldnhnmkoldmkeocbookenopen in new window](https://www.crxsoso.com/webstore/detail/nddaaiojgkoldnhnmkoldmkeocbooken)
>
>  	- 本地备用：[https://www.aliyundrive.com/s/wCNVf6YgCL8open in new window](https://www.aliyundrive.com/s/wCNVf6YgCL8)
> 
>  	- **自用汉化**：上述的本地备用里面有一个是我自己将插件解压汉化了的，但是 `Chrome`浏览器用不了 360浏览器可以自己选择吧
> 

将插件添加到浏览器后，点击插件的 `设置|setting`选项进行配置，

第二个选项里面的签名是在 `http(s)://你的链接/admin/tools.php` 页面里面的`安全的API调用` 标题的往下数第三行里面有个参数复制一下填写

大家看下面的图吧，一个是我自己汉化了的，一个是原生英文的

<div class="image-preview">
  <img src="/img/durl/cn.png" />
  <img src="/img/durl/en.png" />
</div>
这个配置好后，我们去试试看效果，下面的是我的一个Demo

![](/img/durl/durl-demo.gif)

### **3.3 使用这个短连接的一些说明**

1. 不推荐将所有人都可以生成短链接选项打开，防止别人使用你的短连接分发一些"奇奇怪怪"的东西去喝茶
2. 建议打开 **`是否自动将结果复制到剪贴板? | Auto-copy result to clipboard?`** 这样我们点击插件后就不要手动去点copy了它会自动帮你复制你只需要去粘贴分享即可
4. 其实在链接右键会弹出的选项中也可以选择 **YOURLS^短连接程序^** 插件,然后点击顶部的插件扩展栏就会进行缩短链接

<div class="image-preview">
  <img src="/img/durl/d_cn.png" />
  <img src="/img/durl/d_en.png" />
</div>
4. 记得在配置文件里面设置的帐号密码困难一些，防止别人登录


5. 防止被爆破，修改 `/admin`文件夹为你想改的名字，然后在`/user`目录新建`cache.php`内容如下：

```php
<?php
// introduce a new filter early, before plugins are actually loaded
yourls_add_filter( 'admin_url', 'ozh_custom_admin_url' );
function ozh_custom_admin_url($url) {
    return str_replace('/admin/', '/想要得目录名/', $url);
}
```

可能会被爆破的围观链接：https://github.com/YOURLS/YOURLS/pull/2747#issuecomment-689047797

6. 其他的暂时没有了，==第五条挺重要的改一下吧也不麻烦==



<br/>



## **4. 结语-结束**

到这里就结束了，有兴趣的话大家去试试看吧，可能文字描述的不是很详细，视频版嘛 在路上了敬请期待吧，视频发了这里会进行修改
