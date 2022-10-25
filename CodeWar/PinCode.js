/* PIN code */
function validatePIN (pin) {
    const regex = /^(\d{4}|\d{6})$/
    //^...$ = start...end with
    //\d every digit
    // we use {} to check length string
    if (pin.match(regex)){
        return true
    }
    return false
}
console.log(validatePIN("1234"))
console.log(validatePIN("12345"))
console.log(validatePIN("a234"))



/* High and Low */
function highAndLow(numbers){
    numbers = numbers.split(" ")
    return Math.max.apply(null, numbers) + ' ' +Math.min.apply(null, numbers)
}

console.log(highAndLow("1 2 3 4 5"))