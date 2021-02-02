/*
  es6 语法：
    1、没有变量提升
    2、阻断了与 window的关系
    3、变量不能重名（function var...）
    4、暂时性死区
*/


// console.log(a);//a is not defined


//SyntaxError: Identifier 'a' has already been declared，不能用同名
let a = 3;
function a(){
    console.log(1)
}


// console.log( typeof a);//undefined

// ReferenceError: a is not defined
console.log(typeof a);
let a=3;



// 虽然 es6没有变量提升，但是在代码执行之前，会有一个语法检测，直接就会报错（名字相同）
// SyntaxError: Identifier 'a' has already been declared
let a=3;
console.log(a);
function a(){
    console.log(1)
}

 
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



var a=12,b=13,c=14;
// 看到形参a，直接反手把 a 转为 x
function fn(a){
   console.log(a,b,c); //12 undefined 14
   var b=c=a=20;
   console.log(a,b,c);//20 20 20
}
// 注意:这里面的 a 传进去以后就变成了私有变量了，和外面的全局要区分;也就是要进行形参复制的动作
fn(a);
console.log(a,b,c);//12 13 20





// 看图纸
var ary=[12,13];
function fn(ary){
   console.log(ary);
   ary[0]=100;
   ary=[100];
   ary[0]=0;
   console.log(ary);
}
fn(ary);
fn(ary);
console.log(ary);


// 看图纸
var n=10;
function fn(){
    var n=20;
    function f(){
        n++;
        console.log(n);
    }
    f();
    return f;
}
var x=fn();
x();
x();
console.log(n);