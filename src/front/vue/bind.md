---
title: 计算属性和绑定
icon: ppmb icon-html5
category:
  - vue
tag:
  - 基本介绍
order: 3
isOriginal: true
---

## 计算属性

### 基础

::: code-tabs

@tab 重构前

```vue
<script setup lang="ts">
import { reactive } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
</script>

<template>
  <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
</template>
```

@tab 重构后
```vue
<script setup lang="ts">
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// 一个计算属性 ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
</script>

<template>
  <span>{{ publishedBooksMessage }}</span>
</template>
```
:::

`computed()` 方法用于接收一个 getter 函数，返回一个 ref 对象，ref 会自动进行解包。

### 优势

计算属性返回值会在依赖重新更新后再次计算，没有更新前直接返回先前计算结果。

### getter 和 setter

计算属性默认是只读的，可以通过提供 getter 和 setter 实行写操作。

## 绑定

绑定之前简单讲了一些基本概念，比如通过 [`v-bind`](basic.md#属性绑定) 进行绑定。

类和样式的绑定和表单输入的绑定更加复杂。

### 类和样式的绑定



