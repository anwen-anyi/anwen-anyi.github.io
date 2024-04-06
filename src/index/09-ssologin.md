---
# 这是文章的标题
title: SSO单点登录
# 这是页面的图标
icon: fa-solid fa-rocket-launch
# 这是侧边栏的顺序
order: 45
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

我们这里接入的单点登录程序使用的是 **"[Casdoor](https://github.com/casdoor/casdoor)"** 别的不说了可以接入几十种,你见过的没见过的都有

详细的可以看下面有一份支持接入的方式表单,不啰嗦了直接开始

::: details 支持接入的方式表单

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

:::tabs#ssologin

@tab QQ

打开[**QQ开发者平台**](https://connect.qq.com/manage.html),审核通过后，创建网页应用，获取您的客户ID和客户端密钥。

- ==需要有备案哦~==

- 若是**QQ开发者平台**没法认证可以先在 [**腾讯应用开放平台**](https://app.open.qq.com/) 认证后，我们拿**腾讯应用开放平台**的**OpenID和UserID**去绑定**QQ开发者平台**的移动应用里面的关联**腾讯开放平台**，这样**腾讯开放平台**认证审核通过后**QQ开发者平台**也就审核通过了
  - **QQ开发者平台**有感觉页面js有问题总是加载不出来 我只能通过这样的办法通过认证

![绑定腾讯应用开放平台](/img/sso/qq/bangding.png)

### **注册应用 - 添加回调参数**

认证审核 和 应用注册审核都很快的，之要是在工作日內，一般都是在下午处理，下午3-5点左右处理

- 注册应用时，记得填写我们的**回调参数URL**哦~

应用注册时需要遵循他们的规范，不然不给通过

不过我们可以先等审核通过了拿到 **客户端ID(Client Id)** 和 **客户端秘钥(Client Secret)** 然后再去删掉咯

- 应用注册的规范：https://wiki.connect.qq.com/%e7%a7%bb%e5%8a%a8%e5%ba%94%e7%94%a8%e6%8e%a5%e5%85%a5%e6%b5%81%e7%a8%8b%ef%bc%88%e6%94%b9%ef%bc%89test

应用注册好了 我们等着就行一个工作日內处理完

![注册应用以及添加`回调参数`](/img/sso/qq/add-callback.png)

应用注册好后 审核也通过了 我们接入到`Casdoor`吧

![填写到`Casdoor`接入](/img/sso/qq/add.png)

也接入好了 我们看看登录演示

![接入登录演示Demo](/img/sso/qq/login-demo.png)

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

打开[**GitHub OAuth Apps**](https://github.com/settings/developers),左上角[New OAuth Apps](https://github.com/settings/applications/new)注册一个应用

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

 ==如果你是第一次配置，请直接看下面的第三张图再回来新建应用==

![添加回调参数](/img/sso/google/new.png)

创建好应用应该能看到 **客户端ID(Client Id)** 和 **客户端秘钥(Client Secret)**

快进到填写参数接入到 `Casdoor`，很简单照着写吧

![填写到`Casdoor`接入](/img/sso/google/add.png)

-----

如果你是第一次创建谷歌 `OAuth 客户端ID`，首选需要配置一下同意屏幕

![配置同意屏幕](/img/home/Google-6.png)



@tab 微软

打开[**Microsoft AzureAD应用注册**](https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps)，注册一个我们自己的应用

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



@tab Gitlab

打开[**GitLab 应用注册**](https://gitlab.com/oauth/applications)，注册一个我们自己的应用，注册应用时候记得填写回调参数URL和选择权限^(3个)^

![添加回调参数](/img/sso/gitlab/add-callback.png)

应用注册好后就会看到到我们的 **客户端ID(Client Id)** 和 **客户端秘钥(Client Secret)**，然后我们直接填写到填写到`Casdoor`接入

![填写到`Casdoor`接入](/img/sso/gitlab/add.png)

`Casdoor`接入后我们在AList后台绑定时，登录帐号后记得授权哦~

![绑定单点登录授权](/img/sso/gitlab/shouquan.png)





@tab Yandex

打开[**Yandex开发者中心**](https://oauth.yandex.com/client/new/id)注册一个我们自己的应用

- 注册很简单，
  - 第一步：填一个注册`应用名称`以及勾选一下应用的`类型`
  - 第二步：略
  - 第三步：填写我们的回调参数，我们就填写[通用配置-回调参数url](#通用配置-回调参数url)即可
  - 第四步：写个邮箱即可
  - 第四步完成后会出现一个预览的，我们选择下面长条橙黄色按钮： ==**Everything is correct. Create the app**== 

![新建应用以及添加回调参数](/img/sso/yandex/new.png)

新建好应用后我们就能看到 **客户端ID(Client Id)** 和 **客户端秘钥(Client Secret)**，填写到`Casdoor`提供商

如果新建好应用后刷新了页面，可以找到我们新建的应用点进去获取参数

![填写到`Casdoor`接入](/img/sso/yandex/add.png)

使用`Yandex`登录预览

![Yandex登录预览](/img/sso/yandex/login-demo.png)





@tab Discord

打开[**Discord开发者中心**](https://discord.com/developers/applications)注册一个我们自己的应用，照着下图操作即可

![注册应用](/img/sso/discord/new.png)

注册好应用后，我们 **客户端ID(Client Id)** 和 **客户端秘钥(Client Secret)** 就能看到 

顺便填写一下 回调参数URL，然后将参数填写到`Casdoor`接入

![填写到`Casdoor`接入](/img/sso/discord/add.png)

使用`Discord登录预览`登录预览

![Discord登录预览](/img/sso/discord/login-demo.png)





@tab Twitch

首先打开[**Twitch开发者控制台**](https://dev.twitch.tv/console/apps)注册一个我们的应用

登录控制台时我们先授权一下给`Twitch`权限^(下图左侧图)^，也要在[**个人设置**](https://www.twitch.tv/settings/security)绑定邮箱和二次验证^(下图右侧图)^

- 二次验证^(2FA)^使用[Google验证器](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2) 或 [Microsoft验证器](https://support.microsoft.com/zh-cn/account-billing/%E4%B8%8B%E8%BD%BD%E5%B9%B6%E5%AE%89%E8%A3%85microsoft-authenticator%E5%BA%94%E7%94%A8-351498fc-850a-45da-b7b6-27e523b8702a),这两个都可以

![登录开发者控制台授权](/img/sso/twitch/shouquan.png)

然后注册我们的开发者应用，记得填写**回调参数URL**，类别看着选吧实在不知道和我的一样也可以

![填写到`Casdoor`接入](/img/sso/twitch/new.png)

新建好后，我们找到我们新建的应用,手动获取一下秘钥，就得到了**客户端ID(Client Id)** 和 **客户端秘钥(Client Secret)**，然后填写到`Casdoor`接入吧

![填写到`Casdoor`接入](/img/sso/twitch/add.png)

填写到`Casdoor`接入好后，我们也回到AList绑定单点登录试试看~

![Twitch绑定登录预览](/img/sso/twitch/login-demo.png)

Twitch登录没有问题



@tab 企业微信(内部)

呃呃呃，基本添加方式摸清了，但是最后还是需要企业认证绑定才行，我们先看看怎么用吧

打开[**企业微信后台**](https://work.weixin.qq.com/wework_admin/frame#apps)，在`自建`添加一个我们自己的应用，然后填写回调参数

但是企业微信的回调参数和以往的写法不同,[**参考链接**](https://developer.work.weixin.qq.com/document/path/98151#%E5%BC%80%E5%90%AF%E7%BD%91%E9%A1%B5%E6%8E%88%E6%9D%83%E7%99%BB%E5%BD%95)

![添加回调参数](/img/sso/weixin/add-callback.png)

回调参数写好了，我们去寻找 **客户端ID(Client Id)** 和 **客户端秘钥(Client Secret)** 以及 **企业应用ID(Agent ID)**

![填写到`Casdoor`接入](/img/sso/weixin/add.png)

到这里填写好了 倒是没什么问题了，然后问题不出意外的出现了意外 :warning::warning::warning:

-----

But! 重点来了，填写好后竟然发现好像还是需要企业认证的...链接也附带到下面了有兴趣的可以看看

![绑定单点登录时遇到的问题](/img/sso/weixin/error.png)

上述问题的链接如下：

- 右1图：https://open.work.weixin.qq.com/devtool/query?e=60020
- 右2图：https://developer.work.weixin.qq.com/document/path/90313#%E9%94%99%E8%AF%AF%E7%A0%81%EF%BC%9A60020
- 右3图：https://open.work.weixin.qq.com/wwopen/common/readDocument/40754





@tab 其他

更多的厂商接入还在路上,敬请期待~

- 支付宝，哔哩哔哩，抖音，微信/企业微信(企业内部和第三方商业)
  - 这些需要企业认证才可以，个人无法申请

- 微博：没实名过，需要实名认证，如需要自行接入很简单
  - 开发者注册地址：https://open.weibo.com/developers/basicinfo
- Gitee：也没实名过，也需要实名认证，如需要自行接入很简单
  - 开发者注册地址：https://open.weibo.com/developers/basicinfo
- Infoflow(百度如流)：需要企业资质
  - http://qy.baidu.com/index.html#appdetail
- 企业微信：两个不同
  - 企业内部：https://work.weixin.qq.com/wework_admin/frame#apps
    - 如果需要添加可以在前面标签中看看已经添加了一个大概企业微信
  - 第三方商业：https://open.work.weixin.qq.com/wwopen/developer#/sass/power/inter
- Apple开发者：没折腾明白
  - 开发者注册地址：https://developer.apple.com/account/resources/identifiers/list
- Steam：没账号就没测试
  - https://steamcommunity.com/dev/apikey
- 微信开放平台需付费，中国地区￥300，非中国地区 $99
  - 微信开放平台帐号的开发者资质认证提供更安全、更严格的真实性认证、也能够更好的保护企业及用户的合法权益
  - 开发者资质认证通过后，微信开放平台帐号下的应用，将获得微信登录、智能接口、第三方平台开发等高级能力
  - **审核费用：中国大陆地区：300元，非中国大陆地区：99美元**

![认证费用](/img/sso/renzheng.png)

----

以下这些暂时还未尝试

- Tiktok：需要填写然后审核
  - https://developers.tiktok.com/apps/

- Okta：没见过暂时还没尝试
  - https://dev-78625966-admin.okta.com/admin/app
- Slack：暂时还没尝试
  - https://api.slack.com/apps
- Twitter：申请困难，官方限制严格
  - https://developer.twitter.com/en/portal/dashboard

- Facebook：需要能连接到外网的机器,因没有暂无法添加（很简单）
  - https://developers.facebook.com/apps
- Instagram：和Facebook 好像一样 是一家的
  - 网游登录不了instagram 没法找到开发者后台


:::

也就整理这些吧，国内国外的都有了

-----

<br/><br/>

### **如何使用其他组织登录?**

上述也看到了我们也选择了我们新建的组织`alist-org`，然后用户`alist-user`绑定的也是我们新建的组织

那么我们登录的时候默认页面如果去使用`alist-user`帐号去等我们是登录不了的

我们得去`https://YOU_URL/login/alist-org`这个页面去登录才能找到`alist-user`这个用户的帐号

若是觉得麻烦，我们直接把`alist-user`这个用户绑定的组织换成默认就可以使用`https://YOU_URL/login`登录了

<br/><br/>

### **如何绑定第三方应用登录到用户?**

我们在提供商接入应用后，在应用也添加好，在用户页面内 `组织` 和 `应用` 都填好对应的

然后下拉有一个`第三方登录`，我们在这里绑定好到时候我们可以使用这些应用来登录我们的`alist-user`帐号

::: details 展开查看如何绑定第三方应用登录到用户

![用户绑定第三方登录](/img/sso/bangding.png)

:::

<br/><br/>

### **如何禁止其他人注册?**

1. 找到对应的应用，进去下拉会看到一个`启用注册`的选项，关闭即可
   - 简单粗暴，这样除了现有的用户以外其他人都无法注册
2. 找到对应的应用，下来添加了第三方登录的接入，把那些接入应用的`可用于注册`选项关闭即可
   - 如果直接关闭`启用注册`的选项 第二个不用管会自动关闭

::: details 展开查看如何禁止其他人注册

![取消注册](/img/sso/zhuce.png)

:::

<br/>



## **单点登录自动注册为AList帐号**

- ==AList 版本 > **v3.22.1** 新增功能==

在使用单点登录注册为AList帐号前，我们需要先将AList的单点登录进行绑定，绑定方法在[**AList文档**](https://alist.nn.ci/zh/guide/advanced/sso.html)有详细说明这里就不写啦

- 支持上述提到的`五个`单点登录方法

- 如果使用`Casdoor`,请勿直接使用默认组织(**app-built-in**),因为这个组织内的用户都是全局管理员帐号
- 除了`Casdoor`其它的只需要填写`客户端ID`和`客户端秘钥`以及下面新增的单点登录帐号注册为AList帐号的配置



### **<i class="fa-solid fa-circle-0" style="color: #409eff;"></i>SSO完整填写示例**

分别如何填写看下面的详细说明，示意图只是一个填写参考并不适合每个人的用户习惯

![完整的填写示例](/img/sso/sso-add.png)



### **<i class="fa-solid fa-circle-1" style="color: #409eff;"></i>SSO自动注册**

如果我们想让SSO单点登录注册为AList帐号我们需要打开这个选项才可以使用



### **<i class="fa-solid fa-circle-2" style="color: #409eff;"></i>SSO默认路径**

也就是说注册的帐号默认使用的路径，相当于AList用户设置里面的`基本路径`

可以是根目录`/`，也可以是用户指定的路径`/path/test/Demo`

![](/img/sso/sso-dir.png)



### **<i class="fa-solid fa-circle-3" style="color: #409eff;"></i>SSO默认权限**

相当于注册的用户默认开通哪些权限，就如下面所示的

![](/img/sso/sso-permission.png)

默认为0，不开通任何权限

如果在注册时我们需要开通一些权限我们只需要不同权限的数字相加即可

例如：

1. 我们需要默认开通用户的`WebDav读取`和`WebDav管理`那就是256+512=768，我们就在填写选项填写`768`即可
2. 如果我们需要注册时默认开通`创建目录或上传`和`重命名`和`删除`这三个权限 那就是8+16+128=152，我们在后台填写`152`即可

例子就不多说了，需要那个权限自己相加就可以



### **<i class="fa-solid fa-circle-4" style="color: #409eff;"></i>.注意事项以及说明**

**4.1-AList用户数据库已经的帐号**

| username          | password | base_path | role | permission | opt_secret | github_id | disabled | sso_id      |
| ----------------- | -------- | --------- | ---- | ---------- | ---------- | --------- | -------- | ----------- |
| anyi              | FzdDfkmU | /本地1    | 0    | 3          |            |           | 0        |             |
| anyi_**dc188911** | RUCtgqCw | /本地1    | 0    | 3          |            |           | 0        | **dc18891** |

如上表格所示，新注册的单点登录用户名称后增加了一串多余的id

这是因为AList用户数据库中已有了相同的用户，所以在用户名后把单点登录ID也添加上去了

如果你新注册的单点登录用户名在AList用户数据库中没有，它就不会在名字后面添加单点登录ID

<br/><br/>



## **Casdoor 编译教程**

因为 `Casdoor` 如果使用他们官网托管的是需要付费的也理解，但是 `Casdoor`是开源免费的 可以自己编译然后再部署

**[Casdoor官网](https://casdoor.org/zh/)，[GitHub](https://github.com/casdoor/casdoor)，[Casdoor使用文档](https://casdoor.org/zh/docs/overview)，[AList接入如何使用Casdoor教程](https://alist.nn.ci/zh/guide/advanced/sso.html#%E6%8E%A5%E5%85%A5%E5%8D%95%E7%82%B9%E7%99%BB%E5%BD%95)**



### **编译完毕 - 自己部署**

```bash
#1.clone GitHub代码
git clone https://github.com/casdoor/casdoor.git

#2.进入前端文件
cd web

#3.安装 package.json 所需要的依赖（有点久半个小时好像）
yarn install

#4.安装好依赖后 编译前端
yarn build

#5.前端编译好，路径回到上一级，然后编译后端
cd ../
go build

#6.把编译好的`casdoo`执行文件带带走，以及还要需要的 /conf 配置文件夹，以及 /web/build 这两个文件夹
casdoor.exe
/conf/*
/web/build/*

#7.然后移动到所需要的地方即可，否则package,json 13W个文件1G大小..太大了不方便移动
```

上述移动文件夹时候目录结构也要保持哈~（应该需要相对的目录结构才行）

我这里使用的是Windows的编译出来的是`casdoor.exe`可执行文件，如果是Linux 就是二进制`casdoor` 文件 

- 使用方法和 AList 手动启动一样 不过不用携带`server`参数可以直接启动即可



## **手把手教你编译**Casdoor

- [生产模式^荐^](build/sso/build.md)

- [开发模式^X^](build/sso/dev.md)
