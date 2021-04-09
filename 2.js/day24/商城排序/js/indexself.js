/*
    向服务器发送请求获取数据
        + 创建一个 Ajax 实例
        + 打开一个请求，基于 get 请求同步完成
        + 监听服务器返回的状态，如果状态码是 4，请求状态是 200，那就证明数据请求成功
        + 发送 ajax请求

*/
let data=null;
let xhr=new XMLHttpRequest()
xhr.open("get","./json/product.json",false)
xhr.onreadystatechange=function(){
    if(xhr.status==200&&xhr.readyState==4){
        data=JSON.parse(xhr.response)
        console.log(data)
    }
}
xhr.send()


let box=document.getElementById("carBox")



function renderHTML() {
    let str = ``;
    data.forEach((item) => {
        let { img, title, time, price, hot } = item;
        str += `
        <li data-time="${time}" data-hot=${hot} data-price=${price} >
            <img src="${img}" alt="">
            <span>${title}</span>
            <span>${time}</span>
            <span>${price}</span>
            <span>${hot}</span>
        </li>
        `
    })
    cardBox.innerHTML = str;
    console.log(str);
}
renderHTML();


let nav=document.getElementsByTagName("a")
let lists = Array.from(document.getElementsByTagName("li"));

for(let i=0;i<nav.length;i++){
    nav[i].index=i
    nav[i].flag=-1
    nav[i].onclick=function(){
        sortList.call(this)
        addArrow.call(this)
    }
}

function sortList(){
    let ary=["data-time","data-hot","data-price"];
    lists.sort((a,b)=>{
        a=a.getAttribute(ary[this.index])
        b=b.getAttribute(ary[this.index])
        if(this.index==0){
            
        }
        return (a-b)*this.flag
    })

}
function addArrow(){

}


















// let data = null;
// let xhr = new XMLHttpRequest();
// xhr.open("get", "./json/product.json", false);
// xhr.onreadystatechange = function () {
//     if (xhr.status == 200 && xhr.readyState == 4) {
//         data = JSON.parse(xhr.response);

        
//     }
// };
// xhr.send();
// let cardBox = document.getElementById("cardBox");
// let btns = document.getElementsByTagName("a");

// /*
//     渲染数据
//  */
// function renderHTML() {
//     let str = ``;
//     data.forEach((item) => {
//         let { img, title, time, price, hot } = item;
//         str += `
//         <li data-time="${time}" data-hot=${hot} data-price=${price} >
//             <img src="${img}" alt="">
//             <span>${title}</span>
//             <span>${time}</span>
//             <span>${price}</span>
//             <span>${hot}</span>
//         </li>
//         `
//     })
//     cardBox.innerHTML = str;
//     console.log(str);
// }
// renderHTML();
// let lists = Array.from(document.getElementsByTagName("li"));

/*
    给每个a绑定点击事件
*/
// for (let i = 0; i < btns.length; i++) {
//     btns[i].index = i;
//     btns[i].flag = -1;
//     btns[i].onclick = function () {
//         this.flag *= -1;
//         //排序
//         sortList.call(this);
//         addArrow.call(this);
//         clearArrow.call(this);
//     };
// }
// /*
//     点击时进行排序
// */
// function sortList() {
//     let ary = ["data-time", "data-hot", "data-price"];
//     lists.sort((a, b) => {
//         a = a.getAttribute(ary[this.index]);
//         b = b.getAttribute(ary[this.index]);
//         if (this.index === 0) {
//             a = a.replace(/-/g, "");
//             b = b.replace(/-/g, "");
//         }
//         return (a - b) * this.flag;
//     });
//     for (let i = 0; i < lists.length; i++) {
//         cardBox.appendChild(lists[i]);
//     }
// }

// function clearArrow() {
//     for (let i = 0; i < btns.length; i++) {
//         if (this !==btns[i]) {
//             btns[i].children[0].classList.remove("bg");
//             btns[i].children[1].classList.remove("bg");
//             btns[i].flag = -1;
//         }
//     }
// }
// function addArrow() {
//     if (this.flag > 0) {
//         this.children[0].classList.add("bg");
//         this.children[1].classList.remove("bg");
//     } else {
//         this.children[0].classList.remove("bg");
//         this.children[1].classList.add("bg");
//     }
// }
