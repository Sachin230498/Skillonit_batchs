// JSON => Javascript object Notation


// let obj = {
//     name:"Rahul",
//     age:25
// }

// console.log(obj.name)

// let json_obj = {
//     "name":"Rahul",
//     "age":20
// }


// console.log(json_obj.age)

// let x = 55;

// JSON.stringify(x)
// JSON.parse()


// let x = 45;

// let a = JSON.stringify(x)

// // console.log(typeof a)

// let b = JSON.parse(a)

// console.log(b)


// let arr = [12,3,4,56,78, {a:1,b:2}]


// "[12,3,4,56,78, {a:1,b:2}]";



// localStorage.setItem("arr", JSON.stringify(arr));

// let a = localStorage.getItem("arr")

// console.log(JSON.parse(a))


let first = document.getElementById("1st") 
let second = document.getElementById("2nd") 
let main = document.getElementById("main")



let arr = JSON.parse(localStorage.getItem("array")) || [];
display(arr)
// if (JSON.parse(localStorage.getItem("array")) == null){
//   arr =[]
// }else{
//   arr = JSON.parse(localStorage.getItem("array"));
// }


  function subData() {
    let a = first.value;
    let b = second.value;

    let obj = {
      first: a,
      second: b,
    };

    arr.push(obj);

    localStorage.setItem("array", JSON.stringify(arr));
    // console.log(arr);
    display(arr);
  }


function display(data){
    data.map(function(el){
      let h1 = document.createElement("h1")
      h1.innerText = el.first
      let h2 = document.createElement("h2")
      h2.innerText = el.second
      let hr = document.createElement("hr")


      main.append(h1,h2,hr)

    })
}









