class Product {
    static id = 1
    constructor(item, amount){
        this.id = Product.id++
        this.item = item
        this.amount = amount
        this.done = false
    }

    getItem() {
        return this.item
    }

    getAmount() {
        return this.amount
    }

    setDone(done) {
        return this.done = done
    }
} 

function productManagement(){
    let pd = []

    function addProduct(item, amount){
        return pd.push( new Product( item, amount))
    }

    function getProductList(){
       return pd
    }

    function clearProduct(){
        return pd.splice(0, pd.length)
    }

    function getNumberOfPending(){
        const pending = pd.filter( product => product.done === false );
        // console.log(pd.length);
        return pending.length
        //ถ้า product ไหนยังๆไม่ถูกซื้อ จะมี status เป็น pending (false)
    }

    function getNumberOfDone(){
        const numOfDone = pd.filter( product => product.done === true );
        return numOfDone.length
    }

    function setDoneItem(itemId){
        const doneItem = pd.find((product) => product.id === itemId) 
        return doneItem.setDone(true)
        // console.log(doneItem);
    }

    function removeProduct(itemId) {
        const remove = pd.filter( rm => rm.id !== itemId)
        return remove
    }
    return{
        addProduct,
        getProductList,
        clearProduct,
        getNumberOfDone,
        getNumberOfPending,
        setDoneItem,
        removeProduct
    }
}

let test = productManagement()

test.addProduct('egg','30')
test.addProduct('fish','50')
test.addProduct('meat','100')
// test.clearProduct()
test.setDoneItem(1)
test.getNumberOfPending()

console.log(test.getProductList());

console.log('---- Get number of Pending -----');
console.log(test.getNumberOfPending());


// console.log('--- remove ----');
// test.removeProduct(3)
// console.log(test.getProductList());