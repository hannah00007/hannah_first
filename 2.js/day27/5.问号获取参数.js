
let str =
    "https://www.baidu.com/s?wd=es6&rsv_spt=1&rsv_iqid=0xb68293590000d154&issp=1&f=8&rsv_bp=111#index";
// String.prototype.queryUrlParams = function () {
//     let whyIndex = this.indexOf("?");
//     let hashIndex = this.indexOf("#");
//     let queryStr = this.slice(whyIndex + 1, hashIndex);
//     let hash = this.slice(hashIndex + 1);
//     let ary = queryStr.split("&");
//     let obj = {};
//     for (var i = 0; i < ary.length; i++) {
//         let key = ary[i].split("=")[0];
//         let value = ary[i].split("= ")[1];
//         obj[key] = value;
//     }
//     obj.hash=hash
//     return obj
// };
// str.queryUrlParams();
let url = "https://www.baidu.com/s?wd=es6&rsv_spt=1";
function queryUrlParams(key) {
    // this-->url
    let obj = {};
    let reg = /([^?=&#]+)=([^?=&#]+)/g;
    // 利用replace可以进行捕获的特点
    // $1代表的是打正则捕获的内容
    // $2捕获的是等号左边的属性名
    // $3捕获的是等号右边的属性值
    this.replace(reg, ($1, $2, $3) => {
        obj[$2] = $3;
    });
    this.replace(/#([^?=&#]+)/, function ($1, $2) {
        obj.hash = $2;
    });
    return key ? obj[key] : obj; // 如果用户传实参了，那就返回key属性名代表的属性值，如果用户没有传实参，把就返回obj
}
String.prototype.queryUrlParams = queryUrlParams;
let res = url.queryUrlParams();
console.log(res);





