let obj = {
    ss: 100,
};
function fn() {
    console.log(this, a, b);
}
fn.call(obj, 1, 2); // 在call执行的时候，让fn在call内部执行了，并且把fn的this指向了call的第一个实参，从call的第二个实参开始，都是给fn传递的参数
// 在非严格模式下
// 如果call执行的时候，不传实参，或者传递undefined或者null，那fn执行的时候，this统统指向window
// 在严格模式下
// 不传实参或者传递 undefined，this 是undefined，如果传递 null，this就是 null
fn.call(); // this指向window
fn.call(undefined); // this指向window

function fn(a, b) {
    console.log(this);
    return 100;
}
let a = {};
let res = fn.bind(a);
console.log(res()); //undefined

function test(a, ...ary) {
    //收缩运算符（实参1形参a接受，剩下的所有实参ary以数组接收）
    console.log(arguments);
    console.log(ary); //[1,2,3]
    console.log(...ary); //1,2,3
    // 如果...用到数组的浅薄，就是把数组展开变成多个值
    // 如果用到函数形参的地方，就是把所有的实参手机到一个数组里面
}
test(1, 2, 3);
