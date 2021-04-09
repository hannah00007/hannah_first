// 正则的创建方式有两种：字面量方式和构造函数方式
// 如果在创建正则的时候想给正则传递一个变量，那就只能用构造函数的形式
let num='asd'
let reg=new RegExp(`^${num}`)//这样就可以动态的变动正则了

let reg1=new RegExp("\\d")// \d 因为在字符串中\是有特殊意义的字符，不是普通的字符

let ary1=[[1,2,3,[4,5]],2,3,4]
let res=ary1.toString();
let ary=[];
for(let i=0;i<res.length;i++){
    if(!isNaN(res[i])){
        ary.push(Number(res[i]))
    }
    
}
console.log(ary)