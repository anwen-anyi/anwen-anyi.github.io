import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as d,e as l,d as a,a as n,b as s,f as i}from"./app-b6ab6930.js";const u="/img/build/build02.jpeg",g="/img/build/build01.jpeg",b="/img/build/build03.gif",h="/img/build/build04.gif",m="/img/build/build05.gif",v="/img/build/build06.png",k="/img/build/build07.png",f="/img/build/build08.png",_="/img/build/build09.png",x="/img/build/build10.gif",w="/img/build/build11.gif",q="/img/build/build12.gif",y="/img/build/build13.png",z="/img/build/build14.png",$="/img/build/build15.png",B="/img/build/build16.png",N="/img/build/build17.png",C="/img/build/build18.png",G="/img/build/build19.png",V="/img/build/build20.png",A="/img/build/build21.png",X="/img/build/build22.png",O={},j=i('<p>有的小伙伴想着自己编译一下 Alist 不管是出于自己想折腾还是自己想改改源码哩.大家都可以编译~ (๑•́₃ •)</p><h2 id="一、windows版本编译教程" tabindex="-1"><a class="header-anchor" href="#一、windows版本编译教程" aria-hidden="true">#</a> 一、Windows版本编译教程</h2><h2 id="_1-编译前准备" tabindex="-1"><a class="header-anchor" href="#_1-编译前准备" aria-hidden="true">#</a> 1.编译前准备</h2><h3 id="_1-1-编译视频版教程" tabindex="-1"><a class="header-anchor" href="#_1-1-编译视频版教程" aria-hidden="true">#</a> 1.1 编译视频版教程</h3>',4),T=n("h3",{id:"_1-2-编译之前的前提条件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-2-编译之前的前提条件","aria-hidden":"true"},"#"),s(" 1.2 编译之前的前提条件")],-1),I={href:"https://github.com/alist-org/alist/blob/main/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},E=n("p",null,"编译Alist Go竟然需要 1.19+了...呜呜呜",-1),R=n("p",null,"我没记错前几个月才升级了1.18+...升级真快(´◔‸◔')”",-1),L=n("p",null,[n("strong",null,"编译之前我们需要先准备安装好以下软件:")],-1),D={href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"},W=n("strong",null,"git",-1),F={href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"},H=n("strong",null,"golang 1.19+",-1),P={href:"https://gcc.gnu.org/",target:"_blank",rel:"noopener noreferrer"},U=n("strong",null,"gcc",-1),Y={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},M=n("strong",null,"nodejs",-1),S={href:"https://www.npmjs.com/package/pnpm",target:"_blank",rel:"noopener noreferrer"},J=n("strong",null,"pnpm",-1),K=i(`<p>以上安装过程我就不赘述了...<strong>（安装问题都解决不了的话编译也够呛）</strong></p><p>以上软件安装好后我们先把 <strong>Go的代理改为国内</strong> 的..</p><p>安装好Golang后并且也将 &quot;<strong>环境变量&quot;</strong> 配置好，然后win+R 输入CMD打开DDos黑窗口(这里是用的Windows)</p><p>根据自己的配置输入：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>go <span class="token function">env</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct      // Windows
<span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct         // macOS 或 Linux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将代理改为国内,不然编译时会出错,前人血泪史之一... <strong>（踩坑一号）</strong></p><p><strong>然后我们改好后看看生效没有：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CMD黑窗口输入go env查看（需要配置好环境变量哦先）

安装好默认的是：
<span class="token builtin class-name">set</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span><span class="token string">&quot;https://proxy.golang.org,direct&quot;</span>
修改代理后是
<span class="token builtin class-name">set</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.cn,direct
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>反正不管他默认的是啥，改就完事了！！！</strong></p><p><strong>以上就是编译前需要的准备 安装好5个软件，改一下代理 ..不难吧(ฅ&#39;ω&#39;ฅ)</strong></p><h3 id="_1-3-编译前端前准备" tabindex="-1"><a class="header-anchor" href="#_1-3-编译前端前准备" aria-hidden="true">#</a> 1.3 编译前端前准备</h3>`,11),Q=n("strong",null,"编译前我们看看文档怎么编译",-1),Z={href:"https://github.com/alist-org/alist/blob/main/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},nn=i('<figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我们需要编译前肯定是要先克隆一下<strong>前端</strong>和<strong>后端</strong>的代码（clone）</p><p>执行图上的两行命令在我们安装的 <strong>git</strong> 终端里面</p><figure><img src="'+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>你克隆到任意地方都行建议放到一个文件夹里面去,这样我们修改的时候也方便</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>alist.git是后端，alist-web.git是前端
无代理
<span class="token function">git</span> clone https://github.com/alist-org/alist.git
<span class="token function">git</span> clone --recurse-submodules https://github.com/alist-org/alist-web.git

代理 - （大白提供）
<span class="token function">git</span> clone https://hub.cooluc.com/alist-org/alist.git
<span class="token function">git</span> clone --recurse-submodules https://hub.cooluc.com/alist-org/alist-web.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前后端 拉取/克隆(clone)好了</p><p>但是我们拉取/克隆(clone)下来的前端里面只有一个 默认的英文语言文件</p><p>我们还需要去下载一个带中文的语言文件</p><h3 id="_1-4-手动下载语言包地址" tabindex="-1"><a class="header-anchor" href="#_1-4-手动下载语言包地址" aria-hidden="true">#</a> 1.4 手动下载语言包地址</h3>`,10),sn={href:"https://crowdin.com/project/alist/zh-CN",target:"_blank",rel:"noopener noreferrer"},an=n("p",null,"这里是手动下载，还有命令自动下的哪个我没研究明白...害,卡了好几天了这个语言文件..",-1),en=n("figure",null,[n("img",{src:b,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),tn=n("figure",null,[n("img",{src:h,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),on=n("h3",{id:"_1-5-直接下载语言包直链",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-5-直接下载语言包直链","aria-hidden":"true"},"#"),s(" 1.5 直接下载语言包直链：")],-1),ln={href:"https://crowdin.com/backend/download/project/alist/zh-CN.zip",target:"_blank",rel:"noopener noreferrer"},rn=i(`<p>上面的语言文件放进去后我们去终端里面输入命令：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code>node ./scripts/i18n.mjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行完毕语言里面会出现一个 <strong>entry.ts</strong> 的文件，这样我们就可以用了</p><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>以上软件安装并且配置好环境变量了，Go 代理设置好了，语言包文件下载好了 ，我们编译前准备工作就可以了</p><h2 id="_2-编译前端" tabindex="-1"><a class="header-anchor" href="#_2-编译前端" aria-hidden="true">#</a> 2.编译前端</h2><p>首先CD进入 <strong><code>alist-web</code></strong> 前端文件夹内，</p><p>然后输入 <strong>pnpm install</strong> 将 <strong>node_modules</strong> （包管理工具下载安装的包的文件夹），下载下来，</p><p>别问问什么不用 <strong>npm</strong> 要用 <strong>pnpm</strong> ...问就是用 <strong>pnpm</strong> 就完了...这个也是血的教训.. <strong>%&gt;_&lt;% <sup>（踩坑2号）</sup></strong></p><p>中间自己改源码的过程就不演示了，自己想怎么改就怎怎么改</p><p>改完了 执行如下命令将前端文件进行编译： <strong><code>pnpm build</code></strong> <strong><code>npm run build</code></strong> 这两个二选一都行</p>',11),pn=i('<figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-1-编译前端期间可能会遇到的问题" tabindex="-1"><a class="header-anchor" href="#_2-1-编译前端期间可能会遇到的问题" aria-hidden="true">#</a> 2.1 编译前端期间可能会遇到的问题</h3><h4 id="输入pnpm-install会报错-三号坑" tabindex="-1"><a class="header-anchor" href="#输入pnpm-install会报错-三号坑" aria-hidden="true">#</a> 输入<code>pnpm install</code>会报错 <sup>(三号坑)</sup></h4><h4 id="如果你输入-pnpm-install-出现如下图中的错误" tabindex="-1"><a class="header-anchor" href="#如果你输入-pnpm-install-出现如下图中的错误" aria-hidden="true">#</a> 如果你输入 pnpm install 出现如下图中的错误</h4><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="上述报错中的解决方案" tabindex="-1"><a class="header-anchor" href="#上述报错中的解决方案" aria-hidden="true">#</a> 上述报错中的解决方案</h4><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果没出现上述的错误能正常编译 忽略即可！</p><h4 id="输入-pnpm-install-会报错-四号坑" tabindex="-1"><a class="header-anchor" href="#输入-pnpm-install-会报错-四号坑" aria-hidden="true">#</a> 输入 pnpm install 会报错 (四号坑)</h4><h4 id="如果你输入-pnpm-install-出现如下图中的错误-1" tabindex="-1"><a class="header-anchor" href="#如果你输入-pnpm-install-出现如下图中的错误-1" aria-hidden="true">#</a> 如果你输入 pnpm install 出现如下图中的错误</h4><figure><img src="'+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>上述问题的问题所在以及解决方案</strong></p><p>问题所在</p><ul><li><p>看看你前端的 <strong><code> solid-router</code></strong> 这个文件夹里面是不是空的..估计是空的</p></li><li><p>下载前端的时候没有带 <code>--recurse-submodules</code> 参数导致附属的文件没有下载下来</p></li></ul><p>解决方案</p><ul><li>下载前端带上 <code>--recurse-submodules</code> 参数去下载</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>无代理
<span class="token function">git</span> clone --recurse-submodules https://github.com/alist-org/alist-web.git

代理 - （大白提供）
<span class="token function">git</span> clone --recurse-submodules https://hub.cooluc.com/alist-org/alist-web.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-编译后端" tabindex="-1"><a class="header-anchor" href="#_3-编译后端" aria-hidden="true">#</a> 3.编译后端</h2><ol><li>在前端编译好后我们就会看到一个 <strong><code>&quot;dist&quot;</code></strong> 的文件夹</li><li>我们移动一下把 <strong><code>&quot;dist&quot;</code></strong> 目录移动到的后端的 <strong><code>&quot;public&quot;</code></strong> 目录里面去即可</li><li>虽然里面已经有了一个 <strong>&quot;dist&quot;</strong> 文件夹，不用管直接覆盖</li></ol><figure><img src="`+x+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>将编译好的前端移文件动到后端里面去，准备编译</p><p><strong>&quot;dist&quot;</strong> 目录移动到 <strong><code>&quot;public&quot;</code></strong> 去之后，我们就可以编译了（如果有改代码的需求自己改完再编译）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">appName</span><span class="token operator">=</span><span class="token string">&quot;alist&quot;</span>
<span class="token assign-left variable">builtAt</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">&#39;%F %T %z&#39;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token assign-left variable">goVersion</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>go version <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/go version //&#39;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">gitAuthor</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> show <span class="token parameter variable">-s</span> <span class="token parameter variable">--format</span><span class="token operator">=</span><span class="token string">&#39;format:%aN &lt;%ae&gt;&#39;</span> HEAD<span class="token variable">)</span></span>
<span class="token assign-left variable">gitCommit</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%h&quot;</span> <span class="token parameter variable">-1</span><span class="token variable">)</span></span>
<span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> describe <span class="token parameter variable">--long</span> <span class="token parameter variable">--tags</span> <span class="token parameter variable">--dirty</span> <span class="token parameter variable">--always</span><span class="token variable">)</span></span>
<span class="token assign-left variable">webVersion</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">wget</span> -qO- <span class="token parameter variable">-t1</span> <span class="token parameter variable">-T2</span> <span class="token string">&quot;https://api.github.com/repos/alist-org/alist-web/releases/latest&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;tag_name&quot;</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/\\&quot;//g;s/,//g;s/ //g&#39;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">ldflags</span><span class="token operator">=</span><span class="token string">&quot;\\
-w -s \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.BuiltAt=<span class="token variable">$builtAt</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.GoVersion=<span class="token variable">$goVersion</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.GitAuthor=<span class="token variable">$gitAuthor</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.GitCommit=<span class="token variable">$gitCommit</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.Version=<span class="token variable">$version</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.WebVersion=<span class="token variable">$webVersion</span>&#39; \\
&quot;</span>
go build <span class="token parameter variable">-ldflags</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$ldflags</span>&quot;</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有人看到这么一大坨这怎么执行...我们可以创建一个 &quot; <strong>.sh</strong>&quot; 后缀的文件，然后把这一坨复制粘贴进去即可</p><p>‪如果怕自己创建的 <strong>.sh</strong> 后缀 文件不能用我们可以复制粘贴一个已经有的然后把里面的内容替换了即可</p><h3 id="_3-1-演示创建-sh" tabindex="-1"><a class="header-anchor" href="#_3-1-演示创建-sh" aria-hidden="true">#</a> 3.1 <a href="#_3-1-%E6%BC%94%E7%A4%BA%E5%88%9B%E5%BB%BA-sh">演示创建.sh</a></h3><figure><img src="`+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',27),cn=n("strong",null,"可以直接双击执行",-1),dn={href:"http://run.sh",target:"_blank",rel:"noopener noreferrer"},un=n("strong",null,"（可能大概需要1-2分钟）",-1),gn=i('<p>我这里的Windows自然是.exe后缀的，如果是Linux，那肯定出现的是二进制文件</p><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>‪好了，以上教程就是本次编译的教程啦... 想折腾的自己折腾吧...有想试试的 可以试试看...<strong>(‾◡◝)</strong></p><h2 id="二、linux版本编译教程" tabindex="-1"><a class="header-anchor" href="#二、linux版本编译教程" aria-hidden="true">#</a> 二、Linux版本编译教程</h2><h2 id="_1-编译前准备-1" tabindex="-1"><a class="header-anchor" href="#_1-编译前准备-1" aria-hidden="true">#</a> 1. 编译前准备</h2><h3 id="_1-1-编译前说明" tabindex="-1"><a class="header-anchor" href="#_1-1-编译前说明" aria-hidden="true">#</a> 1.1 编译前说明</h3><p>编译Linux版本教程我们使用 <code>GitHub code space</code> 来演示</p><p>原本我们需要安装 <strong><code>git nodejs pnpm gcc golang 1.19+</code></strong> 这些软件并且配置环境的，</p><p>但是呢code space帮我们已经配置好了，不用我们手动安装了 挺好的<sub>（对于想自己编译，但是不会安装环境的简直美滋滋</sub>~~~）</p><p>而且Go代理都不用换成国内的~我们直接进行克隆代码开始编译吧</p>',10),bn={href:"https://github.com/codespaces/templates",target:"_blank",rel:"noopener noreferrer"},hn=n("strong",null,"Build software better, together",-1),mn=n("figure",null,[n("img",{src:y,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),vn=n("h3",{id:"_1-2-首先先把前后端代码克隆下来",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-2-首先先把前后端代码克隆下来","aria-hidden":"true"},"#"),s(" 1.2 首先先把前后端代码克隆下来")],-1),kn={href:"https://github.com/alist-org/alist.git",target:"_blank",rel:"noopener noreferrer"},fn={href:"https://github.com/alist-org/alist-web.git",target:"_blank",rel:"noopener noreferrer"},_n=i('<ol><li><strong>找不到输入的终端在哪里......</strong></li><li><img src="'+z+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li></ol><h3 id="_1-3-然后安装-pnpm" tabindex="-1"><a class="header-anchor" href="#_1-3-然后安装-pnpm" aria-hidden="true">#</a> 1.3 然后安装 pnpm</h3><p>使用npm安装pnpm 输入 <strong>npm install -g pnpm</strong> 执行安装</p><p>如果出现 <code>xxxxxx 317</code> 是内存不够导致的</p><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>@anwen-anyi ➜ <span class="token operator">/</span>workspaces/codespaces-blank $ npm install <span class="token operator">-</span>g pnpm

added 1 package<span class="token punctuation">,</span> and audited 2 packages in 2s

1 package is looking <span class="token keyword">for</span> funding
  run \`npm fund\` <span class="token keyword">for</span> details

found 0 vulnerabilities
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-下载语言文件并且初始化" tabindex="-1"><a class="header-anchor" href="#_1-4-下载语言文件并且初始化" aria-hidden="true">#</a> 1.4 下载语言文件并且初始化</h3><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>cd alist-web 
wget https:<span class="token operator">/</span><span class="token operator">/</span>crowdin<span class="token punctuation">.</span>com/backend/download/project/alist/zh-CN<span class="token punctuation">.</span>zip 
unzip zh-CN<span class="token punctuation">.</span>zip 
node <span class="token punctuation">.</span><span class="token operator">/</span>scripts/i18n<span class="token punctuation">.</span>mjs
<span class="token function">rm</span> zh-CN<span class="token punctuation">.</span>zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码说明（应该都懂吧）：</p><ol><li>进入前端文件夹里面</li><li>下载中文语言包</li><li>解压</li><li>初始化一下语言包，不然无法使用</li><li>删除语言包压缩包</li></ol><h4 id="安装项目所有依赖-同时编译前端文件" tabindex="-1"><a class="header-anchor" href="#安装项目所有依赖-同时编译前端文件" aria-hidden="true">#</a> 安装项目所有依赖，同时编译前端文件</h4><p><strong>中间修改代码的过程就不说了，大家就当我已经修改好了就行 嘿嘿~我们直接编译</strong></p><h2 id="_2-编译前端-1" tabindex="-1"><a class="header-anchor" href="#_2-编译前端-1" aria-hidden="true">#</a> 2.编译前端</h2><p>输入 <code>pnpm install &amp;&amp; pnpm run build</code> 编译前端，</p><p>也可以分开运行，先执行 <code>pnpm install</code>再执行 <code>pnpm run build</code></p><p>我是一起执行了（看你自己呗~）</p><figure><img src="`+$+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3-编译后端-1" tabindex="-1"><a class="header-anchor" href="#_3-编译后端-1" aria-hidden="true">#</a> 3.编译后端</h2><h3 id="_3-1-编译后端前准备" tabindex="-1"><a class="header-anchor" href="#_3-1-编译后端前准备" aria-hidden="true">#</a> 3.1 编译后端前准备</h3><p>先将编译好的前端文件，移动到后端目录里面，再进行编译</p><ol><li><strong>手动</strong>将前端里面的dist文件夹，移动到后端public文件夹</li><li>或者<strong>使用命令</strong>将前端里面的dist文件夹，移动到后端public文件夹</li></ol><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">cp</span> <span class="token operator">-</span>r <span class="token operator">/</span>workspaces/codespaces-blank/alist-web/dist <span class="token operator">/</span>workspaces/codespaces-blank/alist/public/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上方法自己二选一</p><h3 id="_3-2-开始编译" tabindex="-1"><a class="header-anchor" href="#_3-2-开始编译" aria-hidden="true">#</a> 3.2 开始编译</h3><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>appName=<span class="token string">&quot;alist&quot;</span>
builtAt=<span class="token string">&quot;<span class="token function">$<span class="token punctuation">(</span>date <span class="token operator">+</span><span class="token string">&#39;%F %T %z&#39;</span><span class="token punctuation">)</span></span>&quot;</span>
goVersion=$<span class="token punctuation">(</span>go version <span class="token punctuation">|</span> sed <span class="token string">&#39;s/go version //&#39;</span><span class="token punctuation">)</span>
gitAuthor=$<span class="token punctuation">(</span>git show <span class="token operator">-</span>s <span class="token operator">--</span>format=<span class="token string">&#39;format:%aN &lt;%ae&gt;&#39;</span> HEAD<span class="token punctuation">)</span>
gitCommit=$<span class="token punctuation">(</span>git log <span class="token operator">--</span>pretty=format:<span class="token string">&quot;%h&quot;</span> <span class="token operator">-</span>1<span class="token punctuation">)</span>
version=$<span class="token punctuation">(</span>git describe <span class="token operator">--</span>long <span class="token operator">--</span>tags <span class="token operator">--</span>dirty <span class="token operator">--</span>always<span class="token punctuation">)</span>
webVersion=$<span class="token punctuation">(</span>wget <span class="token operator">-</span>qO- <span class="token operator">-</span>t1 <span class="token operator">-</span>T2 <span class="token string">&quot;https://api.github.com/repos/alist-org/alist-web/releases/latest&quot;</span> <span class="token punctuation">|</span> grep <span class="token string">&quot;tag_name&quot;</span> <span class="token punctuation">|</span> head <span class="token operator">-</span>n 1 <span class="token punctuation">|</span> awk <span class="token operator">-</span>F <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token punctuation">|</span> sed <span class="token string">&#39;s/\\&quot;//g;s/,//g;s/ //g&#39;</span><span class="token punctuation">)</span>
ldflags=<span class="token string">&quot;\\
-w -s \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.BuiltAt=<span class="token variable">$builtAt</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.GoVersion=<span class="token variable">$goVersion</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.GitAuthor=<span class="token variable">$gitAuthor</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.GitCommit=<span class="token variable">$gitCommit</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.Version=<span class="token variable">$version</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.WebVersion=<span class="token variable">$webVersion</span>&#39; \\
&quot;</span>
go build <span class="token operator">-</span>ldflags=<span class="token string">&quot;<span class="token variable">$ldflags</span>&quot;</span> <span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把上面的代码复制粘贴进去</p><figure><img src="`+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>粘贴进去后，他会像下面这个图这样，</p><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>粘贴好了开始执行，稍等1-2分钟就会好，第一次可能会比较慢（1-2分钟），再编译就快了</p><figure><img src="'+C+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>编译好后我们左侧里面就会看到我们编译好的二进制 文件</p><figure><img src="'+G+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-3-编译结束" tabindex="-1"><a class="header-anchor" href="#_3-3-编译结束" aria-hidden="true">#</a> 3.3 编译结束</h3><p>我们去看看能不能用吧</p><p>我们先手动把这个新编译好的 alist 二进制文件移动出去，不然在这里看着怪乱糟糟的到时候，而且我们后面还有用哩~</p><p>先授权<code>chmod +x alist</code></p><figure><img src="'+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>看到右下角的 按钮了吗，在浏览器中打开，不过这个属于私人的，会效验GitHub账号和你的这个是不是匹配的.</p><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>打开后看到了我们熟悉的界面，后面我就不展示了。没有问题</p><figure><img src="'+X+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Linux 二进制的编译就到这里结束啦~ 有兴趣的小伙伴可以去试试啦~</p><p>关于如何交叉编译（Linux编译Windows和mac的）在研究中.......</p>',43);function xn(wn,qn){const r=t("BiliBili"),e=t("ExternalLinkIcon"),o=t("Badge");return c(),d("div",null,[l(" 你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。 "),l(" more "),j,a(r,{bvid:"BV1ye4y1m7e1"}),T,n("p",null,[s("大家可以看一下这里需要啥："),n("a",I,[s("https://github.com/alist-org/alist/blob/main/CONTRIBUTING.md"),a(e)])]),E,R,L,n("ol",null,[n("li",null,[n("a",D,[W,a(e)])]),n("li",null,[n("a",F,[H,a(e)])]),n("li",null,[n("a",P,[U,a(e)])]),n("li",null,[n("a",Y,[M,a(e)])]),n("li",null,[n("a",S,[J,a(e)])])]),K,n("p",null,[Q,s("："),n("a",Z,[s("https://github.com/alist-org/alist/blob/main/CONTRIBUTING.md"),a(e)])]),nn,n("p",null,[n("strong",null,[n("a",sn,[s("https://crowdin.com/project/alist/zh-CN"),a(e)])])]),an,en,tn,on,n("p",null,[n("strong",null,[n("a",ln,[s("https://crowdin.com/backend/download/project/alist/zh-CN.zip"),a(e)])])]),rn,n("p",null,[s("编译好后，会看到一个叫 "),a(o,{text:"dist",type:"info"}),s(" 的文件夹，这个就是我们编译好的内容一会我们移动到后端里面去")]),pn,n("p",null,[s("我们创建好了，"),cn,s("，或者在命令行运行 这个我们刚刚修改的 "),n("strong",null,[n("a",dn,[s("run.sh"),a(e)])]),s(" 文件也行")]),n("p",null,[s("运行好了 "),un,s(" 目录里面会出现一个"),a(o,{text:"alist.exe",type:"info"}),s(" 的文件 这就是编译好了")]),gn,n("p",null,[s("打开"),n("a",bn,[hn,a(e)]),s("创建一个空白模板即可")]),mn,vn,n("ul",null,[n("li",null,[s("后端："),n("strong",null,[s("git clone "),n("a",kn,[s("https://github.com/alist-org/alist.git"),a(e)])])]),n("li",null,[s("前端："),n("strong",null,[s("git clone --recurse-submodules "),n("a",fn,[s("https://github.com/alist-org/alist-web.git"),a(e)])])])]),_n])}const $n=p(O,[["render",xn],["__file","08-build.html.vue"]]);export{$n as default};