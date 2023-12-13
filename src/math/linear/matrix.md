---
title: 矩阵
icon: ppmb icon-juzhen
category:
  - 线性代数
tag:
  - 矩阵
  - 线性方程组
order: 1
isOriginal: true
---

## 简介

python 是计算机编程语言，是当下最流行的编程语言，主要用于人工智能、 Web 开发、数据分析、机器学习等。

python 可以作为最简单的编程语言入门，python 是一种编译型语言，运行速度较慢。

python 分为两个大版本，一个 python 2，一个 python 3。推荐使用 python 3 ，两者差距非常大。


### 主要用途

python 如今是人工智能中的主要语言，python 作为一种上手简单的语言，也慢慢成为其他从业者需要掌握的语言。

### 安装


[网址](https://www.python.org/)。Windows 下安装可以直接参考 exe 中的安装。Linux 下安装可以直接使用 yum 或者 apt 的安装方式。

```sh
sudo apt install python3
```

### 常见解释器

CPython：python 官方默认解释器，C 语言编写的，可以在多个平台运行。

IPython：基于 CPython 实现的交互式解释器，提供强大的交互功能。

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

python 中使用行和缩进来代替其他语言中的 {} 。缩进必须严格执行，否则会报错，一般一个缩进是四个空格或者一个 tab 制表符。

```python
if True:
    print("true")
else:
    print("false")
```

需要有严格缩进，一般是使用一个 `tab` 或者四个空格来进行缩进，缩进不规范也会报错。

## 注释

可以使用两种，一种是使用 # 来进行单行语句的标识，一种是使用 `"""` 、 `'''` 包裹的多行语句。

## 变量

python 中的变量不需要进行类型声明，通过进行赋值之后类型即可确定。

```py
counter = 100
```

可以同时对多个变量进行赋值。还可以对多个对象指定多个值。

```py
a = b = c = 1
```

## 数据类型

数据类型是

### 数字

数字分为四种，整型、浮点型、布尔型和复数型。没有大小限制，可以任意使用。

### 字符串

字符串中使用 `'` 和 `"` 包裹的内容称为字符串，两者效果相同，如果是 `'''` 或者 `"""` 可以指定一个多行字符串。

## 输出

## import

python 中使用 `import` 或者 `from ... import` 来导入相应的模块。前者用于导入整个模块，后者用于导入某个函数。

```python
import sys
from sys import argv,path
```


<Share colorful />
