# 遍历器Iterator
#### 遍历器（Iterator）就是这样一种机制。它是一种接口，<font color=#FF0000 >为各种不同的数据结构提供统一的访问机制</font>。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
> #### 与之相关的循环迭代方法
for...in...、 for...of...、 for、 foreach

||for in|for of|for|foreach|
|---|-----|---|-----|-----|
|用法|用于遍历<font color=#FF0000 >数组或者对象的属性|创建一个循环来迭代可迭代的<font color=#FF0000 >对象|多次遍历<font color=#FF0000 >代码块|方法用于调用<font color=#FF0000 >数组</font>的每个元素，并将元素传递给回调函数|
|可遍历数据类型|string|string|string|map,arrary；不能遍历字符串，如果硬要用则只能先把字符串转为数组再用数组方式循环|
|优点|for in|1. 简洁直接的遍历数组语法；2. 它避开了 for-in 循环的所有缺点;3. 与forEach循环不同的是，它可以使用break、continue 和 return 语句|for|foreach|
|缺点|不仅遍历数字键名，还会遍历手动添加的自定义键，甚至包括原型链上的键|for of|有些情况写代码会增加复杂度，而且不能循环对象|不能使用break，continue语句跳出循环，或者使用return从函数体返回|


