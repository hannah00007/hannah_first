// 当前对象自己身上的（但是天生自带的是不可枚举的（__proto__）），当前实例所属类原型上自己手动增加的，用 for in都可枚举出
// 当枚举的时候先枚举自己的私有属性，再枚举自己手动添加的
// 要想只枚举自己私有的，加个判断 if

Object.prototype.ss = 100;
var obj = {
    a: 1,
    b: 2,
};
for (var key in obj) {
    //检查是否是私有属性，如果是就进不去 if,否则会进去
    if (!obj.hasOwnProperty(key)) break; //if 只有一句代码可以省略大括号
    console.log(key);
}
