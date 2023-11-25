---
title: 基础
icon: ppmb icon-jichuguanli
category:
  - Python
tag:
  - 基础
  - 语法
order: 1
isOriginal: true
---

## 简介

python 是解释型语言，是一种高级语言。python 2 已经被淘汰，建议使用 python 3。

### 主要用途

python 如今是人工智能中的主要语言，python 作为一种上手简单的语言，也慢慢成为其他从业者需要掌握的语言。

### 安装


[网址](https://www.python.org/)。Windows 下安装可以直接参考 exe 中的安装。Linux 下安装可以直接使用 yum 或者 apt 的安装方式。

```sh
sudo apt install python3
```

### 环境变量

这两种方式无需配置环境变量。

### 集成开发环境

主流是以 JetBranins 公司开发的一种类 IDEA 的开发工具。 一种是 VS Code 搭建 python 环境。需要在 VS Code 中安装 python 官方插件。

## Hello World

```python
print("Hello World")
```

## 标识符

由字母、数字和下划线组成，不能以数字开头，区分大小写，不能使用保留字。

::: tip 保留字
保留字是 python 中具有特殊含义的词。
:::

## 缩进

相比较于 C 、 C++ 这种语言，python 采用行和缩进来进行代码层级的划分。

```python
if True:
    print("true")
else:
    print("false")
```

需要有严格缩进，一般是使用一个 `tab` 或者四个空格来进行缩进，缩进不规范也会报错。

## 注释

注释需要使用
<Share colorful />
