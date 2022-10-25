let num=1
let result = num //assignment statement(เป็นประโยคกำหนดค่า) / variable = expresssion
//expression : literal, variable, combination of variable, literal and operators

let randonNum = Math.random() * (10 - 1) + 1 // range 1(min) - 10(max)     //math.radom (flaoting points) (เลข 0-0.99999 แต่ไม่ถึง 1)
//fornular = Math.floor(Math.random() * (max+min+1) + min)

//Math.random() 0-0.99999
//* 9 = 0-8.99999
// 1*9.99999
//* Math.floor(10.999) = 10 (ตัดลง)
let x=num*result+5

/* not strict equality */
const isEqual = '2' == 2 //ไม่สน type, result = true
console.log(isEqual)

/* strict equality */
const isEqual1 = '2' === 2 //check type first, result = false
console.log(isEqual1)

//let num2=num2+1
//num2+=1
/*Conditional operator*/
//(boolean exp)? expression (true): expression (false) --> ?:
/* Ex:1 */ 
let y=(10%2===0?1:10) //ถ้า 10%2 = 0 ให้ x=1 ถ้าไม่ใช่ให้ x=10
console.log(y)
console.log(10%2)
/* Ex:2 */  
let age = 40
const greeting = age > 40 ? 'Good Morning' : 'Hello'
console.log(greeting) 

/*------Optional Chaining------*/
//1. array is null
let items = null
console.log(items?.[0]) //?. --> คืน undifined โดยไม่ error
//2. array is undefined
let z
console.log(z?.[0])
//3. object is null
let b = null
console.log(y?.id)
//4. object is undefined
let a 
console.log(a?.firstname)

/* ---- Nullish Coalescing ---- */
// Object
const obj={a:10, c:999}
console.log(obj.c)
const c = obj.c ??0
console.log(c)
//array
let arrr
console.log(arrr)
arrr=arrr ?? [5,10] //ต้อง assign ค่าเพื่อให้วัด lenght ได้
console.log(arrr.length)

/* ---- JS String ---- */
let str1 = 'hey'
let str2 = 'Hey'
console.log(str1 > str2)
console.log(str1 < str2)
console.log(str1 === str2)


/* โจทย์ --> */
function getTitle(sex) {
return sex === 'female' ? 'MS': sex === 'male' ? 'MR': 'N/A'
}
console.log(getTitle('female'))
console.log(getTitle('male'))
console.log(getTitle())


/*---- Comparing array ---- */
let arr3=[5,4,3]
let arr4=[5,4,3]
console.log(typeof arr3)
console.log(typeof arr4)
console.log(arr3 === arr4)
console.log('-----------------')

// sharing array object
let arr5=arr3
console.log(arr3 === arr5)
console.log('-----------------')

// one object changrs array element will effect to another sharing ogject
arr5[0]=111
console.log(arr3[0])


/* ---- Conditional Switch ---- */
// const letter = 'A'
// let srt5
// switch (letter) {
//     case 'A':
//     case 'a' : srt5='letter A'    
//         break
//     case 'B':
//     case 'b' : srt5='letter B' 
//         break
// }
// console.log(str5)


