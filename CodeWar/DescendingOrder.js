function descendingOrder(n){
    //parses a string argument and returns an integer
    return parseInt((n+'').split('').sort().reverse().join(''))
}

console.log(descendingOrder(14548))