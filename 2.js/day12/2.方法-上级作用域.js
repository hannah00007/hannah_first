/*
  变量提升：
  var a=2;
  function fn
  function sum
  上级作用域是谁和这个函数在哪执行没有任何关系，只和他原来在哪定义有关系

*/


var a=2;
function fn(){
    // fn 执行形成一个私有作用域；
    // a 不是私有的，向上级作用域找，fn 的私有作用域的上级作用域是谁呢？看你的 fn 在哪定义的，上级作用域就是谁，fn这个函数在 window
    // 全局作用域定义的，上级作用域就是window
    console.log(a)
}
fn();

// sum执行形成私有作用域
function sum(){
    // 变量提升 var a 
    var a=3;//这是私有的
    fn();//2
}

sum()


function fn(){
    // 指的是你当前这个函数
    // console.log(argumenta.callee);
    // 获取此函数执行时候的宿主环境，如果 fn 在 window 执行，得到的是null,如果在 A 函数里面执行输出的就是 A
    console.log(arguments.callee.caller)
}


function A(){
    fn()
}
A()