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

排序是将一个数组的任意序列重新排列成一个关键字有序的序列。包含 n 个元素的序列（$E_{1} ,E_{2},\dots ,E_{n}$），对应的关键字为（$k_{1},k_{2},\dots ,k_{n},$），将原序列重新组成递减或者递增的一个序列就称为排序。

排序过程中，如果关键字相等，排序前序列 $E_{i}$ 在 $E_{j}$ 之前，排序后 $E_{i}$ 保证在 $E_{j}$ 之前，则这种排序是稳定的，如果无法保证，则称为这种排序方式是不稳定的。

排序过程中，通过内存进行排序则称为内排序，如果使用硬盘存储则称为外排序。

## 冒泡排序

冒泡排序是最基本的一个排序，基本思想是从第一个元素开始，依次比较后续的元素，两元素逆序则交换元素，这样子就可以找到最大或者最小的元素。

```java
public static void bubbleSort(int[] arr) {
    if (arr.length <=1) {
        return;
    }
    for (int i = 0; i < arr.length-1; i++) {
        boolean flag = false;
        for (int j = 0; j < arr.length-i-1; j++) {
            if (arr[j] >=arr[j+1]) {
                swap(arr, j, j+1);
                flag = true;
            }
        }
        if (!flag) {
            break;
        }
    }
}
public static void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
```

## 选择排序

选择排序是一种简单直观的排序算法。它的工作原理是每一趟排序，都从待排序的数据元素中选出最小（大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完。

```java
public static void selectionSort(int[] arr) {
    if (arr.length <= 1) {
        return;
    }
    for (int i = 0; i < arr.length; i++) {
        int minIndex = i;
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex!= i) {
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}
```

## 快速排序

快速排序是对冒泡排序的改进，原理是选择一个元素作为枢轴元素，一轮扫描后将比枢轴元素大的放在一侧，比数轴元素小的放在另一侧，使用同样的方法进行递归。

```java
public static void quickSort(int[] arr,  int start, int end) {
    if (start >= end)
        return;
    int k = arr[start];
    int i = start, j = end;
    while (i != j) {
        while (i < j && arr[j] >= k)
            --j;
        swap(arr, i, j);
        while (i < j && arr[i] <= k)
            ++i;
        swap(arr, i, j);
    }
    quickSort(arr, start, i - 1);
    quickSort(arr, i + 1, end);
}
```


## 插入排序

插入排序是简单直观的排序算法，基本思想是通过构建有序序列来对未排序数据在以排序序列从后向前扫描，找到相应位置并插入。

```java
public static void insertSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
        int temp = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
}
```

### 折半插入查询

相比较前者使用过二分查找来查找插入位置，代码如下图所示：
```java
public static void binInsertSort(int[] arr) {
    for (int i=1;i<arr.length;i++){
        int temp = arr[i];
        // 用折半查找法去查找
        int low = 0;
        int high = i-1;
        while (low<=high){
            int mid = (low+high)/2;
            if (arr[mid]>temp){
                high = mid - 1;
            }else {
                low = mid + 1;
            }
        }
        // 确定最后的位置为low或者high+1
        for (int j=i-1;j>=low;j--){
            arr[j+1] = arr[j];
        }
        // 赋值
        arr[low] = temp;
    }
}
```

## 希尔排序

希尔排序也属于插入排序，将整个待排记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录“基本有序”时，再对全体记录进行依次直接插入排序。



