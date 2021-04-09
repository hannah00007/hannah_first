/*
1、typeof 
    + 检查数组或者普通对象，或者 null，他的返回值都是"Object"
    + 缺点：不能详细的区分数组，对象和 null
2、constructor 基于构造函数检测数据类型
    + 当前实例的所属类的原型被重新定向了，或者实例上有constructor属性，都会导致检测结果不准确

3、instanceof 检测当前实例是否属于某个类f1 instanceof Fn
    + 缺点 f1 instanceof Object//true,只要当前的实例出现在当前实例的原型链上就会返回 true
4、Object.prototype.toString.call([])：
// 只能检测内置类，不能够检测自定义类，因为检测自定义类返回的都是 '[object Object]'
*/
let f1=new Fn;
console.log(f1.constructor==Fn)
let num=new Number(1);
console.log(num.constructor===Number)
let obj={}
console.log(obj.constructor===Object)//true
let obj={constructor=100}
console.log(obj.constructor===Object)//false


function Fn(){

}
Fn.prototype={}//重定向后不会自带一个属性叫 constructor
let f1=new Fn
f1 instanceof Object;