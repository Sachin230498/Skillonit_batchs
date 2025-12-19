// Local Storage

// Local storage is a web browser feature that allows developers to store key-value pairs on a user's computer, persisting even after the browser is closed and reopened.

// its only store string
// No Expire date
// storage only 5 to 10 mb data
// Unsecure

// localStorage.setItem(Key,value)
// localStorage.getItem(key)
// localStorage.removeItem(key)
// localStorage.clear()

// localStorage.setItem("abc", "Hello")

// let str = "How are you ?"

// localStorage.setItem("str", str)

// let x = 10;
// localStorage.setItem("x", x)

// let a =  localStorage.getItem("x")
// // console.log(typeof a)

// // localStorage.removeItem("str")

// localStorage.clear()

// counter

// let counterhead = document.getElementById("counter");
// let count = localStorage.getItem("count") || 0; 

//  &&   ||

// if(localStorage.getItem("count")== null){
//     count=0;
// }else{
//     count = localStorage.getItem("count");
// }

// let incbtn = document.getElementById("inc")
// let decbtn = document.getElementById("dec")

// counterhead.innerText = count;

// function incfun() {
//   count++;
//   localStorage.setItem("count",count)
//   counterhead.innerText = count;

   
// }

// function decfun() {
//   count--;
//   localStorage.setItem("count", count);
//   counterhead.innerText = count;
// }


// let x = localStorage.getItem("asda")

// console.log(x)



// json


// console.log(arr)

// let x = JSON.stringify(arr)

// // console.log(x)  //  "[1,2,8,9,"Hello"]"

// let a = JSON.parse(x)

// console.log(a)

let arr = [1,2,8,9,"Hello"]

localStorage.setItem("arr", JSON.stringify(arr))


let x =  JSON.parse( localStorage.getItem("arr"))

console.log(x)