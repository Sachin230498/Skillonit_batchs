// http network request - fetch, axios, xhr, websocket

// Fetch  => fetch provides a js interface for making HTTP request and processing the response

// API => Application programing interface, is a set of rules and protocols thats define how diffrent software and app communicate .

// CRUD operation

// C - Create - post request
// R - Read  -  get request
// U - Update - put/patch request
// D - Delete - delete request

// fetch(api)

// let api = "https://fakestoreapi.com/products";

// let data = fetch("https://fakestoreapi.com/products")

// console.log(data)

// json()
// data.then(function(res){
//     // console.log(res)
//     let x = res.json()
//     // console.log(x)
//        x.then(function(realData){
//         console.log(realData)
//        })
// })

// let promise = new Promise(function(res,rej){
//         if(5==6){
//             res("Condition true")
//         }else{
//             rej("Condition false")
//         }
// })

// promise.then(function(res){
//     console.log(res)
// })
// .catch(function(err){
//     console.log(err)
// })

// console.log(promise)

// let api = "https://fakestoreapi.com/products";

// let getData = fetch("https://fakestoreapi.com/products");

// console.log(getData)

// getData.then(function(res){
//     // console.log(res.json())
//     let data = res.json()
//     data.then(function(x){
//         console.log(x)
//     })
// }).catch(function(err){
//     console.log(err)
// })

// async await
// let main = document.getElementById("main")
// let api = "https://fakestoreapi.com/products";

// async function getData(){
//    let res = await fetch(api)
// //    res.then(function(res){
// //    })
// let data = await res.json()
// // console.log(data)

// data.map(({title,price,image})=>{
// //    console.log(el)
//    let name = document.createElement("h2")
//    name.innerText = title;
//    let p = document.createElement("h3")
//    p.innerText = price
//    let img = document.createElement("img")
//    img.src = image
//    let div = document.createElement("div")

//    div.append(img,name,p)
//    main.append(div)

// })
// }

// getData()

let api = "https://fakestoreapi.com/products";

const getData =async() => {
  let res = await fetch(api);
  let data =await res.json()
  console.log(data)
};

getData();
