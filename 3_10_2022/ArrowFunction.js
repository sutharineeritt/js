/* if no parameter use ( ) => expression(1 statement no { },
>1 use { } and don't forget "return") */

function add(a,b) {
    let sun = a+b
    return sum
}
/*V
  V*/
const afAdd1=(a,b) => {
    let sum = a+b
    return sum
}
console.log(afAdd1(1,3))

/*--------------------------------*/
function add2(a,b) {
    return a+b
}
/*V
  V*/
const afAdd2=(a,b) => a+b //return a+b ละ keyword ---> return
console.log(afAdd2(1,3))

/*--------------------------------*/
function getValue(msg) {
    return msg.charAt()
}
/*V
  V*/
const afgetFirstChar = msg => msg.charAt(0) //เว้น () and return
console.log(afgetFirstChar('INT2010'))

/*--------------------------------*/
function randomNumber() {
    return Math.random()
}
/*V
  V*/
const afRandomNumber = () => Math.random() //return Math.random()
console.log(afRandomNumber())


/* --- anonymous function --- */
const greetingfn = function (name) {
   return `hello, ${name}`
}
console.log(greetingfn('Sutharinee'))

const greetingfn2 = name => `hello, ${name}`
console.log(greetingfn2('Sutharinee'))


/* --- nested function */
// function average(nums) {
//     const a = 10, b = 20
//         function sum() {
//             let total = 0
//             for (const num  of nums){
//                 total += num
//             }
//         }
//     return total/nums.length //---> error total is not defined --> function ข้างนอก ไม่มีสิทธิ์ข้างถึง total
// }
//
// console.log(average([1,2,3,4,5]))
/* how to solve */
    //outer function
    function average(nums) {
        let total = 0

            //Inner function
            function sum() {
                for (const num  of nums){
                    total += num
                    console.log(total)
                }
                return total
            }
            console.log(`length: ${nums.length}`) //ไม่เรียก sum total ก็ไม่มีค่า, อยากได้ผลลัพทธ์จาก function ต้อง return
            return sum()/nums.length //ถ้าเรียก total เลยจะได้ 0 ต้องเรียก sum() --> function
    }

    console.log(`average = ${average([1,2,3,4,5])}`)


