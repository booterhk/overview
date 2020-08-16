// var nickname = "Kitty";
// function Person (name) {
//   this.nickname = name;
//   this.distractedGreeting = function () {
//     var self = this; // added
//     setTimeout(function () {
//       console.log("Hello, my name is " + self.nickname); // changed
//     }, 500);
//   }
// }

// var person = new Person('jawil');
// person.distractedGreeting();
// // Hello, my name is jawil

// var nickname = "Kitty";
// function Person(name){
//     this.nickname = name;
//     this.distractedGreeting = function() {

//         setTimeout(function(){
//             console.log("Hello, my name is " + this.nickname);
//         }.bind(this), 500);
//     }
// }
 
// var person = new Person('jawil');
// person.distractedGreeting();

// let a = {name: 'ef'}
// let b= a;
// b.name = 'fe';
// console.log(b)

// let a = {a: {name: 'ef'}}
// let b= a;
// b.a = {name: 'fe'};
// console.log(b)

// 深复制要点
// 递归循环
// 边界问题
// 相同对象再次引用
function isObject(obj) {
  return typeof obj === 'object' && obj !== null //数组是特殊的对象
}

function deepClone(obj, hash = new WeakMap()) { // weakmap 解决了相同对象再次引用的问题
  if (!isObject(obj)) return obj;               // 若非对象，则直接返回
  if (hash.has(obj)) return hash.get(obj);      // 如果当前对象已经被复制过，则直接取被拷贝的值
  let result = Array.isArray(obj) ? [] : {};    
  hash.set(obj, result);                        // 数据类型初始化
  Object.keys(obj).map(key => {
    if (isObject(obj[key])) {
      result[key] = deepClone(obj[key], hash)   //当key对应值仍为对象时，递归拷贝
    } else {
      result[key] = obj[key]                    //为基本数据类型则直接拷贝
    }
  })
  return result
}
const a = ["1", '12', 'dsa', 'ada']
const b = {a:{12: 'sda'}, b:21}
console.log('deepClone(a)', deepClone(a))
console.log('deepClone(b)', deepClone(b))