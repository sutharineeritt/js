class Todo {
  static runningId = 1
  constructor(description) {
    this.id = Todo.runningId++
    this.description = description
    this.done = false //default ยังไม่ถูกทำมาตั้งแต่ต้น
  }
  getTodo() {
    return { id: this.id, description: this.description, done: this.done }
  }
  setDescription(newDescription) {
    this.description = newDescription
  }

  setDone(value){
    this.done = value
  }
  
}

export { Todo }
// module.exports = Todo
