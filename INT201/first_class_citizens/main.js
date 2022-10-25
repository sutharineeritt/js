function add(n1,n2){
    return n1+n2
  }
  function subtract(n1,n2){
    return n1-n2
  }
  //console.log(add(10,5))
  //first class citizens
  //1.assign function to variable
  let sum = add //assign add function to sum --> บวก
  /*console.log(typeof sum)
  console.log(sum(10,5))
  console.log(add(10,5))*/
  let minus = subtract //-->ลบ
  /*console.log(subtract(10,5))
  console.log(minus(10,5))*/
  //2.passed function aas parameter ส่ง function ไปเป็นของ parameter ได้
  /*function calculater(n1, n2, nn){ //nn = function
    return nn(n1, n2)
  }
  console.log(calculater(20, 10, minus))
  console.log(calculater(19, 10, sum))*/
  //3.returned as a value from another function
  function sayGoodbye(){ //sayGoodBye = function
    return 'Good Bye'
  }
  function doSomething(){ //--> doSomething = higher order because it is return sayGoodBye
    return sayGoodbye
  }
  let doIt = doSomething() //let doIt = sayGoodbye
  console.log(doIt())
  console.log('Hello') //--> synchronous
  let num=0
  //setTimeout (function, millisecond) is asynchronous function
  setTimeout(function(){
    num++
    console.log(`${num}(in set timeout)`) //`$ --> variableName(blackticks " ` ")
  }, 8000)
  console.log(`${num} (Ending)`)