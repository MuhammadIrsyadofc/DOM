// Inline HTML attribute
const p1 = document.querySelector('.p1') ;
function ubahWarnaP1(){
    p1.style.backgroundColor = 'orange' ;
    p1.style.color = 'beige' ;
}
                                   
                                               
// elemen method
const p2 = document.querySelector('.p2') ;
p2.onclick = function styleP2(){
    p2.style.backgroundColor = 'black'
    p2.style.color = 'white'
    p2.innerHTML = 'ini adalah paragraf 2'
    p2.style.textShadow = '6px 6px 3px red'
} 
const p3 = document.querySelector('.p3')
p3.onclick = function styleP3(){
    p3.style.backgroundColor= 'grey'
    p3.style.color = 'orange'
}













