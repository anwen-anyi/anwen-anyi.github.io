import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as u,c as v,a as e,b as n,d as i,w as o,e as d}from"./app-DGLJcrI7.js";const h={},b=e("p",null,[e("strong",null,"Cadoor是什么?")],-1),m={href:"https://casdoor.org/zh/docs/overview",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"不多废话了我们直接开始编译",-1),p=e("br",null,null,-1),_=e("h2",{id:"编译cadoor前准备工作",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#编译cadoor前准备工作"},[e("span",null,[e("strong",null,"编译Cadoor前准备工作")])])],-1),f=e("p",null,[n("开发Cadoor需要使用 "),e("code",null,"Go > 1.17+"),n("，"),e("code",null,"Node.js ≥ 14&16"),n("，"),e("code",null,"Yarn 1.x"),n(" 版本")],-1),q={href:"https://classic.yarnpkg.com/en/docs/install",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/casdoor/casdoor/issues/294",target:"_blank",rel:"noopener noreferrer"},k={href:"https://git-scm.com/download/win",target:"_blank",rel:"noopener noreferrer"},C=e("div",{class:"language-git line-numbers-mode","data-ext":"git","data-title":"git"},[e("pre",{class:"language-git"},[e("code",null,`git clone https://github.com/casdoor/casdoor
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),E=e("p",null,[n("然后我们打开开发工具，我这里使用的开发工具是 "),e("strong",null,[n("VS Code "),e("sup",null,"(Visual_Studio_Code)")]),n(" ，如果你使用 "),e("strong",null,[n("GoLand"),e("sup",null,"(JetBrains)")]),n(" 也可以")],-1),S=e("br",null,null,-1),A=e("code",null,"Cadoor",-1),B={href:"https://casdoor.org/zh/docs/basic/server-installation#%E7%94%9F%E4%BA%A7%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,[n("我们这里是将"),e("code",null,"Cadoor"),n("接入到其他应用属于是生产环境吧，如果使用开发环境会缺少前端静态资源然后"),e("code",null,"404错误")],-1),y=e("p",null,[n("下面先构建一下"),e("code",null,"后端"),n("，我们再构建一下"),e("code",null,"前端")],-1),w=e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`go build
casdoor.exe
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),L=e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`go build
./casdoor
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),z=d(`<p>后端构建好了 我们来构建一下前端吧</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#先进入前端文件夹</span>
<span class="token builtin class-name">cd</span> web
<span class="token comment">#安装\`package.json\`里面我们所需要的包依赖</span>
<span class="token function">yarn</span> <span class="token function">install</span>
<span class="token comment">#构建前端</span>
<span class="token function">yarn</span> build
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>yarn install</code>安装我们所需要的依赖的时候有点儿慢，文件太多 我第一次构建这个包等待了30多分钟</p><p>所有的都下载完后有 <strong><code>130,752</code></strong> 个文件， <strong><code>13,201</code></strong> 个文件夹，文件大小 <strong>1GB</strong> ，所以构建的时间比较久</p><ul><li>Q：可能会有人好奇先构建后端，前端的文件会打包进去吗？</li><li>A：没问题的，我们把 <code> web/build/*</code> 这个文件夹带走就行,当然如果要带走的话还要我们的 <code>/conf/*</code>配置文件 <ul><li><code>conf</code>配置文件里面是一些我们要启动<code>casdoor</code>前的一些配置，例如数据库使用哪种,端口号 名字等具体的可以自己打开看看</li></ul></li></ul><br><p><mark>到这里你已经可以去使用<code>Casdoor</code>啦，下面是<code>Casdoor</code>的配置文件如果你知道如何修改可以不用看，如果不知道可以看看</mark></p><hr><h2 id="casdoor配置文件" tabindex="-1"><a class="header-anchor" href="#casdoor配置文件"><span><strong>casdoor配置文件</strong></span></a></h2><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>appname = casdoor
httpport = 8000
runmode = dev
copyrequestbody = true
driverName = mysql
dataSourceName = root:123123@tcp(localhost:3306)/
dbName = casdoor
tableNamePrefix =
showSql = false
redisEndpoint =
defaultStorageProvider = 
isCloudIntranet = false
authState = &quot;casdoor&quot;
socks5Proxy = &quot;127.0.0.1:10808&quot;
verificationCodeTimeout = 10
initScore = 2000
logPostOnly = true
origin =
staticBaseUrl = &quot;https://cdn.casbin.org&quot;
isDemoMode = false
batchSize = 100
ldapServerPort = 389
quota = {&quot;organization&quot;: -1, &quot;user&quot;: -1, &quot;application&quot;: -1, &quot;provider&quot;: -1}
logConfig = {&quot;filename&quot;: &quot;logs/casdoor.log&quot;, &quot;maxdays&quot;:99999, &quot;perm&quot;:&quot;0770&quot;}
initDataFile = &quot;./init_data.json&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),P=e("code",null,"8000端口",-1),V={href:"https://casdoor.org/zh/docs/basic/server-installation#%E9%80%9A%E8%BF%87-ini-%E6%96%87%E4%BB%B6%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},D=d(`<p>casdoor默认使用的是<strong>MySQL</strong>数据库，如果你也是使用<strong>MySQL</strong>可以按照以下格式填写,应该看得懂什么意思 实在不懂可以评论区问问</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>	......
driverName = mysql
dataSourceName = root:123123@tcp(localhost:3306)/
dbName = casdoor
	......
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你要使用<strong>Sqlite3</strong>，可以改成如下配置</p><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>	......
driverName = sqlite
dataSourceName = &quot;file:casdoor.db?cache=shared&quot;
dbName = casdoor
	......
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),F={href:"https://casdoor.org/zh/docs/basic/server-installation#%E6%95%B0%E6%8D%AE%E5%BA%93",target:"_blank",rel:"noopener noreferrer"},G=d(`<br><div class="language-conf line-numbers-mode" data-ext="conf" data-title="conf"><pre class="language-conf"><code>appname = casdoor
httpport = 8000
runmode = dev
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>8000端口</code>是后端应用程序正在监听的端口，也是你要接入的时候需要填写的</p><p>例如我们接入<code>AList</code>在单点登录选项,<code>SSO端点名称</code>就是我们要写的 http(s)://192.168.31.1:8000，写进AList单点登录配置的选项里面</p><ul><li>注:如果8000端口号和你的冲突你可以随便改</li><li>如果你嫌弃有端口号不方便，你可以将<code>8000</code>端口号进行反向代理，像AList那样反向代理把端口号去掉</li></ul><br><p>那里不清楚大家可以留言 会回复的。</p>`,7);function I(M,T){const s=t("ExternalLinkIcon"),r=t("Tabs");return u(),v("div",null,[b,e("p",null,[n("Cadoor是什么我这里就不说了，有需要的应该知道是什么，不知道的可以看看"),e("a",m,[n("Cadoor官网"),i(s)])]),g,p,_,f,e("p",null,[n("官网推荐使用 "),e("a",q,[n("Yarn 1.x"),i(s)]),n(" 运行 & Casdoor 前端，使用 NPM可能会导致UI 风格问题。 更多详细信息见： "),e("a",x,[n("Casdoor#294"),i(s)])]),e("p",null,[n("然后我们将开源代码下载下来，或者使用 "),e("a",k,[n("Git Bash"),i(s)]),n(" clone到本地")]),C,E,S,e("p",null,[n("我们根据"),A,n("的"),e("a",B,[n("文档"),i(s)]),n("来使用")]),N,y,i(r,{id:"38",data:[{id:"Windows"},{id:"Linux"}],"tab-id":"build"},{title0:o(({value:l,isActive:a})=>[n("Windows")]),title1:o(({value:l,isActive:a})=>[n("Linux")]),tab0:o(({value:l,isActive:a})=>[w]),tab1:o(({value:l,isActive:a})=>[L]),_:1}),z,e("p",null,[n("配置文件所有参数的作用我这里细说了,下面我只说一下如何配置数据库和"),P,n("是做什么的吧"),e("a",V,[n("详情查看Casdoor官网"),i(s)])]),D,e("p",null,[n("还有更多的数据库用法，有需要的可以前往"),e("a",F,[n("Casdoor官网"),i(s)]),n("看看")]),G])}const O=c(h,[["render",I],["__file","build.html.vue"]]);export{O as default};
