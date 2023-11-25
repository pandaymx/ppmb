---
title: 简介
icon: ppmb 
category:
  - Spring
tag:
  - 入门
  - Hello World
order: 1
isOriginal: true
---

## 概述

### Spring是什么

Spring框架是一个Java开源框架，用于简化开发难度和开发周期。最新版本为Spring 6，最低jdk支持为Java17。

Spring框架是一个分层的、面向切面的Java应用程序的一站式轻量级解决方案。

### Spring特点

1. 依赖注入：Spring Framework提供了依赖注入（DI）的支持，使得开发者可以通过注入对象来替代手动创建对象，从而简化了代码的编写。
2. 面向切面编程：Spring Framework支持面向切面编程（AOP），使得开发者可以将横切关注点（如日志、事务等）与业务逻辑分离，从而提高了代码的可维护性和可扩展性。
3. 模块化设计：Spring Framework采用模块化设计，将框架分为多个模块，每个模块都可以单独使用或者混合使用，从而提高了系统的可维护性和可扩展性。
4. 事件驱动：Spring Framework采用事件驱动的方式来处理业务逻辑，开发者可以通过监听事件来处理系统中的异常情况，从而提高了系统的可靠性和可维护性。
5. 容器支持：Spring Framework支持容器化部署，开发者可以将应用程序打包成容器，从而方便部署和管理。
6. 高性能：Spring Framework采用了一些优化技术，如线程池、JMX监控等，从而提高了应用程序的性能和稳定性。
7. 多语言支持：Spring Framework支持多种编程语言，包括Java、Scala、Groovy等，开发者可以根据自己的喜好和需求来选择适合自己的编程语言。

## 快速入门


::: code-tabs#shell
@tab pom.xml
```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>6.0.13</version>
</dependency>
```
@tab User.java

```java
public class User {
}
```
@tab:active bean.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <bean id="user" class="xyz.ppmb.pojo.User"/>
</beans>
```

@tab: UserTest.java
```java
@Test
void name() {
    ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("bean.xml");
    Object user = context.getBean("user");
    System.out.println(user);
}
```
:::














<Share colorful />