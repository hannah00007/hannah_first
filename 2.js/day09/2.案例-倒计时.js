function addZero(num){
    if(num<10){
        num="0"+num

    }
    return num
}

var timer=setInterval(function(){
    box.innerText= countDown(target)
}, 1000);

function countDown(target){
    var diff=new Date(target).getTime()-new Date().getTime();//时间差，单位毫秒
    if(diff<=0){
        clearInterval(timer);
        timer=null;
        return "倒计时结束";
    }
    var hour=Math.floor(diff/1000/60/60);//时
    var minute=Math.floor((diff/1000/60/60-hour)*60);//分
    var sec=Math.floor((diff/1000/60-hour*60-minute)*60);//秒
    var res=addZero(hour)+"时"+addZero(minute)+"分"+addZero(sec)+"秒";
    return res;
}

var target="2021-1-29 22:00:00:00";//目标时间
var box=document.getElementById("box");
box.innerText= countDown(target)

    

