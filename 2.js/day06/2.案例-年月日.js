// 方法一
var str="2019-2-18 12:32:18";
var res=str.split(" ");// ["2019-2-18", "12:32:18"]
var res=str.split("");//["2", "0", "1", "9", "-", "2", "-", "1", "8", " ", "1", "2", ":", "3", "2", ":", "1", "8"]
var year=res[0];
var time=res[1];
function addZero(num){
    // if(num<10){
    //     return "0"+num
    // }else{
    //     return num
    // }
    return num<10?"0"+num:num
}
var list=year.split("-");
var left=list[0]+"年"+addZero(list[1])+"月"+addZero(list[2])+"日"
var list1=time.split(":");
var right=list1[0]+"时"+addZero(list1[1])+"分"+addZero(list1[2])+"秒"
console.log(left+" "+right)
// 方法二
year=year.replace("-","年");
year=year.replace("-","月");
year=year.replace("-","日");
time=time.replace(":","时");
time=time.replace(":","分");
time=time.replace(":","秒");
console.log(year)
console.log(time)
