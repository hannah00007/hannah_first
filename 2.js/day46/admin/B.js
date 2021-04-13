
// let A = require('./A.js'); // 把当前A模块中的东西到入到此处
// let B = require('./A.js');
// 模块的导入是同步的，导入不完下边的代码不会自行
// 导入的时候，被导入的模块里的代码会从上往下执行一遍
// 如果重复导入同一个模块，那模块里的代码只执行一次
// console.log(A);

//------------------------------
// 内置模块
// let url = require('url');
// console.log(url);

// // 第三方模块
// let express = require('express');

//------------------------------------------------------------
let A = require('./A');
function avg(...arg){
 arg = arg.sort((a,b)=>b-a).slice(1,arg.length-1);
 console.log(arg,21); // [4,3,2]
return (A.sum(...arg)/arg.length).toFixed(2)
}
// console.log(avg(2,1,4,5,3));
// console.log(1000);
module.exports = {
  avg
}