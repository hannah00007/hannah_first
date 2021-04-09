//获取数据
/*

1、向服务器发送请求，获取到对应的数据
    1、创建一个ajax实例
    2、打开一个请求，基于get请求同步完成
    3、监听服务器返回的状态，如果状态码是4，而且请求状态是200，那就证明数据请求成功
    4、发送ajax请求
*/
let data = null;
let cardBox = document.getElementById("cardBox");
//获取 a和li，返回的是一个类数组
let btns = document.getElementsByTagName("a");
let cardList = document.getElementsByTagName("li"); //一开始是[],当数据渲染完之后会把所有的 li 放到[]里面，但是如果用 querySelector获取就没有映射

let xhr = new XMLHttpRequest(); //创建完实例的时候xhr.readyState=0
//open时候xhr.readyState=1
//false是同步执行
xhr.open("get", "./json/product.json", false); //这里面的json路径相对于 html,写错是 404，
xhr.onreadystatechange = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
        //同时成立说明给我数据了
        data = JSON.parse(xhr.response); //字符串转为数组对象
    }
};
xhr.send(); //2 和 3是在请求时候变化

//渲染数据
function renderHTML() {
    let htmlStr = ``;
    data.forEach((item) => {
        htmlStr += `<li data-time="${item.time}" data-hot="${item.hot}" data-price="${item.price}">
        <img src="${item.img}" alt="">
        <span>${item.title}</span>
        <span>${item.time}</span>
        <span>${item.hot}</span>
        <span>${item.price}</span>
    </li>`;
    });
    cardBox.innerHTML = htmlStr;
}
renderHTML();

//给每个 a元素绑定点击事件
//遍历每一个 a，然后在每个 a 上添加自定义属性 index 便于浏览器知道我点击时哪一个
//在每一个a 身上添加flag属性，便于排序用
//要在这把类数组转为数组，如果在上面直接转为数组就没有映射关系了，等到数据渲染完之后不会自动放到空数组里面
cardList = utils.toArray(cardList);
for (var i = 0; i < btns.length; i++) {
    btns[i].index = i;
    btns[i].flag = -1;
    btns[i].onclick = function () {
        this.flag *= -1;
        sortList.call(this); //如果不用 call，在当函数执行的时候，函数体里面的 this 就是 window，所以用 call把 this变成点击的那个属性
        clearArrow.call(this);
        addArrow.call(this);

    };
}
//当我点击对应的 A的可以通过 index知道我点击的是哪个属性
function sortList() {
    //先把多个属性放到一个数组里面，index对应的就是数组的索引
    let dataAry = ["data-time", "data-hot", "data-price"];
    cardList.sort((a, b) => {
        a = a.getAttribute(dataAry[this.index]);
        b = b.getAttribute(dataAry[this.index]);
        //时间会有"-"不能直接减掉，先替换掉—
        if (this.index === 0) {
            a = a.replace(/-/g, "");//字符串的方法是不会改变原字符串的
            b = b.replace(/-/g, "");
        }
        return (a - b) * this.flag;
    });
    //然后把排好序的数组里面的每一个 li都放到 ul
    for (var i = 0; i < cardList.length; i++) {
        cardBox.appendChild(cardList[i]);
    }
}

function clearArrow() {
    // this是当前点击的元素
    for (var i = 0; i < btns.length; i++) {
        if (this != btns[i]) {
            btns[i].children[0].classList.remove("bg");//如果用 classname 就是class里面所有的值全部清空
            btns[i].children[1].classList.remove("bg");
            btns[i].flag = -1;//要把点击之外的两个之前的历史flag值清除
        }
    }
}

// 箭头
function addArrow() {
    // this是当前点击的元素
    let up = this.children[0];
    let down = this.children[1];
    if (this.flag > 0) {
        up.classList.add("bg");
        down.classList.remove("bg");
    } else {
        down.classList.add("bg");
        up.classList.remove("bg");
    }
}

