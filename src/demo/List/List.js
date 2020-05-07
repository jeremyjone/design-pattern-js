import $ from "jquery";
import { GET_LIST } from "../config/config";
import createItem from "./CreateItem";

export default class List {
    constructor(app) {
        this.$el = $("<div>");
        this.app = app;
    }

    async init() {
        let data = await this.loadData();
        this.initItemList(data);
        this.render();
    }

    // 获取数据
    async loadData() {
        return fetch(GET_LIST).then(result => {
            return result.json()
        })
    }

    initItemList(data) {
        data.forEach(item => {
            // 创建item， 然后init
            let i = createItem(this, item);
            i.init();
        })
    }

    render() {
        this.app.$el.append(this.$el);
    }
}