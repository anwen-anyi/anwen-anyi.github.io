---
# containerClass 额外的页面容器 Class
containerClass: home
home: true
icon: fa-solid fa-galaxy fa-spin fa-spin-reverse
title: 主页
heroImage: /home.png
# heroImage: /logo.svg
heroText: AnWen's Docs
tagline: 安稳个人的网络项目自留地。
bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
actions:
  - text: 点击这里准备愉快的开始使用吧 💡
    link: /index/
    type: primary

highlights:
  - header: 简单的美化和修改你的"AList"
    description: <span> <i class="fa-solid fa-party-horn" style="color:#409eff;"></i>『 <span id="hitokoto"> <a href="#" id="hitokoto_text">"人生最大的遗憾,就是在最无能为力的时候遇到一个想要保护一生的人."</a> </span>』<i class="fa-solid fa-party-horn fa-rotate-270" style="color:#409eff;"></i> </span><br/><br/>此美化教程可能比较简单也不一定适合你，有需要的看看吧
    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg
    bgImageStyle:
      background-repeat: repeat
      background-size: initial
    features:
      - title: 美化教程¹
        icon: fa-solid fa-file-video
        details: 点击查看"视频"
        link: https://www.bilibili.com/video/BV1Wg41187Bf

      - title: 美化教程²
        icon: fa-solid fa-file-video
        details: 点击查看"视频"
        link: https://www.bilibili.com/video/BV1HG4y1h7Gz

      - title: 美化教程³
        icon: fa-solid fa-file-video
        details: 点击查看"视频"
        link: https://www.bilibili.com/video/BV1FP411P7d3

      - title: 美化教程4
        icon: fa-solid fa-file-video
        details: 点击查看"视频"
        link: https://www.bilibili.com/video/BV1me411A7Ha

      - title: AList在线调试
        icon: fa-solid fa-file-lines
        details: 会在线调试才可以魔改AList
        link: /index/build/kaifa.md
        
      - title: AList进行简单魔改
        icon: fa-solid fa-file-lines
        details: 进行了一些简单的修改
        link: /index/03-code.md
        
      - title: Windows编译教程
        icon: fa-solid fa-file-lines
        details: 魔改完成后进行编译使用
        link: /index/build/win.md
        
      - title: Linux编译教程
        icon: fa-solid fa-file-lines
        details: 魔改完成后进行编译使用
        link: /index/build/linux.md

  - header: AList使用生态
    image: /alist-logo.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: AList怎么使用短连接：👉<a href="/index/10-dlianjie.html">查看详情</a>
      - title: Cadoor单点登录绑定：👉<a href="/index/09-ssologin.html">查看详情</a>
      - title: Cadoor自己调试开发：👉<a href="/index/build/sso">查看详情</a>

  - header: AList源码文档语言包
    image: /alist-logo.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/3-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/3-dark.svg
    highlights:
      - title: V3文档：<a href="https://alist.nn.ci/zh/">https://alist.nn.ci/zh/</a>
      - title: V3后端：<a href="https://github.com/alist-org/alist">https://github.com/alist-org/alist</a>
      - title: V3前端：<a href="https://github.com/alist-org/alist-web">https://github.com/alist-org/alist-web</a>
      - title: V3语言：<a href="https://crowdin.com/project/alist">https://crowdin.com/project/alist/</a>   

  - header: 赞助以及投喂
    description: 本项目赞助以及投喂
    image: /zanzhu.svg
    bgImage: https://theme-hope-assets.vuejs.press/bg/5-light.svg
    bgImageDark: https://theme-hope-assets.vuejs.press/bg/5-dark.svg
    highlights:
      - title: Cloudflare
        icon: fa-solid fa-coin-vertical
        details: Cloudflare 是一个全球网络，旨在让您连接到互联网的一切都安全、私密、快速和可靠。
        link: https://www.cloudflare.com

      - title: 欢迎投喂
        icon: fa-solid fa-coin-vertical
        details: <img src="/touwei.png" style="width:100%;height:100%;">
        link: #
  # - text: 文档
  #   link: /zh/guide/

# features:
#   - title: 标题
#     icon: ico
#     details: 内容
#     link: URL
copyright: © 安稳
# footer: 支持HTMLString
---