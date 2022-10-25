
/* Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */
function getDay(date) {
    const dd = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    date = new Date()
    return "Today is " + dd[date.getDay()]
    /*dd เป็น array [ 0,1,...,7] และใน [date.getDay()] คือ getDay() จะ return เป็น
    number of week -- > 1-7 และจะบอกตำแหน่งวัน */
}
function getTime(time) {
    time = new Date()
    return "Current time  is : " + time.getHours() +" : "+ time.getMinutes() +" : "+ time.getSeconds()
}

console.log(getDay())
console.log(getTime())



