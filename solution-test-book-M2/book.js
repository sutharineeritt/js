const { template } = require('@babel/core')
//64130500085 Sutharinee Ritthidetch

class Book {
    constructor(isbn, title = 'untitled', ebook = false) {
        this.isbn = isbn
        this.title = title
        this.authors = []
        this.ebook = ebook
    }
    addAuthor(fn, ln) {
        let fullname = {firstname: fn, lastname: ln}
        this.authors.push(fullname)
        return this.authors.length
    }
    getFirstAuthor(){
        return this.authors?.[0]
    }
    getCoAuthors() {
        return this.authors?.slice(1)
    }
    findAuthor(firstname, lastname){
       return this.authors.find(a => a.firstname.toUpperCase() == firstname.toUpperCase() && 
              a.lastname.toUpperCase() == lastname.toUpperCase())??undefined
    }
    hasEbook(){
        return this.ebook
    }
}

module.exports = Book
