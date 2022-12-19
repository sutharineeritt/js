const divButton = document.getElementById('favorColor')

const redButton = divButton.children[0]
console.log(redButton)

const greenButton = divButton.children[1]
console.log(greenButton)

const blueButton = divButton.children[2]
console.log(blueButton)

function btnhandler(color) {
  document.body.style.background = color;
}


function redButtonHandler(){ 
  btnhandler('red')
}

function blueButtonHandler(){ 
  btnhandler('blue')
}

function greenButtonHandler(){ 
  btnhandler('green')
}

redButton.addEventListener('click', redButtonHandler)
blueButton.addEventListener('click', blueButtonHandler)
greenButton.addEventListener('click', greenButtonHandler)


// const btn = document.getElementById('red')
// btn.addEventListener('click', () => {
//   var myText = 'You are favoutite color is red'
//     alert (myText)
// })

// const btn1 = document.getElementById('green')
// btn.addEventListener('click', () => {
//   var myText = 'You are favoutite color is green'
//     alert (myText)
// })

// const btn2 = document.getElementById('blue')
// btn.addEventListener('click', () => {
//   var myText = 'You are favoutite color is green'
//     alert (myText)
// })