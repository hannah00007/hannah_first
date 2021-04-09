/*
    匹配有效数字1,0,1.5,3.1415926 +5 -5 -3.13
        + 有效数字开头有可能是+或者-或者[+,-] +|- {0,1}
        + 中间的数字部分: 有两种可能，个位数或者多位数  \d|[1-9]\d+
        + 最后的小数部分（\.\d+)?
*/
let res = /^([+,-]?)(\d|([1-9]\d+))(\.\d+)?$/; //（\+|-）,在[]一般都是本意，而{}需要转义
let res = /^(\+|-]){0,1}(\d|([1-9]\d{1,}))(\.\d+){0,1}$/; //（\+|-）
res.test("0.857");

/*
    匹配密码
        + 6-16 位数字
        + 由数字字母下划线组成

*/
let res1 = /\w{6,16}/;
//封装密码
function testCode(value) {
    if (value.length >= 6 && value.length <= 16) {
        let ary = ["0", "1", "_", "a"];//这里面没写完哦，要把字母和数组等都放到数组里
        for (let i = 0; i < value.length; i++) {
            let item = value[i];
            if (!ary.includes(item)) {
                console.log("当前字符不符合规则");
                break;
            }
        }
    }
}
testCode("werr&t");

/*
    匹配名字
        + [\u4E00-\u9FA5]
*/

let reg2 = /[\u4E00-\u9FA5]{2,6}(·[\u4E00-\u9FA5]{2,7}){0,2}/;
reg2.test("王涵");

/*
    身份证号
    1、18位
    2、前六位：省市区
    3、7到14位是生日
    4、最后四位
        前两位：同年同月同日生的排序
        第三位：奇数是男孩，偶数是女孩
        最后一位：有可能是数字，还有可能是X

        年 [1-2]/d{3}
        月 01-09      10-12  1[0-2]
        日 01-09   10-29   30-31
*/

let reg = /^(?:\d{6})((?:19|20)\d{2})(0[1-9]|1[0-2])(0[0-9]|[1-2]\d|3[0-1])\d{2}(\d)(?:\d|x)$/; //问号是取消捕获只匹配
let res = reg.exec("133011199002180310");
console.log(res);
console.log(`您当前的生日是${res[2]}年${res[3]}月${res[4]}日`);


/*
    手机号
        1. 开头 1
        2. 中间[3-9]
        3. 结尾 0-9出现 9 次


 */
let reg=/^1[3-9]\d{9}$/


