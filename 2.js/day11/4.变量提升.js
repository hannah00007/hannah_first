/*
  在当前执行上下文中，代码自上而下执行的时候会先变量提升
  变量提升：把带 var和 function 都找到
    + var 只声明不定义（包括一些引用数据类型）
    + function 声明和定义一起（声明和空间地址一起完成）
    + 变量提升的特殊性
        + 在判断语句中，
            + 不管条件是否成立，最新浏览器版本判断语句执行体里面的代码照常会进行变量提升，但是 if里面出现 function 变量提升时只声明不定义相当于和 var一样（IE10以前以及谷歌低版本状态是声明+定义）；
            + 在判断语句中条件成立时，if 里面会看似私有作用域里面会再进行变量提升，此时有 function 会声明和定义，var是声明
        + 变量提升只会提升等号左边的！
        + 在函数里面 return 下面的代码虽然不能执行了，但是照常可以进行变量提升，return 后面的值即使是函数，在当前作用域也不会进行变量提升
        + 自执行函数在当前作用域不进行变量提升,但是在私有作用域下里面的变量还是会照常进行
        + 重名的话该怎么处理: 重名的话，只声明一次，但是可以重复赋值
*/

/*
    eg1.
 */
console, log(a); //undefined
fn(); //1,因为声明和空间地址一起完成，则不管在哪执行都有
var a = 2;
var b = a;
b = 3;
console.log(b); //3
function fn() {
    console.log(1);
}
// fn()//1

/*
    eg2.
 */
console.log(a); //undefined
if (1 == 2) {
    var a = 12;
}
console.log(a); //undefined

/*
    eg3.
 */
//变量提升:function fn;console.log(fn);//fn已声明，但是未定义，所以结果是 undefined;又因为条件不成立，所以最后也是 undefined
console.log(fn); //undefined
if (1 == 2) {
    function fn() {
        console.log(1);
    }
}
console.log(fn); //undefined

/*
    eg4.
 */
console.log(fn()); //报错，因为只声明没定义
if (1 == 2) {
    function fn() {
        console.log(1);
    }
}
console.log(fn); //上面报错了，走不到下面

/*
    eg4.
        window 全局作用域：
        变量提升var num  function fn
        代码自上而下执行
*/
console.log(num); //undefined
console.log(fn); //undefined
if ([]) {
    // 条件成立，声明加定义
    fn(); //"a"
    var num = 100;
    function fn() {
        console.log("a");
    }
}
console.log(fn); //函数 fn
console.log(num); //100

/*
    eg5.
        window 全局作用域：
        变量提升var a  function a
        if 里面包含 function需要特殊记忆：function 以上是全局作用域的值，function 以下是私有作用域的值
*/
console.log(a);
var a = 0;
if (true) {
    console.log(a);
    a = 1;
    console.log(a);
    function a() {}
    a = 21;
    console.log(a);
}
console.log(a);

/*
    eg6.
        window 全局作用域：
        变量提升等号左边的var fn
*/
console.log(fn);
console.log(fn(1, 2)); //报错
var fn = function (n, m) {
    return n + m;
};
console.log(fn(1, 2)); //走不到这

/*
    eg7.
        window:全局 var fn  function sum=地址

 */
sum(); //2
fn(); //报错
var fn = function () {
    console.log(1);
};

function sum() {
    console.log(2);
}

fn(); //上面有报错下面不执行
sum(); //上面有报错下面不执行

/*
    eg7.
        window:全局 var  obj  
 */
console.log(obj.f1); //报错
var obj = {
    f1: function () {
        console.log(1);
    },
};

/*
    eg8.
 */
function fn(x, y) {
    a();
    return function () {}; //不会变量提升
    function a() {
        console.log(1);
    } //会变量提升
}
fn(1, 2);

/*
    eg9.
        变量提升阶段：a 已经声明过的不需要再声明
*/
console.log(a); //function a(){}
var a = 3;
function a() {}

/*
    eg10.
 */

console.log(num); //undefined
var num = 1;
console.log(num); //1
var num = 2;
console.log(num);
fn();
function fn() {
    console.log(1);
}
function fn() {
    console.log(2);
}
fn();
function fn() {
    console.log(3);
}
fn = 100;
fn();

/*
    eg10.
        自执行函数在当前作用域不进行变量提升，在window全局作用域下，变量提升：a f2,但是在自己的私有作用域照常进行
*/
var a = 100;
function f2() {
    console.log("f2");
}
(function () {
    // 在这里会形成一个私有作用域，照常进行变量提升var a
    console.log(a); // undefined
    var a = 3;
})();

/*
    eg11.
*/

f = function () {
    return true;
};
g = function () {
    return false;
};
// 自执行函数在执行的时候，形成了一个私有作用域
~(function () {
    // 变量提升：function g 只声明不定义
    // console.log(g);undefined
    // undefined();报错:g is not a function
    if (g() && [] == ![]) {
        f = function () {
            return false;
        };
        function g() {
            return true;
        }
    }
})();
console.log(f());
console.log(g());

/*
    eg12.
    var a = 12,b = 12; == var a = 12;var b = 12
        
*/

console.log(a, b); // undefined undefined
var a = 12,
    b = 12;
function fn() {
    // 注意：这里面变量提升是 var a，而 b是全局的 b ，里面并没有声明 b
    console.log(a, b); // undefined 12
    var a = (b = 13);
    console.log(a, b); // 13 13
}
fn();
console.log(a, b); // 12 13
