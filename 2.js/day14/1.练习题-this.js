/* 题一 */
var name = "珠峰培训";
function fn() {
    console.log(this.name);
}
var obj = {
    name: "你好世界",
    fn: fn,
};
obj.fn(); //"你好世界"
fn(); //"珠峰培训"

(function () {
    this.fn();
})(); //"珠峰培训"

/* 题二 */
function fn() {
    console.log(this); //window
}
box.onclick = function () {
    console.dir(this); //点击的box元素
    fn();
};
/* 题三 */
let obj = {
    name: "li",
    //这里面的 fn 的属性值是返回的那个 fn函数
    fn: (function (n) {
        // 这里的this指的是window
        console.log(this);
        return function () {
            // 这里的this指的是obj
            console.log(this);
        };
    })(10),
};
obj.fn();


/* 题四 */
/*
  变量提升：
  var num = 10==>60==>65
  var obj={num:20};==>{num:30};
  var fn=function(n){
           this.num+=n;
           num++;
           console.log(num);
*/

var num = 10;
var obj = { num: 20 };
//obj.fn 自上而下执行的时候就已经要执行了
obj.fn = (function (num) {
    /*
        形成私有作用域
        形参复值：num=20==>21==>22==>23
        window.num=num*3=20*3=60
        return结果给了 obj.fn
        */
    this.num = num * 3;
    num++;
    return function (n) {
        /*
           形参复制：n=5//n=10   
           window.num+=5//obj.num+=10
           */
        this.num += n;
        num++; //往上级找
        console.log(num);
    };
})(obj.num);
var fn = obj.fn;
fn(5);//22
obj.fn(10);//23
console.log(num, obj.num);//65 30
