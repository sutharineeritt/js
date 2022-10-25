
/*----- Calling Function -----*/
let displayIt = function(msg) { //FUNCTION ไม่มีการ return ผลลัพธ์
    //console.log(msg);
    return msg
}
displayIt('Hello, Js')


let doSomthing1 = displayIt // not execute fuction 
let doSomthing2 = displayIt("Hello") //สั่งเรียก fuction แล้วให้ประมวลผล --> execute
console.log(typeof doSomthing1); //function
console.log(typeof doSomthing2); //undifined because ไม่มีค่าอะไร return ออกมา

/* ----------- */
console.log("-------------------");
console.log(doSomthing1); //function
console.log(doSomthing2);





