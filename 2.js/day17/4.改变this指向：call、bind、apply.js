/*
    this的值不能修改，会报错
    call、bind、apply存在基类函数Function的原型上，所以所有函数都能使用
    第一个参数：更改 this的指向；
    从第二个参数开始往后就是函数执行的实参

*/
/*
    call执行过程:
    1、通过原型链找到 Function.prototype 上的 call方法
    2、找到之后让 fn 这个方法执行
    3、执行的时候把 fn函数里面的this进行改变，改成第一个参数

*/
function fn(){
    console.log(this)
}
// 在非严格模式下，不传或者 undefined null,this都是 window
// 在严格模式下，不传或者 undefined this都是 undefined，nullthis都是 null
fn.call()//window
fn.call(null)//window
fn.call(undefined)//window
//严格模式
fn.call()// undefined
fn.call(null)//null
fn.call(undefined)//undefined

function fn(){
    this=100;
    console.log(this)
}
obj={
    fn:fn
}
obj.fn()//报错 
var name="window";
function fn(x,y){
    console.log(this.name)
    console.log(x,y)
}
var obj={name:"lili"}
fn()//"window"
fn.call(obj,1,2)//"lili",1,2


/*
    apply执行过程:
    1、通过原型链找到 Function.prototype 上的 apply方法
    2、找到之后让 fn 这个方法执行
    3、执行的时候把 fn函数里面的this进行改变，改成第一个参数
    4、和 call 唯一区别:穿进去的实参是数组

*/
var obj={
    name:"lili"
}
function fn(x,y){
    console.log(this,x,y)//obj,1,2
}
fn.apply(obj,[1,2])

/*
    bind执行过程:
    1、通过原型链找到 Function.prototype 上的bind方法
    2、预处理 this 指向，并不能让函数执行，想要执行，需要再调用一下
*/
let obj = { name: 1 };
function fn(x,y) {
      console.log(this,x,y);
}
var res=fn.bind(obj,1,2);
res();

<d iv id="box">box</d>
var obj={name:"li"};
function fn(){
   console.log(this);
}
box.onclick=fn.bind(obj)
