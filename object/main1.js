/* 1.สร้าง object แบบเดียว ไม่สร้างโครงสร้างบ่อยๆ ใช้ object literal*/
/* 2.อยากให้สร้าง object แล้วมีผลต่อกัน */ 
/* 3.function assign to properties that want to share code ด้วยกัน */
/* ถ้า function มีการเปลี่ยนแปลง ตัวที่ ref จะเปลี่ยนแปลงด้วย */
// assigh function ห้ามใส่ ()
function distance(anotherPoint){
    return Math.sqrt((this.x - anotherPoint.x) ** 2 +(this.y - anotherPoint.y) ** 2)
}
const point1={
    x : 2,
    y : 3,
}
const point2={
    x : 4,
    y : 5,
}
point1.getDistance=distance
point2.getDistance=distance
console.log(point1.getDistance(point2))
console.log(point2.getDistance(point1))



/* Object Creation */
// const o = Object.create({x: 1, y: 2})
// const p = Object.create(o) 
// p.z = 10


class Subject{
    constructor(title='untitled'){
        this.title=title
    }
}

const int201 = new Subject('Client Side I')
console.log(int201); 
//int201 is a parent object of int203

const int203 = Object.create(int201) //copy properties ที่มีอยู่ก่อนหน้า
console.log(int203.title);
int203.lect='2hr' 
int203.lab='2hr'
console.log(int203);
//prototype based ---> เก็บ template
console.log(Subject.prototype.isPrototypeOf(int201));
console.log(Object.prototype.isPrototypeOf(int201)); 
//ทุก class ที่สร้างขึ้นอยู่ใต้บรรพบุรุษ Object ---> Top level

console.log(Subject.prototype.isPrototypeOf(int203))
console.log(Object.prototype.isPrototypeOf(int203))




let sq ={
    side: 5,
    //area: function () {
    area(){ //fucntion เก็บ properties area คือชื่อ properties ที่เก็บ function
        return this.side*this.side
    }
}

/* Shallow Equality */
function shallowEquality(object1, object2){
    const keys1=Object.keys(object1)
    const keys2=Object.keys(object2)
    if(keys1.length!==keys2.length){
        return false}
    for(let key of keys1){
        if(object1[key] !== object2[key]){
            return false}
        } returntrue
     }