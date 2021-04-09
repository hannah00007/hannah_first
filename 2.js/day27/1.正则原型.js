/*
    正则类的原型方法
        + test: 用来匹配
        + exec: 用来捕获
            + 捕获返回的内容是一个数组的格式，如果捕获不到返回的是 null
                + 数组里面按照索引排列的键值对是正则捕获的内容
                + index的值是捕获的内容开始位置的索引
                + input是原字符串的内容
            + 捕获的特点
                + 如果在正则里面加小括号只想精确匹配并不想捕获他，那就在括号的前面加上?:
                + 正则的懒惰性: 正则只会捕获字符串里面符合规则的第一个内容
                    + 原因: reg.lastIndex//lastIndex是正则开始捕获的地方。默认都是 0。
                    + 方法: 当我在正则后面加上 g，lastIndex每次捕获完的结果都会变成当前捕获字符串索引的下一个索引
                + 捕获的方法
                    + exec--正则原型上
                    + match--字符串原型上
                    + matchAll(问老公)
                    + replace 
                        + replace执行的时候，第二个参数传递的是一个函数的话，那正则匹配几次，回调函数就执行几次，而且每一次匹配的时候，会把匹配到的值(和exec捕获的数组一样)以实参的形式传递给回调函数
                        + replace的返回值，每一次回调函数的执行结果会把当前匹配的内容进行替换
                        + replace后面函数的形参是前面捕获完数组里面的值展开的每一项（不包括 group:undefined）
                    + 正则类也可以用作捕获(作为参考)
                          
    


*/
let reg = /\d/g;
let str = "df3g4hjkfgg5gg";
console.dir(reg.lastIndex); // 0
console.log(reg.exec(str)); // ['3']
console.dir(reg.lastIndex); // 3
console.log(reg.exec(str)); // ['4']
console.dir(reg.lastIndex); // 5
console.log(reg.exec(str)); // ['5']
console.dir(reg.lastIndex); // 12
console.log(reg.exec(str)); // null
console.dir(reg.lastIndex); // 0
console.log(reg.exec(str)); // ['3']

// 自己封装一个方法，用来捕获字符串中所有符合规则的内容，以一个数组的形式进行返回，如果捕获不到就是null
let reg = /\d/g;
let str = "df3g4hjkfgg5gg";
str.match(reg); //在字符串的原型上的 match 方法，可以实现把符合捕获的结果放到数组中["3","4","5"]
//封装字符串身上原生的 match
RegExp.prototype.myExecAll = function (str) {
    //当有 g 的时候global就是 true
    if (this.global) {
        let ary = [];
        let res = this.exec(str);
        //while 用于不知道循环多少次的时候
        while (res) {
            //解构的写一个就是默认第一项
            let [value] = res;
            ary.push(Number(value));
            res = this.exec(str);
        }
        return ary.length > 0 ? ary : null;
    }
    return this.exec(str);
};
console.log(reg.myExecAll(str));
// 第一种情况，如果正则不加g，返回第一次捕获的内容['3',....]
// 第二种情况，如果捕获不到，返回null
// 第三种情况，正常捕获，返回的内容 ['3','4','5']

let str = "dfg3h3jkl4f4gh";
let reg = /(\d)([a-zA-Z])(\d)/g;
// 在匹配的时候，正则会把匹配到好的内容存储到当前的正则类上，
// $1-$9是每一次小分组正则匹配到的内容
// $&这是大正则匹配到的内容

// 如果匹配多次，那以前匹配到的内容就会被覆盖
reg.test(str);
console.dir(RegExp.$1);
reg.test(str);
console.dir(RegExp);

let str = "s3dfg4hjk"; // 's3,dfg4,hj5,k'
str1 = str.replace(/[a-z](\d)[a-z]/g, "$1,");
str2 = str.replace(/[a-z](\d)[a-z]/g, "$&,");
console.log(str);

// 利用replace进行捕获
// str.replace(str,str)
// str.replace(reg,str)
// str.replace(reg,fun)

// let str = 'sssass';
// str = str.replace('a','w');
// console.log(str);

// let  str = 'goodbyessgoodbye';
// str = str.replace(/goodbye/g,'拜拜');
// console.log(str);

let str = "goodssgoodaagood";
console.log(str);
str = str.replace(/good/g, function () {
    //如果 replace 执行的时候，第二个参数传递的是一个函数，正则匹配几次，函数就执行几次
    //而且每一次匹配的时候，会把匹配到的值以形参的形式传递给函数
    //如果有 return 会把return的结果代替捕获的结果
    console.log(1);
    console.log(arguments);
    return ",";
});
console.log(str);

let str = "good10ssgoo20daago30od";
str = str.replace(/\d+/g, function () {
    return arguments[0] + "0";
});
console.log(str);

let str = "good10ssgoo20daago30od";
str = str.replace(/\d+/g, function (...arg) {
    console.log(arg)
    return arg[0] + "0";
});
console.log(str);

let str = "good10ssgoo20daago30od";
str = str.replace(/\d+/g, function (a) {
    return a + "0";
});
console.log(str);

let str = "good good study";
str = str.replace(/\b[a-z]/g, function (...arg) {
    return arg[0].toUpperCase()
});
console.log(str);

