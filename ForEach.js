/* forEach */
// Method Syntax ---> array.forEach(function(currentValue, index, arr), thisValue)
// ใช้ forEach เพื่อเข้าถึงแต่ละ element ใน array ได้ เป็นการดึง/เรียกดูทีละตัวออกมา
/* วนลูปเพื่อนำค่าใน Array แต่ละตัวมากระทำตามใน Function ที่เรากำหนดการทำงานเอาไว้
โดย ForEach นั้น ไม่สามารถ Return ผลลัพธ์ ออกมาได้ ถ้า Return ออกมาจะเป็น undefined เพราะสร้างขึ้นมาทำอะไรสักอย่างหนึ่ง function ไม่จำเป็นต้อง return  */

/*เพื่อให้เห็นภาพง่ายขึ้น เริ่มจากตัวอย่างแรกเป็น function forEach --> สีใน array*/
var colors = ['red','blue','pink','gray']

colors.forEach(function (item) {
    console.log("This is : " + item + " color")
 })

/* ตัวอย่างเพื่อให้เห็นมากขึ้นว่า forEach วนลูปนำค่าใน Array แต่ละตัวมากระทำตามใน Function ที่เรากำหนดการทำงานเอาไว้ยังไง*/
// compute the sum //
/* 1 */
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);
function myFunction(item) {
    sum += item;
}
console.log(sum)
/* 2 */
// Original array
const items = [12, 24, 36];
const copy = [];
items.forEach(function (item) {
    copy.push(item + item+2);
});
console.log(copy)

/* ForEach นั้น ไม่สามารถ Return ผลลัพธ์ ออกมาได้ ถ้า Return ออกมาจะเป็น undefined */
var number = ['1','2','3','4']
const tt = number.forEach(function (item) {
    return item })
console.log(tt)


/* ------ arrow function ------ */
// Arrow function
// forEach((element) => { /* … */ })
// forEach((element, index) => { /* … */ })
// forEach((element, index, array) => { /* … */ })

const students = ['John', 'Sara', 'Jack'];
students.forEach(element => {
    console.log(element);
});

/* ------ callback function ------ */
/* callbackFn is invoked only for array indexes that have assigned values. It is not gathered for empty slots in sparse arrays.*/
// forEach(callbackFn)
// forEach(callbackFn, thisArg)
/* Callback function หรือฟังก์ชันเรียกกลับ คือฟังก์ชันที่ถูกส่งเป็นพารามิเตอร์ของฟังก์ชันอื่นเพื่อเรียกใช้งานในภายหลัง
ฟังก์ชัน Callback นั้นมีประโยชน์เมื่อเราสร้างฟังก์ชันและต้องการให้ส่วนที่เรียกใช้งานฟังก์ชันสามารถกำหนดการทำงานบางอย่างเองได้
โดยการทำงานนั้นจะกำหนดผ่านฟังก์ชัน Callback. */

// อ่านเพิ่มเติม
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


