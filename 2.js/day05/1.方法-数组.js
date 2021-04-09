// 数组可以用 for in 和 for of 迭代
// 数组里面的 length 是不可枚举的属性


/*
  数组: 对象类型,属性名是索引数字,属性值可以是任意类型;
 */
var ary = [1, 2, 3];
ary.length; //获取 ary的长度
ary[0]; //获取第一项
ary[ary.length - 1]; //获取最后一项

/*
  增加末尾: ary.push(x);
     + 作用: 往数组末尾追加项;
     + 参数: 具体要增加的项;
     + 返回值: 新数组的长度;
     + 是否改变原数字: 改变;
*/
var ary = [1, 2, 3];
var res = ary.push(6);
console.log(ary); //[1,2,3,6]
console.log(res); //4

/*
  增加开头: ary.unshift(x);
     + 作用: 往数组开头追加项;
     + 参数: 具体要增加的项;
     + 返回值: 新数组的长度;
     + 是否改变原数字: 改变;
*/
var ary = [1, 2, 3];
var res = ary.unshift(6);
console.log(ary); //[6,1,2,3]
console.log(res); //4

/*
  删除结尾: ary.pop();
     + 作用: 删除数组的最后一项;
     + 参数: 无;
     + 返回值: 删除的项;
     + 是否改变原数字: 改变;
*/
var ary = [1, 2, 3];
var res = ary.pop();
console.log(ary); //[1,2]
console.log(res); //3

/*
  删除开头: ary.shift();
     + 作用: 删除数组的第一项;
     + 参数: 无;
     + 返回值: 删除的项;
     + 是否改变原数字: 改变;
*/
var ary = [1, 2, 3];
var res = ary.shift();
console.log(ary); //[2,3]
console.log(res); //1

/*
  删除/新增: splice(n m x1 x2);
     + 作用: 从索引n开始(包含),删除m项后用x1、x2... 替代;
     + 参数: n、m、x1、x2;
     + 返回值: 删除项的数组,获取删除的某项:res[0];
     + 是否改变原数字: 改变;
     + 注意:ary.splice(n,0,....x); 从索引n开始,删除0项,并且把x项添加的内容新增到索引n的前面,返回值是一个空数组;
 */
var ary = [1, 2, 3];
var res = ary.splice(0, 2, 6, 6, 6, 6);
console.log(ary); //[6,6,6,6,3]
console.log(res); //[1,2]
console.log(res[0]); //1

/*
  数组开头增加一项:
     + unshift;
     + splice;
 */
var ary = [1, 2, 3];
var res = ary.splice(0, 0, 6, 6, 6, 6);
console.log(ary); //[6,6,6,6,1,2,3]放在索引为0 的前面
console.log(res); //[]
console.log(res[0]); //undefined

/*
  数组最后增加一项:
     + push;
     + splice;
     + length;
 */

var ary = [1, 2, 3];
var res = ary.splice(ary.length, 0, 6, 6, 6, 6);
console.log(ary); //[1,2,3,6,6,6,6]
console.log(res); //[]
ary[ary.length] = 200; //[1,2,3,200]
/*
  数组最后一项前面增加一项: splice;
 */
var ary = [1, 2, 3];
var res = ary.splice(ary.length - 1, 0, 6, 6, 6, 6);
console.log(ary); //[1,2,6,6,6,6,3]
console.log(res); //[]

/*
  删除数组第一项:
     + shift;
     + splice;
 */
var ary = [1, 2, 3];
ary.splice(0, 1); //[1]

/*
  删除数组最后一项
     + pop;
     + splice;
     + length;
 */
var ary = [1, 2, 3];
ary.splice(ary.length - 1, 1); //[1,2]
ary.length--; //[1,2]

/*
  复制数组: ary.slice(n,m);
     + 作用: 复制数组;
     + 参数: 复制从n项(包含)到第m项(不包含)
     + 返回值: 复制的数组;
     + 是否改变原数字: 不改变;
 */
var ary = [1, 2, 3];
var res = ary.slice(0, 1);
console.log(ary); //[1,2,3]
console.log(res); //[1]
/*
  复制整个数组ary.slice(0/空)
 */
ary.slice(0);
ary.slice();

/*
  拼接: ary.concat(ary1);
     + 作用: 拼接数组
     + 参数: 具体的某项或者数组
     + 返回值: 拼接后的数组;
     + 是否改变原数字: 不改变;
 */
var ary = [1, 2, 3];
var ary2 = [6, 7];
var res = ary.concat(4, 5, ary2);
console.log(ary, res); //[1,2,3];[1,2,3,4,5,6,7]

/*
  数组转为字符串: ary.toString();
     + 作用: 把数组转为字符串;
     + 参数: 无;
     + 返回值: 字符串;
     + 是否改变原数字: 不改变;
*/
var ary = [1, 2, 3];
var res = ary.toString();
console.log(ary, res); // [1, 2, 3] "1,2,3"

/*
  数组转为某种连接符相连的字符串: ary.join("+/-...");
     + 作用: 把数组转为字符串;
     + 参数: 无;
     + 返回值: 字符串;
     + 是否改变原数字: 不改变;
*/
var ary = [1, 2, 3];
// 这里面的 eval 是求和的意思
var res = eval(ary.join("+")); //:/-...
console.log(ary, res); //[1, 2, 3] 6
var res = ary.join("+"); //:/-...
console.log(ary, res); //[1, 2, 3] "1+2+3"

/*
  数组倒序: ary.reverse();
     + 作用: 倒序;
     + 参数: 无;
     + 返回值: 倒序之后的数字;
     + 是否改变原数字: 改变;
*/
var ary = [1, 2, 3];
var res = ary.reverse(); //[3, 2, 1]

/*
  数组排序:ary.sort()/
          ary.sort(function(a,b){
               return a-b/return b-a
          })
     + 作用: 排序;
     + 参数:
          + 无: 10以内不会受影响,10 以上会有影响;
          + 函数: return a-b 代表升序,return b-a代表降序;
     + 返回值: 排序之后的数组;
     + 是否改变原数字: 改变;
*/
var ary = [1, 2, 3];
var res = ary.sort();
var ary = [1, 2, 33, 15];
ary.sort(function (a, b) {
    return b - a;
});

/*
  数组检索: ary.indexOf(x,n)/ary.lastIndexOf(x,n);
     + 作用: 
          + 从位置n(包括)开始进行检索,x在数组中首次出现的位置(索引),如果没有x，就返回-1;
          + 到位置n(包括)结束前进行检索,x 在数组中最后一次出现的位置(索引),如果没有x，就返回-1;
     + 参数:indexof(x,n)/lastindexof(x,n);
        + x 表示检索的目标值;
        + n 表示:
          + ary.indexOf(x,n):从位置n(包括)开始检索,首次 x出现的位置(索引);
          + ary.lastIndexOf(x,n):到位置n(包括)停止检索,最后 x出现的位置(索引);
     + 返回值: 索引位置/-1;
     + 是否改变原数字: 改变;
*/
var ary = [1, 2, 2, 4, 1, 4];
var res = ary.indexOf(1); //0
var res2 = ary.indexOf(6); //-1
var res = ary.lastIndexOf(1); //4
var res2 = ary.lastIndexOf(5); //-1
var res = ary.indexOf(1, 4); //4
var res2 = ary.lastIndexOf(1, 4); //4

/*
  判断包含: includes;
     + 作用: 判断是否包含否一项;
     + 参数: 判断的项;
     + 返回值: true(包含),false(不包含);
     + 是否改变原数组: 不改变;
*/
var ary = [1, 2, 3];
var res = ary.includes(1); //true

/*
  遍历数组: forEach;
     + 作用: 遍历数组中的每一项;
     + 参数: 函数,并且有两个形参:item,index(只是名字,可变);
     + 是否改变原数组: 不改变;
*/
var ary = [4, 5, 6, 7];
var res = ary.forEach((item, index) => {
    console.log(index); //数组索引
    console.log(item); //数组索引值
    console.log(ary[index]); //数组索引值
    return 1;
});
console.log(ary); //[4,5,6,7]

/*
  映射数组: map;
     + 作用: 映射数组中的每一项;
     + 参数: 函数,并且有两个形参:item,index(只是名字,可变);
     + 返回值: 映射之后的新数组;
     + 是否改变原数组: 不改变;
*/
var ary = [4, 5, 6, 7];
var res = ary.map(function (item, index) {
    console.log(item, index);
    return item + 2;
});
console.log(res); //[4,5,6,7]

/*
  some
    + 作用: 是否有符合
    + 参数: 回调函数
    + 返回值: 只要数组中有符合规则的值就返回true，如果数组中没有符合条件的值就会返回false
*/
let arr = [100, 220, 300, 400];
let res = arr.some((item) => {
    return item > 300;
});
console.log(res); //true
/*
  every
    + 作用: 全部的值是否符合
    + 参数: 回调函数
    + 返回值: 数组中全部符合规则的值就返回true，如果数组中有不符合条件的值就会返回false
    + 循环的次数不确定，只要遇到不符合就停止了
*/
let arr = [100, 220, 300, 400];
let res = arr.every((item) => {
    return item > 300;
});
console.log(res); //false

/*
  filter 
    + 作用: 过滤
    + 参数: 函数
    + 返回值: return 后面是 true就会 push 到一个新数组里面，反之不会。没有符合条件的值就会返回空数组
*/
//let arr=[100,220,300];
let arr = [
    {
        name: "陈晓光",
        sex: 0,
    },
    {
        name: "猫喵",
        sex: 1,
    },
    {
        name: "陈伟霆",
        sex: 0,
    },
    {
        name: "万茜",
        sex: 1,
    },
];
arr = arr.filter((item) => {
    //当回调函数执行的时候，如果返回的是 true ，那当前的 item 就会被存在新数组里面

    return item.sex == 0;
    //return false//空数组
    //return true //克隆数组
});
console.log(arr);

/*
  find: 
    + 作用: 发现,会有懒惰性
    + 返回值: 只要 return后面是true 就会返回数组里面的这个值（不是数组)。并且会立即停止
    + 循环的次数是不确定的
    + 没有符合条件的值就会返回undefined
 */
let arr = [100, 220, 300];
let res = arr.find((item) => {
    return item > 200;
});
