

let username = localStorage.getItem("login_data");
let main = document.getElementById("main")
let navbar = document.getElementById("navbar")
let products = JSON.parse(localStorage.getItem("products"));
// console.log(navbar)
// console.log(products)
display(products)

if(username != null){
navbar.innerHTML = null;

let name = document.createElement("h4")
name.innerText = username
let cart = document.createElement("h4")
cart.addEventListener("click", function(){
     window.location.href = "../html/cart.html";
})
cart.innerText = "cart"
let logout = document.createElement("button")
logout.addEventListener("click", logoutfun)
logout.innerText = "logout"

navbar.append(name,cart,logout)
}


function logoutfun(){
    // console.log("logout")
    localStorage.removeItem("login_data");
     window.location.href = "../html/login.html";
}



function display(product){
product.map(function(el){
    // console.log(el)
    let name =document.createElement("h2")
    name.innerText = el.title
    let price = document.createElement("h3")
    price.innerText = el.price
    let img = document.createElement("img")
    img.src = el.images[0]

    let cartbtn =document.createElement("button")
    cartbtn.innerText = "Add to Cart"

    let div = document.createElement("div")

    div.append(img,name,price,cartbtn)

    main.append(div)
})
}

// lestate 5;

// let b;


// if(!b){
//     console.log("hello")
// }

// if(b==undefined){
//     console.log("hello")
// }

// console.log(b)
