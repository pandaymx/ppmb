---
title: Markdown
icon: ppmb icon-markdown
category:
  - 实用技术
tag:
  - 笔记
  - pdf
order: 1
isOriginal: true
---

## 简介

Markdown 是一种轻量级的标记语言，将普通文本转换成 HTML 文档，因此 markdown 文档可以直接使用 HTML 语句。

### 常用工具

建议使用 VS Code 或者 Typora 来进行使用。

VS Code 中推荐使用插件 [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) 、[Markdown Preview Github Styling](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles) 和 [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)。

### 使用场景

很多个人博客都是通过 markdown 来进行编写的。

GitHub 中的 README 文件基本上都是使用 markdown 进行编写的。

## 基本语法

### 标题

标题可以通过添加添加#号来添加。一级标题为1个 #，六级标题为6个 #。建议一级标题只使用一个。

建议在 # 和后续的文本之间使用空格来进行分隔。

```md
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

演示效果：

> # 一级标题
> ## 二级标题
> ### 三级标题
> #### 四级标题
> ##### 五级标题
> ###### 六级标题

### 段落和换行

换行使用一个回车进行换行。

Markdown中的段落不建议使用中文中习惯的首行缩进，直接使用两个以上回车进行分隔。


```md
第一段第一行
第二行

第二段
```

演示效果：

> 第一段第一行
> 第二行
> 
> 第二段

### 特殊语法

主要有三种特殊语法，斜体、加粗和粗斜体。

| 名称  | 格式          |
|-----|-------------|
| 斜体  | \*文本*       |
| 粗体  | \*\*文本**    |
| 粗斜体 | \*\*\*文本*** |
|分割线|---|

```md
*斜体*，**粗体**，***粗斜体***

---
```

演示效果：

*斜体*，**粗体**，***粗斜体***

---  

:::tip 
---是分割线，但是也可以使用它来作为标题，因此需要使用一个回车进行分割。
:::
### 引用

创建引用需要在段落前添加 \>。

块引用也可以进行嵌套。

```md
> 这是一个引用

>嵌套语法
>
> > 第二层引用
> # 一个一级标题
```

演示效果：

> 这是一个引用

> 嵌套语法
>
> > 第二层引用
> # 一个一级标题

### 列表

列表主要分为有序列表和无序列表。

#### 有序列表

有序列表使用数字和 . 便可创建有序列表。

```md
1. 第一列
2. 第二列
3. 第三列
```

演示效果：

1. 第一列
2. 第二列
3. 第三列

#### 无序列表

无序列表使用 - 创建。

```md
- 第一
- 第二
- 第三
```
演示效果：

- 第一
- 第二
- 第三

#### 嵌套

列表通过一个制表符进行分割。

```md
1. 123
  > 这是一个引用
```

1. 123
   > 这是一个引用

### 代码

使用反引号进行包裹便可表示为代码。

```md
`代码`
```


演示效果：

`代码`

### 链接

链接文本在中括号内，地址在后面的括号中，引用包裹的内容是提示文本。

```md
[百度](https://www.baidu.com "百度一下你就知道")
```
### 图片

图片相比较于连接，只是添加了一个 !。

```md
![图片](/logo.jpg)
```




![图片](/logo.jpg)

### 转义字符

当某些字符需要按照原本的内容来显示时，需要使用转移字符\来对字符进行转移。

```md
\![百度](https://www.baidu.com)
```

演示效果：

\![百度](https://www.baidu.com)

## 扩展语法

### 表格

Markdown 使用三个连字符创建每列的标题，并使用\|来分隔每列。

```
| 测试| 有限|
| --- | ---|
|你好| 你好|
|我爱你|你爱我|
```

呈现输出如以下所示：

| 测试  | 有限  |
|-----|-----|
| 你好  | 你好  |
| 我爱你 | 你爱我 |

对齐方式：

```
| 测试 | 有限 |你好|
|:----|:----:|----:|
| 你好 | 你好 |你好|
|我爱你|你爱我|蜜雪冰城甜蜜蜜|
```
第一种表示左对齐，第二种表示居中对齐，第三种表示右对齐。



### 代码块

可以通过三个\`来创建代码块。其后可以添加一种语言，也可以不添加


\```python<br>
print('hello world')<br>
\```<br>


效果如下所示：

```python
print('hello world')
```

### 列表

对需要定义的列表在前方添加冒号加空格。

```md
第一列
: 我

第三人称
: it
: he
: she
```

### 删除线

使用两个~~来对文档添加删除线。

`~~你好~~`

演示效果：
~~你好~~

### 任务列表

通过一个-加空格加上[]来创建一个复选框，如果需要选中则在[]中添加一个x。

```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

演示效果：

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Emoji

可以直接通过Emoji简码进行输入。

例如：`:tent`:

演示效果如下：

:tent:

[地址](https://gist.github.com/rxaviers/7360908)

### 数学公式

数学公式主要是通过 Latex 语法来进行支持，主要分为两种，第一种是行内公式，第二种是单行公式。

```md
$\frac{a}{b}$
$$\frac{a}{b}$$
```

$\frac{a}{b}$
$$\frac{a}{b}$$

具体可以查看 Latex 数学公式。

<Share colorful />