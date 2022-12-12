import { Todo } from './todo.js'
// const Todo = require('./todo.js')
function todoManagement() {
  let todos = []
  function addTodo(desc) {
    const newTodo = new Todo(desc) 
    // เขาไม่ต้องการ length เลยสร้างใหม่  return todo id แทนการ return length
    todos.push(newTodo)
    return newTodo.id
  }
  function removeTodo(removeId) {
    todos = todos.filter((todo) => todo.id !== removeId)
  }
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId)
  }
  function getTodos() {
    return todos
  }
  function getNumberOfDone() {
    return todos.filter((todo) => todo.done === true ).length
    // return จำนวนของ Todo ที่อยู่ในสถานะ Done
  }
  function getNumberOfNotDone() {
    return todos.filter((todo) => todo.done === false ).length
    // return จำนวนของ Todo ที่อยู่ในสถานะ Not Done
  }
  //เพิ่ม function setItemToDone เพื่อค้นหา todos ที่มีค่าตรงกับ doneId
  //todos ที่มี id ตรงกับ parameter
  function setItemToDone(doneId) {
    const doneItem = todos.find((todo) => todo.id === Number(doneId)) 
    doneItem.setDone(true) // แล้วนำ id ที่หาเจอ ไป setDone = true
  }

  return {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone,
    setItemToDone
  }
}
export { todoManagement }
// module.exports = todoManagement
