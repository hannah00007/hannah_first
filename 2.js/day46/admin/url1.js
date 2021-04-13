let url=require("url")//解析 url
let path=require("path")

// node内置的url模块
// let  url = require('url');
// let str = 'https://www.baidu.com:8080/list?name=1&age=2#index';
// let res = url.parse(str,true);
// // 第二个参数true就是把当前字符串的参数转化成对象的格式，存储到query属性上
// console.log(res);

// console.log(__dirname)//当前模块的绝对路径
// console.log(__filename)//当前模块的绝对路径+名字

console.log(path.resolve()); // 当前项目的绝对路径(应该是打开终端的路径)



