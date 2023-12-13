---
title: 排序
order: 8
icon: ppmb icon-shuzu1
category:
  - 数据结构
tag:
  - 排序
isOriginal: true
---

## 基本概念

排序是将一个数组的任意序列重新排列成一个关键字有序的序列。包含 n 个元素的序列（E~1~,E~2~,...E~n~），对应的关键字为（k~1~，k~2~，...k~n~），将原序列重新组成递减或者递增的一个序列就称为排序。

排序过程中，如果关键字相等，排序前序列 E~i~ 在 E~j~ 之前，排序后 E~i~ 仍在 E~j~ 之前，则成为这种排序是稳定的，如果无法保证，则称为这种排序方式是不稳定的。

排序过程中，通过内存进行排序则称为内排序，如果使用硬盘存储则称为外排序。

## 冒泡排序

冒泡排序是最基本的一个排序，基本思想是从第一个元素开始，依次比较后续的元素，两元素逆序则交换元素，这样子就可以找到最大或者最小的元素。

```java
// 两数进行交换
public static void exchange(int[] arr, int i, int j) {
    // 设置三个变量，其中 temp 作为临时变量，之后两者进行交换
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
public int[] bubbleSort(int[] arr) {
    for (int i = 0; i < arr.length-1; i++) {
        boolean flag = false;
        for (int j = 0; j < arr.length-i-1; j++) {
            if (arr[j] <= arr[j+1]) {
                exchange(arr, j, j+1);
                flag = true;
            }
        }
        if (!flag) {
            break;
        }
    }
    return arr;
}

:::tip 交换两数的奇技淫巧

a = a+b 、b = a-b 、a = a -b 

a= a + b -(b = a);

b = a + (a = b)*0;

a = a*b、b = a/b、a = a/b

a = a^b、b = a^b、a = a^b

:::
```

## 快速排序

快速排序是对冒泡排序的改进，原理是选择一个元素作为枢轴元素，

## 插入排序


