import{_ as s,c as n,o as a,N as l}from"./chunks/framework.d9f2368f.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/typeScript/typeScript.md"}'),p={name:"src/typeScript/typeScript.md"},e=l(`<p>tsconfig.json</p><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#EEFFFF;">&quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;incremental&quot;: true, // TS编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;tsBuildInfoFile&quot;: &quot;./buildFile&quot;, // 增量编译文件的存储位置</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;diagnostics&quot;: true, // 打印诊断信息</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;target&quot;: &quot;ES5&quot;, // 编译后的 JavaScript 代码的目标版本。例如：&quot;es5&quot;、&quot;es6&quot; 等</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;module&quot;: &quot;CommonJS&quot;, // 编译后的 JavaScript 代码的模块化方案。例如：&quot;commonjs&quot;、&quot;es6&quot; 等</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;outFile&quot;: &quot;./app.js&quot;, // 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，即开启时应设置&quot;module&quot;: &quot;AMD&quot;,</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;lib&quot;: [&quot;DOM&quot;, &quot;ES2015&quot;, &quot;ScriptHost&quot;, &quot;ES2019.Array&quot;], // 编译器需要引入的库文件。例如：&quot;es5&quot;、&quot;es6&quot;、&quot;dom&quot; 等</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;allowJS&quot;: true, // 允许编译器编译JS，JSX文件</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;checkJs&quot;: true, // 允许在JS文件中报错，通常与allowJS一起使用</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;outDir&quot;: &quot;./dist&quot;, // 编译后的 JavaScript 文件输出目录</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;rootDir&quot;: &quot;./&quot;, // 指定输出文件目录(用于输出)，用于控制输出目录结构</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;declaration&quot;: true, // 是否生成声明文件</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;declarationDir&quot;: &quot;./file&quot;, // 声明文件的输出目录</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;emitDeclarationOnly&quot;: true, // 只生成声明文件，而不会生成js文件</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;sourceMap&quot;: true, // 是否生成源代码与编译后代码的映射文件</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;inlineSourceMap&quot;: true, // 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;declarationMap&quot;: true, // 为声明文件生成sourceMap</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;typeRoots&quot;: [], // 声明文件目录，默认时node_modules/@types</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;types&quot;: [], // 加载的声明文件包</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;removeComments&quot;:true, // 删除注释</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;noEmit&quot;: true, // 不输出文件,即编译后不会生成任何js文件</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;noEmitOnError&quot;: true, // 发送错误时不输出任何文件</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;noEmitHelpers&quot;: true, // 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;importHelpers&quot;: true, // 通过tslib引入helper函数，文件必须是模块</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;downlevelIteration&quot;: true, // 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;strict&quot;: true, // 是否启用严格模式</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;alwaysStrict&quot;: true, // 在代码中注入&#39;use strict&#39;</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;noImplicitAny&quot;: true, // 不允许隐式的any类型</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;strictNullChecks&quot;: true, // 不允许把null、undefined赋值给其他类型的变量</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;strictFunctionTypes&quot;: true, // 不允许函数参数双向协变</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;strictPropertyInitialization&quot;: true, // 类的实例属性必须初始化</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;strictBindCallApply&quot;: true, // 严格的bind/call/apply检查</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;noImplicitThis&quot;: true, // 不允许 this 有隐式的 any 类型</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;noImplicitAny&quot;: true, 是否禁止隐式的 any 类型。</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;noUnusedLocals&quot;: true, // 检查只声明、未使用的局部变量(只提示不报错)</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;noUnusedParameters&quot;: true, // 检查未使用的函数参数(只提示不报错)</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;noFallthroughCasesInSwitch&quot;: true, // 防止switch语句贯穿(即如果没有break语句后面不会执行)</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;noImplicitReturns&quot;: true, //每个分支都会有返回值</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;esModuleInterop&quot;: true, // 允许 esmoudle 和 commonjs 相互调用</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;allowUmdGlobalAccess&quot;: true, // 允许在模块中全局变量的方式访问umd模块</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;moduleResolution&quot;: &quot;node&quot;, // 模块解析策略，ts默认用node的解析策略，即相对的方式导入</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;baseUrl&quot;: &quot;./&quot;, // 解析非相对模块的基地址，默认是当前目录</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;paths&quot;: { // 路径映射，相对于baseUrl</span></span>
<span class="line"><span style="color:#EEFFFF;">// 如使用jq时不想使用默认版本，而需要手动指定版本，可进行如下配置</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;jquery&quot;: [&quot;node_modules/jquery/dist/jquery.min.js&quot;]</span></span>
<span class="line"><span style="color:#EEFFFF;">},</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;rootDirs&quot;: [&quot;src&quot;,&quot;out&quot;], // 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;listEmittedFiles&quot;: true, // 打印输出文件</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;listFiles&quot;: true// 打印编译的文件(包括引用的声明文件)</span></span>
<span class="line"><span style="color:#EEFFFF;">}</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">//  指定需要编译的文件或目录。可以使用通配符 * 匹配多个文件或目录（属于自动指定该路径下的所有ts相关文件）</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;include&quot;: [</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;src/**/*&quot;</span></span>
<span class="line"><span style="color:#EEFFFF;">],</span></span>
<span class="line"><span style="color:#EEFFFF;">//  指定不需要编译的文件或目录。可以使用通配符 * 匹配多个文件或目录（include的反向操作）</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;exclude&quot;: [</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;demo.ts&quot;</span></span>
<span class="line"><span style="color:#EEFFFF;">],</span></span>
<span class="line"><span style="color:#EEFFFF;">// 指定需要编译的文件列表（属于手动一个个指定文件）</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;files&quot;: [</span></span>
<span class="line"><span style="color:#EEFFFF;">&quot;demo.ts&quot;</span></span>
<span class="line"><span style="color:#EEFFFF;">]</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div>`,2),o=[e];function t(r,u,c,F,i,q){return a(),n("div",null,o)}const m=s(p,[["render",t]]);export{E as __pageData,m as default};
