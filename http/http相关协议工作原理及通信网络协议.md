## https
> 工作原理：在传输数据之前双端需要进行一次握手，一次来确定传输信息所需的密码信息
```
客户端发起请求http链接选择一套自己支持的加密算法给服务端-->
服务端选出一组加密算法将自己的身份信息以证书的形式发给浏览器，包含地址、公钥、证书机构--> 
浏览器接收到证书后验证是否受信，若首信会生成随机数，并用公钥加密，再次进行 hash 加密，将信息发给服务端--> 
服务端拿到信息后拿出私钥进行解密验证 hash 是否一致，再次使用密码进行再次加密一段握手消息发给浏览器-->
浏览器解密并计算握手消息的 hash,若一致则握手结束
```

http和 https 的区别
* 证书： https-需要申请证书
* 端口：http-80,https-443
* 是否明码：http 明码
* 是否有状态： http 无状态,无身份
* 安全性：https-ssl+http-->更安全

 tcp/ip 协议族
 1. 应用层
 ftp, dns
 2. 传输层
 tcp,udp
 3. 网络层
 ip
 4. 链路层

 链接的区别
 * 串行链接： HTTP1.0每次链接只能处理一个请求，收到响应后立即断开连接。因此多个请求后，很容易达到浏览器请求上限，每次请求都建立了新的 tcp 链接，增大了开销
 * 持久连接： HTTP1.1 同一时间同一域名下的 http请求只要两端都没有提出断联，则其他求情可以继续使用这个链接。但是采用了阻塞模式，本次请求必须等待上次请求结束，这样可能造成请求阻塞
 * http2.0 多路复用: 每个 http请求都有一个序列标识符，这样浏览器可以进行并发多个请求，

http2.0 特性
1. 二进制传输： 之前的 http 请求都是通过文本传输，在 http2 中所有传输数据都会通过被分割，并采用二进制格式编码
2. 多路复用： 
  * 帧and流：代表数据传输的最小的单位，每一帧都有序列标识表明其属于那个流，多个帧组成流，每个流表示一个请求
  * 一个 TCP链接中可以存在多条流，就是可以发起多条请求，服务端则可以通过帧的序列标识知道其属于哪个流，经过序列重排还原请求。多路复用允许并发发起多个请求，服务端可以通过帧的标识知道该帧属于哪个流，这样请求和相应一一对应，不用在等待其他请求的响应结束，避免了线头阻塞
3. 头部压缩： HTTP1.0X 版本每次请求头部需携带大量信息，且需要重复发送，HTTP2.0 对头部信息进行编码，之后两端都对头部信息做缓存，因此可以大大减少每次传输的头部信息
4. 服务端推送： 客户端所需要的 css/js/imag等资源文件随着 index。HTML 一起发到客户端，省去了多次请求