    // 第一步获相应的元素，
    // 给响应的元素绑定相应的事件
    $('i').click(function () { // 给每一个i绑定点击事件
        let index = $(this).index(); // 获取当前元素在兄弟姐妹中的索引
        let num = parseFloat($(this).siblings('em').html()); // 获取em的内容(数量)
        let $strongs = $(this).siblings('span').find('strong');
        let price = parseFloat($strongs.eq(0).html()); // 获取当前的单价
  
        if (index == 0) {
  
          console.log('--');
          num--; // 让数量--
          num < 0 ? num = 0 : null; // 如果减完之后，num的值小于0，那就把它改为0即可
        }
        if (index == 2) {
          console.log('++');
          num++; // 让数量加加
        }
        $(this).siblings('em').html(num); // 在把数量设置回去
        $strongs.eq(1).html(num * price + '元');
        computed();
      });
  
      function computed() {
        let allCount = 0;
        let allPrice = 0;
        let ary = [0];
        $('.list em').each((index, item) => {
          // console.log(item);
          allCount += parseFloat($(item).html())
        });
        $('.list strong').each((i, item) => {
          let index = $(item).index();
          if (index === 1) {
            allPrice += parseFloat($(item).html())
          }
          else {
            let value = parseFloat($(item).html());
            let num = parseFloat($(item).next().html());
            if(num !== 0){
               ary.push(value);
            }
          }
        });
        console.log(ary);
        ary.sort((a,b)=>b-a);
        $('.info em').eq(0).html(allCount);
        $('.info em').eq(1).html(allPrice);
        $('.info em').eq(2).html(ary[0]);
      }