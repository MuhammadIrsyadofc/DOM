// // manipulation node

// appendChild
const elemen = document.createElement('p') ;
const tulisan = document.createTextNode('paragraf baru') ; 
elemen.appendChild(tulisan) ;
  const sectionA = document.getElementById('a') ;
  sectionA.appendChild(elemen) ;


// insert before
const liBaru = document.createElement('li') ;
const textLiBaru = document.createTextNode('list item baru') ; 
liBaru.appendChild(textLiBaru) ;
  const ul = document.querySelector('section#b ul') ;
  const li2 = document.querySelector('section#b ul li:nth-child(2)') ;
  ul.insertBefore(liBaru, li2) ;   


// replaceChild
const sectionB = document.getElementById('b') ;
const p4 = sectionB.querySelector('p') ;
  const h2Baru = document.createElement('h2') ;
  const textH2Baru = document.createTextNode('judul baru') ;
  h2Baru.appendChild(textH2Baru)  ;
sectionB.replaceChild(h2Baru, p4) ;
 

// removeChild
const bagianA = document.getElementById('a') ;
const link = document.querySelector('section#a a') ;
bagianA.removeChild(link) ;














