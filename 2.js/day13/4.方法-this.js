/*
  1、在全局作用域下不管严格不严格 this 指的就是 window;
  2、函数执行的时候，看它前面有没有点;
    + 如果有点: 前面是谁，函数里面的 this 就是谁;
    + 如果没有点:
        + 非严格模式: window;
        + 严格模式: undefined;
  3、给元素绑定事件，当触发事件，函数里面的 this 就是绑定的元素;
  4、在自执行函数中this
    + 非严格模式: window;
    + 严格模式: undefined;
  5、在回调函数中(eg:setTimeout 把一个函数当成实参传给这个函数，这个函数就叫做回调函数),不管严格非严格this指window;
  7、构造函数中的this指的就是当前类的实例;
  8、this还可以通过 call、bind、apply 去更改指向;
  9、原型上的方法里的 this,一般情况下是当前实例

*/
"use strict"; //(严格模式，写在最上面写一遍就可以了)
console.log(this); //严格非严格都是window


var name = "dav";
var obj = {
    name: "li",
    fn: fn,
};
function fn() {
    console.log(this.name);
}
fn(); //dav
obj.fn(); //"li"

function fn() {
    console.log(this);
}
fn(); //非严格window
fn(); //严格undefined


(function () {
    console.log(this); //非严格是 window；严格下是 undefined
})();

setTimeout(function () {
    console.log(this);
}, 1000); //window


