/*
    检测数据类型的四种方法:
        + typeof
        + instanceof: 检测某个实例是不是隶属某个类，不过只要某个实例的原型链上出现了检测的类，检测的结果就是true
        + constructor: constructor可以手动改变 （或者手动更改原型指向的话，检测就不准确了）
        + Object.prototype.toString.call();



*/

var ary=[1,2,3];
ary instanceof Array;//true
ary instanceof Object;//true


var a=1;
console.log(a.constructor);
"aa".constructor
f1.constructor

f1.constructor=3

f1.constructor;//3


({}).toString();//"[object Object]"
([]).toString();//""
Object.prototype.toString.call({});//"[object Object]"
Object.prototype.toString.call([]);//"[object Array]"
Object.prototype.toString.call("");//"[object String]"
window.toString.call(1);//"[object Number]"
toString.call(1);// window可以省去
console.log(Object.prototype.toString.call==toString.call); //true
