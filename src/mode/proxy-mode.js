/**
 * 代理模式
 */

class ReadImg {
    constructor(filename) {
        this.filename = filename;
        this.loadFromDisk();
    }

    loadFromDisk() {
        console.log("从硬盘加载数据" + this.filename);
    }

    display() {
        console.log("显示数据" + this.filename);
    }
}

class ProxyImg {
    constructor(filename) {
        this.realImg = new ReadImg(filename);
    }

    display() {
        this.realImg.display();
    }
}


// test
let proxyImg = new ProxyImg("1.png");
proxyImg.display();


// =================================

/**
 * 使用ES6语法的Proxy类演示 代理模式的示例，明星 - 经纪人
 */

let star = {
    name: "张xx",
    age : 25,
    phone: "138123456789"
}

let agent = new Proxy(star, {
    get: function(target, key) {
        if (key === "phone") {
            return "agent phone: 13555555555";
        }
        else if (key === "price") {
            return 150000;
        }
        return target[key];
    },
    set: function(target, key, val) {
        if (key === "customPrice") {
            if (val < 10000) {
                throw new Error("价格太低");
            } else {
                target[key] = val;
                return true;
            }
        }
    }
})

// test
console.log(agent.name);
console.log(agent.phone);
console.log(agent.age);
console.log(agent.price);

agent.customPrice = 120000; // OK
console.log(agent.customPrice);

agent.customPrice = 1000; // Error
console.log(agent.customPrice);
