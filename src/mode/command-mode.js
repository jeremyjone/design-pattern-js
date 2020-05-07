/**
 * 命令模式
 */

class Receiver {
    exec() {
        console.log("执行");
    }
}

class Command {
    constructor(receiver) {
        this.receiver = receiver;
    }

    cmd() {
        console.log("触发命令");
        this.receiver.exec();
    }
}

class Invoker {
    constructor(command) {
        this.command = command;
    }

    invoke() {
        console.log("开始");
        this.command.cmd();
    }
}


// 测试
let soldier = new Receiver();
let trumpeter = new Command(soldier);
let general = new Invoker(trumpeter);
general.invoke();
