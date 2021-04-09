/*
  作用域链:
    + 在私有作用域中，查询某个变量，先看自己私有的有没有
    + 如果有，那就是私有的，如果没有，它会向上一级作用域去查找，一直找到window作用域位置
        + 如果说window也没有，会报错
    + 如果是赋值的话，也会沿着作用域去找，直到找到window位置，如果window也没有，那就相当于给window添加了一个这样的属性名和属性值
*/

/*
    eg1.
 */
function A() {
    var a = 200;
    return function fn(x, y) {
        a = 300;//既然不会销毁会往沿着作用域往上找到外面的 a
    };
}//第一个括号执行完不会销毁
A()();
console.log(a); //此时输出的是a is not defined，因为此时的 a不是全局

/*
    eg2.
 */
function A() {
    return function fn(x, y) {
        a = 300;
    };
}
A()();
console.log(a); //300