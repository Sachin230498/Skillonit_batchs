let h1 = document.querySelector("h1")
let count = 0;

h1.innerText = count


function incfun(){
    count++;
    h1.innerText = count;
}