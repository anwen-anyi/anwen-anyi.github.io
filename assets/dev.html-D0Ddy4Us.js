import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e as n,o as e}from"./app-BW6x5ySB.js";const l="/img/sso/dev/cmd.png",t={};function h(p,s){return e(),a("div",null,s[0]||(s[0]=[n(`<h2 id="开发须知" tabindex="-1"><a class="header-anchor" href="#开发须知"><span><strong>开发须知</strong></span></a></h2><p>开发Cadoor需要使用 <code>Go &gt; 1.17+</code>，<code>Node.js ≥ 14&amp;16</code>，<code>Yarn 1.x</code> 版本</p><p>官网推荐使用 <a href="https://classic.yarnpkg.com/en/docs/install" target="_blank" rel="noopener noreferrer">Yarn 1.x</a> 运行 &amp; Casdoor 前端，使用 NPM可能会导致UI 风格问题。 更多详细信息见： <a href="https://github.com/casdoor/casdoor/issues/294" target="_blank" rel="noopener noreferrer">Casdoor#294</a></p><p>然后我们将开源代码下载下来，或者使用 <a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer">Git Bash</a> clone到本地</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="git" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/casdoor/casdoor</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>然后我们打开开发工具，我这里使用的开发工具是 <strong>VS Code <sup>(Visual_Studio_Code)</sup></strong> ，如果你使用 <strong>GoLand<sup>(JetBrains)</sup></strong> 也可以</p><hr><p>在正式开发前我们需要先配置一下<a href="#casdoor%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">配置文件</a>才能启动，最主要是配置以下数据库不然无法存放数据无法启动</p><h2 id="casdoor配置文件" tabindex="-1"><a class="header-anchor" href="#casdoor配置文件"><span><strong>casdoor配置文件</strong></span></a></h2><div class="language-bash line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="bash" data-title="conf" style="--vp-collapsed-lines:15;--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">appname</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> casdoor</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">httpport</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 8000</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">runmode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">copyrequestbody</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">driverName</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dataSourceName</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root:123123@tcp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">localhost:3306</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dbName</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> casdoor</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tableNamePrefix</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">showSql</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">redisEndpoint</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">defaultStorageProvider</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">isCloudIntranet</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">authState</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;casdoor&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">socks5Proxy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;127.0.0.1:10808&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">verificationCodeTimeout</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 10</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">initScore</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2000</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">logPostOnly</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">origin</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">staticBaseUrl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;https://cdn.casbin.org&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">isDemoMode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> false</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">batchSize</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 100</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ldapServerPort</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 389</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">quota</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {&quot;organization&quot;:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;user&quot;:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;application&quot;:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -1,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;provider&quot;:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">logConfig</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> {&quot;filename&quot;:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;logs/casdoor.log&quot;,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;maxdays&quot;:99999,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;perm&quot;:&quot;0770&quot;}</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">initDataFile</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;./init_data.json&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>配置文件所有参数的作用我这里细说了,下面我只说一下如何配置数据库和<code>8000端口</code>是做什么的吧<a href="https://casdoor.org/zh/docs/basic/server-installation#%E9%80%9A%E8%BF%87-ini-%E6%96%87%E4%BB%B6%E9%85%8D%E7%BD%AE" target="_blank" rel="noopener noreferrer">详情查看Casdoor官网</a></p><p>casdoor默认使用的是<strong>MySQL</strong>数据库，如果你也是使用<strong>MySQL</strong>可以按照以下格式填写,应该看得懂什么意思 实在不懂可以评论区问问</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">	......</span></span>
<span class="line highlighted"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">driverName</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> mysql</span></span>
<span class="line highlighted"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dataSourceName</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root:123123@tcp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">localhost:3306</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/</span></span>
<span class="line highlighted"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dbName</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> casdoor</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">	......</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你要使用<strong>Sqlite3</strong>，可以改成如下配置</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">	......</span></span>
<span class="line highlighted"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">driverName</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> sqlite</span></span>
<span class="line highlighted"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dataSourceName</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;file:casdoor.db?cache=shared&quot;</span></span>
<span class="line highlighted"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dbName</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> casdoor</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">	......</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还有更多的数据库用法，有需要的可以前往<a href="https://casdoor.org/zh/docs/basic/server-installation#%E6%95%B0%E6%8D%AE%E5%BA%93" target="_blank" rel="noopener noreferrer">Casdoor官网</a>看看</p><br><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="conf" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">appname</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> casdoor</span></span>
<span class="line highlighted"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">httpport</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 8000</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">runmode</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>8000端口</code>是后端应用程序正在监听的端口，也是你要接入的时候需要填写的</p><p>例如我们接入<code>AList</code>在单点登录选项,<code>SSO端点名称</code>就是我们要写的 http(s)://192.168.31.1:8000，写进AList单点登录配置的选项里面</p><ul><li>注:如果8000端口号和你的冲突你可以随便改</li></ul><p>配置文件配置的差不多了我们直接去启动一下吧</p><h4 id="先启动后端" tabindex="-1"><a class="header-anchor" href="#先启动后端"><span><strong>先启动后端</strong></span></a></h4><p>默认是<code>8000</code>端口号的喔~不多说了</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">PS</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> casdoo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">r&gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">go</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\m</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">ain.go</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Socks5</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> proxy</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enabled:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 127.0.0.1:10808</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">2023/05/22</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> xx:xx:xx</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Listening</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> on</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 0.0.0.0:389</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">2023/05/22</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> xx:xx:xx.382</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [I]  http server Running on http://:8000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="再启动前端" tabindex="-1"><a class="header-anchor" href="#再启动前端"><span>再启动前端</span></a></h4><p>由于我们直接在<code>Casdoor</code>接入第三方应用属于开发模式了，否则直接接入会<code>404</code>错误，所以我们启动前端的时候要多一步</p><p>记得再打开一个命令窗口在输入命令哦</p><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#进入前端文件夹</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> web</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#下载package.json 包所需要的依赖</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#构建前端静态资源</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">#启动Casdoor</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>yarn install</code>安装我们所需要的依赖的时候有点儿慢，文件太多 我第一次构建这个包等待了<mark>30多分钟</mark></p><p>所有的都下载完后有 <strong><code>130,752</code></strong> 个文件， <strong><code>13,201</code></strong> 个文件夹，文件大小 <strong>1GB</strong> ，所以构建的时间比较久</p><p>输入<code>yarn start</code>启动后等待一会儿，就会自动打开一个浏览器 <a href="http://localhost:7001/" target="_blank" rel="noopener noreferrer">http://localhost:7001/</a></p><ul><li>开发模式我们在浏览器需要使用<code>7001</code>端口号才能访问（推荐使用生产模式来）</li></ul><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Compiled</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> successfully!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">You</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> can</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> now</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> view</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> web</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> browser.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  Local:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">            http://localhost:7001</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  On</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Your</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Network:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  http://192.168.137.1:7001</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Note</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> that</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> the</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> development</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> is</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> not</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> optimized.</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">To</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> production</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build,</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> use</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> yarn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">webpack</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> compiled</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> successfully</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里基本上结束了，可以去愉快的给<code>应用</code>接入登录了</p><br><p>那里不清楚大家可以留言 会回复的。</p>`,38)]))}const d=i(t,[["render",h],["__file","dev.html.vue"]]),o=JSON.parse('{"path":"/index/build/sso/dev.html","title":"在线调试Cadoor","lang":"zh-CN","frontmatter":{"title":"在线调试Cadoor","icon":"fa-solid fa-rectangle-terminal","order":122,"author":"安稳","date":"2023-01-01T00:00:00.000Z","category":["使用指南"],"tag":["自己编译","Dev","在线调试","Cadoor"],"sticky":true,"star":true,"headerDepth":6,"collapsible":false,"description":"开发须知 开发Cadoor需要使用 Go > 1.17+，Node.js ≥ 14&16，Yarn 1.x 版本 官网推荐使用 Yarn 1.x 运行 & Casdoor 前端，使用 NPM可能会导致UI 风格问题。 更多详细信息见： Casdoor#294 然后我们将开源代码下载下来，或者使用 Git Bash clone到本地 然后我们打开开发工具...","head":[["meta",{"property":"og:url","content":"https://anwen-anyi/anwen-anyi.github.io/index/build/sso/dev.html"}],["meta",{"property":"og:site_name","content":"安安稳稳"}],["meta",{"property":"og:title","content":"在线调试Cadoor"}],["meta",{"property":"og:description","content":"开发须知 开发Cadoor需要使用 Go > 1.17+，Node.js ≥ 14&16，Yarn 1.x 版本 官网推荐使用 Yarn 1.x 运行 & Casdoor 前端，使用 NPM可能会导致UI 风格问题。 更多详细信息见： Casdoor#294 然后我们将开源代码下载下来，或者使用 Git Bash clone到本地 然后我们打开开发工具..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://anwen-anyi/anwen-anyi.github.io/img/sso/dev/cmd.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-03T13:16:30.000Z"}],["meta",{"property":"article:author","content":"安稳"}],["meta",{"property":"article:tag","content":"自己编译"}],["meta",{"property":"article:tag","content":"Dev"}],["meta",{"property":"article:tag","content":"在线调试"}],["meta",{"property":"article:tag","content":"Cadoor"}],["meta",{"property":"article:published_time","content":"2023-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-03T13:16:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在线调试Cadoor\\",\\"image\\":[\\"https://anwen-anyi/anwen-anyi.github.io/img/sso/dev/cmd.png\\"],\\"datePublished\\":\\"2023-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-03T13:16:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"安稳\\"}]}"]]},"headers":[{"level":2,"title":"开发须知","slug":"开发须知","link":"#开发须知","children":[]},{"level":2,"title":"casdoor配置文件","slug":"casdoor配置文件","link":"#casdoor配置文件","children":[{"level":4,"title":"先启动后端","slug":"先启动后端","link":"#先启动后端","children":[]},{"level":4,"title":"再启动前端","slug":"再启动前端","link":"#再启动前端","children":[]}]}],"git":{"createdTime":1684742198000,"updatedTime":1691068590000,"contributors":[{"name":"AnWen-anyi","username":"AnWen-anyi","email":"anwen_anyi@foxmail.com","commits":2,"url":"https://github.com/AnWen-anyi"}]},"readingTime":{"minutes":2.06,"words":619},"filePathRelative":"index/build/sso/dev.md","localizedDate":"2023年1月1日","autoDesc":true}');export{d as comp,o as data};
