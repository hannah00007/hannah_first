Array.prototype.myPush = function (item) {
    this[this.length] = item;
    return this.length;
};
let ary = [1, 2, 3];
let res = ary.myPush(400);




function myunshift(...arg) {
    let newAry = this.slice();
    this.length = 0;
    for (let i = 0; i < arg.length; i++) {
        this[this.length] = arg[i];
    }
    for (let i = 0; i < newAry.length; i++) {
        this[this.length] = newAry[i];
    }
    return this.length;
}
Array.prototype.myunshift = myunshift;
let ary = [100, 200, 300, 400];
let res = ary.myunshift(500, 600);
console.log(ary, res);
