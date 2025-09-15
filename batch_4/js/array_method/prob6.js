// callback function -A callback function in JavaScript is a function passed as an argument to another function


function greet(){
    console.log("hello") 
}

// greet("hello",abc)


// function abc(){
//     console.log("How are you")
// }



// function add(a,b,callback,g){
//   console.log(a+b)
//   callback();
//   g();
// }

// add(5,5,xyz,greet)


// function xyz(){
// console.log("added")
// }



function abc(a){
    a();
}


abc(function(){
    console.log("bye")
})

// function sub(){
//     console.log("bye")
// }

// anonymous function is a function that is not declared with a name