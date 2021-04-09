/*
  1、所有函数天生自带一个属性prototype;(主要给实例提供公有的方法)
  2、prototype的属性值是一个对象数据类型，指向当前类的原型。（类.prototype）
  3、prototype属性值即对象身上天生自带一个属性constructor,constructor指向当前的构造函数。重新定义的类的原型身上不会天生自带一个 constructor,需要手动添加
  4、所有的实例都是对象类型
  5、所有的对象天生自带一个属性__proto__,它指向当前实例所属类的原型;
 */

/*
  原型链
  先看自己私有的有没有
    + 如果有，就是私有的；
    + 如果没有，会沿着__proto__一直向上查找，直到找到 Object的原型为止；(Object的原型里面的属性__proto__值为 null)
  注:此处有图片讲解，可以参考老师课件
 */

function Fn() {
    this.name = "li";
}
var f1 = new Fn();
f1 instanceof Fn; //true
// 注意函数有三重身份:普通函数、构造函数、对象
f1 instanceof Object; //true 

// 常规来说 xxx.prototype的属性值都是对象，但是Object.prototype比较特殊
Object.prototype instanceof Object;//false;
Array.prototype instanceof Object;//true;
