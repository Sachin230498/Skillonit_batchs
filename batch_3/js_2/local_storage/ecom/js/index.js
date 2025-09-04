

let main = document.getElementById("main")
let products = JSON.parse(localStorage.getItem("products"));
// console.log(products)
display(products)
let navbar = document.getElementById("navbar")

let naam = localStorage.getItem("name")


if(naam != null){
navbar.innerHTML = ""

let username = document.createElement("h4")
username.innerText = naam

let cartbtn = document.createElement("h4")
cartbtn.innerText = "cart"

let logoutbtn = document.createElement("button")
logoutbtn.innerText = "Logout"
logoutbtn.addEventListener("click" ,logoutfun)

navbar.append(username,cartbtn,logoutbtn)
}


function logoutfun(){
    localStorage.removeItem("name")
    window.location.href = "./html/login.html";
}




function display(data){
data.map(function(el,index){
    console.log(el)

    let title = document.createElement("h2")
    title.innerText = el.title;
    let price = document.createElement("h3")
    price.innerText = el.price
    let image = document.createElement("img")
     image.src = el.images
   
     let cart = document.createElement("button")
     cart.innerText = "Add to Cart"

    let div = document.createElement("div")

    div.append(image,title,price,cart)

    main.append(div)
})
}
