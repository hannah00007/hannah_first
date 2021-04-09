//封装捕获大正则和小正则的函数
//方法一：while
let reg = /\d([a-z])\d/g;
let str = "df3g4hjkfgg5g5g";
RegExp.prototype.myExecAll = function (str) {
    if (!this.global) {
        return this.exec(str)
    }
    let big=[];
    let small=[];
    let res=this.exec(str)
    while(res){
        let [value1,value2]=res;
        big.push(value1);
        small.push(value2);
        res=this.exec(str)
    }
    return{
        big,
        small
    }
 
};
console.log(reg.myExecAll(str));
//方法一：matchAll 返回的遍历器后用 for...of..
let str = "{0}年{1}月{2}日";
let reg = /\{(\d+)\}/g;
function execAll(str) {
  // 如果正则不加g，那正则实例身上的私有属性global就是false，反之就是true
  if (!this.global) {
    // 直接给他捕获一次return 出去
    return this.exec(str)
  }
  let big = [], // 创建一个大数组用来存储全局捕获的内容
    small = [];  // 创建一个小数组用来存储分组捕获的内容
  for (var ss of str.matchAll(reg)) {
    // console.log(ss); // 每一次捕获的内容
    let [max,min] = ss;
    big.push(max);
   small.push(min);
  }

  return big.length === 0 ? null : { big, small }
  // 把捕获到的内容return出去
  // console.log(res)
}
RegExp.prototype.execAll = execAll;
console.log(reg.execAll(str));
