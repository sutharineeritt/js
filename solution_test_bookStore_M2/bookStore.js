const { template } = require('@babel/core')
//64130500085 Sutharinee Ritthidetch

class BookStore {
  constructor(){
      this.stores = 0 || [];
  }
  findBookIndex(isbn){
      return this.stores.findIndex(function(store){
          return store.isbn === isbn;
      });
  }

  addNewBook(isbn, stocks){
    for (const iterator of this.stores) {
      if(iterator.isbn === isbn){
        return -1
      }
    }
    const newObj = {isbn: isbn, stocks: stocks}
    this.stores.push(newObj)
    return newObj.stocks
    //stock value in case adding a new book into array successfully
    }

    sellBook(isbn, quantity) {
      const bookIndex = this.stores.findIndex(store => store.isbn === isbn)
      if (bookIndex === -1) {
        return -1
      } // no book in store return -1 if have return 0,1,2,3,4,...
  
      const book = this.stores[bookIndex];
      if (book.stocks < quantity) {
        return 0
      } // Not enough stocks to sell
  
      book.stocks -= quantity
      return quantity
    } // Decrease the stocks and return the selling quantity
}
module.exports = BookStore
