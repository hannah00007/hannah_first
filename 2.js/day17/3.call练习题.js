// 函数中的 this 一旦被 call或者 apply、bind 修改过后，就不会再修改了
//【总结】：如果以上你明白了通透了，恭喜你，
// 如果你被折磨的体无完肤，那也不要紧，记着下面的一个规律，一样可以成功战胜考题：
// 如果只有一个call，就是让前面的函数执行，替换里面的this（简单的），如果超过一个，有多个call，不论多少个，都是让括号里面的第一个参数执行。
function fn1() {
    console.log(this);
    console.log(1);
}
function fn2() {
    console.log(2);
}
fn1.call(fn2); // 1//call里面的 this是 fn1.call
fn1.call.call(fn2);
//this==>fn1.call==>call;    ctx=fn2
//ctx.newAttr=this           fn2.newAttr=call
//ctx.newattr(...arg)        fn2.newAttr()==>call()
//--------------------------------------------------
//让 call 二次执行
//this==>fn2                 ctx=window
//ctx.newAttr=this           window.newAttr=fn2
//ctx.newattr(...arg)        window.newAttr()==>fn2()//2

var obj = {};
Function.prototype.mycall = function (ctx, ...arg) {
    //如果这样写，fn虽然执行了，但是 fn里面的this没有改
    //this(...arg);//[1,2,3,4]
    ctx = ctx || window; //如果当前的ctx是 undefined 或者 null或者不传，就是把 context 的值改为window
    ctx.newAttr = this; //fn
    let res = ctx.newattr(...arg); //此时fn里面的 this就变成了ctx
    delete ctx.newAttr; //添加的那个属性再删掉
    return res; //100000
};
fn.mycall(obj, 1, 2, 3);

function fn1() {
    console.log(1);
}
function fn2() {
    console.log(2);
}
// fn1.call(fn2); //1
// fn1.call.call(fn2); //2 不管前边有多少call，他执行的是最后一个call方法
// Function.prototype.call(fn1); // 不输出
Function.prototype.call.call(fn1); // 1
// Function.prototype.call.call.call.call(fn1);

function myCall(context) {
    // fn1.call(fn2);
    // this-->fn1  context-->fn2
    // context.$fn = this; // fn2.$fn = fn1
    // context.$fn();// fn2.$fn() -->fn1()
    //---------------------------------------------//
    // fn1.call.call(fn2);
    // this-->fn1.call-->call  context-->fn2
    // context.$fn = this; // fn2.$fn = call
    // context.$fn(); // fn2.$fn()-->call()
    // 下边让call二次执行---------------
    // this-->fn2  context = window
    // context.$fn = this; // window.$fn = fn2
    // context.$fn(); // window.$fn()-->fn2()
    //---------------------------------------------------------//
    // Function.prototype.call(fn1);
    // this-->Function.prototype-->原型  context-->fn1
    // context.$fn = this; // fn1.$fn = 原型
    // context.$fn(); // fn1.$fn()-->原型()
    //---------------------------------------------------------//
    // Function.prototype.call.call(fn1);
    // this-->Function.prototype.call-->call  context-->fn1
    // context.$fn = this; // fn1.$fn = call
    // context.$fn(); // fn1.$fn()-->call()
    //call第二次执行-------------------------------
    // this-->fn1  context-->window
    // context.$fn = this; // window.$fn = fn1
    // context.$fn(); // window.$fn()-->fn1()
}
Function.prototype.myCall = myCall;

var name = "WINDOW";
function fn() {
    console.log(this.name);
}
var obj = {
    name: "OBJ",
    fn: () => {
        console.log(this.name);
    }
};

window.onload = function () { //页面加载完成，事件就会触发
    
    obj.fn();"OBJ"
};
fn.bind(obj);
var print = function () {
    alert(1);
};

function Fn() {
    print = function () {
        alert(2);
    };
    return this;
};

function print() {
    alert(3);
};
Fn.prototype.print = function () {
    alert(4);
};
Fn.print = function () {
    alert(5);
};

print();//1
Fn.print();//5
Fn().print();//1
new Fn.print();
new Fn().print();
