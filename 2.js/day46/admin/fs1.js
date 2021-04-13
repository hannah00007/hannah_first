// node的内置模块fs
// fs赋予了js在node韩环境下可以对服务器上的文件进行读写操作的能力
// fs里的方法在执行的时候，路径是相对于当前的项目的根目录来说的
let fs = require("fs");
// readdirSync同步读取指定的项目的目录结构
let res = fs.readdirSync('./');
console.log(res);


// 异步读取目录
fs.readdir(path,callback)
fs.readdir('./ww',(err,res)=>{
  // 此函数是异步执行的
  // 当目录读取成功以后就会异步执行此回调函数
  console.log(200);
  // 形参err带表的是：错误的内容
  // res代表的是：读取的内容
  console.log(err,res,15);
});
console.log(100);


//-------------------------------------
// 同步的读取文件的内容
// fs.readFileSync([path],[encoding]) ：不设置编码格式，默认得到的是Buffer文件流（编码）格式的数据，设置UTF8，得到的结果是字符串（例如:JSON格式、HTML或者CSS等格式）；但是对于富媒体资源（例如：图片、音视频等）我们读取和传输的过程中就是基于BUFFER文件流格式操作的，所以不要设置UTF8读取；

// (如果读取的是富媒体资源，就用默认的buffer格式就好，读取其他的使用utf8格式就好)
 let res = fs.readFileSync('./apple.jpg','utf8');
 console.log(res);
//utf8格式读取的内容都是字符串
fs.readFile('./index.css','utf8',(err,res)=>{
  console.log(res);
});

//------------------------------
// 当想文件写入内容的时候，如果当前目录没有这个文件，就会创建一个新文件，如果有，那就在文件里去写入，
// 他的写入是覆盖性的
fs.writeFileSync('./ss.txt','000','utf8')
fs.writeFile("./ss.txt", "1234", "utf8", (err, res) => {
    console.log(err, res);
});
fs.writeFile().then((res)=>{
    console.log(err, res);//null undefined
});
//在文件里面后面添加内容
fs.appendFileSync("./ss.txt","hello","utf8")
fs.appendFile()

//异步copy
fs.copyFile("./ss.txt","./a.txt",(err,res)=>{
    console.log(err,res)
})


//创建目录(文件夹)
fs.mkdir("./www",err=>{
    console.log(err)
})

// 删除目录(只能删除空的文件夹)
fs.rmdir("./www",err=>{
    console.log(err,"删除成功执行回调函数")
})



