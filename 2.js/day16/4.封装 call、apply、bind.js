function Fn(name) {
    this.name = name;
    console, log("姓名是：", name);
}
// 函数的三种角色：普通函数、构造函数（类）、普通对象
Fn(1); //普通函数

new Fn(1); //构造函数（类）
Fn.play = function () {
    console.log("123");
}; //普通对象
Fn.play();

// 箭头函数不能 new,因为箭头函数没有 this

// 原型深入：
// Function 和 Object
// 所有的函数：普通函数、类（内置类，自定义类）都是Function的实例，Function 和Object 都是Function的实例
// 所有的函数身上都有一个prototype 和__proto__(所有函数都是普通对象)
// 所有函数.__proto__==Function.prototype
// 所有函数都是 Function的实例

/*
    1、成员访问：寻找对象里的属性名所对应的属性值就是成员访问Fn.aa(19)
    2、new(带参数列表):就是构造函数执行有括号（19）
    3、new(无参数列表):就是构造函数执行没有括号(18)
    优先级一样，从左到右运算
     */

function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
}
Foo.getName = function () {
    console.log(2);
};
//这个Foo.getName和Foo函数里面的getName不是一个东西，Foo里面的getName只是函数里面的自身的东西，而下面Foo.getName是给函数添加一个属性叫getName
Foo.prototype.getName = function () {
    console.log(3);
};
var getName = function () {
    console.log(4);
};
function getName() {
    console.log(5);
}
Foo.getName(); //2
getName(); //4
Foo().getName(); //1
getName(); //1
new Foo.getName(); //2 先执行 new Foo（18）和Foo.getName（19）
new Foo().getName(); // 先运算new Foo()（19） 和 Foo().getName（19）等级一样从左往右
new new Foo().getName(); // 先运算里层的 new Foo()（看成A）,==>A.getName ==>new b ();//3

function Fn() {
    let a = 1;
    this.a = a;
}
Fn.prototype.say = function () {
    this.a = 2;
};
Fn.prototype = new Fn();
let f1 = new Fn();

Fn.prototype.b = function () {
    this.a = 3;
};
console.log(f1.a);
console.log(f1.prototype); //// f1 是实例，实例上没有prototype 这个属性所以是undefined
console.log(f1.b);
console.log(f1.b());
console.log(f1.a);
console.log(Fn.prototype.a);
console.log(Fn.prototype.b());
console.log(Fn.prototype.a);
console.log(f1.hasOwnProperty("b"));
console.log("b" in f1);
console.log(f1.constructor == Fn);

function fun() {
    this.a = 0;
    this.b = function () {
        alert(this.a);
    };
}
fun.prototype = {
    b: function () {
        this.a = 20;
        alert(this.a);
    },
    c: function () {
        this.a = 30;
        alert(this.a);
    },
};
var my_fun = new fun();
my_fun.b(); //0
my_fun.c(); //30
fun.prototype.b(); //20
my_fun.b(); //30
fun.prototype.c(); //30
my_fun.b(); //30

//形参赋值包括两个步骤，形参声明和形参赋值，未传参数结果是 undefined
function C1(name) {
    // un
    if (name) {
        this.name = name;
    }
}
function C2(name) {
    // un
    this.name = name;
}
function C3(name) {
    // un
    this.name = name || "join";
}
C1.prototype.name = "Tom"; // 给C1类的原型增加属性
C2.prototype.name = "Tom"; // 给C2类的原型增加属性
C3.prototype.name = "Tom"; // 给C3类的原型增加属性
alert(new C1().name + new C2().name + new C3().name);

function Fn(num) {
    this.x = this.y = num;
}
Fn.prototype = {
    x: 20,
    sum: function () {
        console.log(this.x + this.y);
    },
};
let f = new Fn(10);
console.log(f.sum === Fn.prototype.sum); //T
f.sum(); //20
Fn.prototype.sum(); //NaN
console.log(f.constructor); //Object

// 形参赋值，变量提升，new的三句话，自上而下执行

//封装函数，模拟实现new
function C2(name, age) {
    this.name = name;
    this.age = age;
}

function objectFactory(...arg) {
    var obj = new Object();
    var constructor = arg.shift(); //C2
    console.log(arg); //["王涵","18"]
    obj.__proto__ = constructor.prototype;
    var res = constructor.apply(obj, arg);
    return typeof res === "Object" ? ret : obj;
}
objectFactory(C2, "王涵", "18");

//封装函数，模拟实现instanceOf
function instance_of(L, R) {
    var O = R.prototype;
    L = L.__proto__;
    while (true) {
        if (L === null) {
            return false;
        }
        if (L === O) {
            return true;
        }
        L = L.__proto__;
    }
}
instance_of([], Array);

//封装函数，Object.create()
function create(proto) {
    // var obj = {};
    // obj.__proto==proto
    // return obj;
    function F() {
        F.prototype = proto;
    }
    return new F();
}

var obj2 = { q: 1 };
var obj = create(obj2); //obj.__proto__==obj2

/*
    封装函数call
        + call 执行的时候 它里面的this是谁？ this是fn
        + call的作用是让fn执行 并且把fn中的this换成obj,fn 执行 return啥，fn.call() 结果就是啥
        + 让fn执行的前提是需要获取到fn(call中的this 就是fn)(this())

*/
function fn() {
    console.log(this, arguments);
    return 100000;
}
var obj = { a: 123 };
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

/*
    封装函数apply

*/
function fn() {
    console.log(this, arguments);
    return 100000;
}
var obj = { a: 123 };
Function.prototype.myApply = function (ctx, arg = []) {
    //如果这样写，fn虽然执行了，但是 fn里面的this没有改
    //this(...arg);//[1,2,3,4]
    ctx.newattr = this; //把 fn 放到这个对象里面当成属性值
    let res = ctx.newattr(...arg); //此时fn里面的 this就变成了ctx
    delete ctx.newattr; //添加的那个属性再删掉
    return res; //
};
fn.myApply(obj, [1, 2, 3]);

/*
    封装函数bind
    + 先返回一个新的函数给到 f4
    + 让 f4执行，就是让f2 在新的函数内执行

*/

function f2(...arg) {
    console.log(this, arg);
    return 100;
}

var obj4 = { a: 123 };
Function.prototype.myBind = function (ctx, ...arg) {
    let _this = this;
    return function (...ary) {
        let ss = [...arg, ...ary];
        return _this.call(ctx, ...ss);
    };
};
let f4 = f2.myBind(obj4, 1, 2, 3, 4, 666);
f4(11111, 22222); //执行时候传递的参数就是给里面的小函数,可以不传

let obj1 = {
    ss: 100,
};
let obj2 = {
    ...obj1,
};
console.log(obj2);
