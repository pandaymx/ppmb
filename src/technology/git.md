---
title: Git
icon: ppmb icon-git
category:
  - 实用技术
tag:
  - Git
  - Github
order: 4
isOriginal: true
---
## 简介

Git是一种分布式版本控制系统。

## 安装

### Windows的安装

下载 Git。 Git 的[官方网站](https://git-scm.com/downloads)。

安装 Git。双击下载的 .exe 文件。一路下一步即可，无需其他配置。


### Linux安装

Linux一般的发行版会自带有。

## 配置   

在命令行中输入这两行代码即可。

```sh
git config --global user.name "test"
git config --global user.email test@test.com
```


## 本地步骤

### 初始化仓库

在 Git 中通过 `git init` 命令对仓库进行初始化。

初始化之后目录会出现 **.git** 的隐藏目录。

### git add

通过 `git add` 命令让 git 对文件进行跟踪，允许使用通配符。

该命令将文件添加到暂存区。

```sh
git add *
git add README.md
```

### git commit

通过 `git commit` 命令进行提交，将暂存区的文件提交到仓库中。

```sh
git commit -m '提示信息'
```

## 远程步骤

### 连接GitHub

通过 `ssh-keygen` 命令来生成 **ssh key**。

```sh
ssh-keygen -t rsa -C "your_email@youremail.com"
```

一路回车即可，如果使用过会要求你覆盖。

:::tip ssh
ssh 是一种加密登录，使用这种登录方式则不需要每次使用账号和密码进行登录。
:::

### 连接远程库

在 GitHub 中创建一个远程库，随后通过命令和本地仓库进行绑定即可。

### 克隆仓库

找到已经上传的远程仓库，通过 `git clone` 命令对仓库进行下载。

### 推送

### 更新和合并

## 分支操作

## Github pages


<Share colorful />