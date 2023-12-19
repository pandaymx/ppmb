---
title: 方法
icon: ppmb 
category:
  - Java SE
tag:
  - 方法
  - 返回值
order: 4
isOriginal: true
---

## 简介

在 python 和 C 等语言中是函数，在 Java 当中被叫做方法，方法是程序中的最小执行单元，将重复性代码、具有独立功能的代码抽取到方法中。

## 方法的定义

格式：
```md
public static 返回值类型 方法名(参数列表){
    方法体;
    return 返回值;
}
```

### 无返回值的方法定义

```java
public static void test(){
    System.out.println("这是一个方法");
}
```

### 有返回值的方法定义

```java
public static int test2(){
    System.out.println("这是一个方法");
    return 2;
}
```

### 带参数的方法定义

前者没有写出参数列表，写一个两数累计的一个方法。

```java
public static int add(int a,int b){
    System.out.println("这是一个累加方法");
    return a + b;
}
```


## 方法的调用

方法的调用是一次使用，方法名(参数)进行使用。

```java
test();
test2();
add(5,2);
```

## 
<Share colorful />