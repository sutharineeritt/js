function explode(x){
    let num = (element) => typeof element === typeof 0;
    // let arr = [x]
    let arr1 = []
    if (x.every(num)) {
        for (let i = 0; i < x[0] + x[1]; i++) {
            arr1.push(x) //ต้องเอาตัวแปร array ที่เอาเข้ามา --> x
        }
        return arr1
    }
    if ( x.some(num)){
        let v = x.filter(t => typeof t === typeof 0)
        for (let i = 0; i < (v); i++){
            arr1.push(x)
        }
        return arr1
    }
    if ( typeof x[0] === typeof '' || typeof x[1] === typeof ''){
        return 'Void!'
    }
    if ( x[0] === 0 || x[1] === 0){
        return []
    }
}

console.log(explode([9,3]))
console.log(explode(['a','b']))
console.log(explode(['a',3]))
console.log(explode([5,'c']))
console.log(explode([0,'a']))
console.log(explode(['f',0]))


// let sum = arr.reduce(function (a, b) {
//     return a[0] + b[1];
// }, x);