import{_ as s,c as n,o as a,N as l}from"./chunks/framework.d9f2368f.js";const m=JSON.parse('{"title":"NerWork","description":"","frontmatter":{},"headers":[],"relativePath":"src/network/network.md"}'),p={name:"src/network/network.md"},e=l(`<h1 id="nerwork" tabindex="-1">NerWork <a class="header-anchor" href="#nerwork" aria-label="Permalink to &quot;NerWork&quot;">​</a></h1><h2 id="osi网络模型分层" tabindex="-1">OSI网络模型分层 <a class="header-anchor" href="#osi网络模型分层" aria-label="Permalink to &quot;OSI网络模型分层&quot;">​</a></h2><ol><li>应用层</li><li>表示层</li><li>会话层</li><li>传输层</li><li>网络层</li><li>数据链路层</li><li>物理层</li></ol><h2 id="数据的封装" tabindex="-1">数据的封装 <a class="header-anchor" href="#数据的封装" aria-label="Permalink to &quot;数据的封装&quot;">​</a></h2><ol><li>数据的封装是一个自上而下的过程【从应用层到物理层的过程】</li><li>数据在上3层保持不变，统一的名称为PDU【Protocol Data Unit | 协议数据单元】</li><li>数据在第四层传输层添加TCP/UDP头部，称为数据段【Segment】</li><li>数据在第三层网络层添加IP头部，称为数据包【Packet】</li><li>数据在第二层数据链路层添加MAC头部和FCS尾部，称为数据帧【Frame】</li><li>输在到达物理层，物理层将其称为bit流，通过有线或无线的方式传输</li></ol><h2 id="表示层" tabindex="-1">表示层 <a class="header-anchor" href="#表示层" aria-label="Permalink to &quot;表示层&quot;">​</a></h2><ol><li>提供了数据的加密</li></ol><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#EEFFFF;">加秘方法：</span></span>
<span class="line"><span style="color:#EEFFFF;">1.对称加密</span></span>
<span class="line"><span style="color:#EEFFFF;">2.非对称加密</span></span>
<span class="line"><span style="color:#EEFFFF;">3.hash加密</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="会话层" tabindex="-1">会话层 <a class="header-anchor" href="#会话层" aria-label="Permalink to &quot;会话层&quot;">​</a></h2><ol><li>在两个应用程序之间负责建立、维护、拆除会话</li></ol><h2 id="传输层" tabindex="-1">传输层 <a class="header-anchor" href="#传输层" aria-label="Permalink to &quot;传输层&quot;">​</a></h2><ol><li>提供了端口号码</li></ol><h2 id="网络层" tabindex="-1">网络层 <a class="header-anchor" href="#网络层" aria-label="Permalink to &quot;网络层&quot;">​</a></h2><p>作用：</p><ol><li>定义了IP地址（Internet Protocol | 互联网协议）、逻辑地址</li><li>根据运行的不同动态路由协，议选择不同的最佳路径</li><li>连接不同的媒介类型（内外网）</li><li>在选择好的最佳路径上负责传输和转发数据报文</li></ol><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#EEFFFF;">在IPv4单播网络中环境中，存在6大单播动态路由协议</span></span>
<span class="line"><span style="color:#EEFFFF;">1、RIP 【Routing Information Protocol | 路由信息协议】</span></span>
<span class="line"><span style="color:#EEFFFF;">2、OSPF 【Open Shortest Path First | 开放最短路径优先】</span></span>
<span class="line"><span style="color:#EEFFFF;">3、IGPR 【内部网卡路由协议】 Cisco私有</span></span>
<span class="line"><span style="color:#EEFFFF;">4、EIGPR 【增强型内部网卡路由协议】 Cisco私有</span></span>
<span class="line"><span style="color:#EEFFFF;">5、IS-IS 【Intermediate System to Intermediate System | 中间系统到中间系统】</span></span>
<span class="line"><span style="color:#EEFFFF;">6、BGP 【Border Gateway Protocol | 边界网关协议】</span></span>
<span class="line"><span style="color:#EEFFFF;">// 7、SP 【Segment Routing | 分段路由】</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#EEFFFF;">IP:</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">IP地址的作用：</span></span>
<span class="line"><span style="color:#EEFFFF;">1、用来唯一标识一个网络节点</span></span>
<span class="line"><span style="color:#EEFFFF;">2、用来标识一个网段</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">APR【地址解析协议】</span></span>
<span class="line"><span style="color:#EEFFFF;">作用：一直对端的IP地址，用力请求解析对端的MAC地址时使用的</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">RAPR【反向地址解析协议】</span></span>
<span class="line"><span style="color:#EEFFFF;">作用：向服务器请求获取自身所需要的IP地址</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#EEFFFF;">路由</span></span>
<span class="line"><span style="color:#EEFFFF;">路由器的概念：跨越从源主机到目标主机的一个互联网络来转发数据包的过程</span></span>
<span class="line"><span style="color:#EEFFFF;">路由器：负责路由数据包的设备</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">路由器理由数据包的过程：</span></span>
<span class="line"><span style="color:#EEFFFF;">1、在不使用NAT的前提下，路由器路由数据包时，三层的源IP与目标IP地址始终保持不变</span></span>
<span class="line"><span style="color:#EEFFFF;">2、路由器会不断的使用自身接口的MAC地址做二成重写，直至将数据报文路由至目的节点</span></span>
<span class="line"><span style="color:#EEFFFF;">3、路由器每一个接口都有一个独立的MAC地址</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="acl-【访问控制列表】" tabindex="-1">ACL 【访问控制列表】 <a class="header-anchor" href="#acl-【访问控制列表】" aria-label="Permalink to &quot;ACL 【访问控制列表】&quot;">​</a></h3><h4 id="acl的基本概念" tabindex="-1">ACL的基本概念 <a class="header-anchor" href="#acl的基本概念" aria-label="Permalink to &quot;ACL的基本概念&quot;">​</a></h4><ol><li>ACL是作用于设备接口级的指令，用来判断哪些报文可以被转发，哪些报文需要被过滤</li><li>ACL会读取第2【MAC地址】、3【IP地址】、4【端口地址】层的头部消息</li><li>ACL将根据管理员预先创建好的规则来匹配过滤每一个报文</li></ol><h2 id="数据链路层" tabindex="-1">数据链路层 <a class="header-anchor" href="#数据链路层" aria-label="Permalink to &quot;数据链路层&quot;">​</a></h2><p>作用：</p><ol><li>定义了数据在传输过程中必须要使用的一个地址：MAC地址（Media Access Contral | 介质访问控制） <ol><li>MAC （网卡地址、物理地址）</li></ol></li><li>负责数据链路的建立、维护和拆除</li><li>提供了数据帧的封装、传输和同步</li><li>提供了差错检测的功能</li><li>流量控制</li></ol><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#EEFFFF;">以太网：使用以太链路连接而成的一张拓扑结构网络</span></span>
<span class="line"><span style="color:#EEFFFF;">以太：Ethernet</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">E0/0/0----Ethernet 0/0/0 【以太网】 10M</span></span>
<span class="line"><span style="color:#EEFFFF;">F0/0/0----FastEthernet 0/0/0 【快速以太网】 100M</span></span>
<span class="line"><span style="color:#EEFFFF;">G0/0/0----GigbitEthernet 0/0/0 【吉比特以太网】 1000M</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">注： 上述为Cisco设备的接口，华为没有F口，E口为100M</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">MAC地址长度共48bit【6byte】</span></span>
<span class="line"><span style="color:#EEFFFF;">MAC地址前24bit为厂商标识，后24bit为地址的唯一标识</span></span>
<span class="line"><span style="color:#EEFFFF;">MAC地址的第8为若为0表示单播地址，为1表示组播地址</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">IPv4中，有3中传输的过程：</span></span>
<span class="line"><span style="color:#EEFFFF;">1、单播</span></span>
<span class="line"><span style="color:#EEFFFF;">2、广播</span></span>
<span class="line"><span style="color:#EEFFFF;">3、组播</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">在IPv6中取消的广播的概念，取而代之的是任意播</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">以太帧格式：Ethernet II 和 IEEE 802.3</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">以太网交换机：</span></span>
<span class="line"><span style="color:#EEFFFF;">1、盒式交换机</span></span>
<span class="line"><span style="color:#EEFFFF;">2、框式交换机</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">冲突与冲突域</span></span>
<span class="line"><span style="color:#EEFFFF;">1、为了防止冲突的发生，提高传输的效率，应采取的做法是分割冲突域</span></span>
<span class="line"><span style="color:#EEFFFF;">2、交换机的每一个端口就是一个独立的冲突域</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">LLDP【Link Layer Discover Protocol | 链路层发现协议】</span></span>
<span class="line"><span style="color:#EEFFFF;">用来发现直连的邻居信息</span></span>
<span class="line"><span style="color:#EEFFFF;">[HUAWEI] lldp enable</span></span>
<span class="line"><span style="color:#EEFFFF;">[HUAWEI] display lldp neighbor [brief | interface E0/0/10]</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">[HUAWEI] save  //保存配置信息</span></span>
<span class="line"><span style="color:#EEFFFF;">[HUAWEI] reset saved-configuration  //重置配置信息</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">为配置明文密钥</span></span>
<span class="line"><span style="color:#EEFFFF;">[HUAWEI] user-interface console 0</span></span>
<span class="line"><span style="color:#EEFFFF;">[HUAWEI] authentication-mode password</span></span>
<span class="line"><span style="color:#EEFFFF;">[HUAWEI] set authentication password simple mima </span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">为配置密文密钥</span></span>
<span class="line"><span style="color:#EEFFFF;">[HUAWEI] user-interface console 0</span></span>
<span class="line"><span style="color:#EEFFFF;">[HUAWEI] authentication-mode password</span></span>
<span class="line"><span style="color:#EEFFFF;">[HUAWEI] set authentication password cipher mima </span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">VLAN</span></span>
<span class="line"><span style="color:#EEFFFF;">VLAN的作用：(隔离广播域,有效的阻止广播风暴)</span></span>
<span class="line"><span style="color:#EEFFFF;">1、广播控制</span></span>
<span class="line"><span style="color:#EEFFFF;">2、安全性</span></span>
<span class="line"><span style="color:#EEFFFF;">3、带宽利用</span></span>
<span class="line"><span style="color:#EEFFFF;">4、延迟</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">VLAN的种类：</span></span>
<span class="line"><span style="color:#EEFFFF;">1、基于端口的静态划分</span></span>
<span class="line"><span style="color:#EEFFFF;">2、基于MAC地址的动态划分</span></span>
<span class="line"><span style="color:#EEFFFF;">3、基于IP子网的动态划分</span></span>
<span class="line"><span style="color:#EEFFFF;">4、基于协议的动态划分</span></span>
<span class="line"><span style="color:#EEFFFF;">优先级： MAC地址 -》 IP子网 -》 协议 -》 端口</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">链路类型：</span></span>
<span class="line"><span style="color:#EEFFFF;">1、接入链路【access】：用于客户端与交换机之间，传递的的不带VLAN标签的原始数据帧</span></span>
<span class="line"><span style="color:#EEFFFF;">2、中继链路【trunk】：用于交换机与交换机之间，传递的是带有VLAN标签的数据帧</span></span>
<span class="line"><span style="color:#EEFFFF;">3、混杂链路【hybrid】 不同的VLAN主机相互通信</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">交换机封装VLAN的方式：</span></span>
<span class="line"><span style="color:#EEFFFF;">1、IEEE 802.1Q 【业界公有标准】</span></span>
<span class="line"><span style="color:#EEFFFF;">破坏原始二成封装，在原始的二成封装中插入一个4byte大小的标记【在SMAC（源MAC地址）与Type之间】</span></span>
<span class="line"><span style="color:#EEFFFF;">4byte的Tag标记有两部分：</span></span>
<span class="line"><span style="color:#EEFFFF;">1、TPID 【Tag Protocol Identifier】：0*8100 是IEEE的新类型，表明这是一个携带802.1Q标签的帧，占2byte</span></span>
<span class="line"><span style="color:#EEFFFF;">2、TCI 【Tag Control Information】：</span></span>
<span class="line"><span style="color:#EEFFFF;">    Pri 【Priority】3bit，表示帧的优先级</span></span>
<span class="line"><span style="color:#EEFFFF;">    CFI  1bit 判断是否是经典格式，0经典 1非经典</span></span>
<span class="line"><span style="color:#EEFFFF;">    VLAN ID 12bit 取值范围1-4094</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">STP【Spanning Tree Protocol | 生成树协议】(在二层防环)</span></span>
<span class="line"><span style="color:#EEFFFF;">STP作用：</span></span>
<span class="line"><span style="color:#EEFFFF;">1、逻辑上断开环路，防止广播风暴的产生（防环）</span></span>
<span class="line"><span style="color:#EEFFFF;">2、当主链路出现故障时，断开的端口将被激活，恢复通信，起到备份线路的作用</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">STP算法：</span></span>
<span class="line"><span style="color:#EEFFFF;">1、选择根网桥【Root Bridge】</span></span>
<span class="line"><span style="color:#EEFFFF;">    1、每台交换机都拥有一个自身唯一的BID【Bridge ID】</span></span>
<span class="line"><span style="color:#EEFFFF;">    2、BID = 网桥优先级 + 网桥的MAC地址</span></span>
<span class="line"><span style="color:#EEFFFF;">    3、BID越小越优先</span></span>
<span class="line"><span style="color:#EEFFFF;">    4、取值范围：0-61440 【默认值32768  注：需要4096的倍数】</span></span>
<span class="line"><span style="color:#EEFFFF;">2、选择根端口【Root Port】(到达根网桥的端口叫根端口)</span></span>
<span class="line"><span style="color:#EEFFFF;">    1、最低的到达根网桥的路径开销</span></span>
<span class="line"><span style="color:#EEFFFF;">        1、 10M 成本 100</span></span>
<span class="line"><span style="color:#EEFFFF;">        2、 100M 成本 19</span></span>
<span class="line"><span style="color:#EEFFFF;">        3、 1000M 成本 4</span></span>
<span class="line"><span style="color:#EEFFFF;">        4、 10000M 成本 2</span></span>
<span class="line"><span style="color:#EEFFFF;">    2、最低的发送方（根网桥）网桥ID</span></span>
<span class="line"><span style="color:#EEFFFF;">    3、最低的端口优先级</span></span>
<span class="line"><span style="color:#EEFFFF;">    4、发送方最低的端口ID</span></span>
<span class="line"><span style="color:#EEFFFF;">3、选择指定端口</span></span>
<span class="line"><span style="color:#EEFFFF;">   1、根网桥身上的所有端口都是指定端口</span></span>
<span class="line"><span style="color:#EEFFFF;">   2、在非根网桥上指定端口分为4步</span></span>
<span class="line"><span style="color:#EEFFFF;">        1、BPDU中的根网桥ID</span></span>
<span class="line"><span style="color:#EEFFFF;">        2、最低的到达根网桥的路径开销</span></span>
<span class="line"><span style="color:#EEFFFF;">        4、发送方的网桥ID,若优先级相同，则具有最低MAC地址</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">交换机生成树的5种状态：</span></span>
<span class="line"><span style="color:#EEFFFF;">1、禁用</span></span>
<span class="line"><span style="color:#EEFFFF;">2、阻塞</span></span>
<span class="line"><span style="color:#EEFFFF;">3、侦听</span></span>
<span class="line"><span style="color:#EEFFFF;">4、学习</span></span>
<span class="line"><span style="color:#EEFFFF;">5、转发</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br></div></div><h2 id="物理层" tabindex="-1">物理层 <a class="header-anchor" href="#物理层" aria-label="Permalink to &quot;物理层&quot;">​</a></h2><p>作用：保证数据的双向传输</p><p>物理层实现的统一：</p><ol><li>电子/光学：描述信号的各种特性 <ul><li>模数转换 <ol><li>分段</li><li>取样</li><li>编码</li><li>量化</li></ol></li></ul></li><li>机械性：描述了连接器的尺寸、规格，包括于导线的金属成分</li><li>功能性： 描述了做了什么</li><li>程序性： 描述了如何做</li></ol><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#EEFFFF;">数字信号的缺点：</span></span>
<span class="line"><span style="color:#EEFFFF;">1. 传输数字信号相比传输模拟信号所要求的频带宽很多，也就意味着其信道的利用率低</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">频带 -》 带宽，信号所占据的频带宽度</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;">物理层的传输介质：</span></span>
<span class="line"><span style="color:#EEFFFF;">有线介质：</span></span>
<span class="line"><span style="color:#EEFFFF;">1. 双绞线</span></span>
<span class="line"><span style="color:#EEFFFF;">    非屏蔽双胶线【UTP】</span></span>
<span class="line"><span style="color:#EEFFFF;">    屏蔽双绞线【STP】</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span></span>
<span class="line"><span style="color:#EEFFFF;">    T568B T568A</span></span>
<span class="line"><span style="color:#EEFFFF;">    接收（橙白 橙） 发送（绿白 绿）</span></span>
<span class="line"><span style="color:#EEFFFF;">    </span></span>
<span class="line"><span style="color:#EEFFFF;">    双绞线传输距离最大100m</span></span>
<span class="line"><span style="color:#EEFFFF;">2. 光纤</span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span>
<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,30),r=[e];function F(c,i,o,b,t,E){return a(),n("div",null,r)}const y=s(p,[["render",F]]);export{m as __pageData,y as default};
