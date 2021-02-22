/*
前言
    对象：万物皆对象；
    类：具体的划分（内置类：Number String Boolean null undefined object Arry Regexp\自定义类）
    实例：类中的一个具体的例子；比如 var ary=[1,2,3]和var ary1=[2,3,4]/var obj={}/var str=""/Number("123")是 Arry/Object/String/Number里面的一个实例我们只需要学会 Arry 等里面的属性则各个实例就会明白
 */


//js创建数据的 4 种方式：普通单例模式、高级单例模式、工厂模式、构造函数模式


/*
    【单例模式】
        + 1、普通单例模式：就是一个对象，把描述一个对象的属性放到一起，这样避免了相互的干扰,其中对象名字还称为命名空间,每个命名空间都是Object这个内置基类的一个实例，每个实例之间都是相互独立，互不干扰；
        + 2、高级单例模式:虽然后面是函数，但是返回的是一个对象;
            + 函数本身会形成一个私有作用域,在这个作用域中有很多的变量和方法
            + 想要把谁暴露出去，就放到return后面。return后面的变量值会往function 形成的私有作用域里面找
*/
//下面的会互相干扰，后面的把前面的覆盖掉
var name = "wangzhe";
var age = 18;
var sex = "女";

var name = "shuaiyuan";
var age = 20;
var sex = "男";
//普通单例模式就不会相互干扰
var obj1 = {
    name: "wangzhe",
    age: 18,
    sex: "女",
};

var obj2 = {
    name: "shuaiyuan",
    age: 20,
    sex: "男",
};
//高级单例模式: 最终是把返回对象的堆内存的地址给了indexModel/messageModel
var nameSpace = (function () {
    function fn() {}
    var a = 2;
    //... 在这个作用域中还有很多的变量和方法，
    return {
        // 想要把谁暴露出去，就放到这对象中
        fn: fn,
    };
})();
console.log(nameSpace.fn);
//高级单例模式使用场景一:员工合作
//员工A:首页模块的开发
var indexModel = (function () {
    function fn2() {}
    function fn3() {}
    //...
    return {
        init: function () {
            // 想要调用自己模块里面的方法：
            fn2();
            fn3();
        },
        // 如果 员工B 想要调员工A里面的方法fn2代码，只用把这个方法代码暴露出去
        fn2: fn2,
    };
})();
indexModel.init();

//员工B:详情页的开发
var messageModel = (function () {
    function fn() {}
    //...
    return {
        init: function () {
            // 想要调用自己模块里面的方法：
            fn();
            // 调用A员工模块里面的fn2方法
            indexModel.fn2();
        },
    };
})();
messageModel.init();
//高级单例模式使用场景二: 开发时的公用性模块
var utils = (function () {
    function fn() {}
    function b() {}
    // ....
    return {
        fn: fn,
        b: b,
    };
})();

// 想要用这些方法：
utils.fn();
utils.b();


/*
    【工厂设计模式】:封装一个具有功能性代码的函数;
        + 优势: 减少了页面中冗余的代码，实现了“高耦合低内聚”，同时实现批量生产;
        + 劣势: 没有类的概念;

*/
//工厂模式：普通单例模式每次都需要重复的去写，很麻烦，所以就可以用工厂模式
function person(name, age) {
    return {
        name: name,
        age: age,
    };
}
person("lili", "18");
person("dava", "20");


/*
    【构造函数模式】（自定义类）
        + 把一个普通的函数，在执行的时候加了一个new 那这个函数就是构造函数,当前的函数名称为“类名”比如下面例子中的Fn 就是类，f1，f2 就是实例;
        + 函数执行的返回结果就是当前构造函数的一个实例，比如f1、f2 就是当前函数的一个实例;
        + 构造函数一般名字都大写;
        + f1 和f2  是独立的堆内存，不相等;
        + 构造函数中通过 this 添加的属性名和属性值，都添加给当前的实例（私有作用域）;构造函数中的 this 指的就是当前的类的实例
            + new会隐式创建 3 句话：
                + var obj={}(创建一个空对象)；
                + this指向这个空对象，即 this.属性名就是在这个空对象里面添加属性和方法（三层：属性、方法、原型）；
                + 同时obj里面有 __proto__： 类的prototype；
*/

function Fn() {
    this.name = "lili";
    this.age = 18;
}
var f1 = new Fn();
f1.name;
var f2 = new Fn();
f2.name;
f1.name == f2.name; //true 因为是基本数据类型，结果都是 lili,如果结果是引用数据类型就不可以了；

//在构造函数中，通过this添加的属性，在实例中通通都会有，并且实例和实例是独立分开的，互不影响（不同的堆内存）
function Fn() {
    this.name = "lili";
    this.age = 18;
    this.fn = function () {
        console.log(1);
    };
}
var f1 = new Fn(); //Fn {name: "lili", age: 18, fn: ƒ}
var f2 = new Fn(); //Fn {name: "lili", age: 18, fn: ƒ}
console.log(f1 == f2); //false

/*
使用 this时return的几种情况：
    + 不写: 返回默认this指向的实例地址结果
    + 手动写: 
        + return后是基本数据类型的值，不会造成影响，还是默认this指向的实例地址结果
        + return后是引用数据类型的值，会造成影响，手动的结果替换默认，所以要慎用 return

instanceof:
    + 语法：实例 instanceof 类
    + 作用：用来判断当前实例是不是隶属某个类
    + 结果：布尔类型，如果是 true 是当前类的实例，false 就不是
js创建值的两种方式
    1、字面量方式：eg. var obj={}、[]...（以及下面的例子）
    2、基于构造函数: eg. var obj2=new Object()、Number（）。。。
    3、注意：基本数据类型用字面量方式创建的实例，不是标准的实例,所以用instanceof 进行检测的时候不行，但是类的所有方法都可以照常继承使用

in(不区分公有还是私有):
    + 语法：attr in obj
    + 作用：检验某属性是不是对象的公有或者私有属性
    + 结果：布尔类型
        + true 有这个属性（这个对象不论私有还是公有，只要有这个属性返回值是 true）
        + false 没有这个属性
        
hasOwnProperty(区分公有还是私有):
    + 语法：obj.hasOwnProperty("attr")
    + 作用：检验某属性是不是对象的私有属性
    + 结果：布尔类型
        + true 有这个属性（只有私有的这个属性返回值是 true）
        + false 没有这个属性
*/
var n1 = 1;//字面量
var obj1 = {
    name: "wangzhe",
    age: 18,
    sex: "女",
};//字面量
var ary = [1, 2, 3];//字面量

var n2 = new Number(1);//构造函数
var n3 = new String("1");//构造函数

console.log(typeof n1); //"number"
console.log(typeof n2); //"object"
// .toFixed()是 Number类原型里面的方法
n1.toFixed(2); //"1.00"
n2.toFixed(2); //"1.00"


function Fn(name, age) {
    this.name = name;
    this.age = age;
    // 不写 return默认返回的是 this 指向的地址
    return 100; //返回的还是默认地址
    return {}; //会替换 默认return
}
var f1 = new Fn("wanghan", 18);
var f2 = new Fn("王斌", 19);
console.log("name" in f1); //true
console.log("toString" in f1); //true
console.log(f1.hasOwnProperty("name")); //true
console.log(f1.hasOwnProperty("toString")); //false

// 注意一点：用字面量形式去创建基本数据类型的实例，用 instanceof检测的结果是 false,用类或者构造函数方式检测的结果是 true//
// 因为用字面量的形式创建基本数据类型时候，不是标准的实例，所以是 false，但是数字类上的所有方法照常使用

var num = 1;
var num2 = new Number(3);
num instanceof Number; //false
typeof num; //number
num2 instanceof Number; //true
num2 instanceof Object; //true,万物皆对象
var obj2 = new Object();
var ary2 = new Array(2); //只跟一个参数，代表数组的长度
var ary2 = new Array(1, 2, 3); //多个参数，代表数组的每一项


/*
封装一个检验公有属性的方法：
    + 如果公有的，就返回 true
    + 不是公有的、或者说没有此属性的返回值就是 false
怎么判断是不是公有的？
    + 有这个属性（不论公还是私）
    + 不是公有就是私有
*/

// 使用构造函数和this
function Fn() {
    this.name = "lili";
}
Fn.prototype.write = function () {
    alert(1);
};
Fn.prototype.hasPubP = function (attr) {
    return attr in this && !this.hasOwnProperty(attr) ? true : false;
};
var f1 = new Fn();
var f2 = new Fn();

f1.hasPubP("name");
f2.hasPubP("write");

// 或者显示指定 this
function Fn() {
    this.name = "lili";
    this.age = 18;
}
var f1 = new Fn();

function hasPubP(attr) {
    return attr in this && !this.hasOwnProperty(attr) ? true : false;
}
hasPubP.call(f1, "toString"); //true
hasPubP.call(f1, "name"); //false

// 或者显示指定参数
function Fn() {
    this.name = "lili";
    this.age = 18;
}
var f1 = new Fn();

function hasPubP( obj,attr) {
    return attr in obj && !obj.hasOwnProperty(attr) ? true : false;
}
hasPubP(f1, "toString"); //true
hasPubP(f1, "name"); //false




