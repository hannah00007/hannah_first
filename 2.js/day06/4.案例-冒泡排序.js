var ary=[9,5,11,10,3,2];
// 这是比较的轮数
function sort(){
    for(var i=0;i<ary.length-1;i++){
        // 每一轮两两进行比较
        for(var j=0;j<ary.length-1-i;j++){
            //前比后大，则交换顺序
            if(ary[j]>ary[j+1]){
                //找个空间存一下
                var temp=ary[j+1];
                ary[j+1]=ary[j];
                ary[j]=temp;
            }
        }
    
    }   
    return ary
}

console.log(sort(ary))