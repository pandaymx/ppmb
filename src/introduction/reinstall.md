---
title: 重装系统
icon: ppmb icon-xitong
order: 6
category: 
  - 入门
tag:
  - 重装系统
  - u盘重装
isOriginal: true
---

## 前置要求

一个 8G 的 U 盘，如果是 Linux 则根据自己的要求来进行选择，如果使用的是纯命令的镜像可能更小，具体可以自己尝试。

## 制作 U 盘镜像

Windows 的 U 盘镜像制作比较简单，在 Windows 官网的 [下载页面](https://www.microsoft.com/zh-cn/software-download/windows11) 创建 Windows 11 安装即可，之后根据一步一步的提示进行设置即可完成 U 盘镜像的安装。

## 软件镜像

安装 [Rufus](https://rufus.ie/zh/)，之后根据其提示将设备和镜像文件选中，之后开始制作。

## BIOS 配置

开机时按 del 键，不同的主板厂商可能不同，选择 `Startup`，选中 `boot` 选项，之后通过上下键将 U 盘作为第一启动盘，之后保存并重启，一般按 `f10` 就可以。

之后重启之后即可根据提示来安装操作系统。
<Share colorful />