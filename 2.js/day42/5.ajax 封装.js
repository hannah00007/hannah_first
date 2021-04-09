function ajax(params) {
    let {
      url,
      type = 'get',
      async = true,
      data = {},
      cache = false,//是否走缓存
      timeout,//请求时间到了执行
      headers={},//设置请求头
      success = ()=>{},
    } = params;

    let xhr = new XMLHttpRequest;
    xhr.open(type,url,async);
    xhr.onreadystatechange = function(){
      if(xhr.status === 200){
        if(xhr.readyState === 4){
          success(xhr.response)
        }
      }
    };
    xhr.send();
  };

  ajax({
    url: './data.json',
    type:'post',
    async:true,
    data:{name:1,age:2},
    cache:true,
    timeout: 0,
    headers: { ss: 100, aa: 200 },//设置请求头
    success:(res)=>{
      console.log(res);
    }
  });