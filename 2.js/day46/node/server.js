// node的内置模块 http、https
let http = require("http");
let fs = require("./promiseFs");
let url = require("url");
let server = http.createServer((req, res) => {
    // req是请求过来的内容
    // res里是响应的时候使用的方法或者属性
    //console.log(req.url); //获取请求头里面的url后面的资源路径名称和参数

    let { query, pathname } = url.parse(req.url, true); //query是获取问号后面的参数，pathname是资源路径名称
    fs.readFile(`./client${pathname}`, "utf8")
        .then((result) => {
            res.writeHead(200, {});
            res.end(result);
        })
        .catch(() => {
            res.writeHead(404, {});
            res.end("not found!");
        });
    // fs.readFile(`./clinet${pathname}`,'utf8',(err,result)=>{
    // 	res.end(result)
    // })
});

server.listen(8080, () => {
    //=>当服务创建成功，并且端口号已经监听完成，触发此回调函数执行
    console.log("server is create success！listening on 8080 port！");
});
