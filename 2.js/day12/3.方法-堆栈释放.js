/*
   1、堆内存的释放

*/
var obj = {};
var obj1 = obj;
obj2 = null;
obj = null;
/*
  2、栈内存的释放: 
    + 全局栈内存，只有当页面关闭的时候才会被释放
    + 一般情况下函数执行完之后，只要不被占用基本就会被销毁

*/
/*
    + 不销毁的作用域：当函数执行的时候，如果里面有一个引用数据类型的值被外界占用了，形成不销毁的作用域

*/

function fn() {
    var num = 2;
    return function () {
        console.log(num);
    };
}
var f = fn();

var ary = [];
function fn() {
    var num = 2;
    // 虽然说没有 return,但是此函数别外界 ary占用，形成不销毁的作用域
    ary = function () {
        console.log(num);
    };
}
var f = fn();

/*
    + 不立即销毁的作用域：当函数执行完毕之后销毁

*/
function fn(x) {
    return function (y) {
        return x + y;
    };
}

fn(1)(2);
