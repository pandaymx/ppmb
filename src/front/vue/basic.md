---
title: 开始
icon: ppmb icon-html5
category:
  - vue
tag:
  - 基本介绍
order: 2
isOriginal: true
---

## 响应式基础

### ref

通过 `ref` 函数声明响应式状态，实例如下：

```js
import { ref } from 'vue'

const count = ref(0)
console.log(count)
console.log(count.value)
```

`ref` 接收参数，会带回一个带有 `.value` 属性的对象。后面的两个输出结果相同。



### reactive

`reactive` 另一种声明响应式状态的方式，将内部值进行包装，将事件监听的代码进行改进。

```vue
<script setup lang="ts">
import {reactive} from 'vue';

const msg = reactive({count: 0});
</script>

<template>
  <button @click="msg.count++">count is: {{ msg.count }} </button>
</template>
```

相比较前者无需使用 `value` 来获取内部值。

:::tip reactive 与 ref 的区别
reactive 不能用于基本数据类型，建议使用 ref。
:::
## 模板语法

### 文本插值

使用双大括号进行插入值。

```vue
<script setup lang="ts">
import { ref } from 'vue';
const msg = ref('Hello Vue 3!');
</script>

<template>
  <div>{{ msg }}</div>
</template>
```

通过 `ref` 指定的值进行响应，将其赋给 `msg` 变量。


### HTML

该方法无法解析 HTML ，会转成纯文本，需要使用 `v-html` 进行解析。

```vue
<script setup lang="ts">
import {ref} from 'vue';
const msg = ref('<h1>Hello World</h1>');
</script>

<template>
  <div v-html="msg"></div>
</template>
```

### 属性绑定

通过 `v-bind:属性名` 进行绑定，使用比较多，因此可以直接改成 `:属性名`，使用没有参数的 `v-bind` 来绑定多个值。



::: code-tabs#shell

@tab 绑定属性值

```vue
<script setup lang="ts">
import {ref} from 'vue';

const msg = ref('test');
</script>

<template>
  <div :class="msg">蔡徐坤</div>
</template>

<style scoped>
.test{
  color: red;
}
</style>
```

@tab 绑定布尔值

```vue
<script setup>
import {ref} from 'vue'
const isButtonDisabled = ref(false)
</script>

<template>
<button :disabled="isButtonDisabled">Button</button>
</template>
```

@tab:active 动态绑定多个值

```vue
<script setup>
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}
</script>

<template>
<div v-bind="objectOfAttrs">你好</div>
</template>
```

:::


### 绑定表达式

前几种方式都可以绑定简单的 JavaScript 代码。

```vue
<script setup lang="ts">
import {ref} from 'vue';

const msg = ref('蔡徐坤');
</script>

<template>
  <div>{{ msg+"鸡你太美" }}</div>
</template>
```

### v-if

`v-if` 根据表达式的值的真假来移除该元素。

```vue
<script setup lang="ts">
import {ref} from 'vue';

const msg = ref(false);
</script>

<template>
  <div v-if="msg">你好</div>
</template>
```

### 事件监听

```vue
<script setup lang="ts">
import {ref} from 'vue';

const msg = ref(0);
function increment(){
  msg.value++;
}
</script>

<template>
  <button @click="increment">count is: {{ msg }} </button>
</template>
```

## 进阶

### reactive

另一种声明响应式状态的方式，将内部值进行包装，将事件监听的代码进行改进。

```vue
<script setup lang="ts">
import {reactive} from 'vue';

const msg = reactive({count: 0});
</script>

<template>
  <button @click="msg.count++">count is: {{ msg.count }} </button>
</template>
```

相比较前者无需使用 `value` 来获取内部值。

:::tip reactive 与 ref 的区别
reactive 不能用于基本数据类型，建议使用 ref。
:::
### 表单绑定

表单通过 `v-bing` 和 `v-on` 来表单的输入创建双向绑定。


<Share colorful />