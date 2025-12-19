// Give me the names of emp living in Delhi
let emp_data = [
  { name: "Aman", age: 45, location: "Delhi" },
  { name: "Arjun", age: 45, location: "Haryana" },
  { name: "Vijay", age: 45, location: "Delhi" },
  { name: "Naman", age: 45, location: "Delhi" },
  { name: "Vidya", age: 45, location: "Kolkata" },
  { name: "Chunnu", age: 45, location: "Mumbai" },
];


for(let i=0;i<emp_data.length;i++){
    // console.log(emp_data[i].name)
    if(emp_data[i].location == "Delhi"){
        console.log(emp_data[i].name)
    }
}


