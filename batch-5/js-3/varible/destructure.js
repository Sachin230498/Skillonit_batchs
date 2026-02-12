// destructuring

// let mix_data = ["hello","bye",55,45,78]

// console.log(arr[1])
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// const [b,a,c,d,e]  = mix_data;
// console.log(d,e,a,b,c);






// let data = ["hello", "bye", 78, [12,55,75] , "mixing"];


// const [a,b,c,d,e] = data
// const [x,y,z] = d
// console.log(x)


// console.log(data[3][2])




// let data = [12,45,88,99,44];

// const [rahul,sonu,monu,a,b,c] = data

// console.log(rahul, sonu, monu, a, b,c);




// const obj1 = {
//   name: "Sachin",
//   age: 25,
//   profession: "Trainer",
//   city: "Indore",
//   language: "JavaScript",
//   experience: 2
// };


// const {name,age,profession,city,language,experience} = obj1


// console.log(profession)






// 2️⃣ Complex Object with array and nested object
const complexObject = {
  company: "SkillonIT",
  location: "Indore",
  employees: [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" },
    { name1: "Charlie", role2: "Tester" }
  ],
  projects: {
    current: "MERN Bootcamp",
    upcoming: "Python Web Development",
    completed: ["React Website", "Flask API"]
  },
  marks:[22,11,55,66,88]
};


const {company,location,employees:[{name,role},data2,{role2,name1}],projects:{current,upcoming,completed:[x,y]},marks:[a,b,c,d,e],} = complexObject


console.log(name1);