---
title: 简介
icon: ppmb icon-docker
index: false
category:
  - 博客
tag:
  - vuepress
  - vuepress-theme-hope
  - 主题
order: 1
isOriginal: true
---

## 基本介绍

Vuepress 提供了基本博客文档布局主题，Vuepress-theme-hope 则是基于该主题进行二次开发的主题，扩展了 Markdown 语法，提供了更多的功能，例如标记、流程图、公式、演示等。

## 运行环境

1. VS Code
2. node.js
3. pnpm

:::tip 提示
官方建议使用 pnpm ，yarn 也支持，但不推荐。
:::

### 参考文档

- [VS Code 的安装](../technology/vscode/intro.md#安装)


## 创建项目

选择一个纯英文路径，不能是根目录下打开 `cmd` 。

::: code-tabs

@tab pnpm

```bash
pnpm create vuepress-theme-hope [dir]
```

@tab yarn

```bash
yarn create vuepress-theme-hope [dir]
```

@tab:active npm

```bash
npm init vuepress-theme-hope [dir]
```
:::

`[dir]` 表示的是一个参数，需要使用文件夹名代替。

选择参数如下图所示，可以根据自己的需要进行选择，建议除了应用名称或者应用描述之外不要进行修改。

![选择参数](assets/创建截图.png)

## 项目命令

- `pnpm docs:dev`：启动开发服务器
- `pnpm docs:build`：构建输入或输出
- `pnpm docs:clean-dev`：清除缓存并启动开发服务器

三个命令一般是自动生成的，在 `package.json` 中进行查看：

```json
{
  "scripts": {
    "docs:build": "vuepress build src",
    "docs:clean-dev": "vuepress dev src --clean-cache",
    "docs:dev": "vuepress dev src"
  }
}
```

```sh
pnpm dlx vp-update
```

该命令用于版本升级，`@vuepress/` 开头的官方包和 Vuepress 保持相同版本，第三方插件需要保证进行兼容。

## 项目结构

```md
.
├── .github (可选的) → GitHub 配置文件存放路径
│    └── workflow → GitHub 工作流配置
│         └── docs-deploy.yml → 自动部署文档的工作流
│
├── src → 文档文件夹
│    │
│    ├── .vuepress (可选的) → VuePress 配置文件夹
│    │    │
│    │    ├── dist (默认的) → 构建输出目录
│    │    │
│    │    ├── public (可选的) → 静态资源目录
│    │    │
│    │    ├── styles (可选的) → 用于存放样式相关的文件
│    │    │
│    │    ├── config.{js,ts} (可选的) → 配置文件的入口文件
│    │    │
│    │    └── client.{js,ts} (可选的) → 客户端文件
│    │
│    ├── ... → 其他项目文档
│    │
│    └── README.md → 项目主页
│
└── package.json → Nodejs 配置文件
```

这属于基本的 Vuepress 项目结构。

## 配置文件

### Vuepress

项目通过 `.vuepress` 文件夹存放配置，`.vuepress/config.ts` 是必要的配置文件。 `js` 文件也可以，不过更推荐使用 `ts`。

```ts
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
});
```

### 配置文件拆分

将主题配置、导航栏和侧边栏拆分到单独的文件夹中。

`theme.ts`:

```ts
import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  
});
```

`config.ts`:

```ts
import theme from "./theme.js";

export default defineUserConfig({
  theme,
});
```

### 样式配置

样式配置保存在 `.vuepress/styles` 文件夹中。

- `index.scss`:注入额外的 CSS 样式。
- `config.scss`:进行样式配置。
- `palette.scss`:配置颜色和布局。

## 项目内容

### 页面生成

Vuepress 项目是以 Markdown 为中心进行生成，文件结构如下图所示。

```md
└─ src
   ├─ guide
   │  ├─ ...
   │  └─ page.md
   │  └─ markdown.md
   │  └─ README.md
   ├─ ...
   ├─ slide.md
   └─ README.md
```

对应的路由结构：

| 相对路径 | 路由路径 |  
| :--: | :--: |  
| /README.md | / |  
| /slide.md | /slide.html |  
| /guide/README.md | /guide/ |  
| /guide/slide.md | /guide/slide.html |  
| /guide/page.md | /guide/page.html |

### Markdown

每一个 Markdown 页面都会被渲染成网页，启动开发服务器会实时进行同步。

- [Markdown 教程](../technology/markdown.md)

### FrontMatter

FrontMatter 是 YAML 格式，可以认为是当前页面的配置。

```md
---
lang: zh-CN
title: 页面的标题
description: 页面的描述
---
```

一般 FrontMatter 具有最高优先级，仅对当前页面生效。

### 路径

相对路径访问方式和 Linux 等相同，但是绝对路径有些不同。

对页面来说 `src` 是根目录，对于静态资源等文件来说，是 `.vuepress/public` 为根目录。