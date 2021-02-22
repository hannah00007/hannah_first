/*
  变量提升：
  var a=2;
  function fn
  function sum
  上级作用域:当函数执行时,形成一个私有作用域A，这个A的上级作用域是谁，跟它在哪执行无关，跟它在哪定义（创建）有关系。

*/

var a = 2;
function fn() {
    // fn 执行形成一个私有作用域；
    // a 不是私有的，向上级作用域找，fn 的私有作用域的上级作用域是谁呢？看你的 fn 在哪定义的，上级作用域就是谁，fn这个函数在 window
    // 全局作用域定义的，上级作用域就是window
    console.log(a);
}
fn();

// sum执行形成私有作用域
function sum() {
    // 变量提升 var a
    var a = 3; //这是私有的
    fn(); //2
}

sum();

// argumenta.callee: 指的是你当前这个函数本身
// arguments.callee.caller:指的是函数执行的宿主环境，如果是在函数A中执行，打印出来的就是A，如果是在全局作用域中执行，打印出来的就是null。

function fn() {
    console.log(arguments.callee); // 打印出的是fn 函数本身
}
fn();
function fn() {
    console.log(arguments.callee.caller);
}

fn(); // 此时打印出的是 null（在全局作用域中执行）

function fn(){
    console.log(arguments.callee.caller);
 }
 function A(){
   fn();  // 此时打印出的是 A这个函数
 }
 A();
