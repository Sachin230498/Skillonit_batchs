// function abc(a){
//     // console.log(a)
//     return a
// }


// let x =  abc("Hello")

// console.log(x)




//SUPERMAN: He is planning to add two number and give the answer to batman.

//BATMAN: Batman is planning to take the superman' s answer and square it, then give it to shaktimaan

// SHAKTIMAAN: He will just subtract 50 from it and give the answer to villian 


function superman(a,b){
    let add = a+b;
    return add
}

function batman(x){
    return x**2;
}

function shaktimaan(y){
    let a = y-50;
    return a
}


let sup = superman(50,30)
// console.log(sup)

let bat = batman(sup)
// console.log(bat)


let villian = shaktimaan(bat)

console.log(villian)