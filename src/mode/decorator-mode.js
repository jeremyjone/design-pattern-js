/**
 * 装饰器模式
 */

class Circle {
    draw() {
        console.log("画一个圆");
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle;
    }

    draw() {
        this.circle.draw();
        this.setRedBorder(this.circle);
    }

    setRedBorder(circle) {
        console.log("设置红色边框");
    }
}

// 测试
let c = new Circle();
c.draw();

let d = new Decorator(c);
d.draw();
