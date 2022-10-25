
class Todo {
    static num = 1 //static object ไนก็สามารถเรียกได้ โดยไม่เปลี่ยนไปตาม object นั้นๆ ---> คงที่/ต่อเนื่อง
    constructor(description) {
        this.id = Todo.num++
        //เรียกจาก class เข้ามาข้างใน ต้อง Todo.xxxx
        // requirement want id generate automatic, so  get only desc. --> uniq id
        this.description = description
    }

    getTodo() {
        return {id: this.id, description: this.description} //return to object
        // return to object string concat id and description
        // return `ID: ${this.id}` + " " + `DESCRIPTION: ${this.description}`
    }

    setDescription(newDescription){
        return this.description = newDescription
    }
}
function TodoListManagement() {
    let todos = []
    function addTodo(desc) {
        todos.push(new Todo(desc))
        return `New length of array : ${todos.length}`
    }
    function removeTodo(removeId) {
       todos =  todos.filter( x => x.id !== removeId ) //ใช้ !== เพราะต้องแสดงตัวที่ ไม่เท่ากับ id ที่ใส่ลงไป
    }
    function findTodo(searchId) {
       todos = todos.find( y => y.id === searchId )
    }
    function getTodos() {
        return todos
    }
    return {
        addTodo,
        getTodos,
        removeTodo,
        findTodo
    }
}

// let t1 = new Todo("Nothing to do")
// let t2 = new Todo("I do my homework --> JAVA SCRIPT")
// let t3 = new Todo("Design graphic --> Banner")
// let t4 = new Todo("JAVA - Sever-Side")
// console.log(t1)
// console.log(t2)
// console.log(t3)
// console.log(t4)
console.log("-------------------------------")
let test = TodoListManagement()
test.addTodo('Nothing to do')
test.addTodo('I do my homework --> JAVA SCRIPT')
test.addTodo('Design graphic --> Banner')
test.addTodo('JAVA - Sever-Side')
console.log(test.getTodos())
console.log("----------- Remove ------------")
test.removeTodo(1)
console.log(test.getTodos())
console.log("------------ Find -------------")
test.findTodo(3)
console.log(test.getTodos())
