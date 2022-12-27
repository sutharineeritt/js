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

  sellBook(isbn, quantity){
    const a = this.findBookIndex(isbn)
    if(a !== -1){
    if(this.stores[a].stocks < quantity){
    return 0
    }
    this.stores[a].stocks -= quantity
    return quantity
    }
    return -1
  }
}
module.exports = BookStore
