---
title: 网络编程
icon: ppmb 
category:
  - Java SE
tag:
  - UDP
  - TCP 
order: -3
isOriginal: true
---

## 简介

通过 Java 来实现多个设备的网络通信，主要使用的 `java.net` 包下的相关类和接口。更多网络知识不再赘述，可以在计算机网络中进行查看。

### 三要素

1. IP 地址：对应的网络主机
2. 端口号：区分不同的进程
3. 通信协议：通信的规则

### InetAddress 类

该类主要用于确认互联网协议地址。

|方法|作用|
|---|---|
|getByName(String host)|根据主机名获取 InetAddress 对象|
|getLocalHost()|获取本机的 InetAddress 对象|
|getHostName()|获取主机名|
|getHostAddress()|获取主机地址|
|public boolean isLoopbackAddress()|判断是否为本地回环地址|



## UDP


## TCP


