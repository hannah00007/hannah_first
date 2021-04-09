/*
    问题: 某些属性每个实例都要用到，如果直接写在构造函数身上，当实例数量比较多时会损耗性能;
    方法: 可以这些属性写在构造函数的原型上或者基类的原型上，实例会按照__proto__去找
*/
function Fn(name, age) {
    //** 如果这里面有个属性是 sex="nv",没有使用 this 那么实例里面会有吗？**
    this.name = name;
    this.age = age;
    // this.say=function(){
    //     console.log("私有 姓名是"+this.name,"年龄是"+this.age)
    // }
}
// Fn.prototype.say=function(){
//     console.log("所属类Fn的原型 姓名是"+this.name,"年龄是"+this.age)
// }
Object.prototype.say = function () {
    console.log("基类的原型 姓名是" + this.name, "年龄是" + this.age);
};
let f1 = new Fn("张三", 18);
f1.say();

/*
    需求: 手动封装一个函数myPush，其方法类似于数组的 push方法;
        + 新添加的方法不要和内置方法一样，不然会被替换掉;
        + 注意 push 返回的是新数组的长度
 */
let ary = [1, 2, 3];
Array.prototype.push = function () {
    return 100;
};
console.log(ary.push(100)); //100 覆盖了之前的 push方法

let ary = [1, 2, 3];
Array.prototype.myPush = function () {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this.length;
};
var res = ary.myPush(100, 200);
console.log(ary); //[1,2,3,100,200]
console.log(res); //5

/*
    链式写法: 保证每次函数执行完毕之后的返回结果是当前类的实例
    需求: 想要让这个数组先排序，然后再倒序，然后再往里面添加一个10，然后再删除第一项;
    
 */
let ary2 = [4, 2, 3];
ary2.sort((a, b) => {
    return a - b; //升序
}) //返回的是数组
    .reverse() // 倒序，返回的是数组
    .push(10); // 添加，返回的是数组的长度
ary2.shift(); // 不可以实现链式调用，因为上一个返回的结果是数组的长度不是数组

/*
    问题: 删除数组最后一项后返回的是删除的项，不利于链式写法;
    方法: 手动封装一个 pop和push函数，返回的是数组，替换掉原来的   
 */
let ary3 = [1, 2, 3];
Array.prototype.pop = function () {
    this.length--;
    return this;
};
Array.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this;
};
ary2.sort((a, b) => {
    return a - b;
})
    .reverse()
    .pop()
    .push(1000)
    .push(2000);

/*
    原型的重定向：手动重定向的原型是没有constructor的，我们需要自己手动添加一个
 */
function Fn() {
    this.x = 100;
}
Fn.prototype.getX = function () {
    return this.x;
};
var f1 = new Fn();
Fn.prototype = {
    //consturctor:Fn,
    getY: function () {
        return this.x;
    },
};
var f2 = new Fn();
console.log(f1.getX());
console.log(f2.getX()); // 报错
console.log(f1.constructor);
console.log(f2.constructor); // Object

//内置类的原型地址是不能修改的
