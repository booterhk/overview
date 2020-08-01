## Set
> 集合的概念我们初中数学就学过了，就是里面不能有重复元素，这里也是一样。
### 特性
* set 可以接受一个数组或者 Iterator 结构或者其他数据结构作为参数
* set 可以用作数组去重
```js
const a = [new Set([1,2,4,5,4])]//[1,2,4,5]
```
* set 可以用作字符串去重
```js
const a = [new Set('abbbcsdd')]//abcsd
```
* ***<font color=red> 向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），主要的区别是向 Set 加入值时认为NaN等于自身，而精确相等运算符认为NaN不等于自身。</font>***
```js
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);
set.add(b);
set // Set {NaN}
```
上面代码向 Set 实例添加了两次NaN，但是只会加入一个。这表明，在 Set 内部，两个NaN是相等的。

* 两个对象总是不相等的。

### Set 实例的属性和方法

* Set 结构的实例有以下属性。
  * Set.prototype.constructor：构造函数，默认就是Set函数。
  * Set.prototype.size：返回Set实例的成员总数。

* Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。  
  * Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
  * Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
  * Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
  * Set.prototype.clear()：清除所有成员，没有返回值。

* 遍历
  * Set 结构的实例有四个遍历方法，可以用于遍历成员。
    * Set.prototype.keys()：返回键名的遍历器
    * Set.prototype.values()：返回键值的遍历器
    * Set.prototype.entries()：返回键值对的遍历器
    * Set.prototype.forEach()：使用回调函数遍历每个成员

## WeakSet
> 与 set 的不同
  * WeakSet成员只能是对象
  * WeakSet 对象都是弱引用，即垃圾回收不会考虑 WeakSet 对该对象的引用。也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

* ***这是因为垃圾回收机制依赖引用计数，如果一个值的引用次数不为0，垃圾回收机制就不会释放这块内存。结束使用该值之后，有时会忘记取消引用，导致内存无法释放，进而可能会引发内存泄漏。<font color=red>WeakSet 里面的引用，都不计入垃圾回收机制，所以就不存在这个问题</font>。因此，WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。只要这些对象在外部消失，它在 WeakSet 里面的引用就会自动消失。由于上面这个特点，WeakSet 的成员是不适合引用的，因为它会随时消失。另外，由于 WeakSet 内部有多少个成员，取决于垃圾回收机制有没有运行，运行前后很可能成员个数是不一样的，而垃圾回收机制何时运行是不可预测的，<font color=red>因此 ES6 规定 WeakSet 不可遍历</font>。***  
`这些特点同样适用于本章后面要介绍的 WeakMap 结构`

* WeakSet 是一个构造函数，可以使用new命令，创建 WeakSet 数据结构。作为构造函数，WeakSet <font color=red>可以接受一个数组或类似数组的对象作为参数</font>。（实际上，任何具有 Iterable 接口的对象，都可以作为 WeakSet 的参数。）该数组的所有成员，都会自动成为 WeakSet 实例对象的成员。
```js
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
// WeakSet {[1, 2], [3, 4]} a是一个数组，它有两个成员，也都是数组。将a作为 WeakSet 构造函数的参数，a的成员会自动成为 WeakSet 的成员
```
```js
const b = [3, 4];
const ws = new WeakSet(b);
// Uncaught TypeError: Invalid value used in weak set(…) 数组b的成员不是对象，加入 WeakSet 就会报错。
```
* weakset结构有以下三个方法
  * Delete
  * has
  * add

* WeakSet没有size,不能遍历

## Map

>