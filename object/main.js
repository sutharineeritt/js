let profile = {
    id: 123,
    interests: ['music', 'skiing']
}
console.log(profile);
console.log(profile.id);
console.log(profile.interests[0]); 
//เรียก array ออกมาโดย เรียก properties และเลือกตำแหน่ง array 


/* Objectn ซ้อน Object */
let book = {
    title: 'JavaScript',
    author: {
    firstname: 'Sutharinee',
    lastname: 'Ritthidetch'
    } 
}
// Object Literals สร้าง Object
console.log(book.author.firstname);
book.author.firstname='Somchai'   
book.author['lastname']='Sukjai' //ใส่ key ได้เลย [ ]
console.log(book.author);


// new Operator
//class Point is Prototype base for new point
class Point {constructor(x = 0, y = 0) {
    this.x= x
    this.y= y
}
distance(anotherPoint) { //distance 
    return `this.x = ${this.x}, anotherPoint.x =${anotherPoint.x}`
    //return Math.sqrt((this.x- anotherPoint.x) ** 2 +(this.y- anotherPoint.y) ** 2)
    //Exponentiation operator (**)
    }
}
let p1 = new Point(2,3)
const p2 = new Point(4,5);
console.log(p2);
console.log(p1.distance(p2));

p2.x=10
p2.y=20
console.log(p2.distance(p1))
//เรียกได้ เพราะสร้างผ่าน function เดียวกัน


//Object literal + function
//properties เก็บ function
let square={
    //properties **side** store function
    side:5,
    //properties **area** store function
    area:function(){
        return this.side*this.side
    }
}

console.log(square.area());
console.log(square.side);


//Object literal ไม่มี class คลุม
//Object literal --> ต่างคนต่างประกาศต่างคนต่างใช้ ไม่มีความเกี่ยวข้องกัน
const point1={
    x : 2,
    y : 3,
    distance:function(anotherPoint){
        return  `this.x: ${this.x}, this.y: ${this.y}`    }
}
const point2={
    x : 4,
    y : 5,
    distance:function(anotherPoint){
        console.log('distance function of point2 is working')
        console.log(`this.x: ${this.x}, this.y: ${this.y}`)
        return Math.sqrt((this.x - anotherPoint.x) ** 2 +(this.y - anotherPoint.y) ** 2)
    }
}
console.log(point1.distance(point2))
console.log('-----------')
console.log(point2.distance(point1))





