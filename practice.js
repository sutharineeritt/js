class Products{
    constructor( name, category, price){
        this.name = name,
        this.category = category,
        this.price = price
        
    }
    getName(){
        return this.name
    }
    getCategory(){
        return this.category
    }
    getPrice(){
        return this.price
    }
    getProduct(){
        return {name :this.name, category :this.category, price :this.price}
    }
}


    function ProductList() {
        let products = []
    
    function addProducts(pd){
        return products.push(pd)
    }
    function removeProducts(productName){
        products.filter(product => product.name !== productName)
        return products
    }

   function getProductByName(name){
        products.filter(product => product.name === name)
        return products
    }

    function getProductByCategory(category){
        products.filter(product => product.category === category)
        return products
    }

    function getProductByPrice(price){
        products.filter(product => product.price === price)
        return products
    }
    function getAllProducts() {
        return products
    }
    return {
        getAllProducts ,
        addProducts ,
        removeProducts,
        getProductByName,
        getProductByCategory,
        getProductByPrice
    }
}
const {addProducts, getAllProducts, removeProducts, getProductByName, getProductByCategory, etProductByPrice} = ProductList()

let pd = new Products('Teddy','Doll','2000')
let pd1 = new Products('IPhone14','Smart Phone','34000')
let pd2 = new Products('Airpod','HeadPhone','8000')
let pd3 = new Products('RK-61','Keyboard','2000')
let pd4 = new Products('Ipad air 5','Tablet','25000')



addProducts(pd.getProduct())
addProducts(pd1.getProduct())
addProducts(pd2.getProduct())
addProducts(pd3.getProduct())
addProducts(pd4.getProduct())

console.log('------ find by Name ------');
removeProducts('Teddy')

console.log('------ find by Category ------');

console.log('------ find by Price ------');



console.log(getAllProducts());

