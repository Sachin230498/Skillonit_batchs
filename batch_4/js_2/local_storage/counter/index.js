let button = document.querySelector("button");
let head = document.querySelector("h1");

let count = localStorage.getItem("count") || 0;

// console.log(localStorage.getItem("count"));

// if(localStorage.getItem("count")== null){
//     count = 0;
// }else{
//     count = localStorage.getItem("count");
// }


// console.log(head.innerText)


head.innerText = count;

button.addEventListener("click", counter);

function counter() {
  // console.log("hello")
  count++;

  localStorage.setItem("count", count);
  head.innerText = count;
}



// let x = localStorage.getItem("count")

// console.log(x)