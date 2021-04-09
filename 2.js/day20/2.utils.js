var util=(function(){
    function toArray(likeArray){
        return Array.prototype.slice.call(likeArray,0);
     };
     function average(){
         //arguments 是一个类数组，需要转成数组
         //为什么要转成数组，因为数组可以进行排序删除
         let ary=toArray(arguments);
         ary.sort((a,b)=>{return a-b})
         ary.pop();
         ary.shift();
         return eval(ary.join("+"))/ary.length

     }

     return{
         toArray,
         average
     }
})()
util.average(11,13,10,15)