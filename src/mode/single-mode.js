/**
 * 单例模式
 */

class SingleObject {
    login() {
        console.log("login...");
    }
}

// 创建一个静态自执行的方法
SingleObject.getInstance = (function() {
    let instance;
    return function() {
        if (!instance) {
            instance = new SingleObject();
        }

        return instance;
    }
})()


// 测试
let obj1 = SingleObject.getInstance();
obj1.login();
let obj2 = SingleObject.getInstance();
obj2.login();

console.log(obj1 === obj2);
