/*
    继承：子类继承父类
        1、原型继承: A 类 和B类，B想要继承A类的私有和公有属性，我们可以用原型继承
            + 缺点: 
                + 自己原有的方法都不能用了
                + 内置类的原型是不可以重新定向的，只能是在原来的原型空间里面增加或者修改属性
            + 语法: 让B的prototype（原型）等于 A的实例   B.prototype=new A
            + 场景: 当我们要编写一个类时候，需要用到某个类的属性和方法
        2、中间类继承:继承公有属性
            + 场景: 有时候我们并不是某个类的实例，但是想要使用其原型上的方法，我们可以手动的把原型指向进行更改，这样就可以快速使用。
            + 语法: arguments 是类数组，想要使用Array 原型上的方法是不行的，我们可以通过：arguments.__proto__=Array.prototype, 就可以使用其原型上的方法
                + arguments 可以简单的理解为一个有序的对象，他的__proto__constructor=Object
            + obj.__proto__=Array.prototype，obj.push(100)//[100] 这样不可以。目标对象必须和数组相似
        3、call 继承: 继承私有属性，只能适用于自定义类上
        4、寄生混合继承: A类、B类，B类想要继承A类的私有和公有
        5、class继承: 让 B继承 A 的公有和私有属性，好处是原有的 constructor还是在

*/

/*
    原型继承:
        + 让 B 的原型指向 A 的实例，A 的私有属性变成 B 的公有属性，A 是公有也是 B 的公有
        + 手动添加 contructor 属性
*/
function A() {
    this.name = "wanghan";
    this.age = 18;
}
A.prototype.say = function () {
    console.log(`姓名是：${this.name}:年龄是${this.age}`);
};
function B() {
    this.sex = "wanghan";
    this.hight = 18;
}
B.prototype = new A();
B.prototype.constructor = B;
var b = new B();
/*
    中间类继承:
        问题: 某些实例不属于某类，但是想用其原型上的方法
        方法: 我们可以手动的去更改实例的__proto__,让它指向这个类的原型，则就可以直接使用其原型上的方法
*/
function fn() {
    console.log(arguments); //0:2,1:3,2:4
    arguments.__proto__ = Array.prototype;
    console.log(arguments.sort); //undefined;arguments.__proto__=Object
    var res = arguments.sort(function (a, b) {
        //报错，没有 sort这个方法
        return a - b;
    });
}
fn(5, 2, 3, 4);

function add(...arg) {
    arguments.__proto__ = Array.prototype;
    return arguments.join("+"); //直接使用错误的，arguments只是类数组
    // return eval([].join.call(arguments,"+"))
    //return eval(arg.join("+"))
}
/*
    call 继承:
        + A类和B类，B类的实例想要拥有A类的私有属性；
        + 我们可以让 A 当成普通的函数执行，把里面的 this指向进行更改成 B 类的实例
*/
function A() {
    this.a = "a";
    this.x = 100;
}
function B() {
    A.call(this);
    this.b = "b";
    this.y = 200;
}
var b = new B();

function A() {
    this.name = "wanghan";
    this.age = 18;
}
function B() {
    //B继承了A 的私有属性
    A.call(this); //当 B的实例执行时，让 A 里面的 this变成B 的实例
    this.sex = "wanghan";
    this.hight = 18;
}
console.log(new B());
/* 
      寄生组合继承：A类、B类，B类想要继承A类的私有和公有
 */

function A() {
    this.a = "a";
    this.x = 100;
}
A.prototype.getA = function () {
    console.log("A");
};
function B() {
    A.call(this);
    this.b = "b";
    this.y = 200;
}
B.prototype = Object.create(A.prototype); //Object.create创建一个空对象，并且让这个空对象的__proto__指向里面的实参
let f1 = new B();

// 在空对象里面添加属性只能是 B 的实例用而 A 的实例用不了。如果B.prototype=A.prototype那么 AB 两个地址是一样的
// 注意这个空对象是没有constructor，可以手动添加一个
// f1==>{}==>A.prototype

function A() {
    this.a = "a";
}
A.prototype.getNum = function () {
    console.log("num");
};
function B() {
    A.call(this);
}
//这样写的话，就是一个空间地址，修改B.prototype的时候，也同时修改了A.prototype
//采用Object.create的方式产生一个新的空间对象，让这个空对象的__proto__指向父类的原型
// B.prototype = A.prototype;
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;
var b = new B();

function A() {
    this.name = "A";
    this.age = 100;
}
function C() {
    A.call(this); //继承私有属性
}
// C.prototype = A.prototype;//继承共有属性
// 为了避免子类污染父类，我们一般不采用上述方法，而是采用Object.create的方式产生一个新的空对象让这个空对象的__proto__指向父类的原型
C.prototype = Object.create(A.prototype);
C.prototype.constructor = C;

let a2 = new A();
let c2 = new C();
console.log(a2.constructor, c2.constructor);

class A {
    constructor(m) {
        this.x = 100;
    }
    get Public() {
        //创建一个公有的方法
    }
    static b = 200; //把类当做对象增加键值对
}
let a = new A();
//如果用 class来创建类，在 A 的原型上添加个方法（函数）可以在里面直接写，get(){},在 A 的原型上添加属性只能是写在外面
A.prototype.x = 800;
//创建一个类 B ,让 B 继承 A 的公有或者私有的属性
class B extends A {
    //继承 A 的原型
    constructor() {
        super(m); //继承 A 的私有属性，实际上super()执行就是让 A 里面的 constructor 执行。传参也是在这
    }
}

let f = new B();
//f==>B.prototype==》B.prototype.__proto__==>A.prototype==>A.prototype.__proto__==>Object.prototype
