## 1.描述引用计数器的工作原理和优缺点

工作原理：每一个对象空间都有一个引用计数器来统计当前对象空间被引用的次数，当新的引用关系被建立时，引用计数器就加1，引用关系被解除时，引用计数器就减1，当引用次数减为0时，GC程序就会执行，对对象空间进行销毁。

优点：

1、能及时回收垃圾，一旦当对象空间的引用计数器为0时，GC程序会立即回收空间

2、最大限度的减少程序暂停，有垃圾空间就会被及时回收，内存占满的可能性小

缺点：

1、不能回收循环引用的变量，如果存在循环引用的两个变量，当系统监测到这两个变量空间时，发现它们的引用计数都不为0，故会造成无法回收的情况

2、时间开销大，因为实时监控着对象的引用计数，一旦对象多了，时间的开销就会增大


## 2.描述标记整理算法的工作流程

第一阶段，递归遍历global下的所有可达对象及可达对象的子对象，并打上标记；

第二阶段，遍历所有对象，对没有打标记的对象进行回收

## 3.描述V8中新生代存储区垃圾回收的流程

将新生代存储空间分为From使用空间和To空闲空间两个空间，对象一开始被建立时是分配在使用空间内的，在进行标记整理时，找出的活动对象会被复制到To空间中，然后交换From空间和To空间状态，然后释放掉原来的From空间

## 4.描述增量标记算法在何时使用，及工作原理。

增量标记算法在平衡程序执行和垃圾回收效率时使用，工作原理即在程序运行时穿插着执行垃圾对象空间的标记，一边执行程序，一边执行标记算法，当程序执行完成时再最后进行回收

## 代码题1

### 练习1：

```js
let isLastInStock = fp.flowRight(fp.prop('in_stock'), fp.last)
```

### 练习2：

```js
let getFirstCarName = fp.flowRight(fp.prop('name'), fp.first)
```

### 练习3：

```js
let averageDollarValue = fp.flowRight(_average, fp.map(fp.prop('dollar_value')))
```

### 练习4：

```js
let sanitizeNames = fp.flowRight(fp.map(fp.flowRight(_underscore, fp.toLower, fp.prop('name'))))
```

## 代码题2

### 练习1：

```js
let ex1 = maybe.map(fp.map(fp.add(1)))
```

### 练习2：

```js
let ex2 = xs.map(fp.first)
```

### 练习3：

```js
let ex3 = user => safeProp('name', user).map(fp.first)
```

### 练习4：

```js
let ex4 = n => Maybe.of(n).map(parseInt)
```