---
# 这是文章的标题
title: SSO单点登录
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
  - SSO
  - 单点登录
  - 接入登录
  - login
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

## 前言

我们这里接入的单点登录程序使用的是 **"[Casdoor](https://github.com/casdoor/casdoor)"**

别的不说了可以接入几十种帐号登录,你见过的没见过的好多

详细的可以看下面有一份支持接入的方式表单,不啰嗦了直接开始

::: details 支持接入的方式

图表来自 **"[Casdoor Docs](https://casdoor.org/zh/docs/provider/oauth/overview)"** 

| Provider        | Logo                                                         | Provider    | Logo                                                         | Provider  | Logo                                                         | Provider     | Logo                                                         |
| :-------------- | :----------------------------------------------------------- | :---------- | :----------------------------------------------------------- | :-------- | :----------------------------------------------------------- | :----------- | :----------------------------------------------------------- |
| Adfs            | <img src="https://cdn.casbin.org/img/social_adfs.png" width="40" /> | Alipay      | <img src="https://cdn.casbin.org/img/social_alipay.png" width="40" /> | Amazon    | <img src="https://cdn.casbin.org/img/social_amazon.png" width="40" /> | Apple        | <img src="https://cdn.casbin.org/img/social_apple.png" width="40" /> |
| Auth0           | <img src="https://cdn.casbin.org/img/social_auth0.png" width="40" /> | AzureAD     | <img src="https://cdn.casbin.org/img/social_azuread.png" width="40" /> | Baidu     | <img src="https://cdn.casbin.org/img/social_baidu.png" width="40" /> | Battle.net   | <img src="https://cdn.casbin.org/img/social_battlenet.png" width="40" /> |
| Bilibili        | <img src="https://cdn.casbin.org/img/social_bilibili.png" width="40" /> | Bitbucket   | <img src="https://cdn.casbin.org/img/social_bitbucket.png" width="40" /> | Box       | <img src="https://cdn.casbin.org/img/social_box.png" width="40" /> | Casdoor      | <img src="https://cdn.casbin.org/img/social_casdoor.png" width="40" /> |
| Cloud Foundry   | <img src="https://cdn.casbin.org/img/social_cloudfoundry.png" width="40" /> | Dailymotion | <img src="https://cdn.casbin.org/img/social_dailymotion.png" width="40" /> | Deezer    | <img src="https://cdn.casbin.org/img/social_deezer.png" width="40" /> | DigitalOcean | <img src="https://cdn.casbin.org/img/social_digitalocean.png" width="40" /> |
| DingTalk        | <img src="https://cdn.casbin.org/img/social_dingtalk.png" width="40" /> | Discord     | <img src="https://cdn.casbin.org/img/social_discord.png" width="40" /> | Douyin    | <img src="https://cdn.casbin.org/img/social_douyin.png" width="40" /> | Dropbox      | <img src="https://cdn.casbin.org/img/social_dropbox.png" width="40" /> |
| Eve Online      | <img src="https://cdn.casbin.org/img/social_eveonline.png" width="40" /> | Facebook    | <img src="https://cdn.casbin.org/img/social_facebook.png" width="40" /> | Fitbit    | <img src="https://cdn.casbin.org/img/social_fitbit.png" width="40" /> | Gitea        | <img src="https://cdn.casbin.org/img/social_gitea.png" width="40" /> |
| Gitee           | <img src="https://cdn.casbin.org/img/social_gitee.png" width="40" /> | GitHub      | <img src="https://cdn.casbin.org/img/social_github.png" width="40" /> | GitLab    | <img src="https://cdn.casbin.org/img/social_gitlab.png" width="40" /> | Google       | <img src="https://cdn.casbin.org/img/social_google.png" width="40" /> |
| Heroku          | <img src="https://cdn.casbin.org/img/social_heroku.png" width="40" /> | InfluxCloud | <img src="https://cdn.casbin.org/img/social_influxcloud.png" width="40" /> | Infoflow  | <img src="https://cdn.casbin.org/img/social_infoflow.png" width="40" /> | Instagram    | <img src="https://cdn.casbin.org/img/social_instagram.png" width="40" /> |
| Intercom        | <img src="https://cdn.casbin.org/img/social_intercom.png" width="40" /> | Kakao       | <img src="https://cdn.casbin.org/img/social_kakao.png" width="40" /> | Lark      | <img src="https://cdn.casbin.org/img/social_lark.png" width="40" /> | Lastfm       | <img src="https://cdn.casbin.org/img/social_lastfm.png" width="40" /> |
| Line            | <img src="https://cdn.casbin.org/img/social_line.png" width="40" /> | LinkedIn    | <img src="https://cdn.casbin.org/img/social_linkedin.png" width="40" /> | Mailru    | <img src="https://cdn.casbin.org/img/social_mailru.png" width="40" /> | Meetup       | <img src="https://cdn.casbin.org/img/social_meetup.png" width="40" /> |
| MicrosoftOnline | <img src="https://cdn.casbin.org/img/social_microsoftonline.png" width="40" /> | Naver       | <img src="https://cdn.casbin.org/img/social_naver.png" width="40" /> | Nextcloud | <img src="https://cdn.casbin.org/img/social_nextcloud.png" width="40" /> | Okta         | <img src="https://cdn.casbin.org/img/social_okta.png" width="40" /> |
| OneDrive        | <img src="https://cdn.casbin.org/img/social_onedrive.png" width="40" /> | Oura        | <img src="https://cdn.casbin.org/img/social_oura.png" width="40" /> | Patreon   | <img src="https://cdn.casbin.org/img/social_patreon.png" width="40" /> | Paypal       | <img src="https://cdn.casbin.org/img/social_paypal.png" width="40" /> |
| QQ              | <img src="https://cdn.casbin.org/img/social_qq.png" width="40" /> | SalesForce  | <img src="https://cdn.casbin.org/img/social_salesforce.png" width="40" /> | Shopify   | <img src="https://cdn.casbin.org/img/social_shopify.png" width="40" /> | Slack        | <img src="https://cdn.casbin.org/img/social_slack.png" width="40" /> |
| SoundCloud      | <img src="https://cdn.casbin.org/img/social_soundcloud.png" width="40" /> | Spotify     | <img src="https://cdn.casbin.org/img/social_spotify.png" width="40" /> | Steam     | <img src="https://cdn.casbin.org/img/social_steam.png" width="40" /> | Strava       | <img src="https://cdn.casbin.org/img/social_strava.png" width="40" /> |
| Stripe          | <img src="https://cdn.casbin.org/img/social_stripe.png" width="40" /> | TikTok      | <img src="https://cdn.casbin.org/img/social_tiktok.png" width="40" /> | Tumblr    | <img src="https://cdn.casbin.org/img/social_tumblr.png" width="40" /> | Twitch       | <img src="https://cdn.casbin.org/img/social_twitch.png" width="40" /> |
| Twitter         | <img src="https://cdn.casbin.org/img/social_twitter.png" width="40" /> | Typetalk    | <img src="https://cdn.casbin.org/img/social_typetalk.png" width="40" /> | Uber      | <img src="https://cdn.casbin.org/img/social_uber.png" width="40" /> | VK           | <img src="https://cdn.casbin.org/img/social_vk.png" width="40" /> |
| WeChat          | <img src="https://cdn.casbin.org/img/social_wechat.png" width="40" /> | WeCom       | <img src="https://cdn.casbin.org/img/social_wecom.png" width="40" /> | Weibo     | <img src="https://cdn.casbin.org/img/social_weibo.png" width="40" /> | Wepay        | <img src="https://cdn.casbin.org/img/social_wepay.png" width="40" /> |
| Xero            | <img src="https://cdn.casbin.org/img/social_xero.png" width="40" /> | Yahoo       | <img src="https://cdn.casbin.org/img/social_yahoo.png" width="40" /> | Yammer    | <img src="https://cdn.casbin.org/img/social_yammer.png" width="40" /> | Yandex       | <img src="https://cdn.casbin.org/img/social_yandex.png" width="40" /> |
| Zoom            | <img src="https://cdn.casbin.org/img/social_zoom.png" width="40" /> | Email       | <img src="https://cdn.casbin.org/img/social_mail.png" width="40" /> | SMS       | <img src="https://cdn.casbin.org/img/social_msg.png" width="40" /> |              |                                                              |

:::

#### 通用配置 - 回调参数URL

1. 回调参数URL：**http(s):\//YOU_URL/callback**，下面举几个例子

- http://22.333.222.111:8000/callback
- https://22.111.222.333:8000/callback
- http://sso.baidu.com/callback

- https://sso.baidu.com/callback

总之就是不论你怎么写 结尾加一个 `/callback` 即可,

这个是对接到提供商新建的应用程序里面使用，现在不懂没关系往下看看到了就懂了

-----

2. 接入提供商

接入的提供商都是在`Casdoor`，顶部选项`提供商`那里接入的，接入好后再去应用里面添加

![图为在应用添加已经接入的提供商](/img/sso/add.png)

-----

下面我们说一下怎么接入不同方式的登录吧

## 接入

[钉钉](@飞书)

::::center

::::

:::tabs#ssologin



@tab 钉钉

打开[**钉钉开放平台**](https://open-dev.dingtalk.com/?spm=ding_open_doc.document.0.0.140a645fxfAUAE#/loginMan),登录后按照官方提示注册自己的应用，即可在`应用信息`看到 **客户端ID(Client Id)** 和 **客户端秘钥(Client Secret)**

注册好应用后 我们来添加一下回调参数，回调参数链接就是我们开始提到是 通用配置格式里面的，按照下图来填写即可

![添加回调参数](/img/sso/dingding/add-callback.png)

回调参数填写好后我们来开通几个权限，钉钉需要手动开启几个权限，在`权限管理`內开通如下权限,缺一不可

1. 个人手机号信息			ontact.User.mobile

2. 通讯录个人信息读权限	Contact.User.Read

3. 成员信息读权限			qyapi_get_member

![需要开通的权限](/img/sso/dingding/quanxian.png)

回调参数和权限都开通后 我们开始接入到 `Casdoor`，很简单照着写吧

![填写到`Casdoor`接入](/img/sso/dingding/add.png)





@tab 飞书

打开[**飞书开放平台**](https://open.feishu.cn/app),登录后按照官方提示注册自己的应用，即可在`凭证与基础信息`看到 **客户端ID(Client Id)** 和 **客户端秘钥(Client Secret)**

飞书接入也很简单，但是有个问题是登录的时候是需要使用APP，并且是`飞书商务版`

-----

我们先添加一下回调参数，第一次使用的话我们得发布一下应用，直接点点点点就行,直接抄作业吧如下图

![添加回调参数](/img/sso/feishu/add-callback.png)

飞书也不需要我们去开通什么权限，直接能用，下面开始接入到 `Casdoor`，很简单照着写吧

![填写到`Casdoor`接入](/img/sso/feishu/add.png)

填写好后，下图是我们接入登录的预览图

![接入登录绑定时预览图](/img/sso/feishu/login-demo.png)





@tab 百度

打开[**百度开放平台**](http://developer.baidu.com/console#app/project),登录后按照官方提示注册自己的应用，即可在`基本信息`看到 **客户端ID(Client Id)** 和 **客户端秘钥(Client Secret)**

呃呃呃，百度的竟然没`HTTPS`,虽然没啥问题,总觉得怪怪的 哈哈~~

-----

接入百度也很简单，创建好应用后 我们直接来`安全设置`来填写回调参数URL

![添加回调参数](/img/sso/baidu/add-callback.png)

然后就没然后了，下面我们去`Casdoor`填入接入参数吧

![填写到`Casdoor`接入](/img/sso/baidu/add.png)

填写好后，下图是我们接入登录的预览图

![接入登录绑定时预览图](/img/sso/baidu/login.png)





@tab GitHub

打开[**GitHub OAuth Apps**](https://github.com/settings/developers),左上角[New OAuth Apps](https://github.com/settings/applications/new)注册一个应用,

然后就会看到 **客户端ID(Client Id)** 和我们需要手动创建一个 **客户端秘钥(Client Secret)**

注册的时候看起来和我提供的图片不一样，实际上没啥区别

`Authorization callback URL`：这个选项是填写回调参数URL的

-----

我们直接快进到填写参数接入到 `Casdoor`，很简单照着写吧

![填写到`Casdoor`接入](/img/sso/github/add.png)

填写好后，下图是我们接入登录的预览图

![接入登录绑定时预览图](/img/sso/github/login-demo.png)





@tab 谷歌

打开[**Google API 凭据**](https://console.cloud.google.com/apis/credentials)，顶部的`创建凭据` --> `OAuth 客户端ID` 注册一个应用

直接照着下图写，也记得填写回调参数URL喔~

 ==如果你是第一次配置，请直接看下面的第三章图再回来新建应用==

![添加回调参数](/img/sso/google/new.png)

创建好应用应该能看到 **客户端ID(Client Id)** 和 **客户端秘钥(Client Secret)**

快进到填写参数接入到 `Casdoor`，很简单照着写吧

![填写到`Casdoor`接入](/img/sso/google/add.png)

-----

如果你是第一次创建谷歌 `OAuth 客户端ID`，首选需要配置一下同意屏幕

![配置同意屏幕](/img/home/Google-6.png)





@tab 微软

打开[**Microsoft AzureAD应用注册**](ttps://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps)，注册一个我们自己的应用

如果你有其他的需求，一个默认的回调参数URL不够用，可以在新建好后再来添加

![注册 Microsoft AzureAD 应用](/img/sso/weiruan/new.png)

注册好应用后我们就能看到我们的 **客户端ID(Client Id)**，然后再去新建一个**客户端秘钥(Client Secret)**

客户端秘钥记得提前保存，不然刷新页面就不会再出现了，只能再重新新建一个秘钥了

![新建客户端秘钥](/img/sso/weiruan/id-key.png)

 **客户端ID(Client Id)** 和 **客户端秘钥(Client Secret)** 都拿到了我们也要去授权一下 API权限

我们只需要一个`User.Read`，默认帮我们加好了，我们只需要授权一下就可以，但是如果需要其他的自行添加

![授权API权限](/img/sso/weiruan/shouquan.png)

该设置的都设置了，开始接入到 `Casdoor`吧

![填写到`Casdoor`接入](/img/sso/weiruan/add.png)

-----

新增多个`callback URL`参数

![增加多个callback URL](/img/sso/weiruan/add-callback.png)





@tab 其他

其他的厂商接入还在路上,敬请期待~

:::



