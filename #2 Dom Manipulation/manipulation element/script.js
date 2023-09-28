// DOM Manipulaition

// 1. innerHTML
// const header = document.getElementById('judul') ;
// header.innerHTML = 'ini di ubah menggunakan innerHTML'

// const bagianA = document.querySelector('.container section#a .p1') ;
// bagianA.innerHTML = `<div><p>Paragraf 1</p></div`


// 2. style
// const judul = document.querySelector('#judul') ; 
// judul.style.color = 'lightblue' ; 
// judul.style.backgroundColor = 'orange' ;
// judul.style.textAlign = 'center' ;


// 3. Atrribute
// let p2 = document.querySelector('.container section#a .p2') ;
// p2.setAttribute('class','label')

// let a = document.querySelector('.container #a a') ;
// a.getAttribute('href')
// console.log(a) 

// let a = document.querySelector('.container #a a') ;
// a.removeAttribute('href')
// console.log(a) 

// 4. classList
const p3 = document.querySelector('.p3')
// p3.classList.add('label')
// p3.classList.remove('label') 
const tombol = document.querySelector('.tombol')
tombol.addEventListener('click', function(){
    document.body.classList.toggle('biru-muda')
    tombol.classList.toggle('navy')
})

p3.classList.add('satu','dua','tiga')
p3.classList.item(1)

p3.classList.contains('tiga')

p3.classList.replace('tiga','empat')







