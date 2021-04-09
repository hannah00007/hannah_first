/*
    认识正则:js数据类型中的一种，不管是匹配还是捕获都只针对字符串;
        + RegExp 是正则类(regular express)
        + 创建形式: 字面量形式和构造函数形式
            + let res=/\d/
            + let res=new RegExp("\\d")
        + 作用: 正则是一种服务字符串的规则
            + 匹配
                +   let res=/(\d)([a-z])/ 这里面必须两个字符
                    res.test("5a")//true 
            + 捕获
                +   let res=/(\d)([a-z])/
                +   res.exec("9s")//["9s", "9", "s", index: 0, input: "9s", groups: undefined]
 */
let res=/\d/ // 获取 0-9之前的任何随意数字
res.test("5")//true
res.test("55")//true 
res.exec("5ss5")//true 
res.exec(5)//true  正则会把里面的 5变成字符串的 5


let res=/\d+/ // 获取 0-9之前的任何随意数字1至多次
res.test("s55s")//true
