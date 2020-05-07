/**
 * 工厂模式创建Item
 */

import Item from "./Item";

function createDiscount(item) {
    // 使用一个代理模式处理折扣的具体数据
    return new Proxy(item, {
        get: function(target, key, receiver) {
            if (key === "name") {
                return `${target[key]} 【折扣】`;
            } else if (key === "price") {
                return target[key] * 0.8
            }

            return target[key];
        }
    })
}

export default function(list, itemData) {
    // 在工厂函数中处理折扣情况
    if (itemData.discount) {
        itemData = createDiscount(itemData);
    }

    return new Item(list, itemData);
}
