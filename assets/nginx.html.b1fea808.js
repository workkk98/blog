import{e as n}from"./app.3c7f3972.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const a={},s=n(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h1><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3><p>nginx\u7684\u914D\u7F6E\u6587\u4EF6nginx.conf\uFF0C\u4E00\u822C\u662F\u5728/etc/nginx\u6587\u4EF6\u5939\u4E0B\u3002 \u914D\u7F6E\u6587\u4EF6\u7531\u591A\u4E2A\u5757\u7EC4\u5408\u3002</p><h4 id="http\u5757" tabindex="-1"><a class="header-anchor" href="#http\u5757" aria-hidden="true">#</a> http\u5757</h4><ul><li>server</li></ul><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>server {
  # listen\u6307\u76D1\u542C\u672C\u5730\u5740\u7684\u67D0\u4E2A\u7AEF\u53E3\u53F7
  listen: 80;
  # listen_name\u6307\u7684\u662F\u8BF7\u6C42\u5934\u90E8\u4E2D\u7684host\u5B57\u6BB5
  listen_name: example.com;
  # location\u6620\u5C04\u5230\u90A3\u4E2A\u670D\u52A1\u5668\u6216\u662F\u9759\u6001\u6587\u4EF6\u4E0A
  location / {

  }
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,6);function r(i,l){return s}var t=e(a,[["render",r]]);export{t as default};
