let clr=['white','green','yellow','pink','purple']
let len=clr.length-1

let buttonControl=document.getElementById('btn')
let clrspan=document.getElementById('clr')


buttonControl.addEventListener('click',()=>{
    let index=generateRandom()
    document.body.style.backgroundColor=clr[index]
    clrspan.innerHTML=clr[index]
})

function generateRandom(){
    return Math.trunc(Math.random()*len)
}