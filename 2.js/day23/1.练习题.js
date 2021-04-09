let n = m = 10; // let n = 10 20 21 22 23;  m = 10
var obj = {
    n: 10, // 11
    f1: (function (m) {// m = 10 11
        /* 
        
        */
        n += n;
        return () => {
            // 箭头函数没有this
            console.log(++this.n, this.m == undefined ? m : ++m);
            // ++window.n          window.m == un
            // NaN                    11
        }
    })(n)
}

function Fn() {
    /* 
     */
    this.n = n;
    n++ < 21 ? n++ : this.n++;
    // 20<21
    // 22
    f1.call(this, this.n);
    this.getN = function () {
        console.log(this.n++); // 23 10
    }
}

function f1(n) { // af0
    // this当前实例
    console.log(this.n++); // 20 21 22
}
var f2 = new Fn(); // {n:23,getN:f}af1      20
var f3 = new Fn(); // {n:24,getN:f}      23
console.log(f2, f3);
Fn.prototype.f1 = f1; // 给Fn的原型增加方法f1:  af0
f2.__proto__.f1 = f1;
Fn.prototype.__proto__.f1 = f1; // 给Object的原型增加方法f1:   af0
Fn.prototype.__proto__.getN = f2.getN; // 给Object的原型增加方法，getN :af1
console.log(f2.getN == f3.getN); // false
console.log(f2.getN === Fn.prototype.getN); // true
console.log(f2.f1 === Object.f1); // true
obj.f1(); // NaN 11
obj.__proto__.f1();// NaN
obj.getN(); // 10
f2.f1(); // 21
f3.f1.call(f2); // 让af0执行，并且把af0的this指向f2   22







let n = m = 10;
var obj = {
    n: 10,
    f1: (function (m) {

        n += n;
        return () => {
            console.log(++this.n, this.m == undefined ? m : ++m);
        }
    })(n)
}

function Fn() {

    this.n = n;
    n++ < 21 ? n++ : this.n++;

    f1.call(this, this.n);
    this.getN = function () {
        console.log(this.n++);
    }
}

function f1(n) {

    console.log(this.n++);
}
var f2 = new Fn();
var f3 = new Fn();
console.log(f2, f3);
Fn.prototype.f1 = f1;
f2.__proto__.f1 = f1;
Fn.prototype.__proto__.f1 = f1;
Fn.prototype.__proto__.getN = f2.getN;
console.log(f2.getN == f3.getN);
console.log(f2.getN === Fn.prototype.getN);
console.log(f2.f1 === Object.f1);
obj.f1();
obj.__proto__.f1();
obj.getN();
f2.f1();
f3.f1.call(f2);
