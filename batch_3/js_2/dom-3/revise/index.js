// // DOM => dom is a technique where you can access html element and update el using JS

// // let obj = {
// //     a:2,
// //     b:10
// // }

// // console.log(obj["b"])

// // console.log(document.images)

// // html el access

// // document.getElementById()  // single
// // document.getElementsByClassName()  // array
// // document.getElementsByTagName()  // array
// // document.querySelector()  // single
// // document.querySelectorAll()  // array

// // let x = document.getElementById("head")
// // x.style.color = "red"

// // console.log(x.innerText)

// // console.log(x)

// // let y = document.getElementsByClassName("para")
// // y[0].style.border = "1px solid"
// // y[1].style.border = "1px solid"

// // for(let i=0;i<y.length;i++){
// //     y[i].style.border = "2px solid red"
// // }

// // console.log(y)

// // let a = document.getElementsByTagName("h1")
// // console.log(a)

// // let a = document.querySelector("p")
// // console.log(a)

// // let a = document.querySelectorAll("#head")
// // console.log(a)

// // let div = document.querySelector("div")
// // console.log(div.innerHTML)

// // Event is a action

// // let head = document.getElementById("h1")

// // function add(){
// //     head.innerText = "Hello"
// // }

// let name = document.getElementById("name")
// let age = document.getElementById("age")
// let gen = document.getElementById("gender")
// let data= document.getElementById("data")

// // console.log(name)

// function getData(){
//     // console.log(name.value)
//     // console.log(age.value)
//     // console.log(gen.value)

//     data.innerText =  `Name is - ${name.value} , Age is - ${age.value},Gender - ${gen.value}`
// }

// // let x = 10;
// // let y = "Hello"

// // console.log("output is"  ,x +y)

// // template literal  `${} `

// // console.log(`Output is - ${x}, ${y}`)

// // console.log("hello ,", 5)

// // let n = "Neha";
// // let a = 20;
// // let l = "Bhopal"

// // console.log(`hello ${n}, your age is ${a}, your city is ${l}`)

// let wigth = document.getElementById("w")
// let higth = document.getElementById("h")
// let head = document.getElementById("head")

// function BMI(){
//    let w = wigth.value;
//    let h = (higth.value)*0.3048;

//    let bmi =  Math.floor( w/ (h*h) )
// //    console.log(bmi)

// if (bmi <= 18.4){
// head.innerText = `underwigth ${bmi}` ;
// }else if (bmi >= 18.5 && bmi <= 24.9){
//     head.innerText = `Normal ${bmi}`;
// }else if (bmi >= 25 && bmi <= 29.9) {
//     head.innerText = `Over ${bmi}`
// }else if(bmi >= 30){
//     head.innerText = `Obese ${bmi}`;
// }else{
//     head.innerText = "Machine is not working"
// }

// }

// let x = Math.floor( 13.4567)

// // console.log(x)

let div = document.querySelector("#main");

// console.log(div)

// for(let i =1;i<=5;i++){

// let head = document.createElement("h1");
// head.innerText = "Hello";

// let para = document.createElement("p");
// para.innerText = "I am para";

// let x = document.createElement("div")
// x.setAttribute("class", "inner_div")

// // console.log(head)

// x.append(head, para);
// div.append(x)

// }

// let name = ["Harsh", "Amol", "Rupali"]
// let marks = [88,75,92]

let data = [
  {
    name: "Harsh",
    marks: 75,
    image:
      "https://cdn.pixabay.com/photo/2025/08/02/02/01/cat-9749782_1280.jpg",
  },
  {
    name: "Amol",
    marks: 88,
    image:
      "https://cdn.pixabay.com/photo/2025/08/02/02/01/cat-9749782_1280.jpg",
  
  },
  {
    name: "Rupali",
    marks: 92,
    image:
      "https://cdn.pixabay.com/photo/2025/08/02/02/01/cat-9749782_1280.jpg",
  },
];



data.map(function(el){
    // console.log(el)
    let name = document.createElement("h1")
    name.innerText = el.name
    let marks = document.createElement("h2")
    marks.innerText = el.marks
    let img = document.createElement("img")
    img.src = el.image

    let main  = document.createElement("div")

    main.append(img,name,marks)

    div.append(main)
})
