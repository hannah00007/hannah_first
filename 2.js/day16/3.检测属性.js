//检测属性公有、私有的几种方式
//1）hasOwnProperty
var obj = {
    name: "珠峰",
    age: 12,
};
Object.prototype.write = 123;
// for in 循环一遍用来循环对象
// for in 是可以玄幻到共有的属性（自己添加的，内置的共有属性是循环不到的）
//hasOwnProperty是用来判断一个属性是否是对象的私有属性
//用法： 对象.hasOwnProperty(属性名)，是私有属性true,否者 false
for (var attrkey in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log("私有属性", key); //name age write
    } else {
        console.log("公有属性", key);
    }
}
// // 前面返回的是私有属性（一个数组），然后再遍历里面每一项
// Object.keys(obj).map(function(item){
//     console.log("私有属性", item);
// })

// 题一
function fn() {
    this.x = 100;
    this.y = 100;
}
fn.prototype.getX = function () {};
var f1 = new fn();
console.log(f1.hasOwnProperty("x")); //true
console.log(f1.hasOwnProperty("getX")); //false
console.log(fn.prototype.hasOwnProperty("getX")); //true
console.log(fn.prototype.hasOwnProperty("getY")); //false

//2）in 检测某个某个属性是不是属于某个对象（不管公有还是私有） 语法：属性 in 对象
function fn() {
    this.x = 100;
    this.y = 100;
}
fn.prototype.getX = function () {};
var f1 = new fn();
console.log("x" in f1); //true
console.log("getX" in f1); //true
console.log("a" in f1); //false

// 封装检验公有属性的方法
function fn() {
    this.x = 100;
    this.y = 100;
}
var f1 = new fn();
Object.prototype.hasPublicProperty=function(attr){
    // return (attr in this) &&(!this.hasOwnProperty(attr))?true:false
    // 要求属性名必须是数字或者字符串
    let ary=["number","string"];
    if(!ary.includes(typeof ary))return false
    if(attr in this){
        if(!this.hasOwnProperty(attr)){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}
f1.hasPublicProperty("x");
f1.hasPublicProperty("toString")
