//获取的数据暴露到全局
let ary = [];

//先去获取数据
function getData() {
    //使用 ajax（是用来获取数据的一种技术）去获取数据
    let xhr = new XMLHttpRequest(); //创造 ajax 实例

    xhr.open("get", "data.json"); //告诉这个实例以什么方式（get）去哪里（路径）获取数据

    xhr.onreadystatechange = function () {
        //监听请求状态(配个电话)
        if (xhr.readyState == 4 && xhr.status == 200) {
            //能够进入这个条件，证明我们已经获取到了数据
            let data = JSON.parse(xhr.response); //把 JSON 字符串转为对象
            console.log(data);
            ary = data;
            render(data); //获取到数据之后去执行
        }
    };

    xhr.send(); //得到送出来
}
getData();
//渲染数据
let render = function (data = []) {
    //负责把数据渲染到页面上
    //把数据中的每一条数据转成带结构的里，再房费对应的页面 ul 中区域
    //innerHTML
    let str = ``; //用来存储拼接的字符串
    data.forEach((item) => {
        let { img, title, price, num, time } = item;

        str += `<li>
            <div class="img_box">
                <img src=${img} alt="">
            </div>
            <h5>${title}</h5>
            <div class="price_box">
                <span class="price">￥${price}</span>
                <span class=" select_icon">多款可选</span>
            </div>
            <ul class="feature_box">
                <li>限时抢购</li>
                <li>好使</li>
            </ul>
            <div class="comment_box">
                <span>${num}人评价</span>
                <span>99%好评</span>
            </div>
        </li>`;
    });
    let ul = document.querySelector(".phone_list_box");
    ul.innerHTML = str;
};
//点击排序 点击的时候 吧数据按照指定的参数进行排序，然后重新render
let timeBtn = document.getElementsByClassName("sort_btn")[1];
timeBtn.flag=1
console.log(timeBtn)
timeBtn.onclick = function () {
    //把数据按照时间进行排序 然后再去执行 render
    console.log(ary);
    this.flag*=-1
    let temp = ary.sort((a,b) => {
        return (a.time - b.time)*this.flag;
    });
    render(temp)
};
