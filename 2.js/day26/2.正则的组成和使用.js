/*
    正则的组成
        + 元字符: (元字符不可以省略）
            + 量词元字符： 代表出现的次数    
                + *         0至多次
                + +         1至多次
                + ？        0至1次
                + {n}       出现 n 次
                + {n,}      至少出现 n 次
                + {n,m}     至少出现 n-m 次
            + 特殊元字符
                + \         转义字符 可以把普通的字符转为特殊字符也可以把特殊字符转为普通字符！/\\d/
                + .         任意字符(除了换行符以外)！
                + ^         以什么什么开头！   
                + $         以什么什么结尾！    如果^和$一起使用，那么匹配的字符串必须和正则一摸一样
                + \n        换行符
                + \d        0到9之间的任意数字！
                + \D        非0到9之间的任意数字
                + \w        数字、字母、下划线！
                + \t        制表符
                + \b        单词边界！
                + \s        空白符
                + x|y       x和y之间的任意一个！
                + [a-z]     a到z之间的任意一个字符！
                + [a-zA-Z0-9] a到z或者A到Z或者0到9之间的任意一个字符！
                + [^a-z]    除了a到z之外的任意一个字符
                + ()        分组
                                + 提高优先级
                                + 分组引用
                                + 分组捕获
                + (?:)      只匹配，不捕获
                + (?=xxxx)  正向预查
                + (?!xxxx)  负向预查
            + 普通元字符
                + 除了特殊元字符以外都是普通元字符
        + 修饰符: i、m、g（修饰符可以省略)
 */

let reg2 = /^18$/; // 只能是'18'
console.log(reg2.test("18ffhjh18j")); //false
console.log(reg2.test("sdfghj18")); //false

let reg4 = /s|d/; //s 或者是 d

let reg5 = /[a-zA-Z0-9]/; //a-z,A-Z,0-9里面的随便一项

let reg6 = /[^a-z]/; //除了 a-z 之间的随便一项

let reg7 = /^1(\d)\d{9}$/; //以 1 开头，0-9之间的数字，以0-9之间的数字出现9 次结尾

console.log(reg7.exec("15532892626")); //可以捕获到括号里面的内容["15532892626","5",index:0,input:"15532892626",group:undefined]

let reg = /\\d/; //第一个斜杠把第二个斜杠转为了普通元字符
let str = "\\d"; //在字符串中，反斜杠也有转义字符的意义，所以想要在字符串中写反斜杠就需要写两个反斜杠
reg.test(str); //true

//电话号 11 位，以 1 开头第二位是 3-9
let phone = /^1[3-9]\d{9}$/;
phone.test("17611736702");

// 如果^ 和$一起使用，那匹配的字符串必须和正则一模一样才行，字符不能多也不能少，
// 如果^ 和$单个使用，那字符串中只要包含符合规则的内容即可
let reg = /^18$/; // 既要以18开头，又要以18结尾
console.log(reg.test("189")); // false
console.log(reg.test("198")); // false
console.log(reg.test("218918")); // false
console.log(reg.test("18e18")); // false
console.log(reg.test("18")); //true

/*
        分组
            + 提高优先级
            + 分组引用
            + 分组捕获
*/

let reg = /^(18|20)$/;
//\1代表让第一次分组的值再次出现一次
let reg1 = /^[a-z][a-z]\1([a-z])/;
reg1.test("feel");

let reg2 = /^([a-z][a-z])\1/;
reg2.test("haha");

let reg3 = /^[a-z]([a-z])\1[a-z]$/;
reg3.test("moon");
// \1代表让第一次分组的值再次出现一次
// \2代表让第二次分组的值再次出现一次
let reg = /^([a-z])([a-z])\1\2$/; // 'haha'
console.log(reg.test("haha"));

//捕获身份证信息-----------------------------------------------------------------------------------------
let reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(\d|x)$/;
let reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(?:\d|x)$/; //?:是取消捕获只匹配
let res = reg.exec("133011199002180310");
console.log(res);
console.log(`您当前的生日是${res[2]}年${res[3]}月${res[4]}日`);

//获取汉字
let reg = /[\u4E00-\u9FA5]/;

//映射表
let type = "110";
let obj = {
    110: "北京",
};
console.log(obj[type]);

// 正则的正负向预查
let reg = /feitian(?=xiaonvjing)/; // 正向预查feitian 后边跟着的必须是xiaonvjing

let reg = /feitian(?!xiaonvjing)/; // 负向预查feitian 后边跟着的必须不是xiaonvjing
let str = "feitiansdfghj";
console.log(reg.test(str));//true


//[]中不允许出现多位数
let reg = /[38-91]/; //  3或者 8-9或者 1中的任意一个字符出现一次即可
let reg = /[#$&s13]/; // 中括号里的任意一个字符出现一次即可
//修饰符
let reg = /s/i;
console.log(reg.exec("S"));
