/**
 * 日志装饰器
 * 使用方式：导入log方法到目标文件，然后在指定函数上面使用`@log('text')`即可
 *
 * 注：js中装饰器标识符`@`还处于提案阶段，如果使用，需要使用babel插件进行解析。
 * if babel < 7.x:
 *     npm install --save-dev babel-plugin-transform-decorators-legacy
 *     在 .babelrc 文件中添加：
 *     {
 *         "plugins": ["transform-decorators-legacy]
 *     }
 * else:
 *     npm install --save-dev @babel/plugin-proposal-decorators
 *     在 .babelrc 文件中添加：
 *     {
 *         "plugins": [
 *             ["@babel/plugin-proposal-decorators", { "legacy": true }],
 *         ]
 *     }
 */

import $ from "jquery";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import List from "./List/List";

export default class App {
    constructor(id) {
        this.$el = $("#" + id);
    }

    // 初始化购物车
    initShoppingCart() {
        let shoppingCart = new ShoppingCart(this);
        shoppingCart.init();
    }

    // 初始化物品列表
    initList() {
        let list = new List(this);
        list.init();
    }

    init() {
        this.initShoppingCart();
        this.initList();
    }
}
