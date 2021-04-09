let ary=[100,2,3,4]
for(let value of ary){
    console.log(value)//100,2,3,4
}

let str = "{0}年{1}月{2}日";
let reg = /\{(\d+)\}/;
//=>不设置g只匹配一次，exec和match获取的结果一致（既有大正则匹配的信息，也有小分组匹配的信息）
//=>如果正则加上g，在多次捕获的情况下match只能把大正则匹配的内容获取到，小分组匹配的信息无法获取
reg = /\{(\d+)\}/g;
console.log(str.match(reg)); // ["{0}", "{1}", "{2}"]
console.log(str.matchAll(reg));//返回的是一个遍历器
for (var ss of str.matchAll(reg)) {
  console.log(ss);
}