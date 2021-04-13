let express = require('express');
let app = express();
app.listen(8888,()=>{
  console.log('8888端口已经启动成功')
});

app.get('/list',(req,res)=>{
    // res.send('console.log(123)')
    let {callback} = req.query;
    let get = JSON.stringify({code:0,codeText:"ok"});
    res.send(`${callback}(${get})`);
    // 'get({code:0,codeText:'ok'})'
  });