/*
    浏览器加载页面，想让代码执行，首先会形成一个栈内存（执行环境 ECStack），然后让代码准备执行
        + 进栈 ==》最开始执行的一定是全局下的代码，此时形成一个全局代码的执行环境（全局执行上下文 EC（G））,把EC（G）压缩到栈内存中去执行；
        + 出栈 ==》有些上下文在代码执行完成后，会从栈内存中移除去，但是有些情况是不能移除取得
        + 在下一次有新的执行上下文进栈的时候，会把之前没有移除的都放到栈内存的顶部，让最新要执行的在顶部执行
*/