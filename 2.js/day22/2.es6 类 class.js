/*
    es6的 class创建自定义类
        + class创建的类不能当做普通函数执行，只能当成类执行
        + 本身类的方法也是可以用的，比如 hasOwnProperty()
*/
class Fn {
    constructor(a,b){
        //this就是当前创建的实例
        this.x=a;
        this.y=b;
    }
    //给当前的Fn 类的原型上增加方法 get方法，f1.get()
    get(){
        console.log(100);
    }
    ss=100;//给当前实例增加私有属性
    static m=10;//把当前的Fn类当成对象增加键值对
    static n=100
}
let f1=new Fn(1,2)
console.log(f1)


// let obj={
//     //sum:function(){},
//     sum(){}
// }