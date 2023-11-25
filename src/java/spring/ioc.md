---
title: IOC
icon: ppmb 
category:
  - Spring
tag:
  - 控制反转
  - 依赖注入
order: 
isOriginal: true
---

## 控制反转

控制反转是一种思想，将对象的创建权力交给第三方容器负责，通过依赖注入来实现。

### 依赖注入

依赖注入指对象和对象之间的关联关系，通过注入行为让对象和对象产生关系。

## Set注入



示例代码:

::: code-tabs#shell

@tab UserDao

```java
public class UserDao {
    public void insert(){
        System.out.println("插入数据");
    }
}
```

@tab UserService

```java
public class UserService {

    private UserDao userDao;

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }
    public void save(){
        userDao.insert();
    }
}
```

@tab:active bean.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
    <bean id="userDao" class="xyz.ppmb.dao.UserDao"/>
    <bean id="userService" class="xyz.ppmb.service.UserService">
        <property name="userDao" ref="userDao"/>
    </bean>
</beans>
```

@tab UserServiceTest

```java
public class UserServiceTest {
    @Test
    void name() {
        ApplicationContext applicationContext = new ClassPathXmlApplicationContext("bean.xml");
        UserService userService = applicationContext.getBean("userService", UserService.class);
        userService.save();
    }
}
```
:::


### 构造注入



<Share colorful />