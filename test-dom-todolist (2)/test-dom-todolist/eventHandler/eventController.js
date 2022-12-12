import { todoManagement } from '../lib/todoManagement.js'
import { todoUserInterface } from '../UI/todoList.js'
const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
  todoUserInterface()

const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone,
  loadTodos
} = todoManagement()

// const todoManagement = require('../lib/todoManagement.js')
// const todoList = require('../UI/todoList.js')

// const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
//   todoList()
// const {
//   addTodo,
//   removeTodo,
//   findTodo,
//   getTodos,
//   getNumberOfDone,
//   getNumberOfNotDone,
//   setItemToDone,
//   loadTodos
// } = todoManagement()

const addTodoHandler = () => {
  // find input หลังจากที่ client กดปุ่ม addtodo ให้เอาไปเพิ่มที่  <div id="listTodo"> เพื่อให้ list show
  // ต้องมี done and remove 
  const todoItemFromUser = document.querySelector('input').value 
  //จะเอาค่า text value จากในช่อง <input placeholder="Add Todo" /> (input box) ออกมาเพื่อเอาไปโชว์ใน  <div id="listTodo">
  if (todoItemFromUser.trim().length !== 0) { //.trim() --> ตัด space หน้า-หลัง ออก
    const todoId = addTodo(todoItemFromUser) // add to array todos (function addTodo)
    showTodoItem(todoId, todoItemFromUser) // get DOM to show to todolist
    
    const addTodoDiv = document.getElementById(todoId)
     // get Div ของ todoId ขึ้นมาเพื่อที่จะ add ปุ่มเข้าไป 
     const notDoneBtn = addTodoDiv.children[1]
     const removeBtn = addTodoDiv.children[2]

     notDoneBtn.addEventListener('click', notDoneButtonHandler)
     removeBtn.addEventListener('click', removeButtonHandler)

    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())
  }
  
}

const notDoneButtonHandler = (event) => {
  //รับ event เข้ามา
  const doneBtn = event.target //เรียก event.target เพราะเราไม่รู้ว่า user click buton ไหน
  // ใช้ event.target จะได้รู้แบบ real-time เลยว่า user กดปุ่มไหน
  doneBtn.textContent = 'Done'
  doneBtn.style = 'background-color: green; color: white'
  const doneBtnParent = doneBtn.parentElement
  setItemToDone(doneBtnParent.getAttribute('id'))
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}

const removeButtonHandler = (event) => {
  const rmBtn = event.target 
  // ลบทั้ง Div ออกเลย --> rmBtn is children of DivIdParent
  // ใช้ id ของ Div เพื่อที่จะไปตามลบออกจาก DOM
  const DivIdParent = rmBtn.parentElement.getAttribute('id')
  removeTodoItem(DivIdParent)
  removeTodo(Number(DivIdParent)) // remove todo ออกจาก array
  //ให้ใช้ number ไปด้วย เวลา check === ใน array จะได้ชัวร์
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}
export {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler,
}

// module.exports = {
//   addTodoHandler,
//   notDoneButtonHandler,
//   removeButtonHandler
// }
