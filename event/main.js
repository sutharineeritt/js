import { students } from "./data/data/students.js"
import { lecturers } from "./data/data/lecturers.js"

console.log(students);
console.log(lecturers);

const divButtonPanel = document.getElementById("buttonPanel")
console.log(divButtonPanel)

const studentButton = divButtonPanel.children[0]
console.log(studentButton)

const lectureButton = divButtonPanel.children[1]
console.log(lectureButton)

function dataButtonHandler(item) {
    const ulParentElement = document.querySelector('ul')
    // console.log(ulParentElement)
    ulParentElement.textContent = '' //<ul></ul>
    //return all students 
    for (let i = 0; i < lecturers.length; i++) {
        const liElement = document.createElement('li')
        liElement.textContent = `ID: ${item[i].id}, Name: ${item[i].name}`
        ulParentElement.appendChild(liElement)
    }                               
}

function lectureButtonHandler(event){
    // console.log(event.target)
    // console.log(event.target.id)
    // console.log(event.type)
    // console.log(event.eventPhase)
    // console.log(event.currentTarget)
    dataButtonHandler(lecturers)
}

function studentButtonHandler(e){ 
    dataButtonHandler(students)
}

lectureButton.addEventListener('click', lectureButtonHandler)
studentButton.addEventListener('click', studentButtonHandler)






// function createStudentButtonHandler() {
//     const ulParentElement = document.querySelector('ul')
//     // console.log(ulParentElement)
//     ulParentElement.textContent = '' //<ul></ul>
//     //return all students 
//     for (let i = 0; i < students.length; i++) {
//         const liElement = document.createElement('li')
//         liElement.textContent = `ID: ${students[i].id}, Name: ${students[i].name}`
//         ulParentElement.appendChild(liElement)
        
//     }
    
// }

// function createlectureButtonHandler() {
//     const ulParentElement = document.querySelector('ul')
//     // console.log(ulParentElement)
//     ulParentElement.textContent = '' //<ul></ul>
//     //return all students 
//     for (let i = 0; i < lecturers.length; i++) {
//         const liElement = document.createElement('li')
//         liElement.textContent = `ID: ${lecturers[i].id}, Name: ${lecturers[i].name}`
//         ulParentElement.appendChild(liElement)
//     }
// }



//add event handler function by using anonymouse function
/* studentButton.addEventListener('click', ()=> {
    alert('Hello, Student button')
}, false)

function studentButtonHandler(){
    alert ("2nd function handler for student button")
}


studentButton.addEventListener('click', studentButtonHandler, false);
// studentButton.removeEventListener('click', studentButtonHandler, false);

const divButtonHandler = () => {
    alert ('Hi, Div Button Panel')
}

divButtonPanel.addEventListener('click', divButtonHandler, false); */


