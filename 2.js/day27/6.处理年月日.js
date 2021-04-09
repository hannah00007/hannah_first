// 封装timeFormat
let str = "2021~3~09 17:36:09";
String.prototype.timeFormat=function(template = "$0年$1月$2日 $3时$4分$5秒") {
    //先捕获数据
    let ary = this.match(/\d+/g); //['2021','3','09']
    template = template.replace(/\$(\d)/g, function ($1, $2) {
        let time = ary[$2] || "00"; // 如果捕获不到时间的话，就复制一个默认值 '00'
        time = time.length == 1 ? "0" + time : time;
        return time;
    });

    return template;
}
let res = str.timeFormat();
console.log(res);

