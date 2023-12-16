---
title: AOP
icon: ppmb 
category:
  - Spring
tag:
  - 控制反转
  - 依赖注入
order: -1
isOriginal: true
---

## 面向切面编程

AOP 是对 OOP 的延申，底层是通过动态代理实现的。Spring 的 AOP 使用两种动态代理，JDK 动态代理和 CGLIB 动态代理技术。Spring 在这两种代理动态切换。

### 简介

系统中有一些系统服务有交叉业务，例如：日志、事务管理、安全等。将业务无关的代码抽取出来，组成一个独立的组件。


### 常见术语

