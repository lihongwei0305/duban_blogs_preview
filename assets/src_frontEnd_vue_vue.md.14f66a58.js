import{_ as s,c as n,o as a,N as p}from"./chunks/framework.d9f2368f.js";const u=JSON.parse('{"title":"vue","description":"","frontmatter":{},"headers":[],"relativePath":"src/frontEnd/vue/vue.md"}'),l={name:"src/frontEnd/vue/vue.md"},e=p(`<h1 id="vue" tabindex="-1">vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;vue&quot;">​</a></h1><h2 id="创建函数式组件" tabindex="-1">创建函数式组件 <a class="header-anchor" href="#创建函数式组件" aria-label="Permalink to &quot;创建函数式组件&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-wYw0h" id="tab-0RwC4Zx" checked="checked"><label for="tab-0RwC4Zx">vue2</label><input type="radio" name="group-wYw0h" id="tab-x90B53N"><label for="tab-x90B53N">vue3</label></div><div class="blocks"><div class="language-vue2 active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue2</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">// index.js</span></span>
<span class="line"><span style="color:#EEFFFF;">import component from &#39;./index.vue&#39;;</span></span>
<span class="line"><span style="color:#EEFFFF;">import store from &#39;@/store&#39;;</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">const com = {};</span></span>
<span class="line"><span style="color:#EEFFFF;">com.install = function (Vue) {</span></span>
<span class="line"><span style="color:#EEFFFF;">  const comExtend = Vue.extend(component);</span></span>
<span class="line"><span style="color:#EEFFFF;">  const instance = new comExtend({</span></span>
<span class="line"><span style="color:#EEFFFF;">    store,</span></span>
<span class="line"><span style="color:#EEFFFF;">  });</span></span>
<span class="line"><span style="color:#EEFFFF;">  instance.$mount(document.createElement(&#39;div&#39;));</span></span>
<span class="line"><span style="color:#EEFFFF;">  Vue.prototype.$com = (params) =&gt; {</span></span>
<span class="line"><span style="color:#EEFFFF;">    document.body.appendChild(instance.$el);</span></span>
<span class="line"><span style="color:#EEFFFF;">    instance.init(params, instance);</span></span>
<span class="line"><span style="color:#EEFFFF;">    return instance; // 返回实例</span></span>
<span class="line"><span style="color:#EEFFFF;">  };</span></span>
<span class="line"><span style="color:#EEFFFF;">};</span></span>
<span class="line"><span style="color:#EEFFFF;">export default com;</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">&lt;!-- index.vue --&gt;</span></span>
<span class="line"><span style="color:#EEFFFF;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#EEFFFF;">  &lt;compont&gt;&lt;/compont&gt;</span></span>
<span class="line"><span style="color:#EEFFFF;">&lt;/template&gt;</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#EEFFFF;">import compont from &#39;./compont.vue&#39;;</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">export default {</span></span>
<span class="line"><span style="color:#EEFFFF;">  name: &#39;com&#39;,</span></span>
<span class="line"><span style="color:#EEFFFF;">  components: {</span></span>
<span class="line"><span style="color:#EEFFFF;">    compont,</span></span>
<span class="line"><span style="color:#EEFFFF;">  },</span></span>
<span class="line"><span style="color:#EEFFFF;">  data() {</span></span>
<span class="line"><span style="color:#EEFFFF;">    return {</span></span>
<span class="line"><span style="color:#EEFFFF;">      visible: false,</span></span>
<span class="line"><span style="color:#EEFFFF;">      parmas: {},</span></span>
<span class="line"><span style="color:#EEFFFF;">    };</span></span>
<span class="line"><span style="color:#EEFFFF;">  },</span></span>
<span class="line"><span style="color:#EEFFFF;">  methods: {</span></span>
<span class="line"><span style="color:#EEFFFF;">    async init(params, instance) {</span></span>
<span class="line"><span style="color:#EEFFFF;">      this.parmas = params;</span></span>
<span class="line"><span style="color:#EEFFFF;">      this.visible = true;</span></span>
<span class="line"><span style="color:#EEFFFF;">    },</span></span>
<span class="line"><span style="color:#EEFFFF;">    close() {</span></span>
<span class="line"><span style="color:#EEFFFF;">      this.visible = false;</span></span>
<span class="line"><span style="color:#EEFFFF;">      this.$el.remove();</span></span>
<span class="line"><span style="color:#EEFFFF;">    },</span></span>
<span class="line"><span style="color:#EEFFFF;">  },</span></span>
<span class="line"><span style="color:#EEFFFF;">};</span></span>
<span class="line"><span style="color:#EEFFFF;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">&lt;style scoped&gt;</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">&lt;/style&gt;</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><div class="language-vue3 line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue3</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#EEFFFF;">function mountFunctionComponents(component: any, name: any, unmountAfter?: any) {</span></span>
<span class="line"><span style="color:#EEFFFF;">  APP.config.globalProperties[\`$\${name}\`] = (option = {} as any) =&gt; {</span></span>
<span class="line"><span style="color:#EEFFFF;">    const dom = document.createElement(&#39;div&#39;);</span></span>
<span class="line"><span style="color:#EEFFFF;">    document.body.appendChild(dom);</span></span>
<span class="line"><span style="color:#EEFFFF;">    const app = createApp(component, {</span></span>
<span class="line"><span style="color:#EEFFFF;">      unmount: () =&gt; {</span></span>
<span class="line"><span style="color:#EEFFFF;">        app.unmount();</span></span>
<span class="line"><span style="color:#EEFFFF;">        document.body.removeChild(dom);</span></span>
<span class="line"><span style="color:#EEFFFF;">        unmountAfter &amp;&amp; unmountAfter instanceof Function &amp;&amp; unmountAfter();</span></span>
<span class="line"><span style="color:#EEFFFF;">      },</span></span>
<span class="line"><span style="color:#EEFFFF;">      ...option</span></span>
<span class="line"><span style="color:#EEFFFF;">    });</span></span>
<span class="line"><span style="color:#EEFFFF;">    app.use(useModule);</span></span>
<span class="line"><span style="color:#EEFFFF;">    components(app);</span></span>
<span class="line"><span style="color:#EEFFFF;">    return app.mount(dom);</span></span>
<span class="line"><span style="color:#EEFFFF;">  };</span></span>
<span class="line"><span style="color:#EEFFFF;">}</span></span>
<span class="line"><span style="color:#EEFFFF;">// 使用</span></span>
<span class="line"><span style="color:#EEFFFF;">import com from &#39;com.vue&#39;;</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">mountFunctionComponents(com, &#39;compontName&#39;);</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div></div></div>`,3),c=[e];function r(F,o,t,i,b,m){return a(),n("div",null,c)}const y=s(l,[["render",r]]);export{u as __pageData,y as default};
