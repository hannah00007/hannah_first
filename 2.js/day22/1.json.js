/*
    json 是一种数据格式，并不是数据类型
        + 一般情况都是从后台请求后拿来的数据（json 格式数据）
        + Json 数据格式
            + json 格式的对象
            + json 格式的字符串
    



*/

let obj = {"name":100}//json 格式的字符串,后台返回的数据都是字符串
let str = '{ "name": 100 }'//json 格式的对象

JSON.stringify(obj)//把对象转换成字符串
JSON.parse(str)//把字符串转换成对象
