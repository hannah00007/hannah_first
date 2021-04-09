

let ary = [100, 2, 2, 4, 4, 44, 44, 66, 66];
let res = {};

let myInclude = (res, data) => {
    let has = false;
    // console.log('length: ', res.length)
    for (let j = 0; j < res.length; j++) {

        if (data === res[j]) {
            has = true;
            break;
        }
    }
    return has;
};

for (let i = 0; i < ary.length; i++) {
    let data = ary[i];
    res[data] = data;
    
    // if (!myInclude(res, data)) {
    //     res.push(data);
    // }
}
let result = []
for(let key in res) {
    result.push(res[key])
}
console.log(Object.values(res))