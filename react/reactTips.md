# react 知识点 tips

### 1.高阶组件(HOC) , render props 以及 hook 的对比和用处.

#### 高阶组件（HOC）
  
  > 定义
    
    1.创建了一个函数，函数接收组件组件作为参数，还支持参数传递
    2.基于该组件返回了一个重新包装后的组件
  > 优缺点

    1.提供一种组件融合优化的方式
    2.不会影响到内层组件的状态，降低耦合度
    3.增大了调试和修复代码的难度
#### render props
  
  > 定义
    
    1.接收一个外部传递进来的 props 属性
    2.将内部的 state 作为参数传递给调用组件的 props 属性方法.
  > 优缺点

    1.无法在 return 语句外访问数据
    2.容易导致嵌套地狱
```js
const MyComponent = () => {
  return (
    <Mouse>
      {({ x, y }) => (
        <Page>
          {({ x: pageX, y: pageY }) => (
            <Connection>
              {({ api }) => {
                // yikes
              }}
            </Connection>
          )}
        </Page>
      )}
    </Mouse>
  )
};
```

#### hook (未完)
  
  > 定义
    
    1.接收一个外部传递进来的 props 属性
    2.将内部的 state 作为参数传递给调用组件的 props 属性方法.
  > 优缺点

    1.无法在 return 语句外访问数据
    2.容易导致嵌套地狱
    
### 2.高阶组件(HOC) , render props 以及 hook 的对比和用处.
