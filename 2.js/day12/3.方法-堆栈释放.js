/*
   1、堆内存的释放: 让所有引用这个堆内存的变量赋值为null，堆内存地址不在被占用，浏览器在空闲的时候就会把堆内存释放
        + 谷歌浏览器是标记方式，每隔一段时间就会检测以下当前作用域中的内存，是否被占用，如果没有被占用，就会释放掉。
        + ie和火狐等浏览器是采用计数方法，当前作用域中如果一个空间地址被占用一次，就会累加一，如果减少一次占用就会减1，直到0的时候，说明已经没有被占用了，就释放了。

*/
var obj = {};
var obj1 = obj;
obj2 = null;
obj = null;
/*
  2、栈内存的释放: 
    + 全局栈内存，只有当页面关闭的时候才会被释放
    + 一般情况下函数执行完之后，只要不被占用基本就会被销毁
    注: 不销毁的作用域：当函数执行的时候，如果里面有一个引用数据类型的值被外界占用了，形成不销毁的作用域
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
    // 虽然说没有 return,但是此函数被外界 ary占用，形成不销毁的作用域
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
