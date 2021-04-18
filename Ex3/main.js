let button = document.querySelector('button');
let span = document.querySelector('span');
 
function increment(){
    span.innerHTML ++;
}
button.addEventListener('click', increment);