// 把代码写到try中，尝试着去运行，如果try中的代码出错了，那catch就会捕获到这个错误，并且catch的形参还会接收错误的内容

// finally中的代码不管出不出错，都会执行
try {
    console.log(1);
} catch (error) {
    console.log("上班代码出错了", error);
    // 上面代码出错的处理机制可以写在这里面
} finally {
    console.log("都会执行");
}

console.log(100);
