class Person{
    constructor(firstName='N/A', lastName='N/A', dateOfBirth=new Date(Date.now())){
        this.firstName=firstName,
        this.lastName=lastName
        this.dateOfBirth=dateOfBirth // console.log(dateOfBirth)
        }
        getFullName(){
            return `${this.lastName}, ${this.firstName}`
        }
        getAge(){
            const diff_time_ms=Date.now()-this.dateOfBirth.getTime()
            const diff_time_date=new Date(diff_time_ms)
            const age=diff_time_date.getFullYear()-1970
            return age
        }
        isEquals(anotherPerson){
            return this.firstName.toLowerCase() === anotherPerson.firstName.toLowerCase() &&
            this.lastName.toLowerCase() === anotherPerson.lastName.toLowerCase()
        }
    }
    const p1=new Person('SOMCHAI', 'JAIDEE')
    const p2=new Person('Somchai', 'Jaidee', new Date(1970,11,1))
    console.log(p1.isEquals(p2))
    console.log(p1.getFullName())
    console.log(p2.getFullName())
    console.log(p1.getAge())
    console.log(p2.getAge())
    function displayPerson (){
    return `FullName: ${this.getFullName()}, Age: ${this.getAge()}`
    }
    Person.prototype.toString = displayPerson
    console.log(p1.toString())
    console.log(p2.toString())