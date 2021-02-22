/*
  es6 语法：
    1、没有变量提升
    2、阻断了与 window的关系
    3、变量不能重名（function var...）
    4、暂时性死区
*/

/* 没有变量提升 */
console.log(a); //Uncaught ReferenceError: a is not defined
let a = 2;
/* 题一 */
let a = 10,
    b = 10;
let fn = function () {
    console.log(a); // 函数执行，形成一个私有作用域，这里没变量提升，但是有自我检测机制，知道用let声明
    let a = (b = 20); // 了一个变量，进行了记录，不存在变量提升，不能在let 之前进行获取变量，所以报错：a is not
    // defined
    console.log(a, b);
};
fn();
console.log(a, b);

let a = 10,
    b = 10;
let fn = function () {
    //a 是这里的私有变量，在私有作用域中没有b这个变量，向上级查找，b是全局变量，此时更改的也是全局变量b
    let a = (b = 20);
    console.log(a, b); // 20 20
};
fn();
console.log(a, b); // 10 20

/* 阻断了与 window的关系 */
let a = 2;
console.log(window.a); // undefined

/* 变量不能重名 */
//SyntaxError: Identifier 'a' has already been declared
//es6中没有变量提升，但是有一个自我检测的一个机制，在代码自上而下执行前，会先进行检测，看是否有重复声明的变量，如果有的话，就先报错。
let a = 3;
function a() {
    console.log(1);
}
let a = 2;
console.log(a); // 这里不会输出，在代码执行前先进行语法检测，发现重复声明变量，直接报错。此时代码还没从上而下执行
var a = 3;
console.log(3);

/*
    暂时性死区：ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
*/
// 对于没有声明过的变量，在es5中 用typeof 变量  结果是“undefined”,这样子的话并不好，按理说应该报错：没有声明过a
console.log(typeof a); //undefined

// es6中的暂时性死区:用let、const声明一个变量之前，那块区域就是暂时性死区，不能用来访问未定义的变量，如果访问的话，就会报错，这样在理论上更符合，更严谨。
// ReferenceError: a is not defined
console.log(typeof a);
let a = 3;

/* 题二 */
/*
window 全局作用域
变量提升：
var a=12
var b=13
var c=14
function fn
代码自上而下执行：

fn(a);执行的时候会形成一个私有作用域
1、形参复制：a=12; a是私有变量===》20
2、变量提升：
    var b;//b是私有变量===》20
3、代码自上而下执行：
*/
var a = 12,
    b = 13,
    c = 14;
// 看到形参a，直接反手把 a 转为 x
function fn(a) {
    console.log(a, b, c); //12 undefined 14
    var b = c = a = 20;
    console.log(a, b, c); //20 20 20
}
// 注意:这里面的 a 传进去以后就变成了私有变量了，和外面的全局要区分;也就是要进行形参复制的动作
fn(a);
console.log(a, b, c); //12 13 20

/* 题三 */
var ary = [12, 13];
function fn(ary) {
    console.log(ary);//[12, 13];
    ary[0] = 100;
    ary = [100];
    ary[0] = 0;
    console.log(ary);//[0];
}
fn(ary);
fn(ary);
console.log(ary);//[100, 13];

/* 题四 */
var n = 10;
function fn() {
    var n = 20;
    function f() {
        n++;
        console.log(n);//21/22/23
    }
    f();
    return f;
}
var x = fn();
x();
x();
console.log(n);//10

/* 题五 */
var i = 10;
function fn() {
    return function (n) {
        console.log(n + ++i);
    };
}
var f = fn();
f(20);//31
fn()(20);//32
fn()(30);//43
f(30);//44

/* 题六 */
function fn(i) {
    return function (n) {
        console.log(n + ++i);
    };
}
var f = fn(10);
f(20);//31
fn(20)(40);//61
fn(30)(50);//81
f(30);//42

/* 题七 */
var a = 9;
function fn() {
    a = 0;
    return function (b) {
        return b + a++;
    };
}
var f = fn();
console.log(f(5));//5
console.log(fn()(5));//5
console.log(f(5));//6
console.log(a);//2
