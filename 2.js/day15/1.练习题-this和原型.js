/* 题一 */
var n = 2;
var obj = {
    n: 3,
    //属性值是自执行函数时会直接执行，执行完的结果才是属性值，本题fn对应的属性值就是 return后面的函数AF2；
    fn: (function (n) {
        n += 2;
        //自执行函数的 this 就是 window；
        this.n += 2;
        var n = 5;
        return function (m) {
            // 这个 n 要看在哪 ··执行·· 的，执行前面是否有点；
            this.n *= 2;
            // 这个 n 是看在哪 ··声明·· 的，符合作用域链的逻辑；
            console.log(m + ++n);
        };
        // 形参赋值也遵循作用域链逻辑，这里的 n 传的就是外面的 2；当然如果是 obj.n 就是对象里面的 3；
    })(n),
};
var fn = obj.fn;
//执行这个函数的时候里面的 this 就是 window
fn(3);
//执行这个函数的时候里面的 this 就是 obj
obj.fn(3);
console.log(n, obj.n);

/* 题二 */
var log = console.log;
function Fun() {
    // 这里面的 this就是指向你 new 完之后的空对象
    this.a = 0;
    // this.b = function () {
    //     alert(this.a);
    // };
};
/*
总结：
    1、每个函数都有两个属性:prototype和__proto__;
    2、其中prototype的属性值是一个对象，这个对象里面有默认的constructor:类(Fun 的空间地址）;
    3、但是当我重新给prototype设置属性值之后（Fun.prototype是重新给地址，Fun.prototype.getX是在之前的空间添加属性），constructor:类地址 就会消失了,要想不消失就手动添加，因为你的 prototype 指向新的空间地址，里面只有 b和 c没有 constructor了;
    4、万物皆对象（实例）都有属性:__proto__,指向类的原型(Fun.prototype);
*/
Fun.prototype = {
    b: function () {
        this.a = 20;
        log(this.a);
    },
    c: function () {
        this.a = 30;
        log(this.a);
    },
};
// new就是创建的意思，new  Fun()创建一个实例 my_fun
/* 
new会隐式创建 3 句话：
    1、var obj={}(创建一个空对象)；
    2、this指向这个空对象，即 this.属性名就是在这个空对象里面添加属性和方法（三层：属性、方法、原型）；
    3、同时obj里面有 __proto__： 类的prototype；
*/
var my_fun = new Fun();
my_fun.b();

/* 题三 */
var name = "window";
var Tom = {
    name: "Tom",
    show: function () {
        console.log(this.name);
    },
    wait: function () {
        var fun = this.show;
        fun();
    },
};
Tom.wait();

/* 题四 */
var fullName = "languge";
var obj = {
    fullName: "javascript",
    prop: {
        getFullName: function () {
            return this.fullName;
        },
    },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

/* 题五 */
function Fn(){
    this.x=100;
    this.y=200;
    this.getX=function(){
        console.log(this.x);
    }
}
Fn.prototype.getX=function(){
    console.log(this.x);
}
Fn.prototype.getY=function(){
    console.log(this.y);
}
var f1=new Fn;
var f2=new Fn;
console.log(f1.getX==f2.getX);//false
console.log(f1.getY==f2.getY);//true
console.log(f1.__proto__.getY==Fn.prototype.getY);//true
console.log(f1.__proto__.getX==f2.getX);//false
console.log(f1.getX===Fn.prototype.getX);//false
console.log(f1.constructor);//Fn
console.log(Fn.prototype.__proto__.constructor);//Object,Fn.prototype.__proto__指向类的原型，此时Fn.prototype是一个对象，是 Object的实例，所以Fn.prototype.__proto__结果是 Object.prototype,因此Fn.prototype.__proto__.constructor的结果是 Object
f1.getX();//100
f1.__proto__.getX();//undefined(注意 obj.x 和 obj(),一个是对象里面的属性 X 对应的属性值（没有该属性值不会往上找），一个是函数执行（没有变量会往上找）)
f2.getY();//200
Fn.prototype.getY();//undefined

/* 题六 */
var num=10;
var obj={num:20};
obj.fn=(function(num){
   this.num=num*3;
   //注意这是变量 num,不是属性名 num ,要想用 obj 里面的 num,要写成 obj.num
   num++;
   return function(n){
       this.num+=n;
       //自执行函数执行完不能销毁，因为 下面的 num用的是传进来的参数 num
       num++;
       console.log(num);
   }
})(obj.num);
var fn=obj.fn;
fn(5);
obj.fn(10);
console.log(num,obj.num)