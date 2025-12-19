// object => data will store in key value pair

// let details1 = ["Aman", "25", "male", "Manali", "Graphic Novels"];
// let marks = [10, 20, 50, 60];
// let sub = ["hindi", "maths", "sci", "env"];

// console.log(marks.length);

// Syntax of Objects

// let obj = {
//            key:value,
//            key:value
//           }

// let details = {
//   name: "Aman",
//   age: 25,
//   location: "Manali",
//   hobbies: "Graphic Novels"
// };

// console.log(details["hobbies"])

// keys ==> name,age,location,hobbies

//values ==> "Aman", 25, "Manali", "GN"

// .length property will not work with objects

// Objects has no concept of index

// console.log(details);

// how to access

// indexing => [index]

// bracket notaion

// let obj = {
//   a:10,
//   b:20,
//   c:30
// }

// // key should be string
// console.log(obj["c"])

// let details = {
//   name: "Aman",
//   age: 25,
//   location: "Manali",
//   hobbies: ["Graphic Novels", "reading", "biking"],
//   marks: {
//           maths: 75,
//           phy: 80,
//           chy: 62,
//          },
// };


// let m = details["marks"]["phy"]
// console.log(m)


// let h = details["hobbies"]
// // console.log(h[2])


// let a =  details["name"];
// // console.log(a)
// let l = details["location"]
// // console.log(l)



// let details = {
//   name: "Aman",
//   age: 25,
//   location: "Manali",
//   hobbies: ["Graphic Novels", "reading", "biking"],
//   marks: {
//           maths: 75,
//           phy: 80,
//           chy: 62,
//          },
// };
// details["name"] = "Rahul";
// details["age"] = 28
// // console.log(details)
// details["height"] = "6"
// delete details["age"]
// console.log(details)
// dot notaion
let details = {
  name: "Aman",
  age: 25,
  location: "Manali",
  hobbies: ["Graphic Novels", "reading", "biking"],
  marks: {
    maths: 75,
    phy: 80,
    chy: 62,
  },
};

// console.log(details.marks.maths)

// console.log(details.hobbies[2])
// let a = details.age
// console.log(a)