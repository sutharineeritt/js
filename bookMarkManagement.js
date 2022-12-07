const { template } = require('@babel/core')
//64130500085 Sutharinee Ritthidetch
class BookMark {
  constructor(isbn, totalPages = 0){ //totalPages , you must initial value as 0
    this.isbn = isbn
    this.bookMarks = []
    this.totalPages = totalPages
  }
  
    addBookMark(pageNumber){
      if (pageNumber >= 1 && pageNumber <= this.totalPages){
        this.bookMarks.push(pageNumber)
        //ถ้า page อยู่ในช่วงที่ถูกต้องของ if ให้ Push ลง array ได้
     }
     return this.bookMarks.length
  }
    removeBookMark(pageNumber){
      //ถ้าลบมีอยู่ใน bookmark pagenumber นี้มีอยู่ ลบแล้วให้ param ออกไป  
      //ถ้ามีอยู่ = ลบได้ ถ้าไม่มี = undefined
      //1st check ว่า pagenumber มีอยู่ใน array ไหมของ bookmarks
      // check length
      
      // const beforeremoveLenth = this.bookMarks.length
      // this.bookMarks = this.bookMarks.filter(bookMark => bookMark != pageNumber)
      // return this.bookMarks.length === beforeremoveLenth ? undefined : pageNumber

      if (this.bookMarks.includes(pageNumber)) {
        this.bookMarks.splice(this.bookMarks.indexOf(pageNumber), 1)
        return pageNumber
      }
        return undefined

  }
    goToFirstBookMark(){
      //return ตำแหน่งแรก --> array strat at 0,1,2,3,4 
      return this.bookMarks?.[0]
      // ?. --> คืน undifined โดยไม่ error 
      //If there are no bookMarks in an array, return undefined.
  }
    goToLastBookMark(){
      //return ตำแหน่งสุดท้าย = array.[array.length-1]
      return this.bookMarks?.[this.bookMarks.length - 1]
      // ?. --> คืน undifined โดยไม่ error 
      //If there are no bookMarks in an array, return undefined.
  }
  getBookMarks(){
    return this.bookMarks
  }
}
module.exports = BookMark
