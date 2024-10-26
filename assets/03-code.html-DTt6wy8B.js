import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,b as s,d as n,a as p,f as i,e as t,r as c,o as v}from"./app-BxuMPliY.js";const g="/touwei.png",m="/img/code/1.png",b="/img/code/2.png",k="/img/code/3.png",q="/img/code/4.png",A="/img/code/5.png",y="/img/code/6.png",B="/img/code/7.png",F="/img/code/8.png",f="/img/code/9.png",x="/img/code/10.png",C="/img/code/11.png",w="/img/code/11-2.gif",S="/img/code/12.png",E="/img/code/13-huodong.png",_="/img/code/13-guding.png",$="/img/code/14.png",D="/img/code/15-1.png",I="/img/code/15-2.jpg",j="/img/code/x.png",M="/img/code/xx.png",L={};function T(z,a){const d=c("RouteLink"),r=c("Tabs"),o=c("Badge");return v(),h("div",null,[a[31]||(a[31]=s("h2",{id:"前言",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#前言"},[s("span",null,[s("strong",null,"前言")])])],-1)),a[32]||(a[32]=s("p",null,"虽然默认的也挺好的，但是吧就是想折腾折腾，就魔改了一下前端嘿嘿",-1)),a[33]||(a[33]=s("p",null,"以下代码是我自己魔改了前端的一些地方，虽然可能位置和行数不太对，大概浮动的地方不会差很大的.",-1)),s("p",null,[a[1]||(a[1]=n("如果需要修改的话自己clone前端代码哦，可以")),p(d,{to:"/index/build/kaifa.html"},{default:i(()=>a[0]||(a[0]=[s("strong",null,"在线调试",-1)])),_:1}),a[2]||(a[2]=n("，具体怎么调试也很简单"))]),a[34]||(a[34]=t('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>提供 v50懒人包 付款备注附带你的联系方式，然后 <a href="mailto:anwen_anyi@foxmail.com" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-envelope"></i> 联系我</a></p><details class="hint-container details"><summary>v50 使用</summary><p>主要是想使用，但是懒得编译的用户 或者不会编译的用户</p><figure><img src="'+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details></div><p>下面我们先随便修改个加载缓冲试试水呗~</p><h2 id="_1-先修改-loading-试试水" tabindex="-1"><a class="header-anchor" href="#_1-先修改-loading-试试水"><span><strong>1. 先修改 Loading 试试水</strong></span></a></h2><p>源码文件位置：<strong>alist-web\\src\\components\\FullLoading.tsx</strong></p><p>查看<strong>hope</strong>文档链接：<a href="https://hope-ui.com/docs/feedback/spinner" target="_blank" rel="noopener noreferrer">https://hope-ui.com/docs/feedback/spinner</a></p><details class="hint-container details"><summary>点击查看示例代码</summary><div class="language-tsx line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>  {/* 主要修改内容为 color的参数 具体看上方提到的参数吧 分别大概为11/38/61行 */}</span></span>
<span class="line"><span>    &lt;Center h=&quot;100vh&quot;&gt;</span></span>
<span class="line"><span>      &lt;Spinner</span></span>
<span class="line"><span>        thickness=&quot;4px&quot;</span></span>
<span class="line"><span>        speed=&quot;0.65s&quot;</span></span>
<span class="line"><span>        //主页圆形加载蓝色条</span></span>
<span class="line"><span>        emptyColor=&quot;tomato&quot;</span></span>
<span class="line"><span>        //emptyColor=&quot;$neutral4&quot;</span></span>
<span class="line"><span>        //color=&quot;tomato&quot;</span></span>
<span class="line"><span>        color={getMainColor()}</span></span>
<span class="line"><span>        size=&quot;xl&quot;</span></span>
<span class="line"><span>      /&gt;</span></span>
<span class="line"><span>    &lt;/Center&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;Center ref={props.ref} h=&quot;$full&quot; w=&quot;$full&quot; py={merged.py}&gt;</span></span>
<span class="line"><span>      &lt;Spinner</span></span>
<span class="line"><span>        thickness={\`\${merged.thickness}px\`}</span></span>
<span class="line"><span>        speed=&quot;0.65s&quot;</span></span>
<span class="line"><span>        //目录白色条</span></span>
<span class="line"><span>        emptyColor=&quot;tomato&quot;</span></span>
<span class="line"><span>        //emptyColor=&quot;$neutral4&quot;</span></span>
<span class="line"><span>        //color=&quot;tomato&quot;</span></span>
<span class="line"><span>        color={getMainColor()}</span></span>
<span class="line"><span>        size={merged.size as any}</span></span>
<span class="line"><span>      /&gt;</span></span>
<span class="line"><span>    &lt;/Center&gt;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    &lt;Center w=&quot;$full&quot; h=&quot;$full&quot;&gt;</span></span>
<span class="line"><span>      {/* 左上角logo加载颜色 */}</span></span>
<span class="line"><span>      &lt;Spinner color=&quot;tomato&quot; {...props} /&gt;</span></span>
<span class="line"><span>    &lt;/Center&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></details><h4 id="修改后的对比预览图" tabindex="-1"><a class="header-anchor" href="#修改后的对比预览图"><span><strong>修改后的对比预览图：</strong></span></a></h4><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><h2 id="_2-修改并且取消在加密码情况下的出现的登录按钮" tabindex="-1"><a class="header-anchor" href="#_2-修改并且取消在加密码情况下的出现的登录按钮"><span><strong>2. 修改并且取消在加密码情况下的出现的登录按钮</strong></span></a></h2><p>修改取消原因:修改了登录界面和后台入口的地址防止泄露，<a href="#%E4%BF%AE%E6%94%B9%E5%90%8E%E5%8F%B0%E5%9C%B0%E5%9D%80%E5%92%8C%E7%99%BB%E5%BD%95%E5%9C%B0%E5%9D%80"><strong>如何修改登录地址和后台地址</strong></a></p><p>源码文件位置：<strong>alist-web\\src\\pages\\home\\Password.tsx</strong></p><div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{/* 上面是原来的 下面是我自己改的，大概位置在48行，找不到可以用浏览器搜索 */}</span></span>
<span class="line"><span>          {/* &lt;Text&gt;{t(&quot;global.have_account&quot;)}&lt;/Text&gt; */}</span></span>
<span class="line"><span>          {/* &lt;Text</span></span>
<span class="line"><span>            color=&quot;$info9&quot;</span></span>
<span class="line"><span>            as={LinkWithBase}</span></span>
<span class="line"><span>            href={\`/@login?redirect=\${encodeURIComponent(location.pathname)}\`}</span></span>
<span class="line"><span>          &gt;</span></span>
<span class="line"><span>            {t(&quot;global.go_login&quot;)}</span></span>
<span class="line"><span>          &lt;/Text&gt; */}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>          &lt;Text&gt;{t(&quot;不公开去要密码或离开&quot;)}&lt;/Text&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改后的对比预览图-1" tabindex="-1"><a class="header-anchor" href="#修改后的对比预览图-1"><span><strong>修改后的对比预览图：</strong></span></a></h4><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><h2 id="_3-修改了不登录的后台显示" tabindex="-1"><a class="header-anchor" href="#_3-修改了不登录的后台显示"><span><strong>3.修改了不登录的后台显示</strong></span></a></h2><p>源码文件位置：<strong>alist-web\\src\\pages\\manage\\users\\Profile.tsx</strong></p><details class="hint-container details"><summary>点击查看示例代码</summary><div class="language-tsx line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{/* 58行开始修改,可查关键字 */}</span></span>
<span class="line"><span>              &lt;AlertIcon mr=&quot;$2_5&quot; /&gt;</span></span>
<span class="line"><span>              {/* &lt;AlertTitle mr=&quot;$2_5&quot;&gt;{t(&quot;users.guest-tips&quot;)}&lt;/AlertTitle&gt; */}</span></span>
<span class="line"><span>              &lt;Text&gt;{t(&quot;洗洗睡吧不公开&quot;)}&lt;/Text&gt;</span></span>
<span class="line"><span>              &lt;Text&gt;{t(&quot;点击左侧回到主页&quot;)}&lt;/Text&gt;</span></span>
<span class="line"><span>              {/* &lt;AlertDescription&gt;{t(&quot;users.modify_nothing&quot;)}&lt;/AlertDescription&gt; */}</span></span>
<span class="line"><span>            &lt;/Alert&gt;</span></span>
<span class="line"><span>            &lt;HStack spacing=&quot;$2&quot;&gt;</span></span>
<span class="line"><span>              {/* &lt;Text&gt;{t(&quot;global.have_account&quot;)}&lt;/Text&gt; */}</span></span>
<span class="line"><span>              {/* &lt;Text&gt;{t(&quot;洗洗睡吧不公开&quot;)}&lt;/Text&gt; */}</span></span>
<span class="line"><span>              {/* &lt;Text</span></span>
<span class="line"><span>                color=&quot;$info9&quot;</span></span>
<span class="line"><span>                as={LinkWithBase}</span></span>
<span class="line"><span>                href={\`/@login?redirect=\${encodeURIComponent(</span></span>
<span class="line"><span>                  location.pathname</span></span>
<span class="line"><span>                )}\`}</span></span>
<span class="line"><span>              &gt;</span></span>
<span class="line"><span>                {t(&quot;global.go_login&quot;)}</span></span>
<span class="line"><span>              &lt;/Text&gt; */}</span></span>
<span class="line"><span>              {/* 图片内容可以自己换或者不要都行 */}</span></span>
<span class="line"><span>              &lt;img src=&quot;http://pic.rmb.bdstatic.com/bjh/705fab74d0dfc00bae9166288f23b4dc.png&quot; width=&quot;50%&quot; height =&quot;50%&quot;&gt;&lt;/img&gt;</span></span>
<span class="line"><span>            &lt;/HStack&gt;</span></span>
<span class="line"><span>            {/* &lt;HStack spacing=&quot;$2&quot;&gt;</span></span>
<span class="line"><span>              &lt;img src=&quot;https://cdn.jsdelivr.net/gh/AlistGo/logo@main/logo.svg&quot; width=&quot;40%&quot; height =&quot;40%&quot;&gt;&lt;/img&gt;</span></span>
<span class="line"><span>            &lt;/HStack&gt; */}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>          &lt;/&gt;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      &gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>      {/* 137行左右,可查关键词,原来位置显示的内容,红色字体的哪种权限,我这里隐藏了 */}</span></span>
<span class="line"><span>      {/* &lt;HStack wrap=&quot;wrap&quot; gap=&quot;$2&quot; mt=&quot;$2&quot;&gt;</span></span>
<span class="line"><span>        &lt;For each={UserPermissions}&gt;</span></span>
<span class="line"><span>          {(item, i) =&gt; (</span></span>
<span class="line"><span>            &lt;PermissionBadge can={UserMethods.can(user(), i())}&gt;</span></span>
<span class="line"><span>              {t(\`users.permissions.\${item}\`)}</span></span>
<span class="line"><span>            &lt;/PermissionBadge&gt;</span></span>
<span class="line"><span>          )}</span></span>
<span class="line"><span>        &lt;/For&gt;</span></span>
<span class="line"><span>      &lt;/HStack&gt; */}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></details><h4 id="修改后的对比预览图-2" tabindex="-1"><a class="header-anchor" href="#修改后的对比预览图-2"><span><strong>修改后的对比预览图：</strong></span></a></h4><figure><img src="`+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><h2 id="_4-取消游客访问和语言选择的按钮默认为简体中文" tabindex="-1"><a class="header-anchor" href="#_4-取消游客访问和语言选择的按钮默认为简体中文"><span><strong>4. 取消游客访问和语言选择的按钮默认为简体中文</strong></span></a></h2><h4 id="如何改成默认为简体中文" tabindex="-1"><a class="header-anchor" href="#如何改成默认为简体中文"><span>如何改成默认为简体中文：</span></a></h4>',24)),s("ul",null,[s("li",null,[s("p",null,[a[5]||(a[5]=n("首先先拉取中文语言包，丢进去初始化一下，具体怎么初始化点击这里查看教程 ==> ")),p(d,{to:"/index/build/win.html#_1-4-%E6%89%8B%E5%8A%A8%E4%B8%8B%E8%BD%BD%E8%AF%AD%E8%A8%80%E5%8C%85%E5%9C%B0%E5%9D%80"},{default:i(()=>a[3]||(a[3]=[s("strong",null,"win版",-1)])),_:1}),a[6]||(a[6]=n("，")),p(d,{to:"/index/build/linux.html#_1-4-%E4%B8%8B%E8%BD%BD%E8%AF%AD%E8%A8%80%E6%96%87%E4%BB%B6%E5%B9%B6%E4%B8%94%E5%88%9D%E5%A7%8B%E5%8C%96"},{default:i(()=>a[4]||(a[4]=[s("strong",null,"Linux版",-1)])),_:1})])]),a[7]||(a[7]=s("li",null,[s("p",null,"然后英语(en)的直接删除了即可，语言文件夹里面只剩下了 lang/zh_cn 这个中文的 这样就会默认使用中文的")],-1))]),a[35]||(a[35]=t(`<details class="hint-container details"><summary><i class="fa-solid fa-lightbulb fa-bounce" style="color:orange;"></i> 删除英文语言文件后的错误</summary><div class="language-javascript line-numbers-mode" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">index</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">c125b016</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">js</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">formatted</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">25798</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Uncaught</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> promise</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">TypeError</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Is</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">or</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">is</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> not</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    at</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> index</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">c125b016</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">js</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">formatted</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:25798:28</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    at</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> index</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">c125b016</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">js</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">formatted</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:25801:6</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    at</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> index</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">c125b016</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">js</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">formatted</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:20388:25</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    at</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> D_</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (index.c125b016.js</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">formatted</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">25805</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">12</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    at</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> index</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">c125b016</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">js</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">formatted</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:796:19</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    at</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Tt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (index.c125b016.js</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">formatted</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">262</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">9</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    at</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (index.c125b016.js</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">formatted</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">796</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">12</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    at</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> get</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> children</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">as</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> children</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] (index.c125b016.js</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">formatted</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">25903</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">48</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    at</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Object</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">fn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (index.c125b016.js</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">formatted</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1059</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">36</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    at</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Fs</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (index.c125b016.js</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">formatted</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">440</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">15</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个错误是因为AList默认是英文文件的 你删除了它就找不到了</p><p>复现方式：十分简单将浏览器的语言切换成英文，然后打开<code>AList</code>就会看到</p><ul><li>暂时解决办法 <ol><li>将en语言包加回来，把里面的改成中文</li><li>将en也加回来，也把中文加一起</li></ol></li><li>推荐第一种办法，把<code>en</code>里面的都删掉替换成中文的文件，或者直接把中文文件夹改成<code>en</code>都可以</li></ul></details><p>源码文件位置：<strong>alist-web\\src\\pages\\login\\index.tsx</strong></p><div class="language-tsx line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>        {/* 177行，取消游客访问 */}</span></span>
<span class="line highlighted"><span>        {/* &lt;Button</span></span>
<span class="line highlighted"><span>          w=&quot;$full&quot;</span></span>
<span class="line highlighted"><span>          colorScheme=&quot;accent&quot;</span></span>
<span class="line highlighted"><span>          onClick={() =&gt; {</span></span>
<span class="line highlighted"><span>            changeToken()</span></span>
<span class="line highlighted"><span>            to(</span></span>
<span class="line highlighted"><span>              decodeURIComponent(searchParams.redirect || base_path || &quot;/&quot;),</span></span>
<span class="line highlighted"><span>              true</span></span>
<span class="line highlighted"><span>            )</span></span>
<span class="line highlighted"><span>          }}</span></span>
<span class="line highlighted"><span>        &gt;</span></span>
<span class="line highlighted"><span>          {t(&quot;login.use_guest&quot;)}</span></span>
<span class="line highlighted"><span>        &lt;/Button&gt; */}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>          {/* 198行，Ctrl+F查下面的源码关键字修改，取消语言选择 */}</span></span>
<span class="line highlighted"><span>          {/* &lt;SwitchLanguageWhite /&gt; */}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h4 id="修改后的对比预览图-3" tabindex="-1"><a class="header-anchor" href="#修改后的对比预览图-3"><span><strong>修改后的对比预览图：</strong></span></a></h4><figure><img src="`+q+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><h2 id="_5-删除-本地设置-里面的语言切换按钮-已经默认为中文" tabindex="-1"><a class="header-anchor" href="#_5-删除-本地设置-里面的语言切换按钮-已经默认为中文"><span><strong>5.删除&quot;本地设置&quot;里面的语言切换按钮，已经默认为中文</strong></span></a></h2><p>如何默认中文，看上面我的<a href="#_4-%E5%8F%96%E6%B6%88%E6%B8%B8%E5%AE%A2%E8%AE%BF%E9%97%AE%E5%92%8C%E8%AF%AD%E8%A8%80%E9%80%89%E6%8B%A9%E7%9A%84%E6%8C%89%E9%92%AE%E9%BB%98%E8%AE%A4%E4%B8%BA%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87">查看操作</a>，只留下中文的话如果你浏览器语言是英文的浏览器会报错 👉 <a href="#_4-%E5%8F%96%E6%B6%88%E6%B8%B8%E5%AE%A2%E8%AE%BF%E9%97%AE%E5%92%8C%E8%AF%AD%E8%A8%80%E9%80%89%E6%8B%A9%E7%9A%84%E6%8C%89%E9%92%AE%E9%BB%98%E8%AE%A4%E4%B8%BA%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87">解决办法</a></p><p>源码文件位置：<strong>alist-web\\src\\pages\\home\\toolbar\\LocalSettings.tsx</strong></p><div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>              {/* 第65行隐藏即可 */}</span></span>
<span class="line highlighted"><span>              {/* &lt;SwitchLanguageWhite /&gt; */}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改后的对比预览图-4" tabindex="-1"><a class="header-anchor" href="#修改后的对比预览图-4"><span><strong>修改后的对比预览图：</strong></span></a></h4><figure><img src="`+A+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><h2 id="_6-将本地设置里面的夜间-白天-切换模式和刷新按钮-刷新需要登录-移动到主页" tabindex="-1"><a class="header-anchor" href="#_6-将本地设置里面的夜间-白天-切换模式和刷新按钮-刷新需要登录-移动到主页"><span><strong>6. 将本地设置里面的夜间/白天 切换模式和刷新按钮(刷新需要登录)移动到主页</strong></span></a></h2><p>文件位置：<strong>alist-web\\src\\pages\\home\\toolbar\\Right.tsx</strong></p><p>夜间模式使用的代码位置：<strong>alist-web\\src\\components\\SwitchColorMode.tsx</strong></p><details class="hint-container details"><summary>点击查看示例代码</summary><div class="language-tsx line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//添加到头部引入那里</span></span>
<span class="line"><span>// 下面这两条搬过来的代码</span></span>
<span class="line"><span>import { FiSun as Sun } from &quot;solid-icons/fi&quot;;</span></span>
<span class="line"><span>import { FiMoon as Moon } from &quot;solid-icons/fi&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 从这里到下面注释 都是搬过来的夜间模式切换代码,看代码知道加到那里吧？</span></span>
<span class="line"><span>  const { toggleColorMode } = useColorMode();</span></span>
<span class="line"><span>  const icon = useColorModeValue(</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      size: &quot;$8&quot;,</span></span>
<span class="line"><span>      component: Moon,</span></span>
<span class="line"><span>      p: &quot;$0_5&quot;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      size: &quot;$8&quot;,</span></span>
<span class="line"><span>      component: Sun,</span></span>
<span class="line"><span>      p: &quot;$0_5&quot;,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>  // 到这里</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    {/* 将设置移动出来,已经没用了这个.... */}</span></span>
<span class="line"><span>     {/* &lt;Show</span></span>
<span class="line"><span>        when={isOpen()}</span></span>
<span class="line"><span>        fallback={</span></span>
<span class="line"><span>          &lt;RightIcon</span></span>
<span class="line"><span>              as={AiOutlineSetting}</span></span>
<span class="line"><span>              tips=&quot;local_settings&quot;</span></span>
<span class="line"><span>              onClick={() =&gt; {</span></span>
<span class="line"><span>                bus.emit(&quot;tool&quot;, &quot;local_settings&quot;);</span></span>
<span class="line"><span>              }}</span></span>
<span class="line"><span>            /&gt;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      &gt;  </span></span>
<span class="line"><span>      &lt;/Show&gt; */}</span></span>
<span class="line"><span>      {/* 刷新按钮移动出来 */}</span></span>
<span class="line"><span>    &lt;VStack spacing=&quot;$1&quot; class=&quot;left-toolbar-in&quot;&gt;</span></span>
<span class="line"><span>      &lt;Show when={isFolder() &amp;&amp; (userCan(&quot;write&quot;) || objStore.write)}&gt;</span></span>
<span class="line"><span>        &lt;RightIcon</span></span>
<span class="line"><span>          as={RiSystemRefreshLine}</span></span>
<span class="line"><span>          tips=&quot;refresh&quot;</span></span>
<span class="line"><span>          onClick={() =&gt; {</span></span>
<span class="line"><span>            refresh(undefined, true);</span></span>
<span class="line"><span>          }}</span></span>
<span class="line"><span>          /&gt;</span></span>
<span class="line"><span>      &lt;/Show&gt;    </span></span>
<span class="line"><span>    &lt;/VStack&gt;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      {/* 夜间白天模式切换,搜下面的那个class关键词就知道这个加那里了 */}</span></span>
<span class="line"><span>      &lt;Show</span></span>
<span class="line"><span>        when={isOpen()}</span></span>
<span class="line"><span>        fallback={</span></span>
<span class="line"><span>          &lt;RightIcon</span></span>
<span class="line"><span>              // 图标已更换</span></span>
<span class="line"><span>              as={icon().component}</span></span>
<span class="line"><span>              // tips=&quot;白天夜间模式切换&quot;</span></span>
<span class="line"><span>              onClick={toggleColorMode}</span></span>
<span class="line"><span>            /&gt;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      &gt;  </span></span>
<span class="line"><span>      &lt;/Show&gt;</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>      {/* 以上代码加到这个原有的设置上面即可 */}</span></span>
<span class="line"><span>      &lt;Show</span></span>
<span class="line"><span>        when={isOpen()}</span></span>
<span class="line"><span>        fallback={</span></span>
<span class="line"><span>          &lt;RightIcon</span></span>
<span class="line"><span>            class=&quot;toolbar-toggle&quot;</span></span>
<span class="line"><span>            as={CgMoreO}</span></span>
<span class="line"><span>            onClick={() =&gt; {</span></span>
<span class="line"><span>              onToggle();</span></span>
<span class="line"><span>            }}</span></span>
<span class="line"><span>          /&gt;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      &gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></details><h3 id="不会加-可以参考这里的完整代码" tabindex="-1"><a class="header-anchor" href="#不会加-可以参考这里的完整代码"><span>不会加,可以参考这里的完整代码</span></a></h3><details class="hint-container details"><summary>点击查看完整代码示例</summary><div class="language-tsx line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import {</span></span>
<span class="line"><span>  Box,</span></span>
<span class="line"><span>  createDisclosure,</span></span>
<span class="line"><span>  useColorMode,</span></span>
<span class="line"><span>  useColorModeValue,</span></span>
<span class="line"><span>  VStack,</span></span>
<span class="line"><span>} from &quot;@hope-ui/solid&quot;;</span></span>
<span class="line"><span>import { createMemo, Show } from &quot;solid-js&quot;;</span></span>
<span class="line"><span>import { RightIcon } from &quot;./Icon&quot;;</span></span>
<span class="line"><span>import { CgMoreO } from &quot;solid-icons/cg&quot;;</span></span>
<span class="line"><span>import { TbCheckbox } from &quot;solid-icons/tb&quot;;</span></span>
<span class="line"><span>import { objStore, State, toggleCheckbox, userCan } from &quot;~/store&quot;;</span></span>
<span class="line"><span>import { bus } from &quot;~/utils&quot;;</span></span>
<span class="line"><span>import { operations } from &quot;./operations&quot;;</span></span>
<span class="line"><span>import { IoMagnetOutline } from &quot;solid-icons/io&quot;;</span></span>
<span class="line"><span>import { AiOutlineCloudUpload, AiOutlineSetting } from &quot;solid-icons/ai&quot;;</span></span>
<span class="line"><span>import { RiSystemRefreshLine } from &quot;solid-icons/ri&quot;;</span></span>
<span class="line"><span>import { usePath } from &quot;~/hooks&quot;;</span></span>
<span class="line"><span>import { Motion } from &quot;@motionone/solid&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 下面这两条搬过来的代码</span></span>
<span class="line"><span>import { FiSun as Sun } from &quot;solid-icons/fi&quot;;</span></span>
<span class="line"><span>import { FiMoon as Moon } from &quot;solid-icons/fi&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const Right = () =&gt; {</span></span>
<span class="line"><span>  const { isOpen, onToggle } = createDisclosure({</span></span>
<span class="line"><span>    defaultIsOpen: localStorage.getItem(&quot;more-open&quot;) === &quot;true&quot;,</span></span>
<span class="line"><span>    onClose: () =&gt; localStorage.setItem(&quot;more-open&quot;, &quot;false&quot;),</span></span>
<span class="line"><span>    onOpen: () =&gt; localStorage.setItem(&quot;more-open&quot;, &quot;true&quot;),</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span>  const margin = createMemo(() =&gt; (isOpen() ? &quot;$4&quot; : &quot;$5&quot;));</span></span>
<span class="line"><span>  const isFolder = createMemo(() =&gt; objStore.state === State.Folder);</span></span>
<span class="line"><span>  const { refresh } = usePath();</span></span>
<span class="line"><span>  // 从这里到下面注释 都是搬过来的夜间模式切换代码</span></span>
<span class="line highlighted"><span>  const { toggleColorMode } = useColorMode();</span></span>
<span class="line highlighted"><span>  const icon = useColorModeValue(</span></span>
<span class="line highlighted"><span>    {</span></span>
<span class="line highlighted"><span>      size: &quot;$8&quot;,</span></span>
<span class="line highlighted"><span>      component: Moon,</span></span>
<span class="line highlighted"><span>      p: &quot;$0_5&quot;,</span></span>
<span class="line highlighted"><span>    },</span></span>
<span class="line highlighted"><span>    {</span></span>
<span class="line highlighted"><span>      size: &quot;$8&quot;,</span></span>
<span class="line highlighted"><span>      component: Sun,</span></span>
<span class="line highlighted"><span>      p: &quot;$0_5&quot;,</span></span>
<span class="line highlighted"><span>    }</span></span>
<span class="line highlighted"><span>  );</span></span>
<span class="line"><span>  // 到这里</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;Box</span></span>
<span class="line"><span>      class=&quot;left-toolbar-box&quot;</span></span>
<span class="line"><span>      pos=&quot;fixed&quot;</span></span>
<span class="line"><span>      right={margin()}</span></span>
<span class="line"><span>      bottom={margin()}</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>      {/* 将设置移动出来,已经没用了这个.... */}</span></span>
<span class="line"><span>      {/* &lt;Show</span></span>
<span class="line"><span>        when={isOpen()}</span></span>
<span class="line"><span>        fallback={</span></span>
<span class="line"><span>          &lt;RightIcon</span></span>
<span class="line"><span>              as={AiOutlineSetting}</span></span>
<span class="line"><span>              tips=&quot;local_settings&quot;</span></span>
<span class="line"><span>              onClick={() =&gt; {</span></span>
<span class="line"><span>                bus.emit(&quot;tool&quot;, &quot;local_settings&quot;);</span></span>
<span class="line"><span>              }}</span></span>
<span class="line"><span>            /&gt;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      &gt;  </span></span>
<span class="line"><span>      &lt;/Show&gt; */}</span></span>
<span class="line"><span>      {/* 刷新按钮移动出来 */}</span></span>
<span class="line highlighted"><span>      &lt;VStack spacing=&quot;$1&quot; class=&quot;left-toolbar-in&quot;&gt;</span></span>
<span class="line highlighted"><span>        &lt;Show when={isFolder() &amp;&amp; (userCan(&quot;write&quot;) || objStore.write)}&gt;</span></span>
<span class="line highlighted"><span>          &lt;RightIcon</span></span>
<span class="line highlighted"><span>            as={RiSystemRefreshLine}</span></span>
<span class="line highlighted"><span>            tips=&quot;refresh&quot;</span></span>
<span class="line highlighted"><span>            onClick={() =&gt; {</span></span>
<span class="line highlighted"><span>              refresh(undefined, true);</span></span>
<span class="line highlighted"><span>            }}</span></span>
<span class="line highlighted"><span>          /&gt;</span></span>
<span class="line highlighted"><span>        &lt;/Show&gt;</span></span>
<span class="line highlighted"><span>      &lt;/VStack&gt;</span></span>
<span class="line highlighted"><span></span></span>
<span class="line highlighted"><span>      {/* 夜间白天模式切换 */}</span></span>
<span class="line highlighted"><span>      &lt;Show</span></span>
<span class="line highlighted"><span>        when={isOpen()}</span></span>
<span class="line highlighted"><span>        fallback={</span></span>
<span class="line highlighted"><span>          &lt;RightIcon</span></span>
<span class="line highlighted"><span>            // 图标已更换</span></span>
<span class="line highlighted"><span>            as={icon().component}</span></span>
<span class="line highlighted"><span>            // tips=&quot;白天夜间模式切换&quot;</span></span>
<span class="line highlighted"><span>            onClick={toggleColorMode}</span></span>
<span class="line highlighted"><span>          /&gt;</span></span>
<span class="line highlighted"><span>        }</span></span>
<span class="line highlighted"><span>      &gt;</span></span>
<span class="line highlighted"><span>      &lt;/Show&gt;</span></span>
<span class="line"><span>      {/* 原有的设置 */}</span></span>
<span class="line"><span>      &lt;Show</span></span>
<span class="line"><span>        when={isOpen()}</span></span>
<span class="line"><span>        fallback={</span></span>
<span class="line"><span>          &lt;RightIcon</span></span>
<span class="line"><span>            class=&quot;toolbar-toggle&quot;</span></span>
<span class="line"><span>            as={CgMoreO}</span></span>
<span class="line"><span>            onClick={() =&gt; {</span></span>
<span class="line"><span>              onToggle();</span></span>
<span class="line"><span>            }}</span></span>
<span class="line"><span>          /&gt;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      &gt;</span></span>
<span class="line"><span>        &lt;VStack</span></span>
<span class="line"><span>          class=&quot;left-toolbar&quot;</span></span>
<span class="line"><span>          p=&quot;$1&quot;</span></span>
<span class="line"><span>          rounded=&quot;$lg&quot;</span></span>
<span class="line"><span>          spacing=&quot;$1&quot;</span></span>
<span class="line"><span>          // shadow=&quot;0px 10px 30px -5px rgba(0, 0, 0, 0.3)&quot;</span></span>
<span class="line"><span>          // bgColor={useColorModeValue(&quot;white&quot;, &quot;$neutral4&quot;)()}</span></span>
<span class="line"><span>          bgColor=&quot;$neutral1&quot;</span></span>
<span class="line"><span>          as={Motion.div}</span></span>
<span class="line"><span>          initial={{ opacity: 0, scale: 0.9 }}</span></span>
<span class="line"><span>          animate={{ opacity: 1, scale: 1 }}</span></span>
<span class="line"><span>          exit={{ opacity: 0, scale: 0.6 }}</span></span>
<span class="line"><span>          // @ts-ignore</span></span>
<span class="line"><span>          transition={{ duration: 0.2 }}</span></span>
<span class="line"><span>        &gt;</span></span>
<span class="line"><span>          &lt;VStack spacing=&quot;$1&quot; class=&quot;left-toolbar-in&quot;&gt;</span></span>
<span class="line"><span>            &lt;Show when={isFolder() &amp;&amp; (userCan(&quot;write&quot;) || objStore.write)}&gt;</span></span>
<span class="line highlighted"><span>              {/* &lt;Add /&gt; */}</span></span>
<span class="line highlighted"><span>              {/* 原本的刷新按钮隐藏了 */}</span></span>
<span class="line highlighted"><span>              {/* &lt;RightIcon</span></span>
<span class="line highlighted"><span>                as={RiSystemRefreshLine}</span></span>
<span class="line highlighted"><span>                tips=&quot;refresh&quot;</span></span>
<span class="line highlighted"><span>                onClick={() =&gt; {</span></span>
<span class="line highlighted"><span>                  refresh(undefined, true);</span></span>
<span class="line highlighted"><span>                }}</span></span>
<span class="line highlighted"><span>              /&gt; */}</span></span>
<span class="line"><span>              &lt;RightIcon</span></span>
<span class="line"><span>                as={operations.new_file.icon}</span></span>
<span class="line"><span>                tips=&quot;new_file&quot;</span></span>
<span class="line"><span>                onClick={() =&gt; {</span></span>
<span class="line"><span>                  bus.emit(&quot;tool&quot;, &quot;new_file&quot;);</span></span>
<span class="line"><span>                }}</span></span>
<span class="line"><span>              /&gt;</span></span>
<span class="line"><span>              &lt;RightIcon</span></span>
<span class="line"><span>                as={operations.mkdir.icon}</span></span>
<span class="line"><span>                p=&quot;$1_5&quot;</span></span>
<span class="line"><span>                tips=&quot;mkdir&quot;</span></span>
<span class="line"><span>                onClick={() =&gt; {</span></span>
<span class="line"><span>                  bus.emit(&quot;tool&quot;, &quot;mkdir&quot;);</span></span>
<span class="line"><span>                }}</span></span>
<span class="line"><span>              /&gt;</span></span>
<span class="line"><span>              &lt;RightIcon</span></span>
<span class="line"><span>                as={AiOutlineCloudUpload}</span></span>
<span class="line"><span>                tips=&quot;upload&quot;</span></span>
<span class="line"><span>                onClick={() =&gt; {</span></span>
<span class="line"><span>                  bus.emit(&quot;tool&quot;, &quot;upload&quot;);</span></span>
<span class="line"><span>                }}</span></span>
<span class="line"><span>              /&gt;</span></span>
<span class="line"><span>            &lt;/Show&gt;</span></span>
<span class="line"><span>            &lt;Show when={isFolder() &amp;&amp; userCan(&quot;offline_download&quot;)}&gt;</span></span>
<span class="line"><span>              &lt;RightIcon</span></span>
<span class="line"><span>                as={IoMagnetOutline}</span></span>
<span class="line"><span>                pl=&quot;0&quot;</span></span>
<span class="line"><span>                tips=&quot;offline_download&quot;</span></span>
<span class="line"><span>                onClick={() =&gt; {</span></span>
<span class="line"><span>                  bus.emit(&quot;tool&quot;, &quot;offline_download&quot;);</span></span>
<span class="line"><span>                }}</span></span>
<span class="line"><span>              /&gt;</span></span>
<span class="line"><span>            &lt;/Show&gt;</span></span>
<span class="line"><span>            &lt;RightIcon</span></span>
<span class="line"><span>              tips=&quot;toggle_checkbox&quot;</span></span>
<span class="line"><span>              as={TbCheckbox}</span></span>
<span class="line"><span>              onClick={toggleCheckbox}</span></span>
<span class="line"><span>            /&gt;</span></span>
<span class="line"><span>            {/* 设置隐藏,移动出去 */}</span></span>
<span class="line"><span>            &lt;RightIcon</span></span>
<span class="line"><span>              as={AiOutlineSetting}</span></span>
<span class="line"><span>              tips=&quot;local_settings&quot;</span></span>
<span class="line"><span>              onClick={() =&gt; {</span></span>
<span class="line"><span>                bus.emit(&quot;tool&quot;, &quot;local_settings&quot;);</span></span>
<span class="line"><span>              }}</span></span>
<span class="line"><span>            /&gt;</span></span>
<span class="line"><span>          &lt;/VStack&gt;</span></span>
<span class="line"><span>          &lt;RightIcon tips=&quot;more&quot; as={CgMoreO} onClick={onToggle} /&gt;</span></span>
<span class="line"><span>        &lt;/VStack&gt;</span></span>
<span class="line"><span>      &lt;/Show&gt;</span></span>
<span class="line"><span>    &lt;/Box&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></details><h4 id="修改后的对比预览图-5" tabindex="-1"><a class="header-anchor" href="#修改后的对比预览图-5"><span><strong>修改后的对比预览图：</strong></span></a></h4><figure><img src="`+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><h2 id="_7-将登录页面的-登录到-隐藏-后期适配自己的使用" tabindex="-1"><a class="header-anchor" href="#_7-将登录页面的-登录到-隐藏-后期适配自己的使用"><span><strong>7.将登录页面的 &quot;登录到&quot; 隐藏，后期适配自己的使用</strong></span></a></h2><p>源码文件位置：<strong>alist-web\\src\\pages\\login\\index.tsx</strong></p><div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>  const title = createMemo(() =&gt; {</span></span>\n<span class="line highlighted"><span>    // 33行左右取消后台显示的 登录到 字样</span></span>\n<span class="line highlighted"><span>    // ${t(&quot;login.login_to&quot;)} 汉化包里面的登录到字样 &quot;login_to&quot;: &quot;登录到&quot;,</span></span>\n<span class="line highlighted"><span>    // ${getSetting(&quot;site_title&quot;)} 网站标题</span></span>\n<span class="line highlighted"><span>    // return `${t(&quot;login.login_to&quot;)}`</span></span>\n<span class="line highlighted"><span>    // return `${t(&quot;login.login_to&quot;)} ${getSetting(&quot;site_title&quot;)}`</span></span>\n<span class="line"><span>    return `${getSetting(&quot;site_title&quot;)}`</span></span>\n<span class="line"><span>  })</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改后的对比预览图-6" tabindex="-1"><a class="header-anchor" href="#修改后的对比预览图-6"><span><strong>修改后的对比预览图：</strong></span></a></h4><figure><img src="'+B+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><h2 id="_8-ipa界面添加下载和复制链接按钮-同时添加巨魔安装按钮" tabindex="-1"><a class="header-anchor" href="#_8-ipa界面添加下载和复制链接按钮-同时添加巨魔安装按钮"><span><strong>8.ipa界面添加下载和复制链接按钮,同时添加巨魔安装按钮</strong></span></a></h2><p>源码文件位置：<strong>alist-web\\src\\pages\\home\\previews\\ipa.tsx</strong></p><p>两个按钮来自 <strong>alist-web\\src\\pages\\home\\previews\\download.tsx</strong></p><p><mark>巨魔安装相关的已经合并，大于 v3.13.1 以上的版本会实装(不包含 v3.13.1</mark></p><details class="hint-container details"><summary>点击查看示例代码</summary><div class="language-tsx line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// import { Button } from &quot;@hope-ui/solid&quot;</span></span>
<span class="line"><span>import { Button, HStack } from &quot;@hope-ui/solid&quot;</span></span>
<span class="line"><span>import { createSignal } from &quot;solid-js&quot;</span></span>
<span class="line"><span>// import { useT } from &quot;~/hooks&quot;</span></span>
<span class="line"><span>import { ObjStore, objStore } from &quot;~/store&quot;</span></span>
<span class="line"><span>import { api, baseName, safeBtoa } from &quot;~/utils&quot;</span></span>
<span class="line"><span>import { FileInfo } from &quot;./info&quot;</span></span>
<span class="line"><span>import { useCopyLink, useLink, useT } from &quot;~/hooks&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>const Ipa = () =&gt; {</span></span>
<span class="line"><span>  const t = useT()</span></span>
<span class="line"><span>  const [installing, setInstalling] = createSignal(false)</span></span>
<span class="line"><span>  const [trInstalling, setTrInstalling] = createSignal(false)</span></span>
<span class="line"><span>  const { copyCurrentRawLink } = useCopyLink()</span></span>
<span class="line"><span>  const { currentObjLink } = useLink()</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;FileInfo&gt;</span></span>
<span class="line highlighted"><span>      &lt;HStack spacing=&quot;$2&quot;&gt;</span></span>
<span class="line"><span>        {/* 原生IPA安装 */}</span></span>
<span class="line"><span>        &lt;Button</span></span>
<span class="line"><span>          as=&quot;a&quot;</span></span>
<span class="line"><span>          href={</span></span>
<span class="line"><span>            &quot;itms-services://?action=download-manifest&amp;url=&quot; +</span></span>
<span class="line"><span>            \`\${api}/i/\${safeBtoa(</span></span>
<span class="line"><span>              encodeURIComponent(objStore.raw_url) +</span></span>
<span class="line"><span>                &quot;/&quot; +</span></span>
<span class="line"><span>                baseName(encodeURIComponent(objStore.obj.name))</span></span>
<span class="line"><span>            )}.plist\`</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>          onClick={() =&gt; {</span></span>
<span class="line"><span>            setInstalling(true)</span></span>
<span class="line"><span>          }}</span></span>
<span class="line"><span>        &gt;</span></span>
<span class="line"><span>          {t(\`home.preview.\${installing() ? &quot;installing&quot; : &quot;install&quot;}\`)}</span></span>
<span class="line"><span>        &lt;/Button&gt;</span></span>
<span class="line highlighted"><span>        {/* 巨魔测试 | use install TrollStore IPA*/}</span></span>
<span class="line highlighted"><span>        &lt;Button</span></span>
<span class="line highlighted"><span>          as=&quot;a&quot;</span></span>
<span class="line highlighted"><span>          colorScheme=&quot;primary&quot;</span></span>
<span class="line highlighted"><span>          href={</span></span>
<span class="line highlighted"><span>            &quot;apple-magnifier://install?url=&quot; +</span></span>
<span class="line highlighted"><span>            encodeURIComponent(currentObjLink(true))</span></span>
<span class="line highlighted"><span>          }</span></span>
<span class="line highlighted"><span>          onClick={() =&gt; {</span></span>
<span class="line highlighted"><span>            setTrInstalling(true)</span></span>
<span class="line highlighted"><span>          }}</span></span>
<span class="line highlighted"><span>        &gt;</span></span>
<span class="line highlighted"><span>          {t(\`home.preview.\${trInstalling() ? &quot;tr-installing&quot; : &quot;tr-install&quot;}\`)}</span></span>
<span class="line highlighted"><span>        &lt;/Button&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        {/* 从这里到</span></span>
<span class="line"><span>        下载按钮文件拷贝的位置</span></span>
<span class="line"><span>          alist-web\\src\\pages\\home\\previews\\download.tsx</span></span>
<span class="line"><span>         primary  青绿色</span></span>
<span class="line"><span>         accent   紫色</span></span>
<span class="line"><span>         neutral  灰色</span></span>
<span class="line"><span>         success  绿色</span></span>
<span class="line"><span>         info     无？</span></span>
<span class="line"><span>         warning  橙色</span></span>
<span class="line"><span>         danger   红色</span></span>
<span class="line"><span>         */}</span></span>
<span class="line highlighted"><span>        &lt;Button colorScheme=&quot;danger&quot; as=&quot;a&quot; href={objStore.raw_url} target=&quot;_blank&quot;&gt;</span></span>
<span class="line highlighted"><span>          {t(&quot;home.preview.download&quot;)}</span></span>
<span class="line highlighted"><span>        &lt;/Button&gt;</span></span>
<span class="line highlighted"><span>        &lt;Button colorScheme=&quot;accent&quot; onClick={() =&gt; copyCurrentRawLink(true)}&gt;</span></span>
<span class="line highlighted"><span>          {t(&quot;home.toolbar.copy_link&quot;)}</span></span>
<span class="line highlighted"><span>        &lt;/Button&gt;</span></span>
<span class="line highlighted"><span>      &lt;/HStack&gt;</span></span>
<span class="line"><span>      {/* 到这里 还有开头的 &lt;HStack spacing=&quot;$2&quot;&gt; 都是自己加的 */}</span></span>
<span class="line"><span>    &lt;/FileInfo&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default Ipa</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></details><h4 id="目前仅支持-ipa文件-若想支持-tipa文件需要添加" tabindex="-1"><a class="header-anchor" href="#目前仅支持-ipa文件-若想支持-tipa文件需要添加"><span>目前仅支持 .ipa文件 若想支持 .tipa文件需要添加</span></a></h4><p>源码路径：<strong>alist-web\\src\\pages\\home\\previews\\index.ts</strong></p><p>需要将 tipa文件也添加进去</p><div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>	{</span></span>
<span class="line"><span>    name: &quot;Ipa&quot;,</span></span>
<span class="line highlighted"><span>    exts: [&quot;ipa&quot;,&quot;tipa&quot;],</span></span>
<span class="line"><span>    component: lazy(() =&gt; import(&quot;./ipa&quot;)),</span></span>
<span class="line"><span>  },</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.tipa 文件添加图标样式</p><p>源码路径：<strong>alist-web\\src\\utils\\icon.ts</strong></p><p>添加一下后缀文件名在里面即可</p><div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line highlighted"><span>  &quot;dmg,ipa,plist,tipa&quot;: BsApple,</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="修改后的对比预览图-7" tabindex="-1"><a class="header-anchor" href="#修改后的对比预览图-7"><span><strong>修改后的对比预览图：</strong></span></a></h4><figure><img src="`+F+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><h2 id="_9-去掉底部内容-有原因的" tabindex="-1"><a class="header-anchor" href="#_9-去掉底部内容-有原因的"><span><strong>9. 去掉底部内容（有原因的）</strong></span></a></h2><p>这里去掉还是有原因的，因为我们修改了后台地址和登录地址</p><p>但是呢不知道出于什么原因，我们修改了后台管理地址，但是输入 <strong>URL/@manage</strong> 还是能进入默认界面，虽然进入了默认界面，提示路径不对，也不知道账号密码，但是通过CSS自定义的内容全部失效了，底部的登录（管理）入口出现了，暴露了我们修改后的 登录（管理）地址</p><p>特此直接从根将这个能暴露我们后台登录地址的信息除掉</p><p><strong>但是要自己在底部自定义一个底部信息哦 保留一下版权信息</strong></p><p>源码文件位置：<strong>alist-web\\src\\pages\\home\\Footer.tsx</strong></p><div class="language-tsx line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>	{/*</span></span>
<span class="line"><span>      &lt;HStack spacing=&quot;$1&quot;&gt;</span></span>
<span class="line"><span>        &lt;Anchor href=&quot;https://github.com/Xhofe/alist&quot; external&gt;</span></span>
<span class="line"><span>          {t(&quot;home.footer.powered_by&quot;)}</span></span>
<span class="line"><span>        &lt;/Anchor&gt;</span></span>
<span class="line"><span>        &lt;span&gt;|&lt;/span&gt;</span></span>
<span class="line"><span>        &lt;AnchorWithBase</span></span>
<span class="line"><span>          as={Link}</span></span>
<span class="line"><span>          href={UserMethods.is_guest(user()) ? &quot;/@login&quot; : &quot;/@manage&quot;}</span></span>
<span class="line"><span>        &gt;</span></span>
<span class="line"><span>          {t(</span></span>
<span class="line"><span>            UserMethods.is_guest(user()) ? &quot;login.login&quot; : &quot;home.footer.manage&quot;</span></span>
<span class="line"><span>          )}</span></span>
<span class="line"><span>        &lt;/AnchorWithBase&gt;</span></span>
<span class="line"><span>      &lt;/HStack&gt;</span></span>
<span class="line"><span>	*/}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h4 id="修改后的对比预览图-8" tabindex="-1"><a class="header-anchor" href="#修改后的对比预览图-8"><span><strong>修改后的对比预览图：</strong></span></a></h4><figure><img src="`+f+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><h2 id="_10-添加一个infuse播放器-3-9-2版本移植到官方内了" tabindex="-1"><a class="header-anchor" href="#_10-添加一个infuse播放器-3-9-2版本移植到官方内了"><span><strong>10. 添加一个infuse播放器(3.9.2版本移植到官方内了)</strong></span></a></h2><p>在底部添加一个新的播放器，“infuse”IOS上面用的人挺多的 支持的格式好像也挺多.</p><p>infuse官网：<a href="https://firecore.com/" target="_blank" rel="noopener noreferrer">Firecore - Video Player for iOS, Apple TV, and Mac</a></p><p><mark>(新)源码文件位置：<strong>alist-web/src/pages/home/previews/<a href="https://github.com/AlistGo/alist-web/blob/main/src/pages/home/previews/video_box.tsx#L17-L21" target="_blank" rel="noopener noreferrer">video_box.tsx</a></strong></mark></p><p>(旧)源码文件位置：<strong>alist-web\\src\\pages\\home\\previews\\video.tsx</strong></p><div class="language-tsx line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const players: { icon: string; name: string; scheme: string }[] = [</span></span>
<span class="line"><span>  { icon: &quot;iina&quot;, name: &quot;IINA&quot;, scheme: &quot;iina://weblink?url=$durl&quot; },</span></span>
<span class="line"><span>  { icon: &quot;potplayer&quot;, name: &quot;PotPlayer&quot;, scheme: &quot;potplayer://$durl&quot; },</span></span>
<span class="line highlighted"><span>    {</span></span>
<span class="line highlighted"><span>    icon: &quot;infuse&quot;,</span></span>
<span class="line highlighted"><span>    name: &quot;Infuse&quot;,</span></span>
<span class="line highlighted"><span>    scheme: &quot;infuse://x-callback-url/play?url=$durl&quot;,</span></span>
<span class="line highlighted"><span>  },</span></span>
<span class="line"><span>  { icon: &quot;vlc&quot;, name: &quot;VLC&quot;, scheme: &quot;vlc://$durl&quot; },</span></span>
<span class="line"><span>  { icon: &quot;nplayer&quot;, name: &quot;nPlayer&quot;, scheme: &quot;nplayer-$durl&quot; },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    icon: &quot;mxplayer&quot;,</span></span>
<span class="line"><span>    name: &quot;MX Player&quot;,</span></span>
<span class="line"><span>    scheme:</span></span>
<span class="line"><span>      &quot;intent:$durl#Intent;package=com.mxtech.videoplayer.ad;S.title=$name;end&quot;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    icon: &quot;mxplayer-pro&quot;,</span></span>
<span class="line"><span>    name: &quot;MX Player Pro&quot;,</span></span>
<span class="line"><span>    scheme:</span></span>
<span class="line"><span>      &quot;intent:$durl#Intent;package=com.mxtech.videoplayer.pro;S.title=$name;end&quot;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>加好后我们给他一个图标，图标的文件夹位置是：<strong>alist-web\\public\\images</strong></p><p>可以下载右侧的这个图片或者自己弄一个，格式是 <strong>.webp</strong> 格式的哦~ <a href="https://down.onmicrosoft.cn/oss/u20221115822a1936_1669345226327_12955142_file.webp" target="_blank" rel="noopener noreferrer"><strong>点击蓝色这里查看图片保存</strong></a></p><p>保存下来后记得命名成 <strong>infuse.webp</strong></p><p><strong>如何自己做一个webp格式的图片，我用的PS做的，然后加一个插件:</strong> <a href="https://blog.csdn.net/kangweijian/article/details/125197799" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/kangweijian/article/details/125197799</a></p><h4 id="修改后的对比预览图-9" tabindex="-1"><a class="header-anchor" href="#修改后的对比预览图-9"><span><strong>修改后的对比预览图：</strong></span></a></h4><figure><img src="`+x+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><h2 id="_11-修改一下搜索-变的更加匹配-✅" tabindex="-1"><a class="header-anchor" href="#_11-修改一下搜索-变的更加匹配-✅"><span><strong>11. 修改一下搜索，变的更加匹配</strong> ✅</span></a></h2><ul><li><strong>开启搜索框需要先在<code>AList</code>将索引打开启用才可以显示搜索框,否则看不到，<a href="https://alist.nn.ci/zh/guide/advanced/search.html#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8" target="_blank" rel="noopener noreferrer">点击查看如何使用</a></strong></li></ul><p>搜索有两个版本一个是最新的一个是v3.6.0及之前的</p><p>使用的图标库地址：<a href="https://solid-icons.vercel.app/search/search" target="_blank" rel="noopener noreferrer"><strong>https://solid-icons.vercel.app/search/search</strong></a></p><details class="hint-container details"><summary>此版本用于最新版搜索源码修改</summary><p>源码文件位置：<strong>alist-web\\src\\pages\\home\\header\\Header.tsx</strong></p><p><strong>很简单，主要是将46行-72行隐藏这是原来的</strong></p><p><strong>然后添加新的代码74-102行代码</strong></p><p><strong>代码中使用了其他的图标库，觉得不好看的可以自行修改并且记得导入不然会报错</strong></p><div class="language-tsx line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import {</span></span>
<span class="line"><span>  HStack,</span></span>
<span class="line"><span>  useColorModeValue,</span></span>
<span class="line"><span>  Image,</span></span>
<span class="line"><span>  Center,</span></span>
<span class="line"><span>  Icon,</span></span>
<span class="line"><span>  Kbd,</span></span>
<span class="line"><span>  IconButton,</span></span>
<span class="line"><span>} from &quot;@hope-ui/solid&quot;</span></span>
<span class="line"><span>import { Show, Switch, Match } from &quot;solid-js&quot;</span></span>
<span class="line"><span>import { getMainColor, getSetting, layout, objStore, State } from &quot;~/store&quot;</span></span>
<span class="line"><span>import { BsSearch } from &quot;solid-icons/bs&quot;</span></span>
<span class="line"><span>import { CenterLoading } from &quot;~/components&quot;</span></span>
<span class="line"><span>import { Container } from &quot;../Container&quot;</span></span>
<span class="line"><span>import { bus } from &quot;~/utils&quot;</span></span>
<span class="line"><span>import { Layout } from &quot;./layout&quot;</span></span>
<span class="line"><span>import { AiOutlineFileSearch } from &quot;solid-icons/ai&quot;</span></span>
<span class="line"><span>import { TbListSearch } from &quot;solid-icons/tb&quot;</span></span>
<span class="line"><span>import { CgImage } from &quot;solid-icons/cg&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export const Header = () =&gt; {</span></span>
<span class="line"><span>  const logos = getSetting(&quot;logo&quot;).split(&quot;\\n&quot;)</span></span>
<span class="line"><span>  const logo = useColorModeValue(logos[0], logos.pop())</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;Center</span></span>
<span class="line"><span>      class=&quot;header&quot;</span></span>
<span class="line"><span>      w=&quot;$full&quot;</span></span>
<span class="line"><span>      // shadow=&quot;$md&quot;</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>      &lt;Container&gt;</span></span>
<span class="line"><span>        &lt;HStack</span></span>
<span class="line"><span>          px=&quot;calc(2% + 0.5rem)&quot;</span></span>
<span class="line"><span>          py=&quot;$2&quot;</span></span>
<span class="line"><span>          w=&quot;$full&quot;</span></span>
<span class="line"><span>          justifyContent=&quot;space-between&quot;</span></span>
<span class="line"><span>        &gt;</span></span>
<span class="line"><span>          &lt;HStack class=&quot;header-left&quot; h=&quot;44px&quot;&gt;</span></span>
<span class="line"><span>            &lt;Image</span></span>
<span class="line"><span>              src={logo()!}</span></span>
<span class="line"><span>              h=&quot;$full&quot;</span></span>
<span class="line"><span>              w=&quot;auto&quot;</span></span>
<span class="line"><span>              fallback={&lt;CenterLoading /&gt;}</span></span>
<span class="line"><span>            /&gt;</span></span>
<span class="line"><span>          &lt;/HStack&gt;</span></span>
<span class="line"><span>          &lt;HStack class=&quot;header-right&quot; spacing=&quot;$2&quot;&gt;</span></span>
<span class="line"><span>            &lt;Show when={objStore.state === State.Folder}&gt;</span></span>
<span class="line highlighted"><span>              {/* &lt;HStack</span></span>
<span class="line highlighted"><span>                aria-label=&quot;Search&quot;</span></span>
<span class="line highlighted"><span>                // 背景色</span></span>
<span class="line highlighted"><span>                bg=&quot;$neutral4&quot;</span></span>
<span class="line highlighted"><span>                // 长度</span></span>
<span class="line highlighted"><span>                // w=&quot;$32&quot;</span></span>
<span class="line highlighted"><span>                // 方框</span></span>
<span class="line highlighted"><span>                p=&quot;$2&quot;</span></span>
<span class="line highlighted"><span>                // 圆角</span></span>
<span class="line highlighted"><span>                rounded=&quot;$md&quot;</span></span>
<span class="line highlighted"><span>                color={getMainColor()}</span></span>
<span class="line highlighted"><span>                justifyContent=&quot;space-between&quot;</span></span>
<span class="line highlighted"><span>                border=&quot;2px solid transparent&quot;</span></span>
<span class="line highlighted"><span>                cursor=&quot;pointer&quot;</span></span>
<span class="line highlighted"><span>                _hover={{
                  borderColor: &quot;$info6&quot;,
                }}</span></span>
<span class="line highlighted"><span>                onClick={() =&gt; {</span></span>
<span class="line highlighted"><span>                  bus.emit(&quot;tool&quot;, &quot;search&quot;)</span></span>
<span class="line highlighted"><span>                }}</span></span>
<span class="line highlighted"><span>              &gt;</span></span>
<span class="line highlighted"><span>                &lt;Icon as={AiOutlineFileSearch} /&gt;</span></span>
<span class="line highlighted"><span>                &lt;HStack&gt;</span></span>
<span class="line highlighted"><span>                  &lt;Kbd&gt;Ctrl&lt;/Kbd&gt;</span></span>
<span class="line highlighted"><span>                  &lt;Kbd&gt;K&lt;/Kbd&gt;</span></span>
<span class="line highlighted"><span>                &lt;/HStack&gt;</span></span>
<span class="line highlighted"><span>              &lt;/HStack&gt; */}</span></span>
<span class="line highlighted"><span>              &lt;IconButton</span></span>
<span class="line highlighted"><span>                aria-label=&quot;Search&quot;</span></span>
<span class="line highlighted"><span>                compact</span></span>
<span class="line highlighted"><span>                size=&quot;lg&quot;</span></span>
<span class="line highlighted"><span>                // 自带的搜索原本只能显示两个图标下面的换成了三个</span></span>
<span class="line highlighted"><span>                // icon={</span></span>
<span class="line highlighted"><span>                //   &lt;Show when={layout() === &quot;list&quot;} fallback={&lt;TbListSearch /&gt;}&gt;</span></span>
<span class="line highlighted"><span>                //     &lt;AiOutlineFileSearch /&gt; </span></span>
<span class="line highlighted"><span>                //   &lt;/Show&gt;</span></span>
<span class="line highlighted"><span>                // }</span></span>
<span class="line highlighted"><span>                </span></span>
<span class="line highlighted"><span>                //这次支持三个不同的图标了</span></span>
<span class="line highlighted"><span>                icon={</span></span>
<span class="line highlighted"><span>                  &lt;Switch&gt;</span></span>
<span class="line highlighted"><span>                    &lt;Match when={layout() === &quot;list&quot;}&gt;</span></span>
<span class="line highlighted"><span>                      &lt;TbListSearch /&gt;</span></span>
<span class="line highlighted"><span>                    &lt;/Match&gt;</span></span>
<span class="line highlighted"><span>                    &lt;Match when={layout() === &quot;grid&quot;}&gt;</span></span>
<span class="line highlighted"><span>                      &lt;AiOutlineFileSearch /&gt;</span></span>
<span class="line highlighted"><span>                    &lt;/Match&gt;</span></span>
<span class="line highlighted"><span>                    &lt;Match when={layout() === &quot;image&quot;}&gt;</span></span>
<span class="line highlighted"><span>                      &lt;CgImage /&gt;</span></span>
<span class="line highlighted"><span>                    &lt;/Match&gt;</span></span>
<span class="line highlighted"><span>                  &lt;/Switch&gt;</span></span>
<span class="line highlighted"><span>                }</span></span>
<span class="line highlighted"><span>                onClick={() =&gt; {</span></span>
<span class="line highlighted"><span>                  bus.emit(&quot;tool&quot;, &quot;search&quot;)</span></span>
<span class="line highlighted"><span>                }}</span></span>
<span class="line highlighted"><span>              /&gt;</span></span>
<span class="line highlighted"><span>              {/* 搜索右侧的那个变换的按钮 */}</span></span>
<span class="line highlighted"><span>              &lt;Layout /&gt;</span></span>
<span class="line"><span>            &lt;/Show&gt;</span></span>
<span class="line"><span>          &lt;/HStack&gt;</span></span>
<span class="line"><span>        &lt;/HStack&gt;</span></span>
<span class="line"><span>      &lt;/Container&gt;</span></span>
<span class="line"><span>    &lt;/Center&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></details><details class="hint-container details"><summary>仅限于V3.6.0版本搜索</summary><p>源码文件位置：<strong>alist-web/src/pages/home/Header.tsx</strong></p><p>主要是将原本自带的隐藏了，重新做一个，看起来比较适配。</p><p>也可以根据是图标模式和列表模式变换图标，哈哈如果觉得不好看，可以把两个图标改成一样的就行。</p><p>上述使用的图标库地址：<a href="https://solid-icons.vercel.app/search/search" target="_blank" rel="noopener noreferrer"><strong>https://solid-icons.vercel.app/search/search</strong></a></p><div class="language-tsx line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>          &lt;HStack class=&quot;header-right&quot; spacing=&quot;$2&quot;&gt;</span></span>
<span class="line"><span>            &lt;Show when={objStore.state === State.Folder}&gt;</span></span>
<span class="line"><span>              {/* 隐藏自带的搜索准备重建一个 */}</span></span>
<span class="line"><span>              {/* &lt;HStack</span></span>
<span class="line"><span>                bg=&quot;$neutral4&quot;</span></span>
<span class="line"><span>                w=&quot;$32&quot;</span></span>
<span class="line"><span>                p=&quot;$2&quot;</span></span>
<span class="line"><span>                rounded=&quot;$md&quot;</span></span>
<span class="line"><span>                justifyContent=&quot;space-between&quot;</span></span>
<span class="line"><span>                border=&quot;2px solid transparent&quot;</span></span>
<span class="line"><span>                cursor=&quot;pointer&quot;</span></span>
<span class="line"><span>                _hover={{
                  borderColor: &quot;$info6&quot;,
                }}</span></span>
<span class="line"><span>                onClick={() =&gt; {</span></span>
<span class="line"><span>                  bus.emit(&quot;tool&quot;, &quot;search&quot;)</span></span>
<span class="line"><span>                }}</span></span>
<span class="line"><span>              &gt;</span></span>
<span class="line"><span>                &lt;Icon as={BsSearch} /&gt;</span></span>
<span class="line"><span>                &lt;HStack&gt;</span></span>
<span class="line"><span>                  &lt;Kbd&gt;Ctrl&lt;/Kbd&gt;</span></span>
<span class="line"><span>                  &lt;Kbd&gt;K&lt;/Kbd&gt;</span></span>
<span class="line"><span>                &lt;/HStack&gt;</span></span>
<span class="line"><span>              &lt;/HStack&gt; */}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>              {/*普通搜索*/}</span></span>
<span class="line"><span>              &lt;IconButton</span></span>
<span class="line"><span>                aria-label=&quot;Search&quot;</span></span>
<span class="line"><span>                compact</span></span>
<span class="line"><span>                size=&quot;lg&quot;</span></span>
<span class="line"><span>                icon={</span></span>
<span class="line"><span>                  {/*TbListSearch 和 AiOutlineFileSearch 是图标，觉得不好看可以自己换*/}</span></span>
<span class="line"><span>                  &lt;Show when={layout() === &quot;list&quot;} fallback={&lt;TbListSearch /&gt;}&gt;</span></span>
<span class="line"><span>                    &lt;AiOutlineFileSearch /&gt;</span></span>
<span class="line"><span>                  &lt;/Show&gt;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                onClick={() =&gt; {</span></span>
<span class="line"><span>                  bus.emit(&quot;tool&quot;, &quot;search&quot;)</span></span>
<span class="line"><span>                }}</span></span>
<span class="line"><span>              /&gt;</span></span>
<span class="line"><span>              {/*切换按钮*/}</span></span>
<span class="line"><span>              &lt;IconButton</span></span>
<span class="line"><span>                aria-label=&quot;switch layout&quot;</span></span>
<span class="line"><span>                compact</span></span>
<span class="line"><span>                size=&quot;lg&quot;</span></span>
<span class="line"><span>                icon={</span></span>
<span class="line"><span>                  &lt;Show when={layout() === &quot;list&quot;} fallback={&lt;FaSolidListUl /&gt;}&gt;</span></span>
<span class="line"><span>                    &lt;BsGridFill /&gt;</span></span>
<span class="line"><span>                  &lt;/Show&gt;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                onClick={() =&gt; {</span></span>
<span class="line"><span>                  setLayout(layout() === &quot;list&quot; ? &quot;grid&quot; : &quot;list&quot;)</span></span>
<span class="line"><span>                }}</span></span>
<span class="line"><span>              /&gt;</span></span>
<span class="line"><span>            &lt;/Show&gt;</span></span>
<span class="line"><span>          &lt;/HStack&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></details><h4 id="修改后的对比预览图-10" tabindex="-1"><a class="header-anchor" href="#修改后的对比预览图-10"><span><strong>修改后的对比预览图：</strong></span></a></h4><figure><img src="`+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+w+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><h2 id="_12-修改文件图标" tabindex="-1"><a class="header-anchor" href="#_12-修改文件图标"><span><strong>12.修改文件图标</strong></span></a></h2><p>源码文件位置：<strong>alist-web\\src\\utils\\icon.ts</strong></p><p>图标库：<a href="https://solid-icons.vercel.app/" target="_blank" rel="noopener noreferrer">https://solid-icons.vercel.app/</a></p><details class="hint-container details"><summary>点击查看示例代码</summary><div class="language-tsx line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import {</span></span>
<span class="line"><span>  BsFileEarmarkWordFill,</span></span>
<span class="line"><span>  BsFileEarmarkExcelFill,</span></span>
<span class="line"><span>  BsFileEarmarkPptFill,</span></span>
<span class="line"><span>  BsFileEarmarkPdfFill,</span></span>
<span class="line"><span>  BsFileEarmarkPlayFill,</span></span>
<span class="line"><span>  BsFileEarmarkMusicFill,</span></span>
<span class="line"><span>  BsFileEarmarkFontFill,</span></span>
<span class="line"><span>  BsFileEarmarkImageFill,</span></span>
<span class="line"><span>  BsFileEarmarkMinusFill,</span></span>
<span class="line"><span>  BsApple,</span></span>
<span class="line"><span>  BsWindows,</span></span>
<span class="line"><span>  BsFileEarmarkZipFill,</span></span>
<span class="line"><span>  BsMarkdownFill,</span></span>
<span class="line"><span>  BsFiletypeYml,</span></span>
<span class="line"><span>  BsFiletypeXml</span></span>
<span class="line"><span>} from &quot;solid-icons/bs&quot;</span></span>
<span class="line"><span>import { </span></span>
<span class="line"><span>  SiAdobephotoshop, </span></span>
<span class="line"><span>  SiAdobepremierepro,</span></span>
<span class="line"><span>  SiAdobeillustrator,</span></span>
<span class="line"><span>  SiAdobeaftereffects,</span></span>
<span class="line"><span>  SiAdobeaudition,</span></span>
<span class="line"><span>  SiAdobeindesign,</span></span>
<span class="line"><span>  SiTypescript,</span></span>
<span class="line"><span>  SiGnubash,</span></span>
<span class="line"><span>  SiJavascript,</span></span>
<span class="line"><span>  SiPhp</span></span>
<span class="line"><span>} from &quot;solid-icons/si&quot;</span></span>
<span class="line"><span>import {</span></span>
<span class="line"><span>  FaSolidDatabase,</span></span>
<span class="line"><span>  FaSolidBook,</span></span>
<span class="line"><span>  FaSolidCompactDisc,</span></span>
<span class="line"><span>} from &quot;solid-icons/fa&quot;</span></span>
<span class="line"><span>import { IoFolder } from &quot;solid-icons/io&quot;</span></span>
<span class="line"><span>import { ImAndroid } from &quot;solid-icons/im&quot;</span></span>
<span class="line"><span>import { Obj, ObjType } from &quot;~/types&quot;</span></span>
<span class="line"><span>import { ext } from &quot;./path&quot;</span></span>
<span class="line"><span>import { FaBrandsGolang,FaBrandsJava,FaBrandsPython } from &#39;solid-icons/fa&#39;</span></span>
<span class="line"><span>import { BiSolidFileJson,BiSolidFileCss,BiSolidFileHtml } from &#39;solid-icons/bi&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//下面是我使用的图标示例，也要添加上面对应的库导入进来喔</span></span>
<span class="line"><span>const iconMap = {</span></span>
<span class="line"><span>  &quot;dmg,ipa,plist,tipa&quot;: BsApple,</span></span>
<span class="line"><span>  &quot;exe,msi&quot;: BsWindows,</span></span>
<span class="line"><span>  &quot;zip,gz,rar,7z,tar,jar,xz&quot;: BsFileEarmarkZipFill,</span></span>
<span class="line"><span>  apk: ImAndroid,</span></span>
<span class="line"><span>  &quot;db,db-shm,db-wal,sql&quot;: FaSolidDatabase,</span></span>
<span class="line"><span>  md: BsMarkdownFill,</span></span>
<span class="line"><span>  epub: FaSolidBook,</span></span>
<span class="line"><span>  iso: FaSolidCompactDisc,</span></span>
<span class="line"><span>  m3u8: BsFileEarmarkPlayFill,</span></span>
<span class="line"><span>  &quot;doc,docx&quot;: BsFileEarmarkWordFill,</span></span>
<span class="line"><span>  &quot;xls,xlsx,csv&quot;: BsFileEarmarkExcelFill,</span></span>
<span class="line"><span>  &quot;ppt,pptx&quot;: BsFileEarmarkPptFill,</span></span>
<span class="line"><span>  pdf: BsFileEarmarkPdfFill,</span></span>
<span class="line"><span>  // Adobe</span></span>
<span class="line"><span>  &quot;psd,pdd&quot;: SiAdobephotoshop,</span></span>
<span class="line"><span>  prproj: SiAdobepremierepro,</span></span>
<span class="line"><span>  &quot;ai,ait,eps,epsf,ps&quot;: SiAdobeillustrator,</span></span>
<span class="line"><span>  aep: SiAdobeaftereffects,</span></span>
<span class="line"><span>  sesx: SiAdobeaudition,</span></span>
<span class="line"><span>  indd: SiAdobeindesign,</span></span>
<span class="line"><span>  // code</span></span>
<span class="line"><span>  go: FaBrandsGolang,</span></span>
<span class="line"><span>  java: FaBrandsJava,</span></span>
<span class="line"><span>  pnp:SiPhp,</span></span>
<span class="line"><span>  &quot;py,pyc,pyo,pyi,pyw,pyd,pyx&quot;: FaBrandsPython,</span></span>
<span class="line"><span>  &quot;ts,tsx&quot;: SiTypescript, </span></span>
<span class="line"><span>  &quot;yaml,yml,toml&quot;: BsFiletypeYml,</span></span>
<span class="line"><span>  xml:BsFiletypeXml,</span></span>
<span class="line"><span>  sh: SiGnubash,</span></span>
<span class="line"><span>  json: BiSolidFileJson,</span></span>
<span class="line"><span>  &quot;js,mjs,cjs&quot;: SiJavascript,</span></span>
<span class="line"><span>  css:BiSolidFileCss,</span></span>
<span class="line"><span>  html:BiSolidFileHtml,</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></details><h4 id="修改后的对比预览图-11" tabindex="-1"><a class="header-anchor" href="#修改后的对比预览图-11"><span><strong>修改后的对比预览图：</strong></span></a></h4><figure><img src="`+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><br><h2 id="_13-给后台登录的按钮添加颜色-可使用主颜色" tabindex="-1"><a class="header-anchor" href="#_13-给后台登录的按钮添加颜色-可使用主颜色"><span><strong>13.给后台登录的按钮添加颜色（可使用主颜色）</strong></span></a></h2><p><strong>源码文件位置<sup>1-左侧语言选项按钮</sup></strong>：<strong>alist-web\\src\\components\\SwitchLanguage.tsx</strong></p><ul><li>按钮位置分布：前端本地设置，登录页面，AList后台左侧边栏</li></ul><p><strong>源码文件位置<sup>2-中间切换夜间/白色按钮</sup></strong>：<strong>alist-web\\src\\components\\SwitchColorMode.tsx</strong></p><ul><li>按钮位置分布：前端本地设置，登录页面，AList后台左侧边栏</li></ul><p><strong>源码文件位置<sup>3-右侧单点登录按钮</sup></strong>：<strong>alist-web\\src\\pages\\login\\SSOLogin.tsx</strong></p><ul><li>按钮位置分布：登录页面</li></ul><p><strong>源码文件位置<sup>4-右侧WebAuthn登录按钮</sup></strong>：<strong>alist-web\\src\\pages\\login\\index.tsx</strong></p><ul><li>按钮位置分布：登录页面</li></ul><br><ul><li>使用主颜色：指的是在AList后台设置的颜色，路径 --&gt;<code>AList后台</code> --&gt; 设置 --&gt; 样式 --&gt; <strong><code>主颜色</code></strong></li><li>用固定颜色：指的是直接在源码中写死</li></ul><table><thead><tr><th style="text-align:center;">方法\\优缺点</th><th style="text-align:center;">优点</th><th style="text-align:center;">缺点</th></tr></thead><tbody><tr><td style="text-align:center;">固定</td><td style="text-align:center;">可以设置不同颜色</td><td style="text-align:center;">更换只能重新编译</td></tr><tr><td style="text-align:center;">主颜色</td><td style="text-align:center;">可以随时换颜色</td><td style="text-align:center;">和前端显示的图标颜色统一可能不适合登录页面背景</td></tr></tbody></table><hr><h4 id="使用主颜色" tabindex="-1"><a class="header-anchor" href="#使用主颜色"><span>使用主颜色</span></a></h4>',98)),p(r,{id:"477",data:[{id:"语言选项"},{id:"模式切换"},{id:"单点登录"},{id:"WebAuthn"}],"tab-id":"login-color"},{title0:i(({value:l,isActive:e})=>a[8]||(a[8]=[n("语言选项")])),title1:i(({value:l,isActive:e})=>a[9]||(a[9]=[n("模式切换")])),title2:i(({value:l,isActive:e})=>a[10]||(a[10]=[n("单点登录")])),title3:i(({value:l,isActive:e})=>a[11]||(a[11]=[n("WebAuthn")])),tab0:i(({value:l,isActive:e})=>a[12]||(a[12]=[s("div",{class:"language-tsx line-numbers-mode","data-highlighter":"shiki","data-ext":"tsx","data-title":"tsx",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line highlighted"},[s("span",null,'import { getMainColor } from "~/store"')]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"......")]),n(`
`),s("span",{class:"line"},[s("span",null,"......")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"export const SwitchLanguageWhite = () => (")]),n(`
`),s("span",{class:"line highlighted"},[s("span",null,'  <SwitchLanguage as={IoLanguageOutline} color={getMainColor()} boxSize="$8" />')]),n(`
`),s("span",{class:"line"},[s("span",null,")")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab1:i(({value:l,isActive:e})=>a[13]||(a[13]=[s("div",{class:"language-tsx line-numbers-mode has-collapsed-lines collapsed","data-highlighter":"shiki","data-ext":"tsx","data-title":"tsx",style:{"--vp-collapsed-lines":"15","--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line highlighted"},[s("span",null,'import { getMainColor } from "~/store"')]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"......")]),n(`
`),s("span",{class:"line"},[s("span",null,"......")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"  return (")]),n(`
`),s("span",{class:"line"},[s("span",null,"    <Icon")]),n(`
`),s("span",{class:"line"},[s("span",null,'      cursor="pointer"')]),n(`
`),s("span",{class:"line"},[s("span",null,"      boxSize={icon().size}")]),n(`
`),s("span",{class:"line"},[s("span",null,"      as={icon().component}")]),n(`
`),s("span",{class:"line"},[s("span",null,"      onClick={toggleColorMode}")]),n(`
`),s("span",{class:"line"},[s("span",null,"      // 给图标加个颜色 color={getMainColor()}")]),n(`
`),s("span",{class:"line highlighted"},[s("span",null,"      color={getMainColor()}")]),n(`
`),s("span",{class:"line"},[s("span",null,"      p={icon().p}")]),n(`
`),s("span",{class:"line"},[s("span",null,"    />")]),n(`
`),s("span",{class:"line"},[s("span",null,"  )")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})]),s("div",{class:"collapsed-lines"})],-1)])),tab2:i(({value:l,isActive:e})=>a[14]||(a[14]=[s("div",{class:"language-tsx line-numbers-mode","data-highlighter":"shiki","data-ext":"tsx","data-title":"tsx",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line highlighted"},[s("span",null,'import { getMainColor } from "~/store"')]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"......")]),n(`
`),s("span",{class:"line"},[s("span",null,"......")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    return (")]),n(`
`),s("span",{class:"line"},[s("span",null,"      // 给图标加个颜色 color={'red'}")]),n(`
`),s("span",{class:"line highlighted"},[s("span",null,'      <Icon cursor="pointer" color={getMainColor()} boxSize="$8" as={icon} p="$0_5" onclick={login} />')]),n(`
`),s("span",{class:"line"},[s("span",null,"    )")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab3:i(({value:l,isActive:e})=>a[15]||(a[15]=[s("div",{class:"language-tsx line-numbers-mode has-collapsed-lines collapsed","data-highlighter":"shiki","data-ext":"tsx","data-title":"tsx",style:{"--vp-collapsed-lines":"15","--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,'import { getMainColor } from "~/store"')]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"......")]),n(`
`),s("span",{class:"line"},[s("span",null,"......")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"          <SSOLogin />")]),n(`
`),s("span",{class:"line"},[s("span",null,"          <Show when={AuthnSignEnabled}>")]),n(`
`),s("span",{class:"line"},[s("span",null,"            <Icon")]),n(`
`),s("span",{class:"line highlighted"},[s("span",null,"              color={getMainColor()}")]),n(`
`),s("span",{class:"line"},[s("span",null,'              cursor="pointer"')]),n(`
`),s("span",{class:"line"},[s("span",null,'              boxSize="$8"')]),n(`
`),s("span",{class:"line"},[s("span",null,"              as={IoFingerPrint}")]),n(`
`),s("span",{class:"line"},[s("span",null,'              p="$0_5"')]),n(`
`),s("span",{class:"line"},[s("span",null,"              onclick={AuthnSwitch}")]),n(`
`),s("span",{class:"line"},[s("span",null,"            />")]),n(`
`),s("span",{class:"line"},[s("span",null,"          </Show>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})]),s("div",{class:"collapsed-lines"})],-1)])),_:1}),a[36]||(a[36]=s("h4",{id:"用固定颜色",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#用固定颜色"},[s("span",null,"用固定颜色")])],-1)),p(r,{id:"494",data:[{id:"语言选项"},{id:"模式切换"},{id:"单点登录"},{id:"WebAuthn"}],"tab-id":"login-color"},{title0:i(({value:l,isActive:e})=>a[16]||(a[16]=[n("语言选项")])),title1:i(({value:l,isActive:e})=>a[17]||(a[17]=[n("模式切换")])),title2:i(({value:l,isActive:e})=>a[18]||(a[18]=[n("单点登录")])),title3:i(({value:l,isActive:e})=>a[19]||(a[19]=[n("WebAuthn")])),tab0:i(({value:l,isActive:e})=>a[20]||(a[20]=[s("div",{class:"language-tsx line-numbers-mode","data-highlighter":"shiki","data-ext":"tsx","data-title":"tsx",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"export const SwitchLanguageWhite = () => (")]),n(`
`),s("span",{class:"line highlighted"},[s("span",null,'  <SwitchLanguage as={IoLanguageOutline} color={"$accent10"} boxSize="$8" />')]),n(`
`),s("span",{class:"line"},[s("span",null,")")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab1:i(({value:l,isActive:e})=>a[21]||(a[21]=[s("div",{class:"language-tsx line-numbers-mode","data-highlighter":"shiki","data-ext":"tsx","data-title":"tsx",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"  return (")]),n(`
`),s("span",{class:"line"},[s("span",null,"    <Icon")]),n(`
`),s("span",{class:"line"},[s("span",null,'      cursor="pointer"')]),n(`
`),s("span",{class:"line"},[s("span",null,"      boxSize={icon().size}")]),n(`
`),s("span",{class:"line"},[s("span",null,"      as={icon().component}")]),n(`
`),s("span",{class:"line"},[s("span",null,"      onClick={toggleColorMode}")]),n(`
`),s("span",{class:"line"},[s("span",null,"      // 给图标加个颜色 color={'red'},双引号 单引号都可以")]),n(`
`),s("span",{class:"line highlighted"},[s("span",null,"      color={'red'}")]),n(`
`),s("span",{class:"line"},[s("span",null,"      p={icon().p}")]),n(`
`),s("span",{class:"line"},[s("span",null,"    />")]),n(`
`),s("span",{class:"line"},[s("span",null,"  )")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab2:i(({value:l,isActive:e})=>a[22]||(a[22]=[s("div",{class:"language-tsx line-numbers-mode","data-highlighter":"shiki","data-ext":"tsx","data-title":"tsx",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"    return (")]),n(`
`),s("span",{class:"line"},[s("span",null,"      // 给图标加个颜色 color={'red'},双引号 单引号都可以")]),n(`
`),s("span",{class:"line highlighted"},[s("span",null,`      <Icon cursor="pointer" color={'red'} boxSize="$8" as={icon} p="$0_5" onclick={login} />`)]),n(`
`),s("span",{class:"line"},[s("span",null,"    )")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab3:i(({value:l,isActive:e})=>a[23]||(a[23]=[s("div",{class:"language-tsx line-numbers-mode","data-highlighter":"shiki","data-ext":"tsx","data-title":"tsx",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",null,"          <SSOLogin />")]),n(`
`),s("span",{class:"line"},[s("span",null,"          <Show when={AuthnSignEnabled}>")]),n(`
`),s("span",{class:"line"},[s("span",null,"            <Icon")]),n(`
`),s("span",{class:"line highlighted"},[s("span",null,"              color={getMainColor()}")]),n(`
`),s("span",{class:"line"},[s("span",null,'              cursor="pointer"')]),n(`
`),s("span",{class:"line"},[s("span",null,'              boxSize="$8"')]),n(`
`),s("span",{class:"line"},[s("span",null,"              as={IoFingerPrint}")]),n(`
`),s("span",{class:"line"},[s("span",null,'              p="$0_5"')]),n(`
`),s("span",{class:"line"},[s("span",null,"              onclick={AuthnSwitch}")]),n(`
`),s("span",{class:"line"},[s("span",null,"            />")]),n(`
`),s("span",{class:"line"},[s("span",null,"          </Show>")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),a[37]||(a[37]=s("p",null,[s("strong",null,"修改后的对比预览图：")],-1)),a[38]||(a[38]=s("p",null,"翻译忘记截图了，我这里预览图不显示翻译是因为我之前已经删掉了，",-1)),p(r,{id:"514",data:[{id:"使用主颜色"},{id:"用固定颜色"}],"tab-id":"login-color"},{title0:i(({value:l,isActive:e})=>a[24]||(a[24]=[n("使用主颜色")])),title1:i(({value:l,isActive:e})=>a[25]||(a[25]=[n("用固定颜色")])),tab0:i(({value:l,isActive:e})=>a[26]||(a[26]=[s("figure",null,[s("img",{src:E,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1)])),tab1:i(({value:l,isActive:e})=>a[27]||(a[27]=[s("figure",null,[s("img",{src:_,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1)])),_:1}),a[39]||(a[39]=t(`<p>虽然只改了这几个，不过像后台左侧边栏和前端设置里面的应该是同理方法</p><br><h2 id="_14-修改默认为某-视图-方式" tabindex="-1"><a class="header-anchor" href="#_14-修改默认为某-视图-方式"><span><strong>14.修改默认为某&quot;视图&quot;方式</strong></span></a></h2><p>首页默认视图为 &quot;列表 list&quot; 格式，有的小伙伴想着默认为 &quot;网格格式&quot; 怎么办呢? 改源码呗....</p><p>源码文件位置：<strong>alist-web\\src\\store\\obj.ts</strong></p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> type</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> LayoutType</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;list&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;grid&quot;</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;image&quot;</span></span>
<span class="line highlighted"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">layout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">setLayout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> createStorageSignal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">LayoutType</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;layout&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;list&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>大概在177行左右，可能有变化会浮动代码行数，代码是不会变的</p><p>默认这里是 <strong>&quot;list&quot;</strong> ，如果你要默认为 &quot;网格视图&quot; 自己改成 <strong>&quot;grid&quot;</strong> 即可，&quot;image&quot; 是图片视图估计没人默认用</p><h4 id="修改后的对比预览图-12" tabindex="-1"><a class="header-anchor" href="#修改后的对比预览图-12"><span><strong>修改后的对比预览图：</strong></span></a></h4><p>就像这样的上面是网格视图 下面的是列表视图，默认是列表视图的哦~如果你要改图标可以看<a href="#_12-%E4%BF%AE%E6%94%B9%E6%96%87%E4%BB%B6%E5%9B%BE%E6%A0%87"><strong>图标如何修改</strong></a></p><figure><img src="`+$+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_15-修改pwa内容" tabindex="-1"><a class="header-anchor" href="#_15-修改pwa内容"><span><strong>15.修改PWA内容</strong></span></a></h2><p>现在支持将网页通过<code>PWA</code>添加到桌面了,但是添加的图标不是很好看的样子,</p><p>具体如预览中最后的那个图标,没处理好背景颜色黑乎乎的~我们自己修改一下</p>',14)),s("p",null,[a[28]||(a[28]=n("源码")),p(o,{text:"1",type:"info",vertical:"middle"}),a[29]||(a[29]=n("修改的好像是IOS的，源码")),p(o,{text:"2",type:"info",vertical:"middle"}),a[30]||(a[30]=n("是修改的安卓的~"))]),a[40]||(a[40]=t(`<p>源码文件位置1：<strong>alist-web\\index.html</strong></p><p>把原本的第三行(高亮显示的)改成自己的链接，或者使用和我同款的</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">link</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      rel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;apple-touch-icon&quot;</span></span>
<span class="line highlighted"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://jsd.nn.ci/gh/AlistGo/logo@main/logo.png&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>和我同款图标链接：<strong><a href="https://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg" target="_blank" rel="noopener noreferrer">https://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg</a></strong></p></blockquote><p>源码文件位置2：<strong>alist-web\\public\\static\\manifest.json</strong></p><p>老规矩，一样是修改第八行(高亮位置)改成自己的链接，或者使用和我同款的</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;display&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;standalone&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;scope&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;start_url&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;AList&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;icons&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;src&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://jsd.nn.ci/gh/AlistGo/logo@main/logo.png&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;sizes&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;512x512&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;image/png&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>和我同款图标链接：<strong><a href="https://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg" target="_blank" rel="noopener noreferrer">https://pic.rmb.bdstatic.com/bjh/aff9c9c8817d943d6857a73188958d45.jpeg</a></strong></p></blockquote><h4 id="修改后的对比预览图-13" tabindex="-1"><a class="header-anchor" href="#修改后的对比预览图-13"><span><strong>修改后的对比预览图：</strong></span></a></h4><p>上面的是IOS，下面的是安卓</p><p>下图第三个是修改 <strong><code>后</code></strong> 的图标，第四个是修改 <strong><code>前</code></strong> 的图标</p><figure><img src="`+D+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>下图第一个是修改 <strong><code>后</code></strong> 的图标，第二个是修改 <strong><code>前</code></strong> 的图标，安卓的倒是没黑乎乎</p><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="修改后台地址和登录地址" tabindex="-1"><a class="header-anchor" href="#修改后台地址和登录地址"><span><strong>$ 修改后台地址和登录地址</strong></span></a></h2><p>就没代码了，自己批量替换即可~</p><p><mark><strong>@login</strong></mark> 是登录地址，<mark><strong>@manage</strong></mark> 是后台地址</p><h4 id="修改后的对比预览图-14" tabindex="-1"><a class="header-anchor" href="#修改后的对比预览图-14"><span><strong>修改后的对比预览图：</strong></span></a></h4><div class="image-preview"><img src="'+j+'"><img src="'+M+'"></div>',19))])}const P=u(L,[["render",T],["__file","03-code.html.vue"]]),H=JSON.parse('{"path":"/index/03-code.html","title":"AList魔改示例教程","lang":"zh-CN","frontmatter":{"title":"AList魔改示例教程","icon":"fa-solid fa-rocket-launch","order":30,"author":"安稳","date":"2023-01-01T00:00:00.000Z","category":["使用指南"],"tag":["AList魔攻教程","自己编译","其他玩法","Code"],"sticky":true,"star":true,"headerDepth":6,"description":"前言 虽然默认的也挺好的，但是吧就是想折腾折腾，就魔改了一下前端嘿嘿 以下代码是我自己魔改了前端的一些地方，虽然可能位置和行数不太对，大概浮动的地方不会差很大的. 如果需要修改的话自己clone前端代码哦，可以，具体怎么调试也很简单 提示 提供 v50懒人包 付款备注附带你的联系方式，然后 联系我 v50 使用 主要是想使用，但是懒得编译的用户 或者不...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://anwen-anyi/anwen-anyi.github.io/index/03-code.html"}],["meta",{"property":"og:site_name","content":"安安稳稳"}],["meta",{"property":"og:title","content":"AList魔改示例教程"}],["meta",{"property":"og:description","content":"前言 虽然默认的也挺好的，但是吧就是想折腾折腾，就魔改了一下前端嘿嘿 以下代码是我自己魔改了前端的一些地方，虽然可能位置和行数不太对，大概浮动的地方不会差很大的. 如果需要修改的话自己clone前端代码哦，可以，具体怎么调试也很简单 提示 提供 v50懒人包 付款备注附带你的联系方式，然后 联系我 v50 使用 主要是想使用，但是懒得编译的用户 或者不..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://anwen-anyi/anwen-anyi.github.io/touwei.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"安稳"}],["meta",{"property":"article:tag","content":"AList魔攻教程"}],["meta",{"property":"article:tag","content":"自己编译"}],["meta",{"property":"article:tag","content":"其他玩法"}],["meta",{"property":"article:tag","content":"Code"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AList魔改示例教程\\",\\"image\\":[\\"https://anwen-anyi/anwen-anyi.github.io/touwei.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/1.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/2.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/3.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/4.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/5.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/6.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/7.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/8.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/9.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/10.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/11.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/11-2.gif\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/12.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/13-huodong.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/13-guding.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/14.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/15-1.png\\",\\"https://anwen-anyi/anwen-anyi.github.io/img/code/15-2.jpg\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"安稳\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"1. 先修改 Loading 试试水","slug":"_1-先修改-loading-试试水","link":"#_1-先修改-loading-试试水","children":[{"level":4,"title":"修改后的对比预览图：","slug":"修改后的对比预览图","link":"#修改后的对比预览图","children":[]}]},{"level":2,"title":"2. 修改并且取消在加密码情况下的出现的登录按钮","slug":"_2-修改并且取消在加密码情况下的出现的登录按钮","link":"#_2-修改并且取消在加密码情况下的出现的登录按钮","children":[{"level":4,"title":"修改后的对比预览图：","slug":"修改后的对比预览图-1","link":"#修改后的对比预览图-1","children":[]}]},{"level":2,"title":"3.修改了不登录的后台显示","slug":"_3-修改了不登录的后台显示","link":"#_3-修改了不登录的后台显示","children":[{"level":4,"title":"修改后的对比预览图：","slug":"修改后的对比预览图-2","link":"#修改后的对比预览图-2","children":[]}]},{"level":2,"title":"4. 取消游客访问和语言选择的按钮默认为简体中文","slug":"_4-取消游客访问和语言选择的按钮默认为简体中文","link":"#_4-取消游客访问和语言选择的按钮默认为简体中文","children":[{"level":4,"title":"如何改成默认为简体中文：","slug":"如何改成默认为简体中文","link":"#如何改成默认为简体中文","children":[]},{"level":4,"title":"修改后的对比预览图：","slug":"修改后的对比预览图-3","link":"#修改后的对比预览图-3","children":[]}]},{"level":2,"title":"5.删除\\"本地设置\\"里面的语言切换按钮，已经默认为中文","slug":"_5-删除-本地设置-里面的语言切换按钮-已经默认为中文","link":"#_5-删除-本地设置-里面的语言切换按钮-已经默认为中文","children":[{"level":4,"title":"修改后的对比预览图：","slug":"修改后的对比预览图-4","link":"#修改后的对比预览图-4","children":[]}]},{"level":2,"title":"6. 将本地设置里面的夜间/白天 切换模式和刷新按钮(刷新需要登录)移动到主页","slug":"_6-将本地设置里面的夜间-白天-切换模式和刷新按钮-刷新需要登录-移动到主页","link":"#_6-将本地设置里面的夜间-白天-切换模式和刷新按钮-刷新需要登录-移动到主页","children":[{"level":3,"title":"不会加,可以参考这里的完整代码","slug":"不会加-可以参考这里的完整代码","link":"#不会加-可以参考这里的完整代码","children":[{"level":4,"title":"修改后的对比预览图：","slug":"修改后的对比预览图-5","link":"#修改后的对比预览图-5","children":[]}]}]},{"level":2,"title":"7.将登录页面的 \\"登录到\\" 隐藏，后期适配自己的使用","slug":"_7-将登录页面的-登录到-隐藏-后期适配自己的使用","link":"#_7-将登录页面的-登录到-隐藏-后期适配自己的使用","children":[{"level":4,"title":"修改后的对比预览图：","slug":"修改后的对比预览图-6","link":"#修改后的对比预览图-6","children":[]}]},{"level":2,"title":"8.ipa界面添加下载和复制链接按钮,同时添加巨魔安装按钮","slug":"_8-ipa界面添加下载和复制链接按钮-同时添加巨魔安装按钮","link":"#_8-ipa界面添加下载和复制链接按钮-同时添加巨魔安装按钮","children":[{"level":4,"title":"目前仅支持 .ipa文件 若想支持 .tipa文件需要添加","slug":"目前仅支持-ipa文件-若想支持-tipa文件需要添加","link":"#目前仅支持-ipa文件-若想支持-tipa文件需要添加","children":[]},{"level":4,"title":"修改后的对比预览图：","slug":"修改后的对比预览图-7","link":"#修改后的对比预览图-7","children":[]}]},{"level":2,"title":"9. 去掉底部内容（有原因的）","slug":"_9-去掉底部内容-有原因的","link":"#_9-去掉底部内容-有原因的","children":[{"level":4,"title":"修改后的对比预览图：","slug":"修改后的对比预览图-8","link":"#修改后的对比预览图-8","children":[]}]},{"level":2,"title":"10. 添加一个infuse播放器(3.9.2版本移植到官方内了)","slug":"_10-添加一个infuse播放器-3-9-2版本移植到官方内了","link":"#_10-添加一个infuse播放器-3-9-2版本移植到官方内了","children":[{"level":4,"title":"修改后的对比预览图：","slug":"修改后的对比预览图-9","link":"#修改后的对比预览图-9","children":[]}]},{"level":2,"title":"11. 修改一下搜索，变的更加匹配 ✅","slug":"_11-修改一下搜索-变的更加匹配-✅","link":"#_11-修改一下搜索-变的更加匹配-✅","children":[{"level":4,"title":"修改后的对比预览图：","slug":"修改后的对比预览图-10","link":"#修改后的对比预览图-10","children":[]}]},{"level":2,"title":"12.修改文件图标","slug":"_12-修改文件图标","link":"#_12-修改文件图标","children":[{"level":4,"title":"修改后的对比预览图：","slug":"修改后的对比预览图-11","link":"#修改后的对比预览图-11","children":[]}]},{"level":2,"title":"13.给后台登录的按钮添加颜色（可使用主颜色）","slug":"_13-给后台登录的按钮添加颜色-可使用主颜色","link":"#_13-给后台登录的按钮添加颜色-可使用主颜色","children":[{"level":4,"title":"使用主颜色","slug":"使用主颜色","link":"#使用主颜色","children":[]},{"level":4,"title":"用固定颜色","slug":"用固定颜色","link":"#用固定颜色","children":[]}]},{"level":2,"title":"14.修改默认为某\\"视图\\"方式","slug":"_14-修改默认为某-视图-方式","link":"#_14-修改默认为某-视图-方式","children":[{"level":4,"title":"修改后的对比预览图：","slug":"修改后的对比预览图-12","link":"#修改后的对比预览图-12","children":[]}]},{"level":2,"title":"15.修改PWA内容","slug":"_15-修改pwa内容","link":"#_15-修改pwa内容","children":[{"level":4,"title":"修改后的对比预览图：","slug":"修改后的对比预览图-13","link":"#修改后的对比预览图-13","children":[]}]},{"level":2,"title":"$ 修改后台地址和登录地址","slug":"修改后台地址和登录地址","link":"#修改后台地址和登录地址","children":[{"level":4,"title":"修改后的对比预览图：","slug":"修改后的对比预览图-14","link":"#修改后的对比预览图-14","children":[]}]}],"readingTime":{"minutes":18.86,"words":5658},"filePathRelative":"index/03-code.md","localizedDate":"2023年1月1日","autoDesc":true,"excerpt":"<!-- 你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。 -->\\n"}');export{P as comp,H as data};
