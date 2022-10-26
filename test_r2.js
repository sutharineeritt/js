const { template } = require('@babel/core')
//64130500085 Sutharinee Ritthidetch
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {

  if (allItems == null && allItems == undefined) {
    return undefined
  }
  if (!allItems.length) {
    return []
  }
  if (allItems.length < rowsPerPage) {
    return allItems
  }
  if ((Math.sign(rowsPerPage) === -1)) {
    return allItems
  }
  if ((Math.sign(currentPage) === -1)) {
    return allItems
  }
  return allItems.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
  

}
module.exports = getItemsOfCurrentPage

