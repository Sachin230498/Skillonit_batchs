//SUPERMAN: He is planning to add two number and give the answer to batman.

//BATMAN: Batman is planning to take the superman's answer and square it, then give it to shaktimaan

// SHAKTIMAAN: He will just subtract 50 from it and give the answer to villian
function superman(a,b){
       return a+b   // 90
}

function batman(x){
  return x**2  //  1800
}

function shaktimaan(y){
    return y-50  // 1750
}

let a =  superman(40,50)

let b = batman(a)

let villian =  shaktimaan(b)

console.log(villian)