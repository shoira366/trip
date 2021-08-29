

let $ = 750
let s = 10650.34

let b = 120
let c = 11650.03

let total = $*s + b*c

console.log(total);

let answer = prompt('Jami mablag\'') -0;


let elTitle = document.querySelector('#title')

if(answer > 0){ 
    if(answer < total){
        elTitle.textContent = 'Alisher,ozgina sabr qilish kerak bo\'lar ekan'
    } else {
        elTitle.textContent = 'Oq yo\'l, Alisher!'
    }
}