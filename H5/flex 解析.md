## flex属性-flex:1 到底是什么

> flex 属性是 flex-grow, flex-shrink, flex-basis 的集合

#### flex-grow: 定义项目的放大比例 <font color='red'>非负值</font>
* 默认为0，即即使存在剩余空间，也不会放大
* 所有项目都为1，等分剩余空间（自动放大占位）
* 项目为 n,占据空间为 1的 n 倍

#### flex-shrink 定义项目的缩小比例 <font color='red'>非负值</font>
* 默认为 1，如果空间不足，项目将会缩小
* 所有项目 flex-shrink为 1，空间不足时等比缩小
* 为 0时，空间不足时不会缩小
* 为 n时，空间不足时缩小比例为 1的 n 倍

#### flex-basis 定义分配多余空间之前，项目占据主轴空间，浏览器根据此属性计算主轴是否还有剩余空间

* 默认为 auto 时表示项目原本大小
* 设置后项目将占据固定空间

所以 flex 默认值为 flex: 0 1 auto （不会放大会缩小）
flex: 1 1 auto 表示（自动放大自动缩小）
flex: 0 0 auto 表示（不放大也不缩小）

