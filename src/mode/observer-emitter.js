/**
 * 观察者模式，使用nodejs的events模块的示例
 */

const EventEmitter = require("events").EventEmitter;

// =========EventEmitter的基础用法=============
const emitter1 = new EventEmitter();

// 监听some事件
emitter1.on("some", info => {
    console.log("fn1", info);
})

// 监听some事件
emitter1.on("some", info => {
    console.log("fn2", info);
})

// 触发some事件
emitter1.emit("some", "xxxx");

// =============================================

// 下面使用继承来实现EventEmitter
class Dog extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
}

let dog = new Dog("dog");
dog.on("bark", function() {
    console.log(this.name, " barked-1");
})

dog.on("bark", function() {
    console.log(this.name, " barked-2");
})

setInterval(() => {
    dog.emit("bark")
}, 1000);
