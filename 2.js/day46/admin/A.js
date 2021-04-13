function sum(...arg){
  return eval(arg.join('+')) 
}
console.log(sum(1,2,3,4));  
module.exports = {
  sum
}
