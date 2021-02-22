/*
    当一个函数执行的时候，形成了不销毁的的作用域就是闭包
        + 保护里面的私有变量不被外界干扰（不污染全局变量）(a)
        + 保存变量（i）

*/
var a=10;
function fn(){
    var a=3;
    return function (){

    }
}
var res=fn()



function fn(i){
    return function (n){
       console.log(n+(++i));
    }
}
var f=fn(2);
f(3);
fn(5)(6);
fn(7)(8);
f(4)

/*
    闭包在实战中的应用:
        1、闭包之私有变量的保护应用
            + [jquery]通过window添加属性暴漏到全局
            + [zepto]自执行函数通过return把返回结果在外面用一个变量进行接收
*/

(function(){
    function jquery(){
        console.log(1);
        //把jquery 这个方法通过window添加属性暴露到全局       
    }
    window.jquery=window.$=jquery;
})()
jquery() //在使用的时候
$()//在使用的时候
//jquery()//调不出来，因为形成私有作用域


var zepto=(function(){
    var num=3;
    function banner(){
        console.log(2)
    }
    return {
        num:num,
        banner:banner
    }
       
  })()
  
zepto.num  // 在使用的时候
zepto.banner()  // 在使用的时候