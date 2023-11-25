---
title: 权限
icon: ppmb icon-quanxian
category:
  - Linux
tag:
  - 权限
order: 5
isOriginal: true
---


## 账户

### root
Linux中最大权限账户名为：root。

root拥有最大的操作权限。


### 普通用户

普通用户一般在HOME目录中不受限，大部分只有只读和执行权限。

### 修改用户

`su [-] [用户名]`来切换用户。

-符号表示切换用户加载环境变量，用户名表示切换的用户。

普通用户切换到其他账户需要提供密码，使用root用户切换无需密码。

### sudo 

sudo为普通的命令授权，可以临时获得root身份。

## 用户和用户组

Linux是多用户管理系统，可以配置多个用户和多个用户组，用户可以加入多个用户组中。

### 用户组

```sh
#创建用户组
groupadd test
#删除用户组
groupdel text
```

### 用户 

#### 创建用户

`useradd [-g -d] 用户名`

-g用来指定用户的组，不指定-g，会创建同名用户组并自动加入，已经存在同名组则必须使用。-d用来指定用户的路径，不指定则默认在/home/用户名。

```sh
useradd -g test test
```

#### 删除用户

```sh
userdel -r test
```
会删除/home/test目录，不设置-r则保留。

#### 查看用户

```sh
id test
```

如果没有用户则查看当前的用户信息。

#### 修改用户

```sh
usermod -aG test2 test
```


将用户从添加到test2用户组中。

## 权限控制

通过`ls -l`来查看文件属性和文件所属的用户和组。

![ls结果图](https://www.runoob.com/wp-content/uploads/2014/06/file-llls22.jpg)

- 第一位表示类型，d表示目录，-表示文件。
- 234位表示文件所有者权限，r表示读，w表示写，x表示执行。
- 567位表示同组用户的权限。
- 8910位其他用户权限。

![权限图](https://www.runoob.com/wp-content/uploads/2014/06/363003_1227493859FdXT.png)


<Share colorful />