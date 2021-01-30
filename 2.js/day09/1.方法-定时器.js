/*
    定时器:异步行为，先走同步再走异步
        + 返回值：代表定制器在页面中处于第几个位置
        + 清楚定时器的方法：clearInterval;clearTimeout(可以混着用)

 */

// 过1秒之后(可改)，执行回调函数里面的代码（执行一次）
var time1=setTimeout(function () {
    console.log("0");
}, 0);
// console.log("1")//一定是先打印1,先执行同步，即使时间是 0 毫秒
// console.log(time1)//返回值是 1，即第一个位置


//每过1秒(可改)，执行回调函数里面的代码（重复执行）
var time2=setInterval(function () {
    // console.log("3");
}, 5000);
// console.log("4")//一定是打印顺序 1，4，0，1
// console.log(time2)//返回值是 2，即第二个位置
//console.log("time1="+time1+" "+"time2="+time2)//需要在网页的控制台打印time1=1 time2=2 （在 runcode出不来）

// 清除定时器，最终打印 1，2，3，4
var num=0;
var time3=setInterval(function(){
    num++;
    if(num>3){
        clearInterval(time3);//只是清除位置还在要给赋值 null
        time3=null  
    }
    // console.log(num);
},1000)

//清除定时器，最终没有任何打印
var time4=setTimeout(function(){
    // console.log("time4")
},1000);
// clearTimeout(time4);//只是清除位置还在要给赋值 null
// time4=null





