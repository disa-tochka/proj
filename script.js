let btn = document.querySelector('.btn')
let overlay = document.querySelector('.overlay')
let btn_send = document.querySelector('.btn-send')
let background = document.querySelector('.background')

btn.addEventListener('click',function(){
    overlay.style.display = 'flex'
})

btn_send.addEventListener('click',function(){
    overlay.style.display = 'none'
})

background.addEventListener('click',function(){
    overlay.style.display = 'none'
})


