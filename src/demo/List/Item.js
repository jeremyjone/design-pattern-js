import $ from "jquery";
import getCart from "../ShoppingCart/GetCart";
import StateMachine from "javascript-state-machine";
import { log } from "../util/log";

export default class Item {
    constructor(list, data) {
        this.list = list;
        this.data = data;
        this.$el = $("<div>");
        this.cart = getCart();
    }

    initContent() {
        this.$el.append($(`<p>名称：${this.data.name}</p>`));
        this.$el.append($(`<p>价格：${this.data.price}</p>`));
    }

    initBtn() {
        let $btn = $("<button>");

        let that = this;
        let fsm = new StateMachine({
            init: "加入购物车",
            transitions: [
                {
                    name: "addToCart",
                    from: "加入购物车",
                    to: "从购物车删除"
                },
                {
                    name: "deleteFromCart",
                    from: "从购物车删除",
                    to: "加入购物车"
                }
            ],
            methods: {
                onAddToCart: function() {
                    that.addToCartHandle();
                    updateText();
                },
                onDeleteFromCart: function() {
                    that.deleteFromCartHandle();
                    updateText();
                }
            },
        });

        function updateText() {
            $btn.text(fsm.state);
        }

        $btn.click(() => {
            // 添加 / 删除
            if (fsm.is("加入购物车")) {
                fsm.addToCart();
            } else {
                fsm.deleteFromCart();
            }
        });

        // 初始化文本
        updateText();

        this.$el.append($btn);
    }

    init() {
        this.initContent();
        this.initBtn();
        this.render();
    }

    // 添加到购物车
    @log("add")
    addToCartHandle() {
        this.cart.add(this.data);
    }

    // 从购物车删除
    @log("delete")
    deleteFromCartHandle() {
        this.cart.del(this.data.id);
    }

    render() {
        this.list.$el.append(this.$el);
    }
}
