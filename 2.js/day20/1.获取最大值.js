let ary=[{
    name:"张三1",
    age:18
},{
    name:"张三2",
    age:19
},{
    name:"张三3",
    age:30
},{
    name:"张三4",
    age:21
},{
    name:"张三5",
    age:24
}]
// var res=[];
// for(var i=0;i<ary.length;i++){
//     res.push(ary[i].age)
// }
// var infor=res.sort(function(a,b){
//     return a-b;
//  }).pop();
//  console.log(infor);
//法一
// function getMax1(ary){
//     for(let i=0;i<ary.length-1;i++){
//         if(ary[i].age>ary[i+1].age){
//             let res=ary[i];
//             ary[i]=ary[i+1];
//             ary[i+1]=res;
//         }
//      }
//      console.log(ary[ary.length-1]);
// }
 
// 法二:假设法,假设第一个是最大的和后面的比较
function getMax1(ary){
    let max=ary[0];
    console.log(max)
    for(let i=0;i<ary.length;i++){
        max=ary[i].age>max.age?ary[i]:max
    }
    return max
}
getMax1(ary)
//法三：sort
var infor=ary.sort(function(a,b){
    return a.age-b.age;
 })[infor.length-1]
 console.log(res)



 /*
    类数组: 类似数组
        + 分类： 元素集合(querySelecterAll.getElementsByTagName()
        + 实参集合（arguments）
        注意：arguments不是数组，可以用toArry(arguments).join("+")
    把类数组转为数组
        + 封装函数toArray,push到一个新数组上
        + 封装函数toArray，slice + call 
 */
//法一：创建新数组
function toArray(likeAry){
    var ary=[];
    for(let i=0;i<likeAry.length;i++){
        ary.push(likeAry[i])
    }
    return ary
}
function fn(){
    var res= toArray(arguments);
    console.log(res);
 }
 fn(1,2,3);
//法二：slice 复制数组
 function toArray(likeArray){
    return Array.prototype.slice.call(likeArray,0);
 }
function fn(){
    console.log(toArray(arguments));
}
fn(1,2,3);

//静态属性： 直接把类当做对象添加的属性；
//Array的静态属性 from是 es6 之后新增的一个方法，可以把类数组转为数组
//Array.isArray()专门判断一个引用数组类型是否是数组
function toArray3(likeArray){
    return Array.from(likeArray)
}
toArray3(1,2,3)