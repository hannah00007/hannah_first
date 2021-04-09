/*
    JSON是一种常用的数据格式，不是数据类型（前端和后台需要来回的传递数据，一般传递的数据格式就是JSON数据类型）
        + 属性名必须得用双引号引起来，属性值可以是任意的数据类型  
        + JSON 常用的两种转换方法
        + 把JSON格式的字符串转为JSON格式的对象:JSON.parse()
        + 把JSON格式的对象转为JSON格式的字符串:JSON.stringify
*/
//JSON格式 的字符串
var obj='{"name":"li","age":18,"ary":[1,2,3]}'
//JSON格式的对象
var obj={"name":"li",age:18,ary:[1,2,3]}