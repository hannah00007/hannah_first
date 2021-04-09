/*
    作用域链: 查找变量
        + 上级作用域: 函数在哪个作用域定义的
    原型链(prototype（函数和类）和 __proto__ ):查找属性
    判断数据类型: typeof
        + 缺点是对于引用数据类型返回的都是 object
        + 比较特殊的是 typeof null //object
*/
var ary = [];
var obj = {
    "name":"王涵"
};
typeof ary; //object
typeof obj; //object
typeof null; //object  存储机制

obj.toString(); //'[object object]' 
Object.prototype.toString.call([]); //'[object Array]' call这个方法会把 this指向里面的参数

/*
    call作用:
        + 让函数执行
        + 改变 this的指向
        + 语法：第一个参数指的是 this指向，第二个参数及以后就是传进去的实参（离散型）

    apply作用:
        + call 和 apply唯一区别在于第一个参数: call是离散型的传递实参，而 apply是以数组的形式传递实参

    bind作用:   
        + call 和 bind 的写法一样，但 call 是让函数执行了， bind不会让函数执行
        + bind返回的是一个新的函数，并且新函数执行时候里面的 this就是 bind第一个参数,第二个参数及以后就是传进去的实参
        + 在执行的时候传进去新的参数会排在 bind里面实参的后面
*/
function fn(a, b) {
    console.log(a + b);
    console.log(this);
}
var obj = {
    f: fn,
};
obj.f(1, 2);//3 obj
obj.f.call([1, 2, 3], 100, 200); //300 [1,2,3]
obj.f.apply([1, 2, 3], [100, 200]); //300 [1,2,3]
var f3 = obj.f.bind([1, 2, 3], 100, 200); 
f3(); //300 [1, 2, 3]
f3(300, 400); //还是 300，相当于让 obj.f执行并且把 this改成[1,2,3],传递的实参是//100,200,300,400
var f2=obj.f;
f2();//这个 this结果是 window
f2.call('');//让函数执行并且把函数中的 this 改成 call的第一个参数 空字符串

/*
    let: 没有变量提升;
    const: 声明一个常量，造好之后死活不能改
 */
let num1 = 1;
const num2 = 2;

/*
    函数形参里面的...用意
 */
function fn(a,b,...c){//收缩
    console.log(a,b,c)//1,2,[3,4,5,6,7]
}
fn2(1,2,3,4,5,6,7)

/*
    箭头函数:
        + 箭头前面是形参，后面是函数体
        + 没有 this, this 在箭头函数中就当成一个普通变量
        + 没有arguments
 */
var fn3=(a,b,...c)=>{
    // console.log(a,b,c)//1,2,[3,4,5,6,7]
    //这里面的 this相当于是一个普通变量，箭头函数没有 this这个变量会往上去寻找，也就找到了 window 身上的 this(window.globalThis=window)
    console.log(this)
}
fn3.call([1,2,3])//window


