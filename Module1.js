/* Type, Values, and Variables*/
//Immutable object--> no way to change primitive value ไม่สามารถเปลี่ยนแปลงค่าได้
/*Example*/
let srt = "Hello World"
srt.toUpperCase()
console.log(srt) //Hello World
//If you want to change Hello World to UpperCase, you have to use in console log
console.log(srt.toUpperCase()) //HELLO WORLD

//Mutable object --> can change value primitive and array element
/*Example*/
/*1. change value object properties*/
/*  let xxx = { property1, property2,...., propertyXX }
                key:value  key:value   key:value         */
let obj = {firstname: 'Sutharinee', lastname:'Ritthidet'}
obj.lastname = 'Boobie'
console.log(obj) //{ firstname: 'Sutharinee', lastname: 'Boobie' }

/*1. change array elements*/
let num = [1,2,3,4,5]
num[1] = 6 //[ ] in array to specific position of value by start count from 0 - xxx
console.log(num) //[ 1, 6, 3, 4, 5 ]

// Creating a variable in JavaScript is called "declaring" a variable.

/*-------- JavaScript Scope ---------*/
// 1. Block Scope --> bounded(ครอบไว้) by { } ปีกกา
// let,const ออกนอกไม่ได้ แต่ var ออกนอก scope ได้
console.log('----------------- Block Scope')
// for(let i=1;i<10;i++){
//     console.log(i)
// }
// console.log('----------------- เข้าถึง block ไม่ได้ เพราะเป็น let')
// console.log(i) // Cannot access 'i' before initialization
/* ----- วิธีแก้ ----- */
let i
for(i=1;i<10;i++){
    console.log(i) // 1 2 3 4 5 6 7 8 9
}


//Function Scope
//They can only be accessed from within function ออกนอก function ไม่ได้
//Variables defined inside a function are not accessible (visible) from outside the function.
function myfunction(){
    let std1 = 'Sutharinee'
    const std2 = 'Arissara'
    var std3 = 'NONONONONO'
    console.log(std1)
    console.log(std2)
    console.log(std3)
}
console.log(myfunction())
/*
output : Sutharinee
         Arissara
         NONONONONO
         undefined
*/

//Global Scope
//variable declared outside a function or a block ---> GLOBAL
//They can be accessed from anywhere in JS program
  for(i=1;i<10;i++){ //--- var ไม่เป็น block scope ตัวอื่นสามารถเข้าถึงได้
        console.log(i)
  }
  console.log('----------------- Global Scope')
  console.log(i) //10

/* implicit(โดยนัยยะ) --> xy = x*y ---> explicit(ต้องปรากฎให้เห็นเด่นชัด) */
if(0) console.log('0 is true')
else console.log('0 is flase')
//output: 0 is false because โปรแกรมไปใช้ to boolean ให้อัตโนมัติ เพราะมันเป็น implicit
//---- How to check array to empty --> use length ตรวจสอบว่า empty ไหม

let a = 1
let result = a++ //1
let result1 = ++a //2
console.log(result)

/*--- Condition Operator (?:) ---*/
// ex:
let age1 = 40
const check = age1  ? 'You are old' : 'Wow, you are teenager'
//boolean condition ?      true     :      false
console.log(check)
//OUTPUT: You are old
/* โจทย์ --> */
function getTitle(sex) {
    return sex === 'female' ? 'MS': sex === 'male' ? 'MR': 'N/A'
}
console.log(getTitle('female'))
console.log(getTitle('male'))
console.log(getTitle())


/*--- Optional chaining ( ?. ) ---*/
//They will not show "error" , they will show undefined instead //?. --> คืน undifined โดยไม่ error
//You can use ?. and ?.[]
//1. array is null
let items = null
console.log(items?.[0]) //
//2. array is undefined
let z
console.log(z?.[0])
//3. object is null
let b = null
console.log(b?.id)
//4. object is undefined
let u
console.log(u?.firstname)
//OUTPUT 1-4 : undefined


/*--- Nullish Coalescing (??) ---*/
/*

*/


/* Higher order function*/
// func. ที่ return ค่าออกไปเป็น function หรือรับ param. ออกมาเป็น func.
const numbers = [1, 2, 3, 4, 5];

function addOne(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] + 1);
    }
}
addOne(numbers);



