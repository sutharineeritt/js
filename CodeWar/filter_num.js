function filter_list(l) {
    return  a = l.filter(x => typeof x === typeof 0)
}

console.log(filter_list([1,2,'a','b']))

/* Square every digit */
function squareDigits(num) {
    return +(num.toString().split('').map(function(val) { return val * val;}).join(''))
}
console.log(squareDigits(4141))

/* flower */
function lovefunc(flower1, flower2){
    if (flower1 %2 === 0 && flower2 %2 === 0){
        return false
    }
    if (flower1 %2 === 1 && flower2 %2 === 1){
        return false
    }
    return true
}