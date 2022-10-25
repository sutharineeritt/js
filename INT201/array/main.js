/* Ex:1 array order*/
// const arr1=[5,10,2,['blue', 'red'], true, 'ok', {x:5,y:10}]
// console.log(arr1[0])
// console.log(arr1.length-5) //ค่าสุดท้าย
// for( const a of arr1)
// console.log(a) //show all of arr1
// console.log(arr1[3]) 
// console.log(arr1[arr1.length-2])


/* */
// let x =[]
// let y = null
// let z

// let colors = [
//     ['yellow', 'red', 'orange'],
//     ['blue', 'green', 'purple']
// ]

//console.log(x.length) // 0 because--> ไม่มีค่า
//console.log(y.length)  //error
//console.log(colors[colors.length].length) //เป็น 3 console.log(colors.length)
// console.log(colors.length)
// console.log(colors.length-1)
// console.log(colors[colors.length-1])
// console.log(colors[colors.length-1].length) //วัด array ข้างใน array ซึ่งมี 3 สี เลยนับได้ 3


/*-- ...spread operator --*/
// let newColors=[1001, ...colors] //copy array from colors
// console.log(newColors)

// let arr2=new Array() //arr2=[]
// console.log(arr2.length)
// let arr3=new Array(10) //
// console.log(arr3.length) //return 10 เพราะกำหนดค่าเดียวที่เป็นตัวเลขทำให้มองเป็น size ไม่ใช่ค่าเริ่มต้น ฉะนั้นไม่ควรจะกำหนดตัวเลขตัวเดียว
// //array literals กำหนด lenght ไม่ได้

// let arr4=new Array("A", "B", "C")
// console.log(arr4)
// console.log(arr4.length)


// let arr6 = Array.of(555,888,666,333,222) //เลขตัวเดียวของ .of(ระบุค่าเริ่มต้นเป็นค่าใดๆก็ได้) จะเป็นค่าเริ่มต้น
// const [,id,...rest]=arr6 //... rest operator
// console.log(id)
// console.log(rest)

// console.log(arr6)
// console.log(arr6.length)

// let arr7 = Array.from(arr6) //arr7=[...arr6] ---> copy from arr6
// console.log(arr7)


let items=[5,4,2,1]
for (const item of items){
    console.log(items)
}
// let str1='Java Script'
// let str2=[...str1]
// console.log(str2) //ตัวอักษรจะโชว์ห่างกันเป็นทีละตัว

for (const [index, item] of items.entries()){  // .entries return to array
    console.log(`index: ${index}, value: ${item}`) //index นับตาม array 0,1,2,3
}


/* --- function --- */
function  doSomething(x, searchName) {
    // console.log(x?.length)
    //return x.includes(searchName)
    //return x.indexOf(searchName) //return 0
    return x.slice(1,3) //เอาตัวที่ 1-3 แต่ไม่เอาตัวหลังสุด
}

let studentName = ['suda', 'Somchai', 'Piti', 'Somsak']
console.log(doSomething(studentName,'suda'))
//let y=5
//doSomething(studentName) //รับเป็น type object ---> array ที่เป็น object
// doSomething(y)
//doSomething print content
