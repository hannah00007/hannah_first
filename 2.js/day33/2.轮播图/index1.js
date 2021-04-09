let outer = document.getElementById("outer");
let wrapper = document.getElementById("wrapper");
let list = document.getElementById("list");

let data = null;
function getData() {
    let xhr = new XMLHttpRequest();
    xhr.open("get", "./banner.json", false);
    xhr.onreadystatechange = function () {
        if (/^2\d{2}$/.test(xhr.status) && xhr.readyState === 4) {
            data = JSON.parse(xhr.response);
        }
    };
    xhr.send();
    console.log(data);
}
getData();

function renderHtml() {
    let wrapperItems = ``;
    let listItems = ``;
    data.forEach((item) => {
        wrapperItems += `<li><img src=${item.img} alt=""></li>`;
        listItems += "<li></li>";
    });
    wrapperItems += `<li><img src="${data[0].img}" alt=""></li>`;
    wrapper.innerHTML = wrapperItems;
    list.innerHTML = listItems;
}
renderHtml();

let timer = null;
let step = 0;
function autoMove() {
    step++;
    if (step == data.length + 1) {
        //5
        //step==5说明页面的图片到达最后一张图了
        //让 wrapper的left 值等于 0，然后把 step 值改为 1，也就是第二张图片
        wrapper.style.left = 0 + "px";
        step = 1;
    }
    //学 jq 封装的一个函数，让图片可以缓慢的切换
    changeFocus();
    utils.animate(wrapper, { left: step * -800 }, 1000);
}
timer = setInterval(autoMove, 2000);

outer.onmouseover = function () {
    clearInterval(timer);
};

outer.onmouseout = function () {
    timer = setInterval(autoMove, 2000);
};

let tips = document.querySelectorAll("#list li");

// 拿querySelectorAll获取的元素没有映射
// 实现焦点跟随
function changeFocus() {
    // 切换焦点的显示
    // 循环所有的焦点，判断一下当前的step和哪个焦点的索引相等，和谁相等就给谁加上active类名，其余的清除active类名

    // 如果当前的step是4，说明当前页面显示的是最后一张图片，他和第一张图片公用一个焦点，这时候让第一个焦点高亮就可以了
    for (let i = 0; i < tips.length; i++) {
        //console.log(tips.length)
        // tips[i] // 每一个焦点 i就是每一个焦点的索引
        if (step === i) {
            tips[i].classList.add("active");
        } else {
            tips[i].classList.remove("active");
        }
    }
    if (step === 4) {
        tips[0].classList.add("active");
    }
}
changeFocus();

function bindClick() {
    for (let i = 0; i < tips.length; i++) {
        tips[i].onclick = function () {
            console.log(i);
            step = i-1; // 因为autoMove内部有step++，所以在这里要减1，这样就会跟autoMove内部的step++相互抵消
            autoMove()

            // 两种方式
           // autoMove(i);
        };
    }
}
bindClick();

right.onclick = function () {
    autoMove();
};
left.onclick = function () {
    step -= 2;
    if (step == -2) {
        wrapper.style.left = data.length * -800 + "px"; // -3200
        step = data.length - 2; // 2
    }
    autoMove();
};