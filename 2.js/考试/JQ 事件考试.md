### 填空
  - 1. e.target代表的是____;
    - 事件源
  - 2. dom2级事件绑定的方法是____;
    - ele.addEventListener()//ele.removeEventListener()
  - 3. dom2级事件绑定的三个参数分别代表的是______;
    - "事件",方法,布尔值
  - 4. 事件执行共有___、___、____、三个阶段
    - 捕获阶段、目标执行阶段、冒泡阶段
  - 5. js中支持异步的技术有_________;
    - ajax,promise,setInterval,setTimeout,事件
  - 6. 快速创建一个成功的Promise实例的方法是_____;
    - Promise.resolve()
  - 7. 移动端关于触摸的事件有__________;
    - touchstart/move/end/cancel(例如被电话截断)/click
### 判断
  - 1. $.get() 是按照索引获取jq版的元素
    - 错
  - 2. $.eq() 是按照索引获取原生版的元素
    - 错
  - 3. e.cancelBubble() 是阻止事件的冒泡传播机制
    - 错  e.cancelBubble=true/false
  - 4. jquery中的each和原生的forEach没有区别
    - 错
  - 5. 防抖和节流可以提升页面的性能
    - 对   节流: onmusemove/监听滚动条  防抖: 登录的时候/ enter键/ 在谷歌的页面下面点击打开一个百度网页
  - 6. 动画只可以用定时器来完成
    - 错
  - 7. new Promise的执行是异步的
    - 错
  - 8. 键盘事件中的 e.keyCode代表的是按键的名字
    - 错  名字是 Key
  - 9. e.returnValue()可以阻止事件的默认行为
    - 错 e.returnValue=true/false
  - 10. 事件执行的时候先执行冒泡传播机制在执行捕获执行机制
    - 错
  - 11. Promise实例的状态只能从成功态转变成失败态
    - 错
  - 12. Promise只能是成功态或者是失败态
    - 错
  - 13. js是可以多线程执行的
    - 错----- ####

### 简答
  - 1. dom0级事件绑定和dom2级事件绑定的区别
        - 语法不同
            - DOM0: box.onclick=fn
            - DOM2: box.addEventLister("click",fn,false)
        - 事件执行不同
            - DOM0: 只在冒泡阶段执行
            - DOM2: 捕获、目标、冒泡
        - 相同事件绑定数量不同
            - DOM0: 不可多个绑定，否则覆盖
            - DOM2: 可重复绑定不同的方法

        
  - 2. jquery相对于原生来说有哪些特点
        - 获取元素: $("#id/.class/div/...")
        - 增加或者删除元素属性: $("div").addClass("xxx")/$("div").removeClass("xxx")
        - each方法: 参数和原生 js  forEach 相反参数
        - 获取兄弟元素: 原生需要先获取父级元素，然后遍历获取里面的元素；jq可以通过 siblings()直接获取
        - 插入元素: 原生:div.appendChild("xx")/jq:xxx.appendTo("div")
        - jq 使用上较原生比较简单,灵活,兼容性好...
        ....
  - 3. 简述你对promise的认识和理解
        - 目的: 是让异步事件以同步的方式展示出来
        - 语法: 
            - 创建: let res=new Promise((resolve,reject=>{})
            - 状态（一经改变则不会再变）: pending（进行中）,rejected(失败)，filfulled(成功)
            - 方法:
                - res.then(()=>{成功执行的函数},()=>{失败执行的函数}).then(()=>{})
                    - then执行完返回的是当前的实例，可多次使用 then
                    - 两个回调函里面的 return 后面如果是新的实例，则后面的 then执行那个函数要看新实例的状态；否则则后面的 then执行成功状态函数
                - catch：捕获失败状态，即失败状态要执行的函数写在 catch 里面
                - finally: 不管射状态都执行
                - all(在类身上的方法): 里面传一个数组，数组里面是各个实例，只有当所有实例成功状态才会执行 then 里面的成功状态函数，如果有一个失败则立刻执行失败状态函数        
               
  - 4. 请简述以下事件对象上的属性意思
      + 1.e.clientX/clientY
        - 获取鼠标当前位置距离可视区域的坐标
      + 2.e.pageX/pageY
        - 获取鼠标当前位置距离body的坐标
      + 3.e.offsetX/offsetY
        - 获取鼠标当前位置距离父级的坐标
  - 5. 请列举出你所知道的jquery中的方法并注明意思(不少于6个)
        - $('div') 获取所有div元素
        - $.each(data,()=>{})  循环 data
        - $('div').siblings() 获取div所有兄弟元素
        - $('div').eq(0)获取索引为 0的 div
        - $("div").addClass("xxx") 增加 class
        - xxx.appendTo("div")把 xxx放到 div 里面
### 计算
  - 1. 请输出下列结果

    let p1 = new Promise((resolve,reject)=>{
        let timer = setTimeout(()=>{
        },10000);
        console.log(300); // 1
        resolve(timer);
    });
    console.log(100); // 2
    let p2 = p1.then((res)=>{
        console.log(res); // 4
        return Promise.reject();
      },(res)=>{
        console.log(res);
        return Promise.resolve();
      });

      p2.then((res)=>{
        console.log(1, res);
      }).catch((res)=>{
        console.log(2, res);//2 un
      }).finally(()=>{
        console.log(900);
      })
      console.log(200); // 3
    - 300、100、200、1、un、900


  - 2. 请输出下列结果

    setTimeout(function () {
      console.log(100);
    }, 20);
    console.log(300);
    for (var i = 0; i < 10000000; i++) {   }
    setTimeout(function () {
      console.log(400);
    }, 10);
    console.log(200);
    - 300、200、100、400