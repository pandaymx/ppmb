---
title: 数组
order: 1
icon: ppmb icon-shuzu1
category:
  - 数据结构
tag:
  - 数组
  - 定义
isOriginal: true
---
## 简介

Redis（Remote Dictionary Server） 是高性能 key-value 数据库。 

### 使用用途

Redis 常用做数据缓存。

## 安装

### Linux 安装

```sh
sudo apt install lsb-release curl gpg

curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

sudo apt-get update
sudo apt-get install redis
```

### Windows 安装

官方已经不再支持 exe 文件，因此建议使用 wsl 进行使用。

```sh
sudo service redis-server start
```

执行 Linux 中安装的命令，随后启动 Redis 服务器即可。

## Redis 连接

### 命令行界面

Redis 的命令行方式，当你安装之后便可以执行 `redis-cli` 即可正常执行。

```sh
redis-cli -h 127.0.0.1 -p 6379
```

`-h` 后添加的是主机地址，`-p` 后添加的是端口地址。

### 客户端界面

大部分编程语言都可以访问 Redis 数据库（这里以 Java 为例）。

::: code-tabs#shell

@tab maven

```xml
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
    <version>5.1.0</version>
</dependency>
```

@tab Java

```bash
yarn add -D vuepress-theme-hope
```

@tab:active npm

```bash
npm i -D vuepress-theme-hope
```

:::





## 数据类型

常用基本数据类型：String，

### String


<Share colorful />