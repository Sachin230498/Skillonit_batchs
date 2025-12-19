// Object => A box where you store releted information in key-value pair

// obj = {
//     key:value,
//     key:value
// }

// const bag = {
//     color:"blue",
//     brand:"Skybag",
//     price:1200,
//     item: ["pen", "copy" , "bottle"]
// }

// details
// let name = "Aman";
// let age = 25;
// let ciy= "Indore"

// let person = {
//     name:"Aman",
//     age:26,
//     city:"Indore"
// }


// Bracket notation
//  key should be string
// let a =  person["age"]
// console.log(a)


const bag = {
  color: "blue",
  brand: "Skybag",
  price: 1200,
  item: ["pen", "copy", "bottle"],
  other:{
    books:2,
    pen:5,
    copy:6
  }
};

bag.color = "red"   // update

bag.pocket= 10;  // add

delete bag.price  //delete

console.log( bag )


// let x = bag.other.pen
// console.log(x)


// let x = bag["item"][1]
// console.log(x)

// dot notation
// console.log(bag.price)

