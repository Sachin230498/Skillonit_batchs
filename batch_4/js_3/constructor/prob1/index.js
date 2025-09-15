// A constructor function in JavaScript is a specialized function used to create and initialize objects. It acts as a blueprint for generating multiple instances of objects with similar properties and methods. 

// make a function that will return object 


// function UserData(){
//     let obj = {};

//     obj.name = "Rahul"
//     obj.age = 25
//     return obj
// }
 
// let x =  UserData()

// console.log(x)



// constructor function


// this , new 

// function UserData(){
//     this.name = "Priya",
//     this.age =22

// }

// let a = new UserData()

// console.log(a)


function UserData(a,b) {
  this.name = a,
   this.age = b;
}

let a = new UserData("Rahul",22);
let b = new UserData("Rahul1",23);
let c = new UserData("Rahul2",24);
let d = new UserData("Rahul3",25);

// console.log(a,b,c,d);


let x = new Array()

console.log(x)




// object create 3

let objData = { }  // object literal
// constructor function
// object.create