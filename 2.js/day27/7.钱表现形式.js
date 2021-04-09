let num = 12345678; // '12,345,678'
// 876,543,21
// 方法一：先倒序再还原
function qian(value) {
    value = value + "";
    value = value.split(""); //split是将字符串转为数组参数传""返回的结果是["1","2"...]
    value = value.reverse(); //数组倒序["8","7"...]
    value = value.join(""); //"87654321"//讲数组转为字符串
    value = value.replace(/\d{3}/g, ($1) => $1 + ",");
    value = value.split("").reverse().join("");
    value = value[0] == "," ? value.slice(1) : value;
    return value;
}
console.log(qian(num)); // '12,345,678'

//利用正则方法
let num = 12345678; // '12345678'
function format(num) {
    var reg = /\d{1,3}(?=(\d{3})+$)/g;
    return (num + "").replace(reg, function ($1) {
        console.log($1)
        return $1 + ",";
    });

}
console.log(format(num));