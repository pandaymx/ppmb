---
title: 基本命令 
icon: ppmb icon-config-command
category:
  - Linux
tag:
  - 命令
  - 常用
order: 3
isOriginal: true
---

## ls

`ls [-a -l -h] [linux路径]`

ls表示以平铺形式查看当前目录。

其中a表示列出全部文件，l表示以列的形式查看，h表示更人性化表示。

```shell
ls
ls -a 
ls -la /
```

::: tip 
Window中命令为dir。
:::

## cd

通过cd目录来更换目录。


```shell
cd /
cd ~
```

::: tip
Windows中可以使用cd命令，但是在盘符中的操作是直接使用盘符:进行切换`d:`
:::
## pwd

查看当前目录，没有参数和选项。


## mkdir

`mkdir [-p] Linux路径`

-p表示自动创建不存在的文件夹。


:::tip
Windows中可以使用mkdir和md来创建。
:::

## touch

`touch Linux路径`。
创建一个文件。
## cat

`cat Linux路径`
查看文件。

## tail

查看文件尾部内容，根据文件的最新修改。

`tail [-f -num] 路径`

f表示持续跟踪，num表示查看尾部多少行，默认10行。

## more

more也可以查看文件内容，相比cat，more支持翻页。

## cp

用于赋值文件或文件夹。

`cp [-r] 参数1 参数2`

-r，可选，赋值文件夹实用。

参数1，Linux路径，表示被复制的文件或文件夹。

参数2，Linux路径，表示复制的地方。

## mv

用于移动文件或文件夹。

`mv 参数1，参数2`。

参数1，Linux路径，表示被复制的文件或文件夹。

参数2，Linux路径，表示复制的地方。

## rm

rm用于删除文件或文件夹。

`rm [-r -f] 参数1，参数2...参数n`

-r用于删除文件夹，-f表示强制删除。

后续的参数可以使用通配符。

::: tip
一定要尝试使用以下 rm -rf /*，不然你的人生一定不完整。

wsl用户要注意一下，一定要尝试。
:::


## which

用于查询命令所在位置。

```sh
which pwd
which mkdir
```

## find

### 文件名查找

`find 起始路径 -name "被查找文件名"`

```sh
find ~ -name "ppmb"
```

### 文件大小查找

`find 起始路径 -size +|-n[KMG]`

- +或-表示大于和小于
- n表示数字
- KMG表示单位
```sh
find / -size -10k
```

## grep

用于从文件中过滤文件行。

`grep [-n] 关键字 文件路径`

-n，在结果中显示匹配的行号、关键字表示过滤的关键字，文件路径可以作为管道左侧的输出。

```sh
grep -n icon README.md
```

## wc

用于做数量统计，统计文件的行数、单词数量等。

`wc [-c -m -l -w] 文件路径`

c表示统计字节数，m表示统计字符数量，l统计行数，w统计单词数量


```sh
wc -cmlw README.md
```

## 管道

管道符：| 用于左边命令结果作为右边输出。

```sh
cat README.md |grep icon
```

## echo

`echo 输出内容`：用于在命令行输入指定内容。

```sh
echo "Hello World"
```

### 特殊用法

\`pwd`通过反引号包裹的内容，会作为命令执行。

```sh
echo `pwd`
```

### 重定向符

\>和>>两个，第一个表示覆盖，第二个表示追加。

```sh
echo "Hello World" > pwd.txt
echo "Hello World" >> pwd.txt
```




## tar

Linux常用的压缩格式为tar和gzip。

.tar是归档文件，只是对文件的一个封装。.gz是常见的压缩格式。


`tar [-c -v -x -f -z -C ]` 参数n

c，创建压缩文件，v显示压缩和解压进度，x解压模式，f要创建的文件，-z，gzip模式，C表示解压目的地。

```sh
#压缩
tar -zcvf test.tar.gz *
#解压
tar -xvf test.tar
#解压到指定位置
tar -xvf test.tar -C ~/code/
```



### 压缩

## 安装命令

### yum

yum是RPM包软件管理器，用于自动化配置Linux软件。

`yum [-y] [install|remove|search] 软件名称`

其中-y用于自动确认安装或卸载过程。

### apt

apt是Debian
<Share colorful />