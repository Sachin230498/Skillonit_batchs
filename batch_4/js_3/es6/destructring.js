// Destructuring mean breaking down , array or objects into saparate varible in a short and clean way

// let numbers = [10, 20, 30,40,50];

// let a = numbers[0];
// let b = numbers[1];
// let c = numbers[2];
// let d = numbers[3];

// console.log(a)
// console.log(b)

// let [a,b,c,d,e] = numbers
// console.log(a,b,c,d,e)

// let data = {
//   name: "Rahul",
//   age: 22,
//   address: "India",
//   hobbies: ["movie", "biking"],
//   marks: {
//     eng: 88,
//     maths: 82,
//     phy: 85,
//   },
// };

// const { name, age, address, hobbies:[a,b],marks:{eng,maths,phy} } = data;
// console.log(eng,b);



let employee = {
    id:101,
    personal:{
        name:"Mohan",
        age:25,
        address:{
            city:"Indore",
            state:"MP"
        }
    },
    skills:["js","react","node"],
    company:"google"
}

const {id,personal:{name,age,address:{city,state}},skills:[a,b,c] } = employee

// console.log(id)
// console.log(personal)
// console.log(name)
// console.log(age)
// console.log(address)
// console.log(city)
console.log(skills)