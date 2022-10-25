function XO(str) {
    let arr = str.toLowerCase().split('') //toLowerCase() to check insensitive case
    if(arr.filter(x=>x==='x').length === arr.filter(x=>x==='o').length){
        return true
    }
    return false;
}

console.log(XO("ooxx"))
console.log(XO("xoxx"))
console.log(XO("ooXXm"))
console.log(XO("zpzpzpp"))