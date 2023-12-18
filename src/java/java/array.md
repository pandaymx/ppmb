---
title: 数组
icon: ppmb icon-shuzu
category:
  - Java SE
tag:
  - 定义
  - 数组
order: 3
isOriginal: true
---

## 简介

数组是 Java 存储多种数据的集合，特点是不可改变，只能存储相同的数据类型。

## 数组的声明

数组的声明有两种格式，一种是 C++ 格式，一种是 Java 格式。以定义 int 型数组为例：

```java
// C++ 格式
int arr[];
// Java 格式
int[] arr2;
```


## 数组的初始化

数组的初始化也叫数组的创建，一般有两种方式。

### 静态初始化

静态初始化完整格式时 `数据类型[] 变量名 = new 数据类型[]{元素1、元素2、...}`，也可以将 `new 数据类型[]` 省略。

```java
int[] arr = {1,2,3,4,5}
```

### 动态初始化

```java
int[] arr2 = new int[5];
arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
```

## 数组元素的访问

对于数组元素的访问，当初始化之后，长度一定，索引从 0 开始，访问使用 `变量名[索引值]` 进行访问。

```java
int[]  arr = {1,2,3,4,5}
System.out.println(arr[0]);
```
<Share colorful />