/* pop,shift,slice,concat,map,forEach,indexOf,includes，filter,find,reduce,every,some */

/*
  push: 手动封装一个函数myPush，其方法类似于数组的 push方法;
    + 新添加的方法不要和内置方法一样，不然会被替换掉;
    + 注意 push 返回的是新数组的长度
 */
let ary = [1, 2, 3];
Array.prototype.myPush = function () {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this.length;
};
var res = ary.myPush(100, 200);
console.log(ary); //[1,2,3,100,200]
console.log(res); //5

/*
  pop:
    + 问题: 删除数组最后一项后返回的是删除的项，不利于链式写法;
    + 方法: 手动封装一个 pop和push函数，返回的是数组，替换掉原来的   
 */
let ary3 = [1, 2, 3];
Array.prototype.myPop = function () {
    this.length--;
    return this;
};
ary3.myPop();
/*
  映射数组: map;
    + 作用: 映射数组中的每一项;
    + 参数: 函数,并且有两个形参:item,index(只是名字,可变);
    + 返回值: 映射之后的新数组;
    + 是否改变原数组: 不改变;
*/
Array.prototype.myMap = function (fun) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        let result = fun(this[i], i, this); // 1 => 3 ;;;;  [1,2,3]
        res.push(result);
    }
    return res;
};
let ooo = [1, 2, 3].myMap((item, index, own) => {
    return `${index}:${item + 2}:[${own}]`;
});
console.log(ooo);

/*
  find: 
    + 作用: 发现符合的某一项,会有懒惰性
    + 封装逻辑: return后面是true 就会返回数组里面的这个值（不是数组)。
    + 返回值: 返回符合条件的某一个值，并且立即停止。没有符合条件的值就会返回undefined
    + 注意: 循环的次数是不确定的
*/

let arr = [100, 2200, 300];
Array.prototype.myFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        let result = callback(this[i], i);
        //console.log(result)
        if (result) {
            return this[i];
        }
    }
};
arr.myFind((item, index) => {
    return item > 3000; //返回的T/F
});
/*
  some
    + 作用: 是否有符合
    + 参数: 回调函数
    + 返回值: 只要数组中有符合规则的值就返回true，如果数组中没有符合条件的值就会返回false
*/
let arr = [100, 220, 300, 400];
Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        let result = callback(this[i], i);
        if (result) {
            return result;
        }       
    }
    return false;
};
arr.mySome((item, index) => {
    return item > 100;
});

/*
  every
    + 作用: 全部的值是否符合
    + 参数: 回调函数
    + 返回值: 数组中全部符合规则的值就返回true，如果数组中有不符合条件的值就会返回false
    + 循环的次数不确定，只要遇到不符合就停止了
*/
let arr = [100, 220, 300, 400];
Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        let result = callback(this[i], i);
        if (!result) {
            return false;
        }
    }
    return true;
};
arr.myEvery((item, index) => {
    return item > 50;
});
/*
  遍历数组: forEach;
     + 作用: 遍历数组中的每一项;
     + 参数: 函数,并且有两个形参:item,index(只是名字,可变);
     + 是否改变原数组: 不改变;
     + 返回值: 无
*/
//封装 forEach
Array.prototype.myEach = function (fun) {
    for (let i = 0; i < this.length; i++) {
        fun(this[i], i);
    }
};
[4, 5, 6, 7].myEach((item, index) => {
    console.log(item, index);
});
/*
  filter 
    + 作用: 过滤
    + 参数: 函数,并且有两个形参:item,index(只是名字,可变);
    + 返回值: 新数组，return 后面是 true就会 push 到一个新数组里面，反之不会。没有符合条件的值就会返回空数组
*/

Array.prototype.myFilter = function (callback) {
    let ary = [];
    for (let i = 0; i < this.length; i++) {
        let res = callback(this[i], i);
        if (res) {
            ary.push(this[i]);
        }
    }

    return ary;
};
let arr = [100, 220, 300, 400];

arr.myFilter((item, index) => {
    return item > 200;
});


