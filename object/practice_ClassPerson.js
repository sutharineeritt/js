class Person {
  constructor(firstName, lastName, dateOfBirth) {
      this.firstName = firstName
      this.lastName = lastName
      this.dateOfBirth = new Date(dateOfBirth)
      //this.dateOfBirth = dateOfBirth
  }
  getFullname(){
      return this.lastName + " " + this.firstName
  }
  getAge(){ //Date format จะคำนวณออกมาเป็น millisecond[Date.now()] ---> เอาค่าวันปัจจุบัน - วันเกิด แล้วค่อยไปแปลงเป็นวันที่
      return new Date().getFullYear() -  this.dateOfBirth.getFullYear()
      // const diff_time_ms = Date.now() - this.dateOfBirth.getTime()
      // const diff_time_date = new Date(diff_time_ms)
      // const age = diff_time_date.getFullYear() - 1970 //Date.now()เริ่มต้นนับที่ 1 มค. 1970
      // return age
  }
  isEqual(anotherPerson){
      // return anotherPerson.getFullname() === this.getFullname(); //() call function
      if (this.getFullname() === anotherPerson.getFullname()) {
        return true
      } else
        return false
  }
  toString(){
      return `Fullname : ${this.getFullname()} Age : ${this.getAge()}`
  }

}

console.log("Fullname-------------")
let nn = new Person("Sutharinee","Ritthidetch")
console.log(nn.getFullname())

console.log("Age from Date of Birthday")
let dd = new Person("Sutharinee","Ritthidetch",'03/19/2003')
console.log(dd.getAge())

console.log("Is Equal --> Name ---")
let compare = new Person("Sutharinee","Ritthidetch")
let compares = new Person("Sutharinee","Ritthidetch")
console.log(compares.isEqual(compare));

console.log("Information----------")
let info = new Person("Sutharinee","Ritthidetch",'03/19/2003')
console.log(info.toString())

