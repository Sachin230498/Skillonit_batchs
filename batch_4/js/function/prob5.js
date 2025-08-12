//SUPERMAN: He is planning to add two number and give the answer to batman.

//BATMAN: Batman is planning to take the superman's answer and square it, then give it to shaktimaan

// SHAKTIMAAN: He will just subtract 50 from it and give the answer to villian


function Superman(a,b){
    return a+b
}

function Batman(x){
    return x**2
}

function shaktimaan(y){
    return y-50
}


let a = Superman(10,30);  // 40
let b =  Batman(a)  // 40 * 40 = 1600
let villian =  shaktimaan(b)  // 1600 -50

console.log(villian)  // 1550




//  ** 

// let a = 5

// console.log(5**4)   // 5*5*5