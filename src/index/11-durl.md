---
# 这是文章的标题
title: AList如何使用代理下载链接
# 这是页面的图标
icon: fa-solid fa-rocket-launch
# 这是侧边栏的顺序
order: 2
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
  - 代理URL
  - 下载代理
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

## **下载代理 URL**

开启代理时不填写下载代理 URL字段，默认使用本机进行传输。下载代理 URL提供了两种代理方式安装：

::::tabs
@tab Cloudflare Workers
可以使用 Cloudflare Workers 做代理，这里填写 Workers 地址即可。

Workers 代码可以在 https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js 找到，实际使用时需要替换其中的这两个变量：

- ADDRESS: 你的 AList 地址，必须加上协议头，后面不能跟 `/`。如 `https://pan.nn.ci`；
- TOKEN: 在 AList 管理页面中进入“其他设置”得到。

:warning: Cloudflare Workers 免费CDN支持兼容国内的只有 **http80端口** 和 **https443端口**，来自群友测试

- 在AList后台挂载配置时 填写 **下载代理URL** 时候的 链接结尾 不可以带 `/`

详细文字教程：[点击查看](#_1-cloudflare-workers)

@tab 通用二进制
也可以使用另一台机器进行代理，在 https://github.com/alist-org/alist-proxy/releases 下载程序通过 `./alist-proxy -help` 查看使用方法后

详细文字教程：[点击查看](#_2-通用二进制)

::::

我们下面正式开始吧介绍吧

-----

### 1. Cloudflare Workers

首先我们先打开 <i class="fa-brands fa-cloudflare" style="color: #409eff;"></i>[cloudflare](https://www.cloudflare.com/zh-cn)首页找到左侧侧边栏的**Workers和Pages**点击新建一个应用程序

![](/img/proxy/proxy-1.png)

新建应用程序的名字随便写，自己知道是做什么的就行，为了方便这里起名叫 `alist-proxy`，至于里面的内容不用管，点击部署即可。

![](/img/proxy/proxy-2.png)

点击部署后我们会自动跳转到新建的 **Workers** 应用程序內，我们在右上角点击 快速编辑 进行修改。

![](/img/proxy/proxy-3.png)

然后我们将AList提供的[**proxy.js**](https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js)代码复制进去，进行修改内容，然后右上角部署保存，保存好后继续回到这个**Workers** 应用程序內

- "YOUR_ADDRESS"：我们改成需要被代理的AList链接，链接需要携带请求头 HTTP或者HTTPS，链接最面不可以带 `/`

- "YOUR_TOKEN"：你的AList Token，直接去AList后台 --> 设置 --> 其他 --> **令牌**，填写进去 不需要抓包！！

:::details proxy.js 备用

```js
// src/const.ts
var ADDRESS = "YOUR_ADDRESS";
var TOKEN = "YOUR_TOKEN";

// src/verify.ts
var verify = async (data, _sign) => {
  const signSlice = _sign.split(":");
  if (!signSlice[signSlice.length - 1]) {
    return "expire missing";
  }
  const expire = parseInt(signSlice[signSlice.length - 1]);
  if (isNaN(expire)) {
    return "expire invalid";
  }
  if (expire < Date.now() / 1e3 && expire > 0) {
    return "expire expired";
  }
  const right = await hmacSha256Sign(data, expire);
  if (_sign !== right) {
    return "sign mismatch";
  }
  return "";
};
var hmacSha256Sign = async (data, expire) => {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(TOKEN),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
  const buf = await crypto.subtle.sign(
    {
      name: "HMAC",
      hash: "SHA-256"
    },
    key,
    new TextEncoder().encode(`${data}:${expire}`)
  );
  return btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, "-").replace(/\//g, "_") + ":" + expire;
};

// src/handleDownload.ts
async function handleDownload(request) {
  const origin = request.headers.get("origin") ?? "*";
  const url = new URL(request.url);
  const path = decodeURIComponent(url.pathname);
  const sign = url.searchParams.get("sign") ?? "";
  const verifyResult = await verify(path, sign);
  if (verifyResult !== "") {
    const resp2 = new Response(
      JSON.stringify({
        code: 401,
        message: verifyResult
      }),
      {
        headers: {
          "content-type": "application/json;charset=UTF-8"
        }
      }
    );
    resp2.headers.set("Access-Control-Allow-Origin", origin);
    return resp2;
  }
  let resp = await fetch(`${ADDRESS}/api/fs/link`, {
    method: "POST",
    headers: {
      "content-type": "application/json;charset=UTF-8",
      Authorization: TOKEN
    },
    body: JSON.stringify({
      path
    })
  });
  let res = await resp.json();
  if (res.code !== 200) {
    return new Response(JSON.stringify(res));
  }
  request = new Request(res.data.url, request);
  if (res.data.header) {
    for (const k in res.data.header) {
      for (const v of res.data.header[k]) {
        request.headers.set(k, v);
      }
    }
  }
  let response = await fetch(request);
  response = new Response(response.body, response);
  response.headers.delete("set-cookie");
  response.headers.set("Access-Control-Allow-Origin", origin);
  response.headers.append("Vary", "Origin");
  return response;
}

// src/handleOptions.ts
function handleOptions(request) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Max-Age": "86400"
  };
  let headers = request.headers;
  if (headers.get("Origin") !== null && headers.get("Access-Control-Request-Method") !== null) {
    let respHeaders = {
      ...corsHeaders,
      "Access-Control-Allow-Headers": request.headers.get("Access-Control-Request-Headers") || ""
    };
    return new Response(null, {
      headers: respHeaders
    });
  } else {
    return new Response(null, {
      headers: {
        Allow: "GET, HEAD, POST, OPTIONS"
      }
    });
  }
}

// src/index.ts
var src_default = {
  async fetch(request, env, ctx) {
    if (request.method === "OPTIONS") {
      return handleOptions(request);
    }
    return handleDownload(request);
  }
};
export {
  src_default as default
};
//# sourceMappingURL=index.js.map
```

:::

![](/img/proxy/proxy-4.png)

回到 **Workers** 应用程序后下拉一点儿，找到触发器选项，然后点击右下角的添加路由

添加这些选项之前我们需要先在 <i class="fa-brands fa-cloudflare" style="color: #409eff;"></i> [cloudflare](https://www.cloudflare.com/zh-cn) 解析一个域名才可以添加

- 路由：为了方便区分我们也写和 **Workers**应用程序名一样的吧，alist-proxy.alist.org/*
  - :warning: 注意结尾的 `/*`必须要携带
- 区域：选择我们我们路由使用的域名，alist.org

添加好保存后，会在下面看到我们添加的路由

![](/img/proxy/proxy-5.png)

路由添加完了，我们回到首页点击左侧侧边栏顶部的网站，找到我们解析的域名点击进去，进入域名內后左侧找到 **`DNS`** 选择记录，我们添加一个记录

这个记录有三种办法，以及一个其他

1. 类型选择`CNAME`，名称正常写(解析访问使用的-例如也叫`alist-proxy`)，目标：写我们上一张图添加完路由后显示的链接上面那个，`alist-proxxxorkers.dev`
2. 类型选择`A`，名称正常写(解析访问使用的-例如也叫`alist-proxy`)，IP地址，写我们优选的cloudflare IP，至于怎么优选看你自己了
3. 类型选择`CNAME`，名称正常写(解析访问使用的-例如也叫`alist-proxy`)，目标：写大佬优选好的IP负载(合集)（下面三句话是大佬原话懂得自己操作）
   - 1.可以优选后添加到另外的域名做cname，2.和域名负载均衡方法一样 多个同样的A记录 不同的ip，3.然后cf那边cname那个二级域名就是了
4. ~~host本地优选劫持 ( 这个其他的比较特殊，我也不会是大佬告诉我的,不知道忽略即可)~~

:warning::warning::warning:  ==以上三种办法添加记录的时候都需要把 **`小云朵`** 关闭==

![](/img/proxy/proxy-6.png)

到这里已经已经搭建好了，下面我们去测试一下吧，先去AList后台挂载的`下载代理URL`里面填写一下域名，什么?不知道填那个? 

填我们 上一步添加记录时的的名称 我们解析的是  `alist-proxy`，是在alist.org这个域名內解析的

那么我们在AList后台挂载的`下载代理URL`里面填写 https://alist-proxy.alist.org 即可

（这个只能是给填写 proxy.js 时里面提到的域名使用 别人无法使用）

下面的就是我们测试的，原本这个是302直连的，我们改成了下载代理URL 所以变了 变了说明没有问题

至于速度快不快 那是另说了，速度慢的问题自行解决 本人不负责解决。

![](/img/proxy/proxy-demo.png)

#### <i class="fa-solid fa-circle-q fa-beat-fade" style="color: #409eff;"></i> 使用期间的Q&A环节

Q^1^：**为什么要在cloudflare解析一个域名？**

A^1^：因为 cloudflare 默认自带的域名 `xxx.xxx/workers,dev`被墙了 无法打开

Q^2^：**不要看网络上的教程执行`netsh interface tcp set global autotuninglevel=disabled`**

A^2^：会造成pot等播放器缓冲缓慢 如果你pot播放CF中转直链速度不正常 cmd 管理员模式输入 `netsh interface tcp set global autotuninglevel=normal` 后重启

Q^3^：**国内使用有什么问题吗？**

A^3^：有的，Cloudflare Workers 免费CDN支持兼容国内的只有 **http80端口** 和 **https443端口**，来自群友测试(已验证)

-----

<br/><br/><br/>

### **2. 通用二进制**

先来到 [alist-proxy二进制 ](https://github.com/alist-org/alist-proxy/releases) 下载二进制程序包，下载好解压出来

使用前也是需要进行授权，授权完使用`./alist-proxy -help`都有哪些命令

```bash
[root@ser452314994926 proxy]# chmod +x alist-proxy
[root@ser452314994926 proxy]# ./alist-proxy -help
Usage of ./alist-proxy:
  -address string
        alist address
  -cert string
        cert file (default "server.crt")
  -help
        show help
  -https
        use https protocol.
  -key string
        key file (default "server.key")
  -port int
        the proxy port. (default 5243)
  -token string
        alist token
```



#### <i class="fa-solid fa-lightbulb fa-bounce" style="color: #409eff;"></i> **简单详细复杂的启动教程**

下载程序后启动示例 （填写不需要携带`[]`符号）

- **HTTPS方式：**./alist-proxy -address [需要代理的AList域名] -cert [证书路径] -https [启用HTTPS] -key [证书key路径] -token [AListtoken]

- **HTTP方式：**./alist-proxy -address [需要代理的AList域名] -token [AListtoken]

带参数后启动例子

- **HTTPS方式：**./alist-proxy -address http(s):\//alist.org -cert /路径自己放/xxx/server.crt.  -https true -key /路径自己放/xxx/server.key -token alist-5229xxxxxxxxxxxxxxxYFnL

- **HTTP方式：**./alist-proxy -address http(s):\//alist.org -token alist-5229xxxxxxxxxxxxxxxYFnL

[ AList Token是在这里获取](https://alist.nn.ci/zh/config/other.html#token) | AList后台 --> 设置 --> 其他 --> **令牌**

alist-proxy启动默认参数是 5243，有需要的可以带 `-port [自定义端口号]` 启动

这个下载代理URL如何添加域名，参考如何给AList程序添加域名的流程一样，进行反向代理添加域名即可

如果不添加域名可以使用 `http://IP:5243`填写

- 如何进行守护进程这个下载代理URL：参考[手动安装AList](https://alist.nn.ci/zh/guide/install/manual.html#%E5%AE%88%E6%8A%A4%E8%BF%9B%E7%A8%8B)文档里面的守护进程方法
  - 为什么要守护进程？不守护进程你离开终端程序就停止了。

- 将第8行代码`ExecStart=path_alist/alist server`这一行里面的 alist server 参数改成上面你需要的就行
  - 例^1^：`ExecStart=path_alist/alist-proxy -address http(s)://alist.org -token alist-5229xxxxxxxxxxxxxxxYFnL`
  - 例^2^：`ExecStart=path_alist/alist-proxy -address http(s)://alist.org -cert /路径自己写/xxx/server.crt.  -https true -key /路径自己写/xxx/server.key -token alist-5229xxxxxxxxxxxxxxxYFnL`

- 如果你会手动安装AList那肯定也会这个，至于不会手动修改后续出了手动安装Linux AList教程视频的时候会更新过来到时候可能会更明白一些

![通用二进制代理示例](/img/proxy/alist-proxy-2.png)

(左侧图)正常下载是302模式，直接返回了官方的下载链接，然后我们在AList挂载配置里面设置了代理(图右)，然后点击下载同样的文件返回的是代理的IP(因为我使用的是 IP:端口号 方式)

#### <i class="fa-solid fa-circle-q fa-beat-fade" style="color: #409eff;"></i> 使用期间的Q&A环节

Q^1^：使用通用二进制有什么优劣吗？

A^1^： **优点**是如果代理的机器带宽越大你下载的越快（也是看上行速率的），**缺点**就是比较费流量好像是需要占用双份流量先下载一份，然后代理给你上传一份，在加上机器的流量不是无限的，如果是无限的长期大量占用带宽估计会有封机器风险。
