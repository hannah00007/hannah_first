//Object.is()
Object.is(value1,value2);//比较两个值是否相等，和===差不多，两个值如果一样就是相等的 NaN
Object.is(NaN,NaN)//TRUE


//Object.assign();返回值是第一个实参的空间地址
let obj={name:1,age:2};
let obj1={sex:2,grade:3};
Object.assign(obj,obj1);//合并对象，不会产生新的对象，只是第二个对象及以后放到第一个对象中去；
console.log(obj,obj1)

//把多个对象合并成一个新的对象，可以两种方法
let obj={name:1,age:2};
let obj1={sex:2,grade:3};
let obj={...Object.assign(obj,obj1)};
let res=Object.assign({},obj,obj)
let res={...obj,...obj1,ff:789}

let obj={a:1,b:2,c:3};
let res=Object.values(obj);
console.log(res)//[1,2,3]
let res1=Object.keys(obj);
console.log(res1)//["a","b","c"]

