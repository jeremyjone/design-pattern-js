/**
 * 策略模式
 */

// 普通情况下，没有使用策略模式
class User {
    constructor(type) {
        this.type = type;
    }

    buy() {
        if (this.type === "ordinary") {
            console.log("普通用户购买");
        } else if (this.type === "member") {
            console.log("会员用户购买");
        } else if (this.type === "vip") {
            console.log("高级会员购买");
        }
    }
}

// 使用
let u1 = new User("ordinary");
u1.buy();
let u2 = new User("member");
u2.buy();
let u3 = new User("vip");
u3.buy();


// ================ 使用策略模式进行调整 ===================
class OrdinaryUser {
    buy() {
        console.log("普通用户购买");
    }
}

class MemberUser {
    buy() {
        console.log("会员用户购买");
    }
}

class VipUser {
    buy() {
        console.log("高级会员用户购买");
    }
}


// 测试
let ou = new OrdinaryUser();
ou.buy();
let mu = new MemberUser();
mu.buy();
let vu = new VipUser();
vu.buy();
