let hamburger= document.querySelector('.hamburger')
let navs= document.querySelector('.nav')
let list= document.querySelectorAll('li')

hamburger.addEventListener('click', show)

function show (){
    navs.classList.toggle('new')
    list.forEach((a)=>{
        a.addEventListener('click', ()=>{
            navs.classList.remove('new')
        })
    })
}