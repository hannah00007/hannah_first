let str="asdf1234"
let reg=/\d+/
console.log(str.match(reg))//["1234"]这是正则的贪婪性

let str="asdf1234"
let reg=/\d+?/g
console.log(str.match(reg))//["1","2","3",4"]在正则的+后面加上问号就会取消正则的贪婪性
