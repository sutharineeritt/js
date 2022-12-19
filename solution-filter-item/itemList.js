import { products } from './data/products.js'
// const { template } = require('@babel/core')
// const products = require('./data/products.js')

//64130500085 Sutharinee Ritthidetch
function itemList(userItems) {
  const items = userItems

  const initialPage = () => {
    showItems(items)
    const inputButton = document.querySelector('input')
    inputButton.addEventListener('input', filterItemsHandler)
    // inputButton.focus(filterItemsHandler)
    // inputButton.select(filterItemsHandler)
    // console.log(inputButton);
  } 

  const filterItemsHandler = (event) => {
    // const userKeyword = products.filter(item => item.keywords.toLowerCase().includes(event.target.items.keywords))
    // const userKeyword = products.filter(obj =>
    //   obj.keywords.toLowerCase().indexOf(event.target.products.keywords) >= 0);
    // const findinput = querySelector('input')
    const keyword = event.target.value.toLowerCase()
    const finditem = products.filter((product) =>
      product.keywords.toLowerCase().includes(keyword)
    )
    showItems(finditem)
    
  }

  const showItems = (items) => {
    const ulProduct = document.getElementById('items')
    ulProduct.textContent = ''
    for (let i = 0; i < items.length; i++) {
      const liElement = document.createElement('li')
      liElement.textContent = `ID:${items[i].id}, NAME:${items[i].name}, KEYWORDS:${items[i].keywords}`
      ulProduct.appendChild(liElement)
    }
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}
// module.exports = itemList
export { itemList }
const { initialPage, filterItemsHandler, showItems } = itemList(products)
initialPage()
