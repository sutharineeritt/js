console.log('---1---');
const fn = x => x
console.log(fn('hello, world')); //hello, world

console.log('---2---');
//ผลลัพธ์ของ  arr
function doSomething(x) {
    x[1] = 5
}
const arr = [1,2,3]
doSomething(arr) //not show
console.log(arr); //[1,5,3]

// console.log(doSomething())

//Object in Js
/* store data in format of key:value --> "property" 
   Key นั้นจะเป็น String ส่วน Value สามารถเป็นข้อมูลประเภทใดๆ ในภาษา JavaScript 
   - obj. in java can be store func. to property value 
   - Js manage obj. on prototype-base
   - สร้าง object ใหม่ๆด้วย new operator */

console.log('---3---');
const obj = {
    x: 1,
    y: 2,
    xy(){
        return this.x * this.y
    }
}
obj.xy()
console.log(obj.xy()); //2
//ได้คำตอบ syntax ถูกต้อง เรียก function in object ออกมาใช้ได้


//Json กับ Js object
/* - contain --> text, object, array
   - property key in Json ต้อง ขึ้นต้นด้วย ""*/

console.log('---4---');
class Circle {
    constructor(radius) {
        this.radius = radius
    }
}
const obj1 = new Circle(2.5)
console.log(obj1); //Circle { radius: 2.5 }
const obj2  = Object.create(obj1)
console.log(obj2.radius); //2.5

console.log('---5---');
const obj4 = { x: 'M', y: 35}
const obj5 = { y: 'XL', z: 28} 
const obj3 = {...obj4, ...obj5}
console.log(obj3); //{ x: 'M', y: 'XL', z: 28 }
//ตัวหลังทับตัวหน้า เทียบจาก name in object

console.log('---6---');
const [a] = [3,6,9]
console.log(a); //3


console.log('---7---');
const { no, author } = { id: 124, author: 'Suda DeeJai'}
console.log(no, author); //no:undefined author:Suda DeeJai

