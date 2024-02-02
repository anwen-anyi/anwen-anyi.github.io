---
# 这是文章的标题
title: GitHub Actions编译
# 这是页面的图标
icon: fa-brands fa-github-alt
# 这是侧边栏的顺序
order: 110
# 设置作者
author: 安稳
# 设置写作时间
date: 2023-01-01
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - AList魔改教程
  - 自己编译
  - 编译AList教程
  - Build
  - "GitHub Action"
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
# 你可以自定义页脚
# footer: true

# 你可以自定义版权信息
# copyright: 无版权
headerDepth: 6
collapsible: false
---

<!-- 你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。 -->

<!-- more -->

## **1. 前言**

**(‾◡◝)** 前面出过了Windows和Linux的教程，但是交叉编译不同版本有点儿困难

这次经过了[大佬](https://github.com/itsHenry35)手把手的教我配置部署到了GitHub Actions自动化编译和AList官方的一样编译很多不同版本，妈妈再也不用担心不能交叉编译啦

<br/>



## **2. 准备工作**

前期的准备工作也很多，Fork两个仓库、新建一个仓库和分支、获取两个token、部署两个仓库秘钥配置

（如果熟练的话5分钟搞定，第一次可以慢慢改一改，然后等熟练了删掉两个仓库重新来一遍）

<br/>



### **2.1 Fork两个仓库**

- 分别fork 以下两个仓库
  - 前端：https://github.com/alist-org/alist-web
  - 后端：https://github.com/alist-org/alist
  

<br/>



### **2.2 新建一个仓库和分支**

- 新建一个名为 `web-dist`的仓库
- 前往新建仓库:point_right: https://github.com/new

![](/img/build/github/add_new.png)

- 在 `web-dist`仓库新建一个`dev`分支

![](/img/build/github/add_dev.png)

<br/>



### **2.3 获取两个 Token**

1. 获取GitHub Token
   - **https://github.com/settings/tokens**

<div class="image-preview">
<img src="/img/build/github/github_token_1.png" />
<img src="/img/build/github/github_token_2.png" />
</div>

2. 获取`Crowdin`Token，AList语言包

	- **https://crowdin.com/settings#api-key**
	
	![](/img/build/github/crowdin_token.png)
	

<br/>



### **2.4 部署两个仓库配置**

- 我们来到我们fork之后自己的前端仓库
  - 配置三个秘钥：`CROWDIN_PERSONAL_TOKEN`、`CROWDIN_PROJECT_ID`、 `MY_TOKEN`
    - `CROWDIN_PERSONAL_TOKEN`：在上方2.3步骤中获取的Crowdin Token
    - `CROWDIN_PROJECT_ID`：AList 在 [Crowdin 项目的ID](https://crowdin.com/project/alist)，ID为 ==`526584`==
    - `MY_TOKEN`：在上方3.1步骤中获取的GitHub Token



- 我们来到我们fork之后自己的后端仓库

  - 配置一个秘钥`MY_TOKEN`

    - `MY_TOKEN`：在上方3.1步骤中获取的GitHub Token

    

- 两个仓库配置图例：图^1^为前端，图^2^为后端，

  - ==在配置的时候顺手检查一下两个仓库的图^3^选项，如果不是选择的第一个请勾选为第一个选项，否则在构建时候没有权限会报错==

<div class="image-preview">
<img src="/img/build/github/alist_web_settings.png" />
<img src="/img/build/github/alist_settings.png" />
<img src="/img/build/github/settings_general.png" />    
</div>
以上就是我们前期需要准备，下面教大家改下配置。

<br/>



## **3. 修改配置文件**

<br/>



### **3.1 修改前端配置文件**

- **.github/workflows/==build.yml==** 原文件第41行^1^和第75行^2^alist-org换成自己的，如果你前端仓库名称也换了也自己修改一下

```diff yaml{4-5}
      - name: Checkout dist repo
        uses: actions/checkout@v4
        with:
-          repository: alist-org/web-dist
+          repository: 自己GitHub名字/web-dist
          ref: dev
          path: web-dist
          persist-credentials: false
          fetch-depth: 0
```

```diff yaml{7-8}
      - name: Upload dist files
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.MY_TOKEN }}
          branch: dev
          directory: web-dist
-          repository: alist-org/web-dist
+          repository: 自己GitHub名字/web-dist
          force: true
```



- **.github/workflows/==release.yml==** 原文件的第56行^1^和85行^2^需要修改，70-78行^3^的需要删除，如果你前端仓库名称也换了也自己修改一下

```diff yaml{4,5}
      - name: Checkout dist repo
        uses: actions/checkout@v4
        with:
-          repository: alist-org/web-dist
+          repository: 自己GitHub名字/web-dist
          ref: main
          path: web-dist
          persist-credentials: false
          fetch-depth: 0
```
```diff yaml{7,8}
      - name: Upload dist files
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.MY_TOKEN }}
          branch: main
          directory: web-dist
-          repository: alist-org/web-dist
+          repository: 自己GitHub名字/web-dist
```

```diff yaml{1-8}
-      - name: Publish npm
-        run: |
-          cd alist-web
-          echo "//registry.npmjs.org/:_authToken=${NODE_AUTH_TOKEN}" > ~/.npmrc
-          pnpm publish --no-git-checks
-          cd ..
-        env:
-          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

根目录下的**release.sh** 原文件的第9行需要修改【更改语言包为下载方式】

```diff sh{3-6}
# build
pnpm install
-pnpm i18n:release
+wget https://crowdin.com/backend/download/project/alist/zh-CN.zip 
+unzip zh-CN.zip 
+node ./scripts/i18n.mjs
+rm zh-CN.zip
pnpm build
cp -r dist ../
cd ..
```

如果要使用繁体或者日文请自己更换为下方代码

::: code-tabs#release.sh

@tab 繁体

```diff sh{3-7}
# build
pnpm install
-pnpm i18n:release
+wget https://crowdin.com/backend/download/project/alist/zh-TW.zip 	
+unzip zh-TW.zip
+node ./scripts/i18n.mjs
+rm zh-CN.zip
pnpm build
cp -r dist ../
cd ..
```

@tab 日语

```diff sh{3-7}
# build
pnpm install
-pnpm i18n:release
+wget https://crowdin.com/backend/download/project/alist/ja.zip 
+unzip ja.zip 
+node ./scripts/i18n.mjs
+rm ja.zip
pnpm build
cp -r dist ../
cd ..
```

@tab 三种都要添加

```diff sh{3-13}
# build
pnpm install
-pnpm i18n:release
+wget https://crowdin.com/backend/download/project/alist/zh-CN.zip 
+unzip zh-CN.zip
+wget https://crowdin.com/backend/download/project/alist/zh-TW.zip 	
+unzip zh-TW.zip
+wget https://crowdin.com/backend/download/project/alist/ja.zip 
+unzip ja.zip
+node ./scripts/i18n.mjs
+rm zh-CN.zip
+rm zh-TW.zip
+rm ja.zip
pnpm build
cp -r dist ../
cd ..
```



:::

<br/>



### **3.2 修改后端配置文件**

- **.github/workflows/==release.yml==**  原文件的第50行和75行需要删除（以下代码都进行删除，这个是编译桌面版的）

```diff yml
-  release_desktop:
-    needs: release
-    name: Release desktop
-    runs-on: ubuntu-latest
-    steps:
-      - name: Checkout repo
-        uses: actions/checkout@v4
-        with:
-          repository: alist-org/desktop-release
-          ref: main
-          persist-credentials: false
-          fetch-depth: 0
-
-      - name: Add tag
-        run: |
-          git config --local user.email "bot@nn.ci"
-          git config --local user.name "IlaBot"
-          version=$(wget -qO- -t1 -T2 "https://api.github.com/repos/alist-org/alist/releases/latest" | grep "tag_name" | head -n 1 | awk -F ":" '{print $2}' | sed 's/\"//g;s/,//g;s/ //g')
-          git tag -a $version -m "release $version"
-      - name: Push tags
-        uses: ad-m/github-push-action@master
-        with:
-          github_token: ${{ secrets.MY_TOKEN }}
-          branch: main
-          repository: alist-org/desktop-releas
```

- 根目录下的**build.sh** 文件

```diff sh{2-3,11-12}
FetchWebDev() {
-  curl -L https://codeload.github.com/alist-org/web-dist/tar.gz/refs/heads/dev -o web-dist-dev.tar.gz
+  curl -L https://codeload.github.com/自己GitHub名字/web-dist/tar.gz/refs/heads/dev -o web-dist-dev.tar.gz
  tar -zxvf web-dist-dev.tar.gz
  rm -rf public/dist
  mv -f web-dist-dev/dist public
  rm -rf web-dist-dev web-dist-dev.tar.gz
}

FetchWebRelease() {
-  curl -L https://github.com/alist-org/alist-web/releases/latest/download/dist.tar.gz -o dist.tar.gz
+  curl -L https://github.com/自己GitHub名字/alist-web/releases/latest/download/dist.tar.gz -o dist.tar.gz
  tar -zxvf dist.tar.gz
  rm -rf public/dist
  mv -f dist public
```



删除以下文件（优化）：着两个是编译docker版本的，我暂时不需要就删除了

如果你呀编译docker版本，自己留着改一改（我目前还不会发布到Docker）

- **.github/workflows/==release_docker.yml==**
- **.github/workflows/==build_docker.yml==**

<br/>



## **4. 开始编译**

在编译前一定要去手动去打开一下 仓库的 `Actions` 选项，否则后续无法进行编译操作

打开我们fork好之后的自己的前后端GitHub仓库 --> Actions --> 选择绿色按钮`I understand my workflows, go ahead and enable them`

![](/img/build/github/action_ok.png)

<br/>

### **4.1 编译前端**

打开已经fork好的自己的前端代码，进行发布`Releases`，选项在右侧能看到`Releases`的选项

- 或者使用链接打开：**[https://github.com/用户名/仓库名/releases/new](https://github.com/用户名/仓库名/releases/new)**

![](/img/build/github/releases_add_3.png)

填写好后点击下方绿色按钮 `Publish release` Actions就会开始自动执行，我们等待Actions的任务完成

- 如果因为没有打开过一次 `Actions` 导致 发布  `Release`后 Actions没有自动执行，我们可以删除之前已经发布的`Release` 和`Tags` 去打开一次 Actions 再重新发布`Release`就好

![](/img/build/github/del_release_tags.png)

<br/>



### **4.2 编译后端**

编译后端的话是要前端编译没有问题喔~否则后端肯定是会提示错误的

![](/img/build/github/action_web_ok.png)

前端编译完成后（2-3分钟就可以完成），我们去编译后端，进行发布`Releases`，发布和删除 `Releases` 的方式和前端的一样



## **5. 结束**

按照这套教程编译是没有问题的，如果那里不对可能是没有操作正确，也可以参考我的文件

- 前端：https://github.com/anwen-anyi/alist-web
- 后端：https://github.com/anwen-anyi/alist
- web-dist：https://github.com/anwen-anyi/web-dist



现在编译出来也是需要很久，和 [AList](https://github.com/alist-org/alist) 官方编译一样也大概需要25-30分钟，如果只需要个别版本可以自己修改配置文件，修改配置文件后续补上(未知时间)
