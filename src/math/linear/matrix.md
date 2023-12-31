---
title: 矩阵
icon: ppmb icon-juzhen
category:
  - 线性代数
tag:
  - 矩阵
  - 线性方程组
  - 向量
order: 1
isOriginal: true
---

## 线性方程组

### 二元一次方程组

对于一个二元一次方程组来说，它是一个比较简单的一个线性方程组.

$$
\begin{align}
x + 2y  &= 5 \\
2x + 3y &= 8
\end{align}
$$

二元一次方程组有三种可能的情况：

1. 两直线平行，无解
2. 两直线重合，有无数解
3. 两直线相交，有唯一解

![图一](assets/图1.png)

该图是上式的几何形式，很明显可以看到两者有一个交点.

### 线性方程组

形如

$$ 
a_{1} x_{1} + a_{2} x_{2}  + \dots + a_{n} x_{n} =b 
$$

的方程称为线性方程，称为 n 元 1 次 方程，其中 a~1~，a~2~， $\dots$ ，a~n~ 和 b 是实数，$x_{1},x_{2},\dots ,x_{n}$ 是变量.

:::tip 何为线性
对于线性来说，可以简单理解为两者之间有比例关系，只有一次项，加减以及数乘关系.
:::

含有 m 个方程和 n 个未知量的线性方程组定义为：

$$
\begin{cases}
a_{11} x_{1} + a_{12} x_{2} + \dots + a_{1n} x_{n} = b_{1} \\
a_{21} x_{1} + a_{22} x_{2} + \dots + a_{2n} x_{n} = b_{2} \\
\dots \\
a_{m1} x_{1} + a_{m2} x_{2} + \dots + a_{mn} x_{n} = b_{m}
\end{cases}
$$


如果线性方程组无解，则称该方程组是不相容的，如果线性方程组至少存在一个解，则称为方程组是相容的.



### 齐次方程组

如果矩阵的每一行结果为 0，那称为齐次方程组.齐次方程组一定是有解的，只需要所有未知数都为 0 即可.因此需要求它的一个非零解.

$$
\begin{cases}
a_{11} x_{1} + a_{12} x_{2} + \dots + a_{1n} x_{n} = 0 \\
a_{21} x_{1} + a_{22} x_{2} + \dots + a_{2n} x_{n} = 0 \\
\dots \\
a_{m1} x_{1} + a_{m2} x_{2} + \dots + a_{mn} x_{n} = 0
\end{cases}
$$


## 求解

### 线性方程组求解

如果说不考虑线性方程组的变量，可以将上文中的二元一次方程组转换为一个矩阵

$$
\begin{bmatrix}
1  & 2\\
2  & 3
\end{bmatrix} 
$$

该矩阵称为该方程组的系数矩阵，一个 $m$ 行 $n$ 列的矩阵称为 $m \times n$ 矩阵，如果像该矩阵一样行数和列数相等，则称该矩阵为方阵.

如果将矩阵的结果加上去，则可以组成一个新矩阵

$$
\left[
\begin{array}{cc|c}
1 & 2 & 5 \\
2 & 3 & 8
\end{array}
\right]
$$

这个矩阵称为增广矩阵.

如果要对这个矩阵进行求解，可以通过对二元一次方程组的求解来进行推导.

1. 2 式 - 2 倍的 1 式：
$$\begin{align*}
2x+3y-2(x+2y) &= 8 - (2\times 5) \\ 
-y&=-2\\ y&=2
\end{align*}
$$
1. 之后对其进行回代到 1 式当中
$$
\begin{align*}
x + 2 \times 2 &= 5\\   
x &= 1
\end{align*}
$$

矩阵求解和线性方程组求解运算类似，计算可称为初等行运算，初等行变量矩阵结果不变：

1. 交换两行
2. 某行乘以一个非零实数
3. 某行加上另一行的倍数


转换为矩阵运算便是以下运算：

$$
\left[
\begin{array}{cc|c}
1 & 2 & 5 \\
2 & 3 & 8
\end{array}
\right]
$$

将第一行设置为主行，其中主行的第一个非零元素称为主元.将第二行减去第一行的 2 倍，得到矩阵

$$
\left[
\begin{array}{cc|c}
1 & 2 & 5 \\
0 & -1 & -2
\end{array}
\right]
$$

这样就得到了 $-y = -2 ,y = 2$，之后通过回代法将 $y = 2$ 代入原式中即可.

### 行阶梯型

行阶梯型矩阵是一种特殊的矩阵，将矩阵转换成一种特殊的格式

1. 每一行的非零元素首项系数，其同列的其他元素都是0
2. 每一行的首项系数所在的列数随着行数的增大严格增大
3. 全为零的行必须在矩阵最下面

$$
\left[
\begin{array}{cccc}
1 & 2 & 3 & 4 \\
0 & 0 & 1 & 6 \\
0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0
\end{array}
\right]
$$

### 行最简型矩阵

行最简型矩阵式行阶梯型的又一变种，在其之上要满足每一行的第一个非零元是该列唯一的非零元，其中的非零元为 1.

:::tip 关于行最简型矩阵和行阶梯型矩阵
行最简型矩阵和行阶梯型矩阵两者之间不同的定义，有些是将非零行第一位要为 1，有些没有设置，具体应该查看你的书上的定义.
:::

$$
\begin{bmatrix}
1 & 2 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$


## 向量

### 线性运算

向量的线性运算有两种，一种是数乘和相加.两者的结合组成一个线性组合.


n $\times$ 1 或者 1 $\times$ n 的矩阵称为向量，前者为列向量，后者为行向量.

该线性方程组的结果可以表示为行向量 $(1,2)$或者列向量 $\begin{bmatrix}1\\2 \end{bmatrix}$.一般会使用列向量来继续进行表示.

如果使用向量来对上面的方程组进行表示

$$
x\begin{bmatrix}
1 \\
2
\end{bmatrix} +y\begin{bmatrix}
2 \\
3
\end{bmatrix}=\begin{bmatrix}
5 \\
8
\end{bmatrix}
$$

向量的几何表示

![图二](assets/图二.png)


## 矩阵运算

### 矩阵记号

矩阵当中使用大写字母进行表示，通过下标进行指定的元素，可以参考计算机当中的数组的访问来进行.

a~ij~ 表示矩阵 A 的第 $i$ 行第 $j$ 列的元素，可以使用（$i$，$j$）表示

$$
A = \begin{bmatrix}
a_{11} & a_{12} &\dots& a_{1n} \\
a_{21} & a_{22} &\dots& a_{2n} \\
\vdots  \\
a_{m1} & a_{m2} &\dots& a_{mn}
\end{bmatrix}
$$




### 标量乘法

参考向量，标量乘法就是矩阵中所有元素乘以该数.

设
$$
A = \begin{bmatrix}
    4 & 8 & 2 \\
    6 & 8 &10 \\
\end{bmatrix}
$$

则
$$\frac{1}{2}A = \begin{bmatrix}
    2 & 4 & 1 \\
    3 & 4 &5 \\
\end{bmatrix}
$$

### 矩阵加法

参考矩阵的数乘，$\frac{1}{2} A$ 可以看作 $A -\frac{1}{2}$，可以发现两者行数和列数相同，每一个元素都要进行相对应的加减操作.

:::tip 零矩阵
矩阵中元素都是 0 的矩阵称为零矩阵，记作 $O$.和 0 的操作相似，$$A + O = O + A = A$$.
:::

### 矩阵乘法

重新定义一下前者的线性方程组，将其定义为

$$
Ax = b
$$

其中 A 是一个 $m\times n$ 矩阵，x 为未知向量，b 为参数向量.

$$
\begin{bmatrix}
    a_{11} & a_{12} &\dots& a_{1n} \\
    a_{21} & a_{22} &\dots& a_{2n} \\
    \vdots  \\
    a_{m1} & a_{m2} &\dots& a_{mn}
\end{bmatrix}
\begin{bmatrix}
    x_{1} \\
    x_{2} \\
    \vdots  \\
    x_{n}
\end{bmatrix}=\begin{bmatrix}
    b_{1} \\
    b_{2} \\
    \vdots  \\
    b_{n}
\end{bmatrix}
$$

最终化为这个形式

$$
\begin{cases}
a_{11} x_{1} + a_{12} x_{2} + \dots + a_{1n} x_{n} = b_{1} \\
a_{21} x_{1} + a_{22} x_{2} + \dots + a_{2n} x_{n} = b_{2} \\
\dots \\
a_{m1} x_{1} + a_{m2} x_{2} + \dots + a_{mn} x_{n} = b_{m}
\end{cases}
$$

参考前者两矩阵相乘需要矩阵 $A$ 的列数等于矩阵 $B$ 的行数，否则不能相乘.新矩阵的 $i$ 行 $j$ 列元素为第一个矩阵的该行向量和第二个矩阵的该列向量数乘结果.

### 单位矩阵

单位矩阵类似于 1，在矩阵中也有一个特殊矩阵 $I$ .

$$IA =AI = A$$

该矩阵对于所有 $n\times n$ 矩阵都成立.单位矩阵的定义

$$
\delta _{ij}=\left\{\begin{matrix} 
  1 \hspace{1cm} \text{当}i=j\text{时}\\  
  0 \hspace{1cm} \text{当}i\ne j\text{时}
\end{matrix}\right. 
$$

例如一个 $3 \times 3 $ 的单位矩阵

$$
\begin{bmatrix}
1 & 0 & 0  \\
0 & 1 & 0  \\
0 & 0 & 1  \\
\end{bmatrix}
$$


### 矩阵的转置

一个矩阵原来行变成列，列变成行，称为矩阵的转置.

$$
b_{ji} = a_{ij}
$$

A 的转置记作 $A^{T}$.

### 矩阵的逆

矩阵的逆类似于倒数的性质，两方阵 $AB$ 的乘积等于 $I$，则称矩阵 $A$ 为非奇异的或可逆的，矩阵 $B$ 称为 $A$ 的逆.

:::tip 奇异矩阵和非奇异矩阵
如果矩阵可逆，则是非奇异的，矩阵不可逆则是奇异的.
:::

## 初等矩阵

简单来说，每一次的行变换，都可以看作矩阵左乘一个特殊的初等矩阵.

### 类型一

设 

$$

$$

## 向量和矩阵的关系


<Share colorful />
