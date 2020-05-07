/**
 * 迭代器模式
 */

class Iterator {
    constructor(container) {
        this.list = container.list;
        this.index = 0;
    }

    next() {
        if (this.hasNext()) {
            return this.list[this.index++];
        }
        return null;
    }

    hasNext() {
        if (this.index >= this.list.length) {
            return false;
        }
        return true;
    }
}

class Container {
    constructor(list) {
        this.list = list;
    }

    // 生成遍历器
    getIterator() {
        return new Iterator(this);
    }
}


// 测试
const arr = [1, 2, 3, 4, 5];
let container = new Container(arr);
let it = container.getIterator();
while(it.hasNext()) {
    console.log(it.next());
}

// ============= 使用ES6的迭代器生成 =============
function each(data) {
    // 生成遍历器
    let it = data[Symbol.iterator]();

    let item;
    do {
        // 遍历器生成可迭代内容，包含value和done属性，
        // 其中done属性代替自定义的hasNext()方法，
        // false表示还有数据，true则表示已经迭代完成
        item = it.next();
        if (!item.done) {
            console.log(item.value);
        }
    } while (!item.done);
}

// ES6的Iterator已经封装在了语法 for...of 中，直接使用即可
function each2(data) {
    for (const item of data) {
        console.log(item);
    }
}


// 测试
const arr2 = [10, 20, 30, 40, 50, 60];
let m = new Map();
m.set("a", 100);
m.set("b", 200);
m.set("c", 300);

each(arr2);
each(m);

each2(arr2);
each2(m);
