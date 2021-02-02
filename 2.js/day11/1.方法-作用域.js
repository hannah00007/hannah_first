/*
  作用域分类
    + 全局作用域: 当你打开页面的时候，为了让 js 可以运行，浏览器给提供了一个供 js 代码执行的环境 window 全局作用域 
        + 全局变量:在全局作用域下声明的变量
        + 全局作用域下声明的全局变量和 window 的关系: 
            + 在全局中声明的变量相当与在 window 这个对象添加了属性名和属性值，属性名即变量名，属性值即变量值。eg: {a:3,fn:function fn(){console.log(1)}}
            + 判断对象是否拥有某个属性
                + 对象[属性值]: console.log(obj["name"])//undefined或者对应的值
                + 属性名 in 对象: console.log("name" in obj)//true或者 false
            + window 身上的一些属性和方法，window可以省去不写: window.alert()/window.Number()
        + 带 var 不到 var
            + 都会在全局作用域下都是给 window 添加属性名和属性值
            + 带 var 有变量提升，不带 var没有变量提升
            + 带 var 是不可配置的，你通过 delete window.a删除不掉，没带 var 是可配置的，可以删除掉
    + 私有作用域:函数执行的时候会形成私有作用域
        + 私有变量
            + 在私有作用域下声明的变量:var function
            + 形参  
    + 块级作用域
    + es6 中新增块级作用域
*/

/*
  作用域链:
    + 在私有作用域中，查询某个变量，先看自己私有的有没有
    + 如果有，那就是私有的，如果没有，它会向上一级作用域去查找，一直找到window作用域位置
        + 如果说window也没有，会报错
    + 如果是赋值的话，也会沿着作用域去找，直到找到window位置，如果window也没有，那就相当于给window添加了一个这样的属性名和属性值
*/

/*
  栈内存:
    + 提供一个供js代码执行的环境
    + 存储基本数据类型
  堆内存:
    + 存储引用数据类型的值
        + 对象: 键值对;
        + 函数: 把函数里面的代码当成死字符串存在堆内存中  
*/

/*
  代码自上而下执行的时候会先变量提升
  变量提升：把带 var和 function 都找到
    + var 只声明不定义
    + function 声明和定义一起（声明和控件地址一起完成）
    + 变量提升的特殊性
        + 在判断语句中，
            + 不管条件是否成立，判断语句执行体里面的代码照常会进行变量提升，但是 if里面出现 function 变量提升时只声明不定义相当于和 var一样；
            + 在判断语句中条件成立时，if 里面会看似私有作用域里面会再进行变量提升，此时有 function 会声明和定义，var是声明
        + 变量提升只会提升等号左边的！
        + 在函数里面 return 下面的代码虽然不能执行了，但是照常可以进行变量提升，return 后面的值即使是函数，在当前作用域也不会进行变量提升
        + 自执行函数在当前作用域不进行变量提升,但是在私有作用域下还是会照常进行

*/

var a = 3;
window.a; //3
function fn() {
    console.log(1);
}
window.fn(); //1

var obj = { name: "lili" };
console.log("name" in obj); //true
console.log("age" in obj); //false

function A() {
    var a = 200;
    return function fn(x, y) {
        a = 300;
    };
}
A()();
console.log(a); //此时输出的是a is not defined，因为此时的 a是全局

function A() {
    return function fn(x, y) {
        a = 300;
    };
}
A()();
console.log(a); //300



console,log(a)//undefined
fn()//1,因为声明和空间地址一起完成，则不管在哪执行都有
var a=2;
var b=a;
b=3;
console.log(b)//3
function fn(){
    console.log(1)
}
// fn()//1


console.log(a);//undefined
if(1==2){
    var a=12;
}
console.log(a);//undefined


//变量提升:function fn;console.log(fn);//fn已声明，但是未执行，所以结果是 undefined;又因为条件不成立，所以最后也是 undefined
console.log(fn);//undefined
if(1==2){
    function fn(){
        console.log(1)
    }
}
console.log(fn);//undefined

console.log(fn());//报错，因为只声明没定义
if(1==2){
    function fn(){
        console.log(1)
    }
}
console.log(fn);//上面报错了，走不到下面

console.log(fn)//undefined
if(1==1){
    console.log(fn);//返回 fn这个函数
    function fn(){
        console.log("ok")
    }
}
console.log(fn);//返回 fn这个函数



/*
  window 全局作用域：
  变量提升var num  function fn
  代码自上而下执行
  
  
  */
console.log(num);//undefined
console.log(fn);//undefined
if([]){
    // 条件成立，声明加定义
    fn();//"a"
    var num = 100;
    function fn(){
        console.log("a")
    }
}
console.log(fn)//函数 fn
console.log(num);//100
/*
   window 全局作用域：
   变量提升var a  function a
   if 里面包含 function需要特殊记忆：function 以上是全局作用域的值，function 以下是私有作用域的值

*/
console.log(a);
var a=0;
if(true){
    console.log(a);
    a=1;
    console.log(a);
    function a(){}
    a=21;
    console.log(a);
}
console.log(a);

/*
  window 全局作用域：
  变量提升等号左边的var fn
*/
 console.log(fn);
 console.log(fn(1,2));
 var fn=function(n,m){
    return n+m;
 }
 console.log(fn(1,2))

/*
  window:全局 var fn  function sum=地址

 */
sum();//2
fn();//报错
var fn=function(){
    console.log(1);
};

function sum(){
    console.log(2);
}

fn();//上面有报错下面不执行
sum();//上面有报错下面不执行


/*
  window:全局 var  obj  

 */
console.log(obj.f1);//报错
var obj={
    f1:function(){
       console.log(1)
    }
}


function fn(x,y){
    a();
    return function(){}//不会变量提升
    function a(){
        console.log(1)
    }//会变量提升
}
fn(1,2)


/*
重名的话该怎么处理？
重名的话，只声明一次，但是可以重复赋值

变量提升阶段：a 已经声明过的不需要再声明
*/
console.log(a);//function a(){}
var a=3;
function a(){

}


/*
  window全局作用域
    + 变量提升： num fn(函数)--f1>f2>f3>f4(声明过了赋值覆盖)
    + 代码自上而下执行
 */

console.log(num);//undefined
var num = 1;
console.log(num);//1
var num = 2;
console.log(num);
fn();
function fn(){
    console.log(1);
}
function fn(){
    console.log(2);   
}
fn();
function fn(){
    console.log(3);
}
fn=100;

fn();

/*
  自执行函数在当前作用域不进行变量提升，在window全局作用域下，变量提升：a f2,但是在自己的私有作用域照常进行
*/
var a=100;
function f2(){
    console.log("f2");
}
(function(){
    // 在这里会形成一个私有作用域，照常进行变量提升var a 
    console.log(a);// undefined
    var a=3;
})();




/*
  代码自上而下执行：
*/

f=function(){
    return true;
};
g=function(){
    return false;
};
// 自执行函数在执行的时候，形成了一个私有作用域
~function(){
    // 变量提升：function g 只声明不定义
    // console.log(g);undefined
    // undefined();报错:g is not a function
 if(g()&&[]==![]){
     f=function(){return false;};
     function g(){
         return true;
     }
 }
}();
console.log(f());
console.log(g());







console.log(a,b);// undefined undefined
var a=12,
b=12;
function fn(){
    // 注意：这里面变量提升是 var a，而 b是全局的 b ，里面并没有声明 b
    console.log(a,b);// undefined 12
    var a=b=13;
    console.log(a,b);// 13 13
}
fn();
console.log(a,b);// 12 13
