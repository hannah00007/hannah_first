//定时器的时间设置为0 也不是立即执行，而是等待浏览器最快反应时间后执行「最快时间：5~7MS 10~17MS」

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i + 2);
    }, i * 1000);
}

//循环五次 创健 6块级上下文

let p1 = new Promise((resolve, reject) => {
    let timer = setTimeout(() => {
        resolve(timer);
    }, 1000);
    console.log(300); // 1
});
console.log(100); // 2
let p2 = p1.then(
    (res) => {
        console.log(res); // 4
        return Promise.reject();
    },
    (res) => {
        console.log(res);
        return Promise.resolve();
    }
);

p2.then((res) => {
    console.log(1, res);
})
    .catch((res) => {
        console.log(2, res); //2 un
    })
    .finally(() => {
        console.log(900);
    });
console.log(200); // 3

function Promise(fn) {
    this.state = "pending";
    this.result = null;
    const noop = () => {};
    this.allFns = {
        1: noop,
        2: noop,
        3: noop,
    };

    var resolve = (data) => {
        this.state = "Fullfilled";
        this.result = data;
        this.allFns[1](data);
    };
    var reject = (err) => {
        this.state = "rejected";
        this.result = err;
        this.allFns[2](err);
    };
    fn(resolve, reject);
}

Promise.reject() // 返回的是 Promise 实例
Promise.prototype.then = function (fn1, fn2) {
    let result = new Promise(function(resolve, reject) {
        setTimeout(() => {
            this.allFns[1] = fn1;
            this.allFns[2] = fn2;
            if (this.state === "Fullfilled") {
                const ret = this.allFns[1](this.result);
                if(ret instanceof Promise) {
                    result = ret;
                }
            }
        }, 0);
    })

    return result;
};

var p1 = new Promise((resolve, reject) => {
    let timer = setTimeout(() => {
    }, 10000);
    console.log(300); // 1
    resolve(timer);
});

let p2 = p1.then(
    (res) => {
        console.log(res); // 4
        return Promise.reject();
    },
    (res) => {
        console.log(res);
        return Promise.resolve();
    }
);

var obj = {};
obj.state = "nan";
obj.result = "18 sui";
obj.a = fn();
obj.__proto__ = Promise.prototype;
return obj;
