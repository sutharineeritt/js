import poke from './pokemon.json' assert { type: "json" };
import pokeImg from './pokemon-images.json' assert { type: "json" };

let imgCount = 0

let divContainer = document.getElementsByClassName('container')
let allCard = document.getElementById('poke_card')
let infoCard = document.getElementById('poke_info')

let divButton = document.createElement('div')
let prevBtn = document.createElement('button')
let nextBtn = document.createElement('button')
let text = document.createElement('p')
let img = document.createElement('img')


divButton.setAttribute('class','btn')
prevBtn.setAttribute('class','prev_btn')
nextBtn.setAttribute('class','next_btn')

prevBtn.textContent='Previous'
nextBtn.textContent='Next'
img.src = pokeImg[poke[imgCount].name.english]
text.textContent = poke[imgCount].name.japanese


allCard.append(img)
allCard.append(infoCard)
infoCard.appendChild(text)
divButton.appendChild(prevBtn)
divButton.appendChild(nextBtn)
divContainer[0].append(divButton)

nextBtn.addEventListener('click',()=>{
    imgCount++
    if (imgCount > 5){
        imgCount = 0
    }
    img.src = pokeImg[poke[imgCount].name.english]
    text.textContent = poke[imgCount].name.japanese
})

prevBtn.addEventListener('click',()=>{
    imgCount--
    if (imgCount < 0){
        imgCount = 5
    }
    img.src = pokeImg[poke[imgCount].name.english]
    text.textContent = poke[imgCount].name.japanese
})

