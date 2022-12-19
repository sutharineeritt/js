const { template } = require('@babel/core')
// import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
// import { products } from './data/products.js'

const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
const products = require('./data/products.js')

//64130500085 Sutharinee Ritthidetch
function paginateManagement(items, rows) {
  const rowsPerPage = rows
  const products = items

  const showItemsOfCurrentPage = (currentPageNumber) => {
    const itemCurrentPage = getItemsOfCurrentPage(products, currentPageNumber, rowsPerPage)
    const ulProduct = document.getElementById('products')
    itemCurrentPage.forEach(item => {
      const li = document.createElement('li')
      li.textContent = `ID:${item.id}, NAME:${item.name}`
      ulProduct.appendChild(li)
    });

  }

  const pageHandler = (event) => {

      //remove previous page’s items
      const rmPrevious = document.querySelector('#products')
      rmPrevious.textContent = ''

      // clean button click styles remove stylesheet of previous page button and assign to original button stylesheet
      const rmStyle = document.querySelectorAll('button')
      rmStyle.forEach( button => button.style = 'border: 1px solid #999' )

      //In case event object parameter is undefined means that no user clicking on any page number button, 
      //the first page must be shown as default page.
      const currentPage = event?.target.id ?? 1
      showItemsOfCurrentPage(currentPage)

      //style button
      const style = document.getElementById(currentPage)
      // console.log(style);
      style.style = 'background-color: LightSteelBlue'

  }

  const showPageNumbers = () => {
    const totalpage = getTotalPages(products, rowsPerPage)
    const divClass = document.querySelector('.pagination')
    for (let i = 1; i <= totalpage; i++) {
      const button = document.createElement('button')
      button.id = i
      button.textContent = i
      divClass.appendChild(button)
      button.addEventListener('click', pageHandler)
    }

  }

  return {
    showPageNumbers,
    pageHandler
  }
}
module.exports = paginateManagement
// export { paginateManagement }
// const { showPageNumbers, pageHandler } = paginateManagement(products, 10)
// showPageNumbers()
// pageHandler()
