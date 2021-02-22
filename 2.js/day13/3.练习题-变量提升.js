/* 题一 */
console.log(a); //undefined
var a = 12;
function fn() {
    console.log(a); //undefined
    var a = 13;
}
fn();
console.log(a);
12;

/* 题二 */
console.log(a); //undefined
var a = 12;
function fn() {
    console.log(a); //12
    a = 13;
}
fn();
console.log(a); //13

/* 题三 */
console.log(a); //报错
a = 12;
function fn() {
    console.log(a);
    a = 13;
}
fn();
console.log(a);

/* 题四 */
var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    console.log(foo);
}
bar(); //10

/* 题五 */
var n = 0;
function a() {
    var n = 10;
    function b() {
        n++;
        console.log(n); //11\12
    }
    b();
    return b;
}
var c = a();
c();
console.log(n); //0

/* 题六 */
var a = 10,
    b = 11,
    c = 12; //等于var a=10,var b=11,var c=12
function text(a) {
    a = 1;
    var b = 2;
    c = 3;
}
text(10);
console.log(a); //10
console.log(b); //11
console.log(c); //3

/* 题七 */
if (!("a" in window)) {
    //看 window 上有没有 a 这个属性；一旦声明了就有 a这个属性了
    var a = 1;
}
console.log(a); //undefined

/* 题八 */
var a = 4;
function b(x, y, a) {
    console.log(a); //3
    arguments[2] = 10;
    console.log(a); //10
}
a = b(1, 2, 3);
console.log(a); //undefined,因为函数里面没有 return

/* 题九 */
//  var a=1||2;当第一个值为真那a为第一个值，当第一个值为假那 a 为第二个值；
//  var a=1&&2;当第一个值为真那a为第二个值，当第一个值为假那 a 为第一个值；
var foo = "hello";
(function (foo) {
    // 形参传进来之后就相当于已经声明加赋值这个变量了
    console.log(foo); //hello
    var foo = foo || "word";
    console.log(foo); //hello
})(foo);
console.log(foo); //hello

/* 题十 */
var a = 9;
function fn() {
    a = 0;
    return function (b) {
        return b + a++;
    };
}
var f = fn();
console.log(f(5)); //5
console.log(fn()(5)); //5
console.log(f(5)); //6
console.log(a); //2

/* 题十一 */
var ary = [1, 2, 3, 4];
function fn(ary) {
    ary[0] = 0;
    ary = [0];
    ary[0] = 100;
    return ary;
}
var res = fn(ary);
console.log(ary); //[0,2,3,4]
console.log(res); //[100]

/* 题十二 */
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

/* 题十三 */
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
