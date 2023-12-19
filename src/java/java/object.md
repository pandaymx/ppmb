---
title: 面向对象
icon: ppmb 
category:
  - Java SE
tag:
  - 类
order: 5
isOriginal: true
---

## 基本概念

### 面向对象

面向对象是一种编程思想，C 语言是少数的面向过程的语言，现在大部分编程语言都是面向过程的。

### 类

类将某一事物的共性进行抽象。

### 对象

对象是具有状态和行为的具体实体，Java中的对象将状态定义为成员变量，通过方法来定义为行为

## 基本特性

### 封装

将数据和操作数据的代码封装在一起，隐藏数据的实现细节，只提供对数据的操作，这样可以提高代码的复用性，也方便维护和修改。

### 继承

继承是面向对象编程的基本特征之一，通过继承可以提高代码的复用性，子类可以继承父类的属性和方法，从而实现代码的复用。

### 多态

多态是面向对象编程的另一个基本特征，通过多态可以使得父类引用指向子类对象，从而实现父类引用的多态性，即父类引用可以指向子类对象，也可以指向父类对象。

## 使用

### 类

定义一个类通过 `class` 关键字进行指定，其中包含成员变量和成员方法，成员变量可以不附关键字，成员方法不使用 `static` 修饰。

```java
public class Student {
    String name;
    int age;

    public void say(){
        System.out.println("我会说话");
    }
}
```

### 对象的使用

```java
Student student = new Student();
student.name= "蔡徐坤";
student.age = 18;
student.say();
```

通过 `new` 关键字来创建一个对象，同时将该值赋给一个类变量，通过对象名.变量名对变量进行使用，通过对象名.方法名()来对方法进行调用。

## this 关键字

如果在方法内有一个同名变量，则会造成变量难以正常理解，因此需要使用 `this` 关键字来解决。

```java
class Student {
    String name;
    int age;
    public void say(String name,int age) {
        System.out.println("我叫" + this.name + "，今年" + age + "岁");
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        student.name="皮皮萌宝";
        student.say("蔡徐坤",18);
    }
}

```

最终输出结果为 `我叫皮皮萌宝，今年18岁`。变量的使用参考就近原则，因此 `this.name` 使用的是成员变量。


## 权限修饰符

| 修饰符 | 说明 |
| :----: | :----: |
| public | 公共修饰符，可以被任何类访问 |
| protected | 受保护修饰符，可以被同一个包中的类和子类访问 |
| private | 私有修饰符，只能被本类访问 |
|空|默认的修饰符|

常用的是 `private` 进行修饰。

```java
public class Student {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
```

## Java Bean

由于封装的特性，因此对于变量的访问不能这样进行，因此选

<Share colorful />