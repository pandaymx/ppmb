---
title: 反射
icon: ppmb 
category:
  - Java SE
tag:
  - 反射
  - 提高
order: -2
isOriginal: true
---

## 简介

反射是在程序运行时动态加载类并获取类的详细信息，从而操作类或对象的属性和方法。

### 应用场合

编译时可能不知道类或对象可能属于哪个类，程序只能依靠运行时信息来发现该对象和类的真实信息。

### 优点

反射在运行时获取类的各种内容，进行反编译，能够灵活的创建方便的代码，更加容易实现面向对象。

### 缺点

反射会消耗一定的系统资源，会忽略权限检查，可能导致安全性问题。

## 类

1. Class.forName("全类名")
2. 类名.class
3. 对象.getClass()

```java
public class Reflection {
    public static void main(String[] args) throws Exception {
        // 1. Class.forName("全类名")
        Class<?> clazz = Class.forName("com.example.reflection.Reflection");
        System.out.println(clazz);

        // 2. 类名.class
        Class<?> clazz2 = Reflection.class;
        System.out.println(clazz2);

        // 3. 对象.getClass()
        Object obj = new Reflection();
        Class<?> clazz3 = obj.getClass();
        System.out.println(clazz3);
    }
}
```

## 对象




<Share colorful />