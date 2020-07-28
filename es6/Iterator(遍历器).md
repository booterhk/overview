# 遍历器Iterator
#### 遍历器（Iterator）就是这样一种机制。它是一种接口，<font color=#FF0000 >为各种不同的数据结构提供统一的访问机制</font>。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

> #### 作用
1. 为各种数据结构提供统一的简便的访问接口
2. 使数据结构能够按照某种次序排列
3. Iterator主要提供给 for... of 使用

> #### Iterator 是一种特殊的对象结构
1. 它有 next方法，调用会返回一个结果对象
2. 对象有两个属性
3. 内部靠指针进行标记位置
```
next: {
  value: 当前值，
  done: 遍历是否结束
}
```

> #### 实现
一个结构只要部署了 Symbol.iterator 属性就具有 iterator 接口
```
var arr = [1,2,4,5];

arr[Symbol.iterator] = function () {
  var i = 0;
  vat that = this;
  return {
    var done = i <= that.length; 
    var value = done ? this[i++] : undefined
    next: {
      value,
      done
    }
  }
}
```
> #### 原生具有 iterator 接口的数据结构

***object、array、类数组对象（arguments对象、DOM NodeList 对象）、string、map,set,weakmap,weakset***

*arguments：*
**普通对象是默认没有部署这个接口的，所以arguments这个属性没有在原型上，而是在对象自身的属性上。**

```
function test(){
   var obj = arguments[Symbol.iterator]();
   console.log(arguments);
   console.log(obj.next());
   console.log(obj.next());
   console.log(obj.next());
}
test(1, 2, 3);
```
> #### 判断对象是否可迭代
```var isIterator = obj => obj != null && typeof obj[Symbol,iterator] === 'function'```

> #### for...of循环不支持遍历普通对象
Iterator的产生主要是为了使用for...of方法。而对象不像数组的值是有序的，遍历的时候根本不知道如何确定他们的先后顺序，所以要注意的是for...of循环不支持遍历对象。
如果非要遍历对象，同理对象也必须包含[Symbol.iterator]的属性并实现迭代器方法，可以通过手动利用Object.defineProperty方法添加该属性。

> #### 与之相关的循环迭代方法
for...in...、 for...of...、 for、 foreach

||for in|for of|for|foreach|
|---|-----|---|-----|-----|
|用法|用于遍历<font color=#FF0000 >数组或者对象的属性|创建一个循环来迭代可迭代的<font color=#FF0000 >对象|多次遍历<font color=#FF0000 >代码块|方法用于调用<font color=#FF0000 >数组</font>的每个元素，并将元素传递给回调函数|
|缺点|不仅遍历数字键名，还会遍历手动添加的自定义键，甚至包括原型链上的键|for of|有些情况写代码会增加复杂度，而且不能循环对象|不能使用break，continue语句跳出循环，或者使用return从函数体返回|
|可遍历数据类型|string|string|string|map,arrary；不能遍历字符串，如果硬要用则只能先把字符串转为数组再用数组方式循环|
|优点|for in|1. 简洁直接的遍历数组语法；2. 它避开了 for-in 循环的所有缺点;3. 与forEach循环不同的是，它可以使用break、continue 和 return 语句|for|foreach|


