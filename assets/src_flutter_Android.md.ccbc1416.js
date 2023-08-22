import{_ as s,c as a,o as n,N as e}from"./chunks/framework.d9f2368f.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"src/flutter/Android.md"}'),l={name:"src/flutter/Android.md"},p=e(`<h2 id="配置webview使用http" tabindex="-1">配置webview使用http <a class="header-anchor" href="#配置webview使用http" aria-label="Permalink to &quot;配置webview使用http&quot;">​</a></h2><ol><li><p>在res下创建xml目录，在xml下创建network_security_config.xml文件</p><p><code>android\\app\\src\\main\\res\\xml\\network_security_config.xml</code></p></li></ol><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#F07178;">xml</span><span style="color:#C792EA;"> version</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;"> encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">?&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">network-security-config</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">base-config</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">cleartextTrafficPermitted</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">network-security-config</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2"><li>在AndroidManifest.xml使用</li></ol><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">activity</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#EEFFFF;">    android:networkSecurityConfig=&quot;@xml/network_security_config&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">activity</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3"><li>在android\\app\\build.gradle下将targetSdkVersion改为27</li></ol><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#EEFFFF;">  defaultConfig {</span></span>
<span class="line"><span style="color:#EEFFFF;">        minSdkVersion 19</span></span>
<span class="line"><span style="color:#EEFFFF;">        targetSdkVersion 27</span></span>
<span class="line"><span style="color:#EEFFFF;">    }</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="android打包" tabindex="-1">android打包 <a class="header-anchor" href="#android打包" aria-label="Permalink to &quot;android打包&quot;">​</a></h2><h3 id="一-android-studio终端生成签名文件" tabindex="-1">一 android studio终端生成签名文件 <a class="header-anchor" href="#一-android-studio终端生成签名文件" aria-label="Permalink to &quot;一 android studio终端生成签名文件&quot;">​</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#FFCB6B;">keytool</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-genkey</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-keystore</span><span style="color:#EEFFFF;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">存放的路</span><span style="color:#EEFFFF;">径</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">/文件名字.jks</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-keyalg</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">RSA</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-keysize</span><span style="color:#EEFFFF;"> </span><span style="color:#F78C6C;">2048</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-validity</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">有效时间</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">-alias</span><span style="color:#EEFFFF;"> </span><span style="color:#C3E88D;">别名</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol><li>genkey : 产生密钥</li><li>keystore ：</li><li>&lt;存放的路径&gt;/key.jks ：证书的存放路径和名字</li><li>keyalg RSA -keysize 2048 ：使用 2048 位 RSA 算法对签名加密</li><li>validity 10000 ：有效期时间，这里是 10000天</li><li>alias sign ： 别名 sign</li></ol><h3 id="二-导入签名文件key-jks" tabindex="-1">二 导入签名文件key.jks <a class="header-anchor" href="#二-导入签名文件key-jks" aria-label="Permalink to &quot;二 导入签名文件key.jks&quot;">​</a></h3><p>在Flutter工程中/android/app目录下创建key文件夹，然后把sign.jks复制进来(注意保存在电脑本地的文件夹中还得有存在key.jks文件)</p><h3 id="三-在android目录下创建-key-properties文件" tabindex="-1">三 在android目录下创建 key.properties文件 <a class="header-anchor" href="#三-在android目录下创建-key-properties文件" aria-label="Permalink to &quot;三 在android目录下创建 key.properties文件&quot;">​</a></h3><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#EEFFFF;">storePassword=lhw0305</span></span>
<span class="line"><span style="color:#EEFFFF;">keyPassword=lhw0305</span></span>
<span class="line"><span style="color:#EEFFFF;">keyAlias=sign</span></span>
<span class="line"><span style="color:#EEFFFF;">storeFile=D:\\\\flutter\\\\project\\\\flutter_demo01\\\\android\\\\app\\\\key\\\\key.jks</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="四-配置-android-app-build-gradle文件" tabindex="-1">四 配置/android/app/build.gradle文件 <a class="header-anchor" href="#四-配置-android-app-build-gradle文件" aria-label="Permalink to &quot;四 配置/android/app/build.gradle文件&quot;">​</a></h3><ol><li>在flutter的/android/app/build.gradle文件中的android前加入</li></ol><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#EEFFFF;"> def keystorePropertiesFile =  rootProject.file(&quot;key.properties&quot;)</span></span>
<span class="line"><span style="color:#EEFFFF;"> def keystoreProperties = new Properties()</span></span>
<span class="line"><span style="color:#EEFFFF;"> keystoreProperties.load(new FileInputStream(keystorePropertiesFile))</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="2"><li>在android里的signingConfigs加入release</li></ol><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#EEFFFF;">  signingConfigs {</span></span>
<span class="line"><span style="color:#EEFFFF;">        release {</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">            keyAlias keystoreProperties[&#39;keyAlias&#39;]</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">            keyPassword keystoreProperties[&#39;keyPassword&#39;]</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">            storeFile file(keystoreProperties[&#39;storeFile&#39;])</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">            storePassword keystoreProperties[&#39;storePassword&#39;]</span></span>
<span class="line"><span style="color:#EEFFFF;">        }</span></span>
<span class="line"><span style="color:#EEFFFF;">    }</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">    buildTypes {</span></span>
<span class="line"><span style="color:#EEFFFF;">        release {</span></span>
<span class="line"><span style="color:#EEFFFF;">            // TODO: Add your own signing config for the release build.</span></span>
<span class="line"><span style="color:#EEFFFF;">            // Signing with the debug keys for now, so \`flutter run --release\` works.</span></span>
<span class="line"><span style="color:#EEFFFF;">            signingConfig signingConfigs.release</span></span>
<span class="line"><span style="color:#EEFFFF;">        }</span></span>
<span class="line"><span style="color:#EEFFFF;">    }</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="五-生成apk" tabindex="-1">五 生成apk <a class="header-anchor" href="#五-生成apk" aria-label="Permalink to &quot;五 生成apk&quot;">​</a></h3><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#EEFFFF;">flutter build apk --target-platform android-arm --split-per-abi</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>或者</p><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#EEFFFF;">flutter build apk (相对上面那个命令，此命令打包的apk相对大一些)</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="六-flutter-install-安装到模拟器中" tabindex="-1">六 flutter install (安装到模拟器中) <a class="header-anchor" href="#六-flutter-install-安装到模拟器中" aria-label="Permalink to &quot;六 flutter install (安装到模拟器中)&quot;">​</a></h3>`,25),r=[p];function o(t,i,c,F,d,u){return n(),a("div",null,r)}const m=s(l,[["render",o]]);export{b as __pageData,m as default};