## 第二天 A 模块笔记
### 标签的分类
+ 块级元素
    + 设置宽高起作用
    + 独占一行
    + 排列方式上下
> 比如 h1-h6/div/p/三大列表/table/form/pre
+ 行内元素
    + 设置宽高不起作用，他的大小有内容大小决定(一旦没有明确的宽高，那么 border 就不能用了)
    + 共占一行
    + 排列方式：左右
> 比如 span/格式化标签/a
+ 行内块
    + 设置宽高可以起作用
    + 共占一行
    + 排列方式：左右
> 比如img/input/video/audio/button

### display的几个值
+ display:block;转块级元素
+ display:inline-block;转为行内块元素
+ display:inline;转为行内元素
+ display:none;转为消失
    + 消失除了上述的方法还有
        + display:none;
        > 彻底转为消失 
        + opacity:0;
        > 仅仅是看不到，其实还在（透明度0-1)
        + visibility:hidden;
        > 仅仅是看不到，其实还在
        + 如果没有内容可以考虑让div的width=0/height=0
        > 仅仅是看不到，其实还在
        + 通过调整 margin值(-宽度)
        > 仅仅是看不到，其实还在
        + 通过z-index层级
        > 彻底转为消失



