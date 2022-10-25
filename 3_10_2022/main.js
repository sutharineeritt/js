const obj1 = {
    id : 1,
    type : "unknown"
}
const obj2 = {}
//console.log(obj2 === {})
//ไปทำให้เป็น string แล้วเทียบ
console.log(JSON.stringify(obj1) === '{}')

const obj1keys = Object.keys(obj1)
console.log(obj1keys)
console.log(obj1keys.length === 0)

const obj2keys = Object.keys(obj2)
console.log(obj2keys)
console.log(obj2keys.length === 0)

/*---- spread ----*/
//spread ได้ key and value มาหมดเลย
// create obj. without class
const book = {
    isbn : 123456789,
    title : 'Basic Js'
}
const author = {
    firstname : "Ying",
    lastname : "Y3ear"
}

const eBook = {...book, type: 'eletronic'}
//{ isbn: 123456789, title: 'Basic Js', type: 'eletronic'
console.log(eBook)

const bookProfile = {...book, ...author}
console.log(bookProfile)
//{
//   isbn: 123456789,
//   title: 'Basic Js',
//   firstname: 'Ying',
//   lastname: 'Y3ear'
// }


const eebook = {
    isbn: 123456789,
    title: 'Basic Js',
    type : 'Paper',
    authors: {
        firstname: 'Ying',
        lastname: 'Y3ear'
    }
}

//destructuring object properties ดึง properties ที่สนใจ มาเก้บไว้ใน object อิสระ ไม่มีความผุกพันกัน ใช้ rest ได้
const {type, isbn} = eebook
console.log(type)
console.log(isbn)

//destructuring with rest operator
const {title, ...detail} = eebook
console.log(title)
console.log(detail)
/**/

//destructuring object properties get only firstname
const {authors:{firstname}} = eebook //{} = จำนวนชั้น
console.log(`firstname: ${firstname}`)

/* destructuring in array */
const ebooks = [{
        isbns: 1,
        title: 'Basic Js',
        types: 'Paper',
    },
    {
        isbns: 2,
        title: 'Node Js',
        types: 'Note',
}]

const [{isbnss}] = ebooks
console.log(isbnss)

//destructuring that combine array and object
const [,{isbnsss, types}] = ebooks // , --> ใส่ , skip อันแรก
console.log(isbnsss)
console.log(types)




