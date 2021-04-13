// web静态资源服务器
let fs = require('./promiseFs');
let http = require('http');//或者 https，里面的方法都是一样的
let url= require('url');//用来解析 url 链接的
let mime = require('mime');//响应体以什么数据类型给到客户端类似于请求头里面的 content-type
let server = http.createServer((req, res) => {
	// console.log(req.url);
	// req.url 代表的是当前请求的url（带斜杠）(不包含协议、域名、端口号)
    // req.method 请求方式
    // req.headers 返回一个对象里面包含请求头里面的内容
	let {query,pathname} = url.parse(req.url,true);
    let suffixREG = /\.([0-9a-zA-Z]+)$/;   //['.html','html']
	let suffix = suffixREG.test(pathname) ? suffixREG.exec(pathname)[1] : null; // 'html'
	suffix = mime.getType(suffix);//'text/html'

	fs.readFile(`./clinet${pathname}`,'utf8').then((result)=>{
		console.log(result,6);
		res.writeHead(200,{
            'content-type':suffix //设置响应头和状态码
		});
		res.end(result) 
	}).catch(()=>{
		res.writeHead(500,{

		});
		res.end('not found!')
	});
	// fs.readFile(`./clinet${pathname}`,'utf8',(err,result)=>{
	// 	res.end(result)
	// })
});
server.listen(8080, () => {
	console.log('server is create success！listening on 8080 port！');
});
