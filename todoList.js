class Todo{
    static numId = 1 //เพื่อความ unique  ป้องกันความผิดพลาดเวลาเรียง id
    constructor(description){
        this.id = Todo.numId++
        //เรียกจาก class เข้ามาข้างใน ต้อง Todo.xxxx
        this.description = description
    }

    getTodo(){
        return {id: this.id, description: this.description}
    }
    setDescription(newDescription){
        return this.description = newDescription
        //allow to edit description แก้,เพิ่ม 
    }
}

function TodoListManagement(){
    let todos = []

    function addTodo(desc){
        todos.push(new Todo(desc))
        return todos.length
    }
    function removeTodo(removeId) {
        return todos = todos.filter( rm => rm.id !== removeId)
    }
    function findTodo(searchId) {
        // return todos = todos.filter( rm => rm.id === searchId) --> ใช้ได้
       return todos = todos.find(f => f.id === searchId)
    
    }
    function getTodos(){
        return todos
    }
    return { addTodo,
           getTodos,
           removeTodo,
           findTodo
        }
}
let test = TodoListManagement()

test.addTodo('Read a book')
test.addTodo('I do my homework --> JAVA SCRIPT')
test.addTodo('Design graphic --> Banner')
test.addTodo('JAVA - Sever-Side')
// console.log(test.getTodos())
test.findTodo(2)
// test.removeTodo(3)
console.log(test.getTodos())   
