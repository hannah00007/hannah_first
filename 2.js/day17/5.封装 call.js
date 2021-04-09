/*
    封装函数，call
        + call 执行的时候 它里面的this是谁？ this是fn
        + call的作用是让fn执行 并且把fn中的this换成obj
        + 让fn执行的前提是需要获取到fn(call中的this 就是fn)(this())

*/
//形参...arg 是剩余
Function.prototype.myCall = function (obj, ...arg) {
    //console.log(arg)//[1,2,3] 把传进来的实参变成数组
    obj=obj||window;//担心没有 obj这个实参，那就给 window
    //如果这样写，fn虽然执行了，但是 fn里面的this没有改
    //this(...arg);//[1,2,3,4]
    obj.$fn = this; //fn
    //这里...arg 是展开
    let res = obj.$fn(...arg); //此时fn里面的 this就变成了obj
    delete obj.$fn; //添加的那个属性再删掉
    return res;
};

function fn() {
    console.log(this, arguments);
    var res=0;
    for(var i=0;i<arguments.length;i++){
        res=res+arguments[i] 
    }
    return res
    
}
var obj = { a: 123};

fn.myCall(obj, 1, 2, 3);

