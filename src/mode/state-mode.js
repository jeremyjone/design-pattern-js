/**
 * 状态模式
 */

// 模拟红绿灯状态
class State {
    constructor(color) {
        this.color = color;
    }

    handle(context) {
        console.log(`切换到 ${this.color} `);
        context.setState(this);
    }
}

// 主体
class Context {
    constructor() {
        this.state = null;
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
    }
}


// 测试
let context = new Context();
let green = new State("绿灯");
let yellow = new State("黄灯");
let red = new State("红灯");

// 绿灯亮
green.handle(context);
console.log(context.getState());
// 黄灯亮
yellow.handle(context);
console.log(context.getState());
// 红灯亮
red.handle(context);
console.log(context.getState());
