---
title: HTML
icon: ppmb icon-html5
index: false
category:
  - HTML
tag:
  - 语法
order: 1
isOriginal: true
---

## 介绍

HTML 是超文本标记语言（hyper text markup language）的缩写。

如今一般是使用 HTML 5 版本。

### 新手入门

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <div>Hello World</div>
</body>
</html>
```

第一行用来表示这是一个 html 5 页面，`<html> </html>` 写所有的 html 代码，`<head> </head>` 其中是一些头信息，`<body> </body>` 中是具体的代码。

### 开发环境

VS Code + Google浏览器 (Edge浏览器)
 
:::tip Google 浏览器和 Edge 浏览器的区别 
没有区别，相当于换皮，一个无须翻墙就能使用的插件下载功能。
:::

### 注释

html 中的注释和 xml 中注释类似 `<!-- 注释内容 -->`

```html
<!-- 不会被执行 -->
```


## 元素组成

一个 html 元素例如 `<div> Hello World</div>` 主要部分有：
1. 开始标签：`<div>`
2. 结束标签：`</div>`，部分标签可以没有结束标记
3. 内容：Hello World，部分标签可以没有内容
4. 属性：不是所有的元素都有属性，例如 `<div class="hello_world">`，可以包含多个属性




<AutoCatalog/>