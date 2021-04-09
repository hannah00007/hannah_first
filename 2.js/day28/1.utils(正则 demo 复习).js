let utils = (function () {
    //链接获取参数
    function queryUrlParams() {
        let obj = {};
        let reg = /([^?=&#]+)=([^?=&#]+)/g;
        url.replace(reg, ($1, $2, $3) => {
            obj[$2] = $3;
        });
        url.replace(/#([^?=&#]+)/, function ($1, $2) {
            obj.hash = $2;
        });
        return obj;
    }

    //处理年月日
    function timeFormat(templete = "$0年$1月$2日 $3时$4分$5秒") {
        let ary = time.match(/\d+/g);
        templete = templete.replace(/\$(\d+)/g, (value1, value2) => {
            let res = ary[value2] || "00";
            //console.log(res);
            res = res.length == 1 ? "0" + res : res;
            return res;
        });
        return templete;
    }
    //处理钱的表现形式
    function myMoney(key) {
        let str = key + "";
        let reg = /\d{1,3}(?=(\d{3})+$)/g;
        str = str.replace(reg, "$&,");
        return str;
    }
    //封装一个方法，获取对应属性的属性值后者设置属性值
    function screen(attr, value) {
        if (value == undefined) {
            return document.documentElement[attr] || document.body[attr];
        } else {
            document.body[attr] = value;
            document.documentElement[attr] = value;
        }
    }

    //封装一个方法，获取当前元素距离 body 的偏移量,返回一个对象,里面包含上左偏移量
    function offset(ele) {
        //获取距离父级(最近的 position=relative)的左上偏移量
        let left = ele.offsetLeft;
        let top = ele.offsetTop;
        //获取父级
        let parent = ele.offsetParent;
        //判断父级是不是 body，不是就进入循环(body的offsetParent是null)
        while (parent !== document.body) {
            left += parent.clientLeft + parent.offsetLeft;
            top += parent.clientTop + parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {
            left,
            top,
        };
    }
    return {
        queryUrlParams,
        timeFormat,
        myMoney,
        screen,
        offset
    };
})();

let url = "https://www.baidu.com/s?wd=es6&rsv_spt=1";
//utils.queryUrlParams(url);

let time = "2020/12/12 3 时 4 分 5 秒";

//console.log(utils.timeFormat());
let money = 134566677;
console.log(utils.myMoney(money));
