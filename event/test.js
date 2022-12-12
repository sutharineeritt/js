// event listeners

//element.addEventListener('click', function, boolean)
//boolean --> true(capturing) || false(bubbling) 

const btn2 = document.querySelector('.btn2')
console.log(btn2);
function eventBtn2() {
    alert('I dont like Js')
}

btn2.addEventListener('click', eventBtn2)

//Mouseover
const newbg = document.querySelector('.btn3')
console.log(newbg);

function eventBtn3() {
    newbg.style.backgroundColor = 'salmon';
}    

newbg.addEventListener('mouseover', eventBtn3)


window.addEventListener('click', function(){
    console.log('window');
},false)

document.addEventListener('click', function(){
    console.log('document');
},false)

document.querySelector('.div2').addEventListener
('click', function(e){
    // e.stopPropagation()
    console.log('div2');
},false)

document.querySelector('.div1').addEventListener
('click', function(){
    console.log('div1');
},false)

document.querySelector('button').addEventListener
('click', function(e){
    console.log(e.target.innerText = 'clicked !');
},false)