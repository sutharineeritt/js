
const fn = x => x
console.log(fn('hello world')); //hello world


//higher order function
// function that accepts function as pparameter or return a function 
// Argument คือ ค่าของ parameter ที่นำมาใช้ในการทำงาน. x และ y 

//1. store function in parameter
function add(n1,n2){ //n1, n2 is a function that store in parameter
    return n1 + n2
}
let sum = add
let addnum 
= add(2,5)
let addnum2 = sum(5,9)
console.log(addnum)
console.log(addnum2)

//passing function as a variable
const foo = () => { //const = variable
    console.log("foobar");
  };
  foo();

// passing function to another function
function operator(n1, n2, fn) {
    return fn(n1, n2)
}
function multiply(n1, n2) {
    return n1 * n2
}
let addResult = operator(5,3,add) //use function add(n1+n2)
console.log(addResult);//8
let multiplyResult = operator(2,10,multiply) //use function multiply(n1*n2)
console.log(multiplyResult) //20

//return function as value of another function
function sayGoodbye() {
    return 'Good bye'
}
function doSomething() { 
//return function as value of another function
    return sayGoodbye() 
}
let doIt = doSomething()
console.log(doIt); //Good bye


//rest parameter
function fn1(a, ...b) {
    console.log(`a is ${a}`, ' ', `b is ${b}`);
}
fn1('Hello',1,2) //a is Hello   b is 1,2

//spread แตกจาก array เป็นย่อยๆ


//unpack array = [], object = {}
const a = [1,2]
const b = [3,4]
const nnn = {name:'y3ear', age:19}

function fnn([,a], [,b], {name}){
    console.log(a,b,name);
}
fnn(a, b, nnn)




