// 观察者模式
class Subject {
  constructor() {
    this.observers = [];
  }

  add(observer) {
    this.observers.push(observer);
  }

  remove(observer) {
    this.observers.filter(item => item === observer)
  }

  notify() {
    this.observers.forEach(value => value.update())
  }
}

class Observer {
  constructor(name) {
    this.name = name
  }

  update() {
    console.log('this name is ' + this.name)
  }
}

const sub = new Subject();
const ob1 = new Observer('hk')
const ob2 = new Observer('hekai')
sub.add(ob1);
sub.add(ob2);
sub.notify()

// 发布订阅模式

