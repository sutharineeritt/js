function todoUserInterface() {
  function showTodoItem(newId, newDescription) {
    const listTodoDiv = document.getElementById('listTodo')

    const todo = document.createElement('div')
    todo.id = newId
    todo.className = 'todoItem'

    const desc = document.createElement('p')
    desc.textContent = newDescription
    
    const btn = document.createElement('button')
    btn.textContent = 'Not Done'
    
    const btn1 = document.createElement('button')
    btn1.textContent = 'remove'

    todo.appendChild(desc)
    todo.appendChild(btn)
    todo.appendChild(btn1)

    listTodoDiv.appendChild(todo)
  }

  function showNumberOfDone(numberOfDone) {
    // โชว์จำนวนต่อท้าย <p id="notDone">Number of Not Done: ........ </p>
    const donetodo = document.getElementById('done')
    donetodo.textContent = `Number of Done:${numberOfDone}`
  }
  function showNumberOfNotDone(numberOfNotDone) {
    const donetodo = document.getElementById('notDone')
    donetodo.textContent = `Number of Not Done:${numberOfNotDone}`
  }
  function removeTodoItem(removeId) {
    //เอา DOM ออกจาก DOM tree 
    // find node DOM that wawnna remove 
    const rmtodo = document.getElementById(removeId)
    // after you can find node dom. You have to find parent 
    // because we have to use parent to remove
    const parentOfRemoveTodo = rmtodo.parentElement // หาที่เป็น parentElement เท่านั้น
    parentOfRemoveTodo.removeChild(rmtodo)
  }
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem }
}
export { todoUserInterface }
// module.exports = todoUserInterface
