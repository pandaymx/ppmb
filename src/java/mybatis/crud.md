---
title: 基本映射
icon: ppmb icon-xiangmujianjie
category:
  - MyBatis
tag:
  - 基本
  - 增删改查
order: 2
isOriginal: true
---

## 

MyBatis本质上是对JDBC的封装，是一个持久层框架。

1. 支持定制化SQL、存储过程、基本映射以及高级映射
2. 避免了所有的JDBC代码中手动设置参数以及获取结果集
3. 支持XML开发，也支持注解式开发
4. 支持动态SQL的编写

### 版本介绍

- idea 2022以后的版本
- MySQL：8版本
- JDK: Java17

## 入门程序

创建一个基本的maven程序。

::: code-tabs#shell

@tab pom.xml

```xml
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.5.13</version>
</dependency>
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <version>8.1.0</version>
</dependency>
```
@tab 数据表


```sql
CREATE DATABASE IF NOT EXISTS mybatis;
       
USE mybatis;

DROP TABLE IF EXISTS user;

CREATE TABLE user
(
    id BIGINT(20) NOT NULL COMMENT '主键ID',
    name VARCHAR(30) NULL DEFAULT NULL COMMENT '姓名',
    age INT(11) NULL DEFAULT NULL COMMENT '年龄',
    email VARCHAR(50) NULL DEFAULT NULL COMMENT '邮箱',
    PRIMARY KEY (id)
);
DELETE FROM user;

INSERT INTO user (id, name, age, email) VALUES
                                            (1, 'Jone', 18, 'test1@baomidou.com'),
                                            (2, 'Jack', 20, 'test2@baomidou.com'),
                                            (3, 'Tom', 28, 'test3@baomidou.com'),
                                            (4, 'Sandy', 21, 'test4@baomidou.com'),
                                            (5, 'Billie', 24, 'test5@baomidou.com');
```
@tab mybatis-config.xml
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "https://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <environments default="development">
        <environment id="development">
            <transactionManager type="JDBC"/>
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.cj.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://localhost:3306/mybatis"/>
                <property name="username" value="root"/>
                <property name="password" value="123456"/>
            </dataSource>
        </environment>
    </environments>
    <mappers>
        <mapper resource="mapper/UserMapper.xml"/>
    </mappers>
</configuration>
```

@tab User.java

```java
@Data
public class User {
    private Long id;
    private String name;
    private Integer age;
    private String email;
}
```

@tab UserMapper.java

```java
public interface UserMapper {
    User selectById(int id);
}
```

@tab UserMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "https://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="xyz.ppmb.mapper.UserMapper">
    <select id="selectById" resultType="xyz.ppmb.pojo.User">
        select * from user where id = #{id}
    </select>
</mapper>
```

@tab Test.java

```java
public class Main {
    public static void main(String[] args) throws IOException {
        String resource = "mybatis-config.xml";
        InputStream inputStream = Resources.getResourceAsStream(resource);
        SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);
        SqlSession session = sqlSessionFactory.openSession();
        UserMapper mapper = session.getMapper(UserMapper.class);
        User user = mapper.selectById(1);
        System.out.println(user);
    }
}
```
:::

在resources目录下创建mybatis-config.xml，UserMapper.xml放在resources下的mapper文件夹中。

## 日志

### 官方日志

mybatis-config.xml文件中添加代码(需要放在environments标签对前)：

```xml
<settings>
    <setting name="logImpl" value="STDOUT_LOGGING" />
</settings>
```

### logback日志

导入依赖：

```xml
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.4.11</version>
    <scope>test</scope>
</dependency>
```

resources中创建logback.xml文件：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="false">
    <!--定义⽇志⽂件的存储地址-->
    <property name="LOG_HOME" value="/home"/>
    <!-- 控制台输出 -->
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <!--格式化输出：%d表示⽇期，%thread表示线程名，%-5level：级别从左显示5
           个字符宽度%msg：⽇志消息，%n是换⾏符-->
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n
            </pattern>
        </encoder>
    </appender>
    <!-- 按照每天⽣成⽇志⽂件 -->
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!--⽇志⽂件输出的⽂件名-->
            <FileNamePattern>${LOG_HOME}/TestWeb.log.%d{yyyy-MM-dd}.log
            </FileNamePattern>
            <!--⽇志⽂件保留天数-->
            <MaxHistory>30</MaxHistory>
        </rollingPolicy>
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <!--格式化输出：%d表示⽇期，%thread表示线程名，%-5level：级别从左显示5个字符宽度%msg：⽇志消息，%n是换⾏符-->
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n
            </pattern>
        </encoder>
        <!--⽇志⽂件最⼤的⼤⼩-->
        <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">
            <MaxFileSize>100MB</MaxFileSize>
        </triggeringPolicy>
    </appender>
    <!--mybatis log configure-->
    <logger name="com.apache.ibatis" level="TRACE"/>
    <logger name="java.sql.Connection" level="DEBUG"/>
    <logger name="java.sql.Statement" level="DEBUG"/>
    <logger name="java.sql.PreparedStatement" level="DEBUG"/>
    <!-- ⽇志输出级别,logback⽇志级别包括五个：TRACE < DEBUG < INFO < WARN < ERROR -->
    <root level="DEBUG">
        <appender-ref ref="STDOUT"/>
        <appender-ref ref="FILE"/>
    </root>
</configuration>
```


## 封装工具类



```java
public class MybatisUtils {
    private static SqlSessionFactory sqlSessionFactory;

    static {
        try {
            SqlSessionFactoryBuilder sqlSessionFactoryBuilder = new SqlSessionFactoryBuilder();
            sqlSessionFactory = sqlSessionFactoryBuilder.build(Resources.getResourceAsStream("mybatis-config.xml"));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    public static SqlSession openSession() {
        return sqlSessionFactory.openSession(true);
    }
}
```
<Share colorful />