/*
js的盒模型汇总（在 13 个盒子模型中，只有scrollTop、scrollLeft可以获取+设置其余只能获取）
    client: clientWidth、clientHeight、clientTop、clientLeft
    offset: offsetWidth、offsetHeight、offsetTop、offsetLeft、offsetParent
    scroll: scrollWidth、scrollHeight、scrollTop、scrollLeft
    方法：window.getComputedStyle("box")//这个是计算后的结果，计算一下优先级，返回的是一个对象，里面包含所有的样式的键值对 / element.currentStyle和window.getComputedStyle("box")的区别是点前面的值不同
    getComputedStyle("box").width获取计算后的宽，如果只是style.width 只是行内属性的值
js的盒模型细分
    + client
        + 获取当前盒子的可视区域: padding+width 
            + clientWidth: width+左右padding
            + clientHeight: height+上下padding
            + 注：
                + 内容区域超出的部分用 overflower=hidder 之后 border 上不会有内容，
                  但是在 css里面当盒子的类型为 xxx时 width是会算border的
                + 获取的结果是没有单位的,并且是数字类型
                + 获取的结果是整数，他会自动进行四舍五入
        + 获取当前盒子左和上边框的宽度：border
            + clientLeft: border-left-width
            + clientTop :border-top-width
    + offset
        + 获取当前盒子的总宽高度(在client的基础之上加上border)
            + offsetWidth: width+左右padding+左右border
            + offsetHeight: height+上下padding+上下border
        + 获取距离父级参照物的位置
            + offsetTop: 获取当前盒子距离父级参照物的上偏移量(当前盒子的外边框到父级参照物的内边框)
            + offsetLeft: 获取当前盒子距离父级参照物的左偏移量(当前盒子的外边框到父级参照物的内边框)
            + offsetParent: 获取当前盒子的父级参照物(他的所有父元素中，谁有position定位，那谁就是他的父级参照物，没有默认是 body)body.offsetParent()//null
    + scroll
        + 获取当前盒子的真实内容的宽高
            + scrollHeight: 
                + 在盒子内容没有溢出的情况下和clientHeight是一样的
                + 在盒子内容溢出的情况下等于上padding+盒子真实的高度(内容的高度)
                + 在盒子内容溢出的情况下设置overflow属性值之后scrollHeight=上下 padding+内容高度
            + scrollwidth: 
                + 在盒子内容没有溢出的情况下和clientWidth是一样的
                + 在盒子内容溢出的情况下等于左padding+盒子真实的宽度(内容的宽度)
                + + 在盒子内容溢出的情况下设置overflow属性值之后scrollHeight=左右 padding+内容高度
        + 获取浏览器滚动条纵向和横向的距离（scrollTop和scrollTLeft可以获取也可以设置）
            + document.documentElement.scrollTop || document.body.scrollTop; 获取
            + document.documentElement.scrollTop = xxx || document.body.scrollTop = xxx; 设置
            + 注意滚动条的距离其实等于 body 往上的距离
 */

//封装一个方法，获取对应属性的属性值后者设置属性值
 function screen(attr,value){
    if(value==undefined){
        return document.documentElement[attr] || document.body[attr];
    }else{
        document.body[attr] = value;
        document.documentElement[attr]  = value;
    }
 }
 screen("scrollTop",100)

 //封装一个方法，获取当前元素距离 body 的偏移量,返回一个对象,里面包含上左偏移量
 function offset(ele){
     //获取距离父级(最近的 position=relative)的左上偏移量
    let left=ele.offsetLeft;
    let top=ele.offsetTop;
    //获取父级
    let parent=ele.offsetParent
    //判断父级是不是 body，不是就进入循环(body的offsetParent是null)
    while(parent!==document.body){
        left+=(parent.clientLeft+parent.offsetLeft);
        top+=(parent.clientTop+parent.offsetTop);
        parent=parent.offsetParent
    }
    return {
        left,top
    }
 }
 offset(box)