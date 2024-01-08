---
title: 开始
icon: ppmb icon-html5
category:
  - vue
tag:
  - 基本介绍
order: 1
isOriginal: true
---


## 简介

### Vue 介绍

Vue 是一个构建用户界面的渐进式框架。提升了开发效率。 `Vue 2` 已经停止更新，建议使用 `Vue 3`。

:::tip 渐进式框架
缓而图之，可以部分界面使用 Vue 功能，不像 Angular 有强烈的排他性。
:::


### 单文件组件

通过构建工具创建的 Vue 项目，使用类似于 HTML 的语法来写 vue 组件。组件扩展名以 `.vue` 结尾。

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
```

`script` 标签保存 JavaScript 代码，`style` 标签保存 CSS 代码，`template` 标签保存 HTML 代码。

### API 风格

选项式 API 和组合式 API。选项式 API 通过 `script setup` 进行标记，从而简化操作，后续不会讲解组合式 API，以选项式 API 为主。


::: code-tabs

@tab 选项式

```vue
<script>
export default{
  data(){
    return{
      msg: "Hello"
    }
  }
}
</script>

<template>
{{ msg }}
</template>
```

@tab 组合式

```vue
<script setup>
import {ref} from 'vue'
const msg = ref("Hello")
</script>

<template>
{{ msg }}
</template>
```
:::


## 快速入门

### 线上体验

很多网站都有线上编写代码的方式，具体可自己百度进行查看。

[Vue 官网](https://play.vuejs.org/#eNo9jcEKwjAMhl/lt5fpQYfXUQfefAMvvRQbddC1pUuHUPrudg4HIcmXjyRZXEM4zYlEJ+T0iEPgXjn6BB8Zhp46WUZWDjCa9f6w9kAkTtH9CRinV4fmRtZ63H20Ztesqiylphqy3R5UYBqD1UyVAPk+9zkvV1CKbCv9poMLiTEfR2/IXpSoXomqZLtti/IFwVtA9A==)、[JSFiddle](https://jsfiddle.net/yyx990803/2ke1ab0z/)

### node 项目

```sh
npm create vue@latest
```

根据自己的需求选择需要的功能，之后通过以下命令开启服务器。

```md
> cd <your-project-name>
> npm install
> npm run dev
```

也可以使用 vite 来创建。

```sh
pnpm create vite my-vue-app --template vue
```

按照提示命令打开服务器即可。

推荐使用 VS Code + Volar 进行开发。

### CDN

在 HTML 中通过 `script` 标签进行引入。

```js
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

CDN 这种方式更简单，但是无法使用 vue 组件。CDN 的使用不进行讲解，因为大部分都是前后端开发，不常使用这种开发方式。
## 创建应用

 
```js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')
```

1. 通过 `createApp` 创建 vue 应用实例，可创建多个。

2. `import App from './App.vue'` 从另一个文件导入根组件。

3. `app.mount(#app)` 则是挂载应用。


<Share colorful />