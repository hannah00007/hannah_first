/**
 * 作业一:年月日改写
 */
var str = "2021-1-25 6:30:50";
var year = str.split(" ")[0];
var time = str.split(" ")[1];
function addZero(num) {
    return num < 10 ? "0" + num : num;
}
var result =
    year.split("-")[0] +
    "年" +
    addZero(year.split("-")[1]) +
    "月" +
    addZero(year.split("-")[2]) +
    "日" +
    " " +
    addZero(time.split(":")[0]) +
    "时" +
    addZero(time.split(":")[1]) +
    "分" +
    addZero(time.split(":")[2] + "秒");
console.log(result)

/**
 * 作业二:获取链接里的参数
 */

var str = "https://www.baidu.com?name=wanghan&age=18&job=cooker&sex=female";
function getContent(str) {
    var list = str.split("?")[1].split("&");
    if (list) {
        var obj = {};
        for (var i = 0; i < list.length; i++) {
            var key = list[i].split("=")[0];
            var value = list[i].split("=")[1];
            obj[key] = value;
        }
    }
    return obj;
}

console.log(getContent(str));
/**
 * 作业三:冒泡排序
 */
function sort(ary) {
    for (var i = 0; i < ary.length - 1; i++) {
        for (var j = 0; j < ary.length - 1 - i; j++) {
            if (ary[j] > ary[j + 1]) {
                var temp = ary[j + 1];
                ary[j + 1] = ary[j];
                ary[j] = temp;
            }
        }
    }
    return ary;
}
var ary = [3, 2, 0, 5, 4, 9, 1];
console.log(sort(ary));

/**
 * 作业四:包含非有效数字求和
 */

function total() {
    var len = arguments.length;
    console.log(len);
    var res = 0;
    for (var i = 0; i < len; i++) {
        var result = Number(arguments[i]);
        console.log(result);
        if (!isNaN(result)) {
            res = res + result;
        }
    }
    return res;
}

console.log(total(1, 2, "12", "12px"));

/**
 * 作业五:递归求 1-100之和
 */

function fn(n) {
    if (n > 100) {
        return 0;
    }
    return n + fn(n + 1);
}
console.log(fn(1));
/**
 * 作业六:递归求 1-100能被 2 和 3 整除的数之和
 */
function fn(n) {
    if (n > 100) {
        return 0;
    }
    if (n % 2 == 0 && n % 3 == 0) {
        return n + fn(n + 1);
    } else {
        return fn(n + 1);
    }
}
console.log(fn(1));
/**
 * 作业七:数组去重法一for
 */
var ary = [1, 2, 2, 2, 3, 3, 3, 3];
function unique(ary) {
    for (var i = 0; i < ary.length - 1; i++) {
        var getItems = ary[i];
        for (var j = i + 1; j < ary.length; j++) {
            if (getItems == ary[j]) {
                ary.splice(j, 1);
                j--;
            }
        }
    }
    return ary;
}
console.log(unique(ary));
/**
 * 作业七:数组去重法二空数组
 */

var ary = [1, 2, 2, 2, 3, 3, 3, 3];
function unique(ary) {
    var newAry = [];
    for (var i = 0; i < ary.length; i++) {
        var getItems = ary[i];
        if (!newAry.includes(getItems)) {
            newAry.push(getItems);
        }
    }
    return newAry;
}
console.log(unique(ary));
/**
 * 作业八:数组去重法三空对象
 */
var ary = [1, 2, 2, 2, 3, 3, 3, 3];
function unique(ary) {
    var obj = {};
    for (var i = 0; i < ary.length; i++) {
        var getItems = ary[i];
        if(obj[getItems]==getItems){
            ary.splice(i,1);
            i--;
        }else{
            obj[getItems]=getItems;
        }

    }
    return ary
}
console.log(unique(ary));
/**
 * 作业九:截取字符串的方法
 */
var str="abcdefg"
console.log(str.slice(-4,-1))//从第一个参数开始复制（包含），到第二个参数结束（不包含）
console.log(str.substring(3,6))//从第一个参数开始复制（包含），到第二个参数结束（不包含）
// 区别：slice支持负数索引值，但是 substring 不支持
console.log(str.substr(-4,3))

/**
 * 作业十:删除数组最后一项
 */
var ary = [1, 2, 2, 2, 3, 3, 3, 3];
console.log(ary.pop())
console.log(ary.splice(ary.length-1,1))
console.log(ary.length--)

/**
* 作业十一:在数组最后加一项
*/
var ary = [1, 2, 2, 2, 3, 3, 3, 3];

console.log(ary.splice(ary.length,0,6))
console.log(ary.push(6))
console.log(ary[ary.length]=6)
