// make a object of cat

// let cat = {
//   type: "cat",
//   eyes: 2,
//   legs: 4,
//   tail: 1,
//   color: "black",
//   speed: "30kmph",
// };

// make a object of lion

// let lion = {
//   type: "cat",
//   eyes: 2,
//   legs: 4,
//   tail: 1,
//   color:"brown",
//   speed:"70kmph"
// };


// let tiger = {
//   type: "cat",
//   eyes: 2,
//   legs: 4,
//   tail: 1,
//   color:"yellow black",
//   speed:"80kmph"
// };




// object.create method

let cat = {
  type: "cat",
  eyes: 2,
  legs: 4,
  tail: 1
};


// console.log(cat.legs)


// let tiger = Object.create(cat)

// tiger.speed = "80kmph";
// console.log(tiger)



// Employee Data


let data = {
    company_name : "Skillonit",
    Designation : "Developer",
    Salary:"50k"
}

let Ritesh = Object.create(data)
Ritesh.name = "Ritesh"
Ritesh.id = "62"


let priya = Object.create(data)
priya.name = "priya"
priya.id = "63"


let priya1 = Object.create(data)
priya1.name = "priya1"
priya1.id = "64"

console.log(Ritesh,priya,priya1)

