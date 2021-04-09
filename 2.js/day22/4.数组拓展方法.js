function fn(){
    console.log(arguments);//返回类数组
    let arr=Array.from(arguments);//转为数组
    console.log(arr)
}
fn(1,2,3,4)
let arr=Array.of(1,2,3);//转为数组
console.log(arr)//[1,2,3]