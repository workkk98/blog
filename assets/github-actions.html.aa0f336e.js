import{r as t,o as p,c as o,a as n,b as e,F as l,e as c,d as s}from"./app.3c7f3972.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";var u="/blog/assets/workflow.d5b068bd.png",i="/blog/assets/env-variable.925eb925.png";const k={},b=c('<h1 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> github actions</h1><p>\u6700\u8FD1\u53C8\u60F3\u91CD\u65B0\u628A\u4E2A\u4EBA\u535A\u5BA2\u7ED9\u6361\u4E86\u56DE\u6765\uFF0C\u4E0E\u4E4B\u524D\u4E0D\u540C\u7684\u662F\u6211\u8FD9\u6B21\u60F3\u6709\u4E00\u4E2A\u81EA\u52A8\u5316\u7684\u90E8\u7F72\u6D41\u7A0B\uFF08\u4E4B\u524D\u4E5F\u662F\u6CA1\u6709CI/CD\u6240\u4EE5\u653E\u5F03\u4E86\uFF09\u3002\u501F\u7740\u8FD9\u4E2A\u673A\u4F1A\uFF0C\u6211\u6574\u7406\u4E86\u4E0B\u5173\u4E8Egithub actions\u7684\u4E00\u4E9B\u7528\u6CD5\u3002</p><h3 id="\u4E00\u4E9B\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u6982\u5FF5" aria-hidden="true">#</a> \u4E00\u4E9B\u6982\u5FF5</h3><ul><li><p>workflow\u7684\u6A21\u578B\uFF1A\u901A\u8FC7\u4E8B\u4EF6\u9A71\u52A8\uFF0C\u6267\u884C\u591A\u4E2A\u4EFB\u52A1\uFF08job\uFF09\u3002 <img src="'+u+`" alt="workflow"></p></li><li><p>\u4EFB\u52A1\u4E4B\u95F4\u53EF\u4EE5\u662F\u4E32\u884C\uFF0C\u6216\u662F\u5E76\u884C\u3002\u53E6\u5916\u4EFB\u52A1\u4E2D\u53EF\u4EE5\u6709\u591A\u6761step\u3002</p></li></ul><p>\u6574\u4E2A\u6D41\u7A0B\u5C31\u662F\u4E8B\u4EF6\u89E6\u53D1workflow\u3002workflow\u4E2D\u7684\u4F1A\u6709\u591A\u4E2A\u4EFB\u52A1\uFF08\u{1F330}\uFF1A\u81EA\u52A8\u5316\u6D4B\u8BD5\u3001\u81EA\u52A8\u5316\u90E8\u7F72\uFF09\uFF0C\u6BCF\u4E2A\u4EFB\u52A1\u4E2D\u4F1A\u6709\u591A\u4E2Aactions\uFF0C\u8FD9\u4E9Bactions\u53EF\u80FD\u662F\u591A\u6761\u547D\u4EE4\u7684\u96C6\u5408\u3002</p><ul><li><p>runner\uFF1A\u5728\u4E00\u6B21workflow\u4E2D\uFF0C\u53EF\u4EE5\u6307\u5B9A\u591A\u4E2A\u4EFB\u52A1\u3002\u6BCF\u4E2A\u4EFB\u52A1\u4E5F\u53EF\u4EE5\u6307\u5B9A\u81EA\u5DF1\u7684\u6267\u884C\u5668\u4E5F\u5C31\u662Frunner</p></li><li><p>steps\uFF1A\u6BCF\u4E2A\u6B65\u9AA4\u53EF\u4EE5\u662F\u4E00\u4E2A\u811A\u672C\u547D\u4EE4\uFF0C\u6216\u662F\u4E00\u4E2Aactions\uFF08actions\u5B9E\u9645\u4E0A\u5C31\u662F\u72EC\u7ACB\u7684\u811A\u672C\u547D\u4EE4\u96C6\uFF0C\u8FD9\u4E2A\u6211\u4EEC\u53EF\u4EE5\u7528\u522B\u4EBA\u5199\u7684\u6765\u90E8\u7F72\u4E9B\u73AF\u5883\u7B49\uFF09</p></li><li><p>\u4E00\u5B9A\u8981\u5F04\u6E05\u695Aenvironment secrets\u548Crepositories secrets</p><p>environment secrets\u7C7B\u4F3C\u4E8E\u5C40\u90E8\u53D8\u91CF\u7684\u610F\u601D\uFF0C\u5982\u679C\u5C40\u90E8\u53D8\u91CF\u4E2D\u6CA1\u6709\u4E2A\u503C\uFF0C\u5219\u4F1A\u53BBrepositories secrets\u4E2D\u53BB\u627E\u3002</p><p>\u6BCF\u4E2Ajob\u90FD\u53EF\u4EE5\u901A\u8FC7environment\u53D8\u91CF\u6765\u6307\u5B9A\u5BF9\u5E94\u7684\u73AF\u5883\u3002</p></li></ul><h3 id="\u5199\u4E00\u4E2Aworkflow\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5199\u4E00\u4E2Aworkflow\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u5199\u4E00\u4E2Aworkflow\u914D\u7F6E\u6587\u4EF6</h3><p>\u914D\u7F6E\u6587\u4EF6\u662F\u7528yaml\u5199\u7684\uFF0C\u6587\u4EF6\u5728<code>.github/workflows/</code>\u4E0B\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># This is a basic workflow to help you get started with Actions</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> CI

<span class="token comment"># Controls when the action will run. </span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token comment"># Triggers the workflow on push or pull request events but only for the master branch</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span>
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> master <span class="token punctuation">]</span>

  <span class="token comment"># Allows you to run this workflow manually from the Actions tab</span>
  <span class="token key atrule">workflow_dispatch</span><span class="token punctuation">:</span>

<span class="token comment"># A workflow run is made up of one or more jobs that can run sequentially or in parallel</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token comment"># This workflow contains a single job called &quot;build&quot;</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token comment"># The type of runner that the job will run on</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token key atrule">environment</span><span class="token punctuation">:</span> aliyun

    <span class="token comment"># Steps represent a sequence of tasks that will be executed as part of the job</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v2

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>\u6574\u4E2A\u914D\u7F6E\u6587\u4EF6\u5927\u6982\u5C31\u662F\u8FD9\u6837\u3002 \u5B9A\u4E49\u8BE5workflow\u7684\u4E00\u4E9B\u5C5E\u6027\uFF0C\u4F8B\u5982\u540D\u79F0\uFF0C\u89E6\u53D1\u6761\u4EF6\u3002</p><p>\u7136\u540E\u5B9A\u4E49job\uFF0C\u6BD4\u5982\u8BF4\u8FD9\u4E2Ajob\u662F\u4E00\u4E2Abuild\u4EFB\u52A1\uFF0C\u5206\u914D\u7ED9github\u7684\u4E91\u670D\u52A1\u5668\uFF08\u5BF9\u4E86\u8FD9\u91CC\u53EF\u4EE5\u767D\u5AD6\uFF09\u3002 \u4E91\u670D\u52A1\u5668\u5C31\u6267\u884C\u4E0B\u9762\u4E00\u6761\u6761\u547D\u4EE4\u4E86\u3002</p><p>\u6211\u8FD9\u91CC\u5C31\u7B80\u5355\u8BB2\u4E0B\u6211\u8E29\u7684\u5751\uFF1A</p><ol><li>\u5B89\u5168\u95EE\u9898\uFF0C\u6BD4\u65B9\u8BF4\u4F60\u60F3\u9690\u85CF\u81EA\u5DF1\u7684\u670D\u52A1\u5668\u3002\u4F60\u5C31\u5F97\u58F0\u660E\u4E00\u4E2A\u73AF\u5883\u53D8\u91CF\u3002\u8FD9\u4E2A\u73AF\u5883\u53D8\u91CF\u9700\u8981\u5728\u8BE5\u4ED3\u5E93\u5185\u547D\u540D\u597D\uFF0C\u5E76\u5728\u672C\u6B21\u6B65\u9AA4\u6216\u4EFB\u52A1\u4E2D\u6CE8\u518C\u3002 **\u5C24\u5176\u8981\u6CE8\u610F\u7684\u662F\uFF0Crepository\u53D8\u91CF\u548C\u73AF\u5883\u53D8\u91CF\u662F\u4E0D\u540C\u7684\uFF0C\u5982\u679C\u8981\u4F7F\u7528\u73AF\u5883\u53D8\u91CF\uFF0C\u4F60\u8FD8\u9700\u8981\u6307\u5B9A\u73AF\u5883\uFF09</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">environment</span><span class="token punctuation">:</span> aliyun
      <span class="token key atrule">steps</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> echo
          <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &quot;$<span class="token punctuation">{</span>name<span class="token punctuation">}</span>&quot;
          <span class="token key atrule">env</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.name <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5F53\u7136\u6240\u6709\u4EBA\u90FD\u662F\u770B\u4E0D\u5230\u8FD9\u4E9B\u53D8\u91CF\u7684\uFF0C\u5982\u4E0B\u56FE\u3002 <img src="`+i+`" alt="\u73AF\u5883\u53D8\u91CF"></p><ol start="2"><li>\u5728\u90E8\u7F72\u7684\u65F6\u5019\uFF0C\u6211\u4F7F\u7528\u4E86ssh-deploy\u8FD9\u4E2Aactions\u5E93\uFF0C\u4ED6\u91CC\u9762\u7528\u5230\u4E86<code>rsync</code>\u8FD9\u4E2A\u547D\u4EE4\u3002\u6240\u4EE5\u4F60\u9700\u8981\u628Assh\u516C\u94A5\u548C\u79C1\u94A5\u5148\u521B\u5EFA\u3002 \u516C\u94A5\u521B\u5EFA\u5B8C\u6210\u540E\uFF0C\u8FD8\u9700\u8981\u5199\u5165\u5230<code>~home/.ssh/authorized_keys</code>\u8FD9\u4E2A\u6587\u4EF6\u4E2D\u3002\u53E6\u5916\u79C1\u94A5\u5C31\u4FDD\u5B58\u5230\u8FD9\u4E2A\u53D8\u91CF\u4E2D</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>   <span class="token comment"># \u90E8\u7F72</span>
   <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> deploy
      <span class="token key atrule">uses</span><span class="token punctuation">:</span> easingthemes/ssh<span class="token punctuation">-</span>deploy@v2.1.5
      <span class="token key atrule">env</span><span class="token punctuation">:</span>
         <span class="token key atrule">SSH_PRIVATE_KEY</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.SERVER_SSH_KEY <span class="token punctuation">}</span><span class="token punctuation">}</span>
         <span class="token key atrule">ARGS</span><span class="token punctuation">:</span> <span class="token string">&quot;-rltgoDzvO&quot;</span>
         <span class="token key atrule">SOURCE</span><span class="token punctuation">:</span> <span class="token string">&quot;docs/.vuepress/dist&quot;</span>
         <span class="token key atrule">REMOTE_HOST</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.REMOTE_HOST <span class="token punctuation">}</span><span class="token punctuation">}</span>
         <span class="token key atrule">REMOTE_USER</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.REMOTE_USER <span class="token punctuation">}</span><span class="token punctuation">}</span>
         <span class="token key atrule">TARGET</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.REMOTE_TARGET <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="github\u6258\u7BA1\u5668-\u6211\u5C31\u662F\u6709\u94B1-\u5C31\u8981\u7528\u81EA\u5DF1\u7684\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#github\u6258\u7BA1\u5668-\u6211\u5C31\u662F\u6709\u94B1-\u5C31\u8981\u7528\u81EA\u5DF1\u7684\u670D\u52A1\u5668" aria-hidden="true">#</a> github\u6258\u7BA1\u5668\uFF08\u6211\u5C31\u662F\u6709\u94B1\uFF0C\u5C31\u8981\u7528\u81EA\u5DF1\u7684\u670D\u52A1\u5668\uFF09</h3><ol><li><p>\u5148\u8981\u589E\u52A0\u4E00\u4E2Aworkflow\u540E\u518D\u914D\u7F6E\u8FD0\u884C\u5668</p></li><li><p>add \u5B50\u6258\u7BA1runner\uFF0C\u5728\u6267\u884C<code>config.sh</code>\u6587\u4EF6\u65F6\uFF0C\u8981\u6CE8\u610F\u5148\u58F0\u660E\u4E00\u4E2A\u73AF\u5883\u53D8\u91CF\u3002\u5426\u5219shell\u8FD9\u4E2A\u8BED\u53E5\u4F1A\u8FDB\u5165if\u5206\u652F\u3002</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$user_id</span> -eq <span class="token number">0</span> -a -z <span class="token string">&quot;<span class="token variable">$RUNNER_ALLOW_RUNASROOT</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Must not run with sudo&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,20),m={start:"3"},d=n("p",null,"\u5F00\u542F\u670D\u52A1",-1),h=s("\u6211\u4EEC\u9700\u8981\u5C06\u8BE5\u8FDB\u7A0B\u6302\u5230\u540E\u53F0\u3002"),_={href:"https://docs.github.com/en/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service",target:"_blank",rel:"noopener noreferrer"},y=s("\u914D\u7F6E\u670D\u52A1"),g=n("p",null,[s("\u67E5\u770B\u8BE5runner\u8FDB\u7A0B"),n("code",null,"./svc.sh status")],-1),f=n("li",null,[n("p",null,"\u5728workflow\u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u6211\u4EEC\u9700\u8981\u53BB\u542F\u7528\u8BE5\u53F0\u8FD0\u884C\u5668\u3002")],-1),w=n("h3",{id:"\u53C2\u8003",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003","aria-hidden":"true"},"#"),s(" \u53C2\u8003")],-1),v={href:"https://docs.github.com/cn/actions/hosting-your-own-runners/adding-self-hosted-runners",target:"_blank",rel:"noopener noreferrer"},E=s("\u6DFB\u52A0\u5B50\u6258\u7BA1\u7684\u8FD0\u884C\u5668"),x={href:"https://docs.github.com/cn/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners",target:"_blank",rel:"noopener noreferrer"},R=s("\u7ED9\u8FD0\u884C\u5668\u6253\u6807\u7B7E"),T={href:"https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions",target:"_blank",rel:"noopener noreferrer"},q=s("github-actions\u8BED\u6CD5");function S(j,O){const a=t("ExternalLinkIcon");return p(),o(l,null,[b,n("ol",m,[n("li",null,[d,n("p",null,[h,n("a",_,[y,e(a)])]),g]),f]),w,n("p",null,[n("a",v,[E,e(a)])]),n("p",null,[n("a",x,[R,e(a)])]),n("p",null,[n("a",T,[q,e(a)])])],64)}var $=r(k,[["render",S]]);export{$ as default};
