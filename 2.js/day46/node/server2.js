//express 封装好的写 node.js 的工具
let express = require("express");
let app = express(); // 相当于createServer(()=>{})
app.listen(8080, () => {
    console.log("server is create success！listening on 8080 port！");
});

app.use(express.static("./clinet")); //静态服务器的路径

app.use((req, res, next) => {
    /*
      req和res身上常见的属性和方法
        req
            + req.path：存储请求地址的路径名称
            + req.query：存储问号传参的相关信息（对象）
            + req.method：请求方式
            + req.get： 获取请求头信息
            + req.body: 代表请求体(但是请求体得做特殊处理才能使用)
        =========
        res
            + res.send：最常用的给客户端返回信息（可以传递对象/PATH/BUFFER/TXT等），基于SEND是通过响应主体返回给客户端信息
            + res.end：类似于原生的操作,结束响应并返回内容
            + res.status：返回状态码
            + res.set：设置响应头信息  res.set([KEY],[VALUE])  res.set({KEY:VALUE,...})    
    */
    res.set("ss", 100);
    res.set({
        ss: 100,
        a: 200,
    });
    res.status(404); //响应状态码
    res.send("NOT FOUND!11111"); //相当于原生node的 req.end()（这个地方也可以用 req.end()但是不语义化），可以分段发送
});
