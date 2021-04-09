(function () {
    function screen(key, value) {
        if (value == undefined) {
            return document.documentElement[key] || document.body[key];
        } else {
            document.documentElement[key] = value;
            document.body[key] = value;
        }
    }

    function offset(ele) {
        let left = ele.offsetLeft;
        let top = ele.offsetTop;
        let parent = ele.offsetParent;
        while (parent !== document.body) {
            left += parent.clientLeft + parent.offsetLeft;
            top += parent.clientTop + parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {
            left,
            top,
        };
    }
    /* 
    ajax请求数据
    */

    let data = null;
    let xhr = new XMLHttpRequest();
    xhr.open("get", "./data.txt", false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^(2|3)\d{2}$/.test(xhr.status)) {
            data = JSON.parse(xhr.responseText);
        }
    };
    xhr.send();
    console.log(data);
    /* 
        数据渲染
    */
    let uls = document.getElementsByTagName("ul");
    uls = Array.from(uls);
    function render() {
        for (let i = 0; i < 50; i++) {
            let index = Math.round(Math.random() * 9);
            let curImg = data[index];

            let li = document.createElement("li");
            let img = document.createElement("img");
            let p = document.createElement("p");
            console.log(li,img,p)
            p.innerHTML = curImg.title;
            img.classList.add("bg");
            img.setAttribute("true-img", curImg.src);
            img.style.height =curImg.height
                

            li.appendChild(img);
            li.appendChild(p);

            uls.sort((a, b) => {
                return a.scrollHeight - b.scrollHeight;
            });
            uls[0].appendChild(li);
    
        }
    }
    render();

    let imgs = document.getElementsByTagName("img");
    console.log(imgs)
    function check() {
        for (let i = 0; i < imgs.length; i++) {
            delay(imgs[i]);
        }
    }

    function delay(img) {
        let winH = screen("clientHeight");
        let imgH = img.offsetHeight;
        let imgT = offset(img).top;
        let winT = screen("scrollTop");
        if (winH + winT >= imgH + imgT) {
            let address = img.getAttribute("true-img");
            console.log(address)
            img.src = address;
            fadeIn(img)
            img.onerror = function () {
                img.src = "./img/timg.gif";
            };
            img.classList.remove("bg");
        }
    }


    function fadeIn(img) {
        /*
            1.先让 opacity=0;
            2.再慢慢加
        */
        img.style.opacity = 0
        let cur=parseFloat(img.style.opacity);
        console.log(cur)
        let timer = setInterval(() => {
            cur+=0.02
            if(cur>=1){
                clearInterval(timer);
                img.style.opacity = 1
                return
            }
            img.style.opacity=cur
        },17)
    }
    check();
    window.onscroll = function () {
        check();
        let winT = screen("scrollTop");
        let winH = screen("clientHeight");
        let bodyH =screen("scrollHeight");
        if (winT + winH >=bodyH - 100) {
            render();
        }
    };
})();
