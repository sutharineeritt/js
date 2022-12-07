console.log('---1---');
let profile = {
    id: 123,
    interests: ['music','skiing']
}
console.log(profile.interests[0]); //music

let book = { 
    isbn : 123456,
    author: {
        firstname : 'John',
        lastname: 'Joody'
    } 
}
console.log(book.author.firstname); //John

console.log('---2---');
//const point = {x: 10, y:20}
class Point {
    constructor(x =  0, y = 0) {
        this.x = x
        this.y = y
    }
}
const p3 = new Point(5,4)
console.log(p3); //{ x: 5, y: 4 }

console.log('---3---');
//Object creation
const  o = Object.create({x: 1, y: 2})
const p = Object.create(o)
console.log(p.x); //1
console.log(p.y); //2
console.log(p); //{}

console.log('---4---');
//Defining Method
// When function = property of an object 
//We call that function ** a method **
const square ={
    side: 10,
    area: function (){
        return this.side * this.side
    }
}
square.area()
console.log(square.area()) //100

console.log('---5---');
//using this. for object reference
//เอา property ใน object มา
const square1 ={
    side: 10
}
const square2 ={
    side: 20
}
function findarea() {
    return this.side * this.side //object reference by using this.
}

square1.findarea = findarea
square2.findarea = findarea
console.log(square1.findarea)//[Function: findarea]
console.log(square1.findarea()) //100
console.log(square2.findarea()) //400

console.log('---6---');
//object ---> function by reference เปลี่ยน object เป็น function โดยการอ้างถึง (mutable) เปลี่ยนแปลงได้
let point = { x:10, y:20 }
let newPoint = point
//point.x = 30
newPoint.x = 30
console.log(point) //{ x: 30, y: 20 }

/*EX:2*/ 
function distance(p,pp) {
    return Math.sqrt((p.x + pp.x) + (p.y - pp.y))
}
console.log(distance({x:1, y:1}, {x:2, y:2}))
//1.4142135623730951      p           pp

console.log('---7---');
//compare object in js
/* 1.ใช้ ==,=== --> check ref not properties content
   2.manual compare */
// 1. use == or === to check reference
//Object Comparing
let student= { id:1, name:"Joe"}
let newStudent= { id:2, name:"Joe"}
let oldStudent= { id:1, name:"Joe"}
let alumniStudent= student // alumniStudent ref from student object

if (student == alumniStudent){ //true
    console.log("student equals to alumnistudentby ==")//student equals to alumnistudent by == 
}if (student == newStudent){ //false
    console.log("student equal salumnistudent by ==")
}if (student === alumniStudent){ //true --> share key reference
    console.log("studentstrictlyequalsto alumnistudent") //student strictly equals to alumnistudent by===
}if (student === newStudent){ //false
    console.log("student strictly equals to newstudentby ===")
}

//2.manual comparing
function isStudentEqual(object1,object2) {
    return object1.id === object2.id //manual here
}
console.log(isStudentEqual(student,oldStudent)) //true
console.log(isStudentEqual(student,alumniStudent)) //true

console.log('---8---');
//Shallow Equality by using object.key() --> return an array of objects (name) 
//return เป็น array นับตามจำนวน name ใน object นั้นๆ เปรียบเทียบทุก properties กรณีไม่มี nested
let book1 = {
    isbn: 123456,
    title: "JS"
}
let book2 = {
    isbn: 123456,
    title: "JS",
    //author: "John" --> false
}

function shallowEquality(object1, object2){
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)
    // ch3eck length key and then check value in key ว่าเท่ากันไหม
    if(keys1.length!==keys2.length){
        return false
    }
    for(let key of keys1){
        if(object1[key]!==object2[key]){
            return false
        }
    }return true
}
console.log("shallowequality: " + shallowEquality(book1,book2))  //true

