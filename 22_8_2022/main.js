/*let val   //undefined
console.log(typeof val)
console.log(val)

let nullval = null //null
console.log(typeof nullval)
console.log(nullval)*/

//Immutable != constain, not change original value, ไม่ได้เอาค่า function เข้ามาเปลี่ยนในตัวแปรนั้น
/*let sentence = 'hello world'  
console.log(sentence.toUpperCase()) 
console.log(sentence)*/

/* ไม่เปลี่ยนแปลงค่า
immutable ==> primative type
ex: let msg = "java script"
    msg.toUpperCase() ==> "JAVASCRIPT" 
    **ค่า "JAVASCRIPT" ไม่ได้ถูกแทนที่ใน msg. 
    ex: ถ้าต้องการให้เป็นตัวพิมใหญ่
    msg = msg.toUpperCase()*/

//Mutable Object --> object properties and objects in array
/*syntax in java script 
  let std = { property1, property2,...., propertyXX }
              key:value  key:value   key:value

std = {firstname : 'somchai', lastname : 'Jaidee'}
std.lastname = ' Jaudee' ------> แทนที่ใน lastnameเลย
                   
                    array syntax
  let arr = [ element1, element2,...., elementXX ]
      arr = [64100101, 64100102, 64100103, ..., 6410010X]
      arr[0] = 6400000 ---> array ตำแหน่งที่ 0 จะถูกแทนที่
  result --> arr = [6400000, 64100102, 64100103, ..., 6410010X]*/


//   for(i==1;i<10;i++){ //--- var ไม่เป็น block scope ตัวอื่นสามารถเข้าถึงได้
//         console.log(i)
//   }
//   console.log('----------------- Global Scope')
//   console.log(i) 

//  console.log('----------------- Block Scope')
//    for(let i=1;i<10;i++){ 
//      console.log(i)
//    }
//  console.log('----------------- เข้าถึง block ไม่ได้ เพราะเป็น let')
//  console.log(i) 
//  // i is not defined
//  /* ----- วิธีแก้ ----- */
//  let i
//  for(i=1;i<10;i++){ 
//      console.log(i)
//    }
//  console.log('-----------------')
//  console.log(i)

// let emojiIcon=String.fromCodePoint('0x1F60D')
// console.log(emojiIcon)
// let msg="Today is Present"
// console.log(msg.length)
// console.log(msg.charAt(0))
// console.log(msg.charAt(msg.length-1))

// let msg2 = `hello, ${msg} , bye bye ${emojiIcon}`
// console.log(msg2)

/* implicit(โดยนัยยะ) --> xy = x*y ---> explicit(ต้องปรากฎให้เห็นเด่นชัด) */

/*if(0) console.log('0 is true')
else console.log('0 is flase')*/
//ans: 0 is flase because โปรแกรมไปใช้ to boolean ให้อัตโนมัติ เพราะมันเป็น implicit

//---- How to check array to empty --> use length ตรวจสอบว่า empty ไหม

/* EX:1*/ let arr = []
//implicit type conversion
if(arr) console.log('empty')
else console.log('not empty')
// ans: empty

/* EX:2*/ let arr2 = ['64130500085']
//implicit type conversion
if(arr2) console.log('empty')
else console.log('not empty')
// ans: empty

//ใช้ length ตรวจสอบว่า empty ไหม
if(arr2.length==0)
console.log('empty array')
else
console.log('not empty array')

if(Boolean(0)) console.log('0 is false')
const result=Number('4')*5
const result2=String(10)+'room'
console.log(result)
console.log(result2)