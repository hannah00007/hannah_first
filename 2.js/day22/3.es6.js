/*
    ES6:
    1、let 和 const
        + let 没有变量提升
        + let 不能够重复声明同一个变量
        + let 可以生成块级作用域
        + let 可以解决暂时性死区: 用let、const声明一个变量之前，那块区域就是暂时性死区，不能用来访问未定义的变量，如果访问的话，就会报错，这样在理论上更符合，更严谨
        + let 在全局声明的变量不会给 window 增加键值对
        + const 声明的常量不允许被修改，在声明的时候必须赋值

    2、箭头函数
        + 形式：let a = ()=>{}
        + 没有 this,这里的 this 是变量，如果自己的作用域没有就会往上级查找；
        + 没有 arguments
        + 在书写箭头函数的时候，如果只有一个形参，那可以省略形参小括号
        + 如果建有函数内部只有 return,可以省略 return 和大括号
        + 如果 return 的是一个对象，如果要省略的话，给省略之后的结果加一个小括号
        + 给函数的形参赋默认值（箭头函数和普通函数都可以）

    3、...元素符
        + 收缩运算符(会把所有实参放到一个数组中去)，一般都是在函数的形参的位置使用
        + 展开运算符,一般会用到数组和对象的前面

    4、 解构赋值
    5、 模板字符串
    6、 数组扩展：
        + 类数组转为数组：Array.from();
        + 一组数转为数组：Array.of();
    7、 对象扩展
    
*/
let a = () => {
    a: 100;
};
let a = function () {
    a: 100;
};
function a() {
    return { a: 100 };
}
function fn(a, ...b) {
    console.log(a, b); //数组
    console.log(a, ...b); //展开
}
fn(1, 2, 3);

//利用...实现浅克隆
let ary = [1, 2, 3];
let ary1 = [...ary];
let ary2 = ary.slice(0);
console.log(ary1); //[1,2,3]
console.log(ary2);
console.log(ary === ary1); //fasle

let obj = {
    name: 100,
};
let obj1 = {
    ...obj,
};
console.log(obj === obj1); //false

let arr = [{ name: 100 }, 200, 300];
let arr1 = [...arr]; //[af0,200,300]
arr[0].name = 800;
console.log(arr1); //[{name:800},200,300];

// 利用 JSON.parse 和 JSON.stringify可以实现深克隆
let arr = [{ name: 100 }, 200, 300];
let arr1 = JSON.parse(JSON.stringify(arr));
arr[0].name = 800; //[{name:800},200,300]
console.log(arr1); //[{name:100},200,300]

/*
    解构赋值:按照等号左右两边位置一一对应解构

*/
//数组的解构赋值，需要考虑顺序
let ary = [100, 200, 300, 400, [500]];
// let a=ary[0];
// let b=ary[3];
// let c=ary[4][0];
let [a, b, c] = ary;
console.log(a, b, c); //100,200,300

let [a, , , b] = [100, 200, 300, 400]; //用逗号做占位符号
console.log(a, b); //100 400

let [a, ...b] = [100, 200, 300, 400];
console.log(a, b); //100,[200,300,400]

let [a, b, c, d] = [100, 200, 300];
console.log(a, b, c, d); //100,200,300,un
let [a, b, c, d = 3] = [100, 200, 300]; //给 d设置默认值
console.log(a, b, c, d); //100,200,300,3

let [a, , , [, b]] = [100, 200, 300, [400, 500]];
console.log(a, b);
//对象的解构赋值，不用在意顺序关系
let obj = { name: 100, age: 200 };
let { age, name, xxx } = obj;
console.log(age, name);
let { age: ss } = { age: 100 }; //先解析 age 这个值 100，在把 100给到 ss
console.log(ss);

let obj = {
    name: "Hannah",
    age: 10,
    sex: "男",
    friends: ["黑猫警长", "葫芦娃"],
};
//从 obj对象中解构出他的 name 和他的第一个朋友的名字
let {
    name,
    friends: [first],
} = obj;
console.log(name, first);
//在函数里使用解构赋值
function fn({ a, b }) {
    //直接把实参进行解析，也可以给解构的地方赋默认值
    console.log(a, b); //1,2
}
fn({ a: 1, b: 2 });

let num = 100;
let str = "12" + num + "3";
let str1 = `12${num}3`;

let ary = [
    {
        name: "Hannah",
        age: 1,
    },
    {
        name: "lili",
        age: 1,
    },
    {
        name: "Dane",
        age: 1,
    },
];
let box=document.querySelector("ul")
let str=``;
ary.forEach(item=>{
    str+=`
    <li>
        <span>${item.name}</span>
        <span>${item.age}</span>
    </li>
    `

})
box.innerHTML(str)
