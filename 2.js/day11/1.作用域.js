/*
  作用域分类
    + 全局作用域: 当你打开页面的时候，为了让js可以运行，浏览器提供了一个供js代码执行的环境-window全局作用域ECStack;
        + 全局变量: 在全局作用域下声明的变量;
            + 带var&不带var
                + 相同点: 在全局作用域下都是给 window 添加属性名和属性值
                + 不同点
                    + 带 var 有变量提升，不带 var没有变量提升
                    + 带 var 是不可配置的，你通过 delete window.a删除不掉，没带 var 是可配置可以删除掉
        + 全局作用域下声明的全局变量和window的关系: 
            + 在全局中声明的变量相当与在window这个对象身上添加了属性名和属性值,属性名即变量名,属性值即变量值。eg: {a:3,fn:function fn(){console.log(1)}}
                + 判断对象是否拥有某个属性
                    + 对象[属性值]: console.log(obj["name"])//undefined或者对应的值
                    + 属性名 in 对象: console.log("name" in obj)//true或者 false
                + 使用window 身上的一些属性和方法，window可以省去不写: window.alert()/window.Number()
    + 私有作用域:函数执行的时候会形成私有作用域，在私有作用域外面，去访问私有变量的话，是访问不到的，但是在私有作用域里面可以访问到外面的变量。
        + 私有变量
            + 在私有作用域下声明的变量
            + 形参  
    + es6 中新增块级作用域:
        + {
            这就是块级作用域，但是对象不是
        }
*/

/*
    eg1.
 */
var a = 3;
window.a; //3
function fn() {
    console.log(1);
}
window.fn(); //1 undefined

/*
    eg2.
 */
var obj = { name: "lili" }; //这可不是块级作用域
console.log("name" in obj); //true
console.log("age" in obj); //false
console.log(obj["age"]); //undefined

/*
    eg3.
 */
console.log(fn); //undefined
if (1 == 1) {
    console.log(fn); //返回 fn这个函数
    function fn() {
        console.log("ok");
    }
}
console.log(fn); //返回 fn这个函数。因为if 并不是块级作用域，所以直接覆盖上面的 fn=undefined











