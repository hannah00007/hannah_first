//通过getElement..方法获取的元素他的变量会自动跟着元素发生变化
//querySelector获取的元素不会自动变化
let ul = document.getElementById("main");
let lis = document.getElementsByTagName("li");
// // let lis2 = document.querySelectorAll("li");
// let btn = document.getElementById("btn");
let upBtn = document.getElementById("button1");
let downBtn = document.getElementById("button2");
// btn.onclick = function () {
//     ul.removeChild(lis[2]);
//     console.log("lis", lis);//[li,li]
//     console.log("lis2", lis2);//[li,li,li]
// };
let ary = [
    {
        name: "王涵",
        age: 18,
    },
    {
        name: "王就",
        age: 2,
    },
    {
        name: "王三",
        age: 200,
    },
    {
        name: "王ddd",
        age: 40,
    },
];

function render() {
    let str = ``;
    ary.forEach((item) => {
        str += `<li myage=${item.age}>
        姓名是:${item.name};年龄是:${item.age}
        </li>`;
    });
    ul.innerHTML = str;
}
render();
upBtn.onclick = function () {
    ary.sort((a, b) => {
       return a.age - b.age;
    });
    render()
};
//法一
// function render() {
//     let str = ``;
//     ary.forEach((item) => {
//         str += `<li myage=${item.age}>
//         姓名是:${item.name};年龄是:${item.age}
//         </li>`;
//     });
//     ul.innerHTML = str;
// }

//法二
// function render() {
//     // dom映射:js操作的元素和页面中的元素存在映射关系
//         //appendChild()新增的时候会先看你结构里面是否有，如果有就是调整顺序，如果没有就是添加
//     // dom的回流：当页面中元素的位置、大小或结构、定位发生改变，会引发浏览器对当前页面的结构进行重新的计算（重新看一遍，把哪些地方要改的修改一下）；非常耗性能的；
//     // dom的重绘：当元素的背景、透明度、颜色发生变化，那么浏览器会对元素进行重新描绘；这个过程就是浏览器的重绘；
//     // 回流一定引起重绘，重绘不一定引起回流
//     ary.forEach((item) => {
//         let lis = document.createElement("li");
//         lis.innerHTML = `姓名是：${item.name},年龄是：${item.age}`;
//         ul.appendChild(lis);
//     });
// }
//法三
// function render() {
//     let fragment = document.createDocumentFragment(); //创造一个空间（文档碎片），每次创造的都行先放到这个空间里面，然后把这个空间放到 dom里面
//     ary.forEach((item) => {
//         let lis = document.createElement("li");
//         lis.innerHTML = `姓名是：${item.name},年龄是：${item.age}`;
//         fragment.appendChild(lis);

//     }); //以上和 dom 没有关系
//     ul.appendChild(fragment); //把文档碎片放到 ul里面

// }
// render();

// function mySort(n){
//     let ary=util.toArray(lis);
//     ary.sort((a,b)=>{
//         return (a.getAttribute("myage")-b.getAttribute("myage"))*n
//     })
//     console.log(ary)
//     ary.forEach(item=>{
//         ul.appendChild(item)
//     })
// }

// upBtn.onclick=function(){
//     mySort(1)
// }
// downBtn.onclick=function(){
//     mySort(-1)
// }
