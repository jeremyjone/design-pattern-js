/**
 * 工厂模式示例，逻辑如图：
 *
 * --------------------------    ----------------|
 * |       Creator          |    |  Product      |
 * |------------------------|    |---------------|
 * |                        |    | + name:String |
 * |------------------------| -> |---------------|
 * | + create(name):Product |    | + init()      |
 * --------------------------    | + fn1()       |
 *                               | + fn2()       |
 *                               ----------------|
 */

class Product {
    constructor(name) {
        this.name = name;
    }

    init() {
        console.log("init", this.name);
    }

    fn1() {
        console.log("fn1", this.name);
    }

    fn2() {
        console.log("fn2", this.name);
    }
}

class Creator {
    create(name) {
        return new Product(name);
    }
}

// 测试
const creator = new Creator();
const p1 = creator.create("test1");
const p2 = creator.create("test2");

p1.init();
p2.init();
p1.fn1();
p2.fn1();
p1.fn2();
p2.fn2();
