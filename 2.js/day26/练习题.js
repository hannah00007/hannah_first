/*
    1.如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc'
*/
//法一
let str = "aaNNn";
function opposite(str) {
    let reg = /[a-zA-z]/g;
    str = str.replace(reg, (item) => {
        let res = item.toUpperCase();
        return item == res ? item.toLowerCase() : res;
    });
    return str;
}
opposite(str);
//法二=================================================
let str = "aaNNn";
let reg = /[a-zA-z]/g;
str = str.replace(reg, (item) => {
    let code = item.charCodeAt();
    let res = null;
    if (code >= 65 && code <= 90) {
        res = item.toLowerCase();
    } else {
        res = item.toUpperCase();
    }
    return res;
});
console.log(str);

/*
    2. 英文字母汉字组成的字符串，用正则给英文单词前后加空格

*/
let str = "好good好study天day天up！"; // 处理完成之后的str为 "好 good 好 study 天 day 天 up ！"
let reg = /\b[a-z]+\b/g;
str = str.replace(reg, " $& ");
console.log(str);

/* 
    3. 完成封装一个获取页面dom元素的方法

*/
let ary = attr("class", "box"); //=>获取页面中所有class为box的元素
let ary = attr("ss", "100"); // 获取页面中所有行间属性ss为100的元素

function attr(key, value) {
    let eles = document.getElementsByTagName("*"); // 获取页面上所有的元素
    let ary = [];
    console.log(eles);
    for (let i = 0; i < eles.length; i++) {
        // 循环所有的元素
        let itemValue = eles[i].getAttribute(key); // 获取每一个元素行间属性名为key的对应的属性值
        // "box a b"

        // 如果属性名为class的话，那最下边的if就不走了
        if (key == "class") {
            let reg = new RegExp(`\\b${value}\\b`); // /\bbox\b/
            // console.log(reg,eles[i]);
            if (reg.test(itemValue)) {
                ary.push(eles[i]);
            }
            continue;
        }
        if (itemValue === value) {
            // 那获取的属性值和用户传递进来的value做比对，如果相等，那就是咱们想要的元素，就push到ary中即可
            ary.push(eles[i]);
        }
    }
    return ary;
}
let res = attr("class", "box");
console.log(res);

/* 
    4. 编写一个程序，将数组扁平化(有几种方法就写几种方法)

*/
//方法一
let arr = [1, 2, 3, [5, [6]]]; // 处理完成之后的arr为 [1,2,3,4,5,6]
function myFlat(arr) {
    let ary = [];
    function ss(arr) {
        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];
            if (Array.isArray(item)) {
                ss(item);
            } else {
                ary.push(item);
            }
        }
    }
    ss(arr);

    return ary;
}
myFlat(arr);
//方法二  有问题========================================================
let arr = [1, 2, 3, [5, [6]]];
function flatter(arr) {
    // let res = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (Array.isArray(arr[i])) {
    //         res = res.concat(flatter(arr[i]));
    //     } else {
    //         res.push(arr[i]);
    //     }
    // }
    // return res;
    arr.forEach(item=>{
        let res = [];
        if (Array.isArray(arr[i])) {
            res = res.concat(flatter(arr[i]));
        } else {
            res.push(arr[i]);
        }
    })



}
flatter(arr);

/* 
    5. 实现一个深克隆的方法(不能使用JSON.parse)

*/
let obj = {
    a: 1,
    b: { c: 2 },
    d: 3,
};
function deepClone(obj) {
    let cloneObj = null;
    if (obj && Array.isArray(obj)) {
        cloneObj = [];
    } else {
        cloneObj = {};
    }
    for (let key in obj) {
        if (obj[key] !== null && typeof obj[key] == "object") {
            cloneObj[key] = deepClone(obj[key]);
        } else {
            cloneObj[key] = obj[key];
        }
    }
    return cloneObj;
}
deepClone(obj);
