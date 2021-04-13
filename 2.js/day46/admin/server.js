// node的内置模块 http、https
let http = require('http');
let server = http.createServer((req, res) => {
  // req是请求过来的内容
  // res里是响应的时候使用的方法或者属性
  // res.writeHead(404,{
  //   a:100
  // }); // http状态码和响应头
  // res.end('1111'); // 响应体
});

server.listen(8080, () => {
	//=>当服务创建成功，并且端口号已经监听完成，触发此回调函数执行
	console.log('server is create success！listening on 8080 port！');
});