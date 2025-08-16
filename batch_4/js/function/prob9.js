// Scope - global block local/functional

let a = "Hello";  //global scope


// function greet(){
//     let name = "Maya";  //local scope

//     console.log("hello", name)
// }

// greet()


// console.log(name)  ReferenceError: name is not defined



function greet(){
     let name = "a";  // local

     if(4==4){
        var x = 5;  //block scope
     }
  console.log(x)

  console.log(name)

}

greet()

// console.log(name)