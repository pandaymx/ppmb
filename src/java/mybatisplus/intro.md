---
title: 简介
icon: ppmb 
category:
  - Mybatis Plus
tag:
  - 简介
  - 入门
order: 1
isOriginal: true
---

## 概述

MyBatis-Plus （简称 MP）是一个 MyBatis 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。

### 特性

1. 无侵入
2. 损耗小
3. CRUD操作
4. 支持Lambda表达式
5. 支持主键自动生成
6. 内置代码生成器
7. 内置分页插件
8. 支持多种数据库

## 入门程序

### 数据库设置

```sql
CREATE DATABASE IF NOT EXISTS mybatisplus;

USE mybatisplus;

DROP TABLE IF EXISTS user;

CREATE TABLE IF NOT EXISTS user
(
    id      BIGINT      NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT '主键',
    name    VARCHAR(30) NOT NULL COMMENT '姓名',
    age     INT                  DEFAULT 18 COMMENT '年龄',
    deleted INT         NOT NULL DEFAULT 0 COMMENT '逻辑删除',
    version INT         NOT NULL DEFAULT 0 COMMENT '乐观锁'
    );

DELETE FROM user;

INSERT INTO user (id, name, age)
VALUES (1, 'Jone', 18),
       (2, 'Jack', 20),
       (3, 'Tom', 28),
       (4, 'Sandy', 21),
       (5, 'Billie', 24);

```

### 依赖

```xml
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <scope>runtime</scope>
</dependency>
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>3.5.4</version>
</dependency>
```

### 配置

```yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/mybatisplus
    username: root
    password: 123456
```

### 启动类

```java
@SpringBootApplication
@MapperScan("xyz.ppmb.mapper")
public class MybatisplusApplication {

    public static void main(String[] args) {
        SpringApplication.run(MybatisplusApplication.class, args);
    }

}
```

### 编码

```java
// 实体类
@Data
@TableName("user")
public class User {
    @TableId
    private Long id;
    private String name;
    private Integer age;
    private Integer deleted;
    private Integer version;
}
```

```java
// Mapper类
public interface UserMapper extends BaseMapper<User> {
}
```

### 测试

```java
@Resource
private UserMapper mapper;

@Test
void contextLoads() {
    List<User> users = mapper.selectList(null);
    users.forEach(System.out::println);
}
```



<Share colorful />