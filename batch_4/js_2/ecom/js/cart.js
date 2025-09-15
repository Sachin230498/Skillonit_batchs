let username = localStorage.getItem("login_data");
let main = document.getElementById("main");
let navbar = document.getElementById("navbar");
let total = document.getElementById("total");
let cart_arr = JSON.parse(localStorage.getItem("cartData")) || [];

cart_arr.forEach(function(el){
  if(!el.currentQuntity){
     el.currentQuntity = 1;
  }
})


display(cart_arr)




if (username != null) {
  navbar.innerHTML = null;

  let name = document.createElement("h4");
  name.innerText = username;
//   let cart = document.createElement("h4");
//   cart.addEventListener("click", function () {
//     window.location.href = "../html/cart.html";
//   });
//   cart.innerText = "cart";
  let logout = document.createElement("button");
  logout.addEventListener("click", logoutfun);
  logout.innerText = "logout";

  navbar.append(name, logout);
}


function logoutfun() {
  // console.log("logout")
  localStorage.removeItem("login_data");
  window.location.href = "../html/login.html";
}




function display(product) {
  main.innerHTML = null
  product.map(function (el,index) {
    // console.log(el)
  

    let Quantity = el.currentQuntity || 1
    let name = document.createElement("h2");
    name.innerText = el.title;
    let price = document.createElement("h3");
    price.innerText =   Math.floor(el.price * Quantity);
    let img = document.createElement("img");
    img.src = el.images[0];

    let removebtn = document.createElement("button");
    removebtn.innerText = "Remove";
    removebtn.addEventListener("click",function(){
      removefun(el,index)
    })


    // Quantity Controls
    let QunatityDiv = document.createElement("div")
    QunatityDiv.setAttribute("class","qunatityDiv")

    let minusbtn = document.createElement("button")
    minusbtn.innerText = "-"

    let quantityText = document.createElement("span")
    quantityText.innerText = Quantity;
    
    let plusbtn = document.createElement("button");
    plusbtn.innerText = "+";

    plusbtn.addEventListener("click",function(){
       Quantity++;
       el.currentQuntity = Quantity
        price.innerText = Math.floor(el.price) * Quantity;
       quantityText.innerText = Quantity;
       updateTotal();
    })
    minusbtn.addEventListener("click",function(){
       Quantity--;
         price.innerText = Math.floor(el.price * Quantity);
       quantityText.innerText = Quantity;
       updateTotal();

    })

    QunatityDiv.append(minusbtn,quantityText,plusbtn)

    let div = document.createElement("div");

    div.append(img, name, price, removebtn,QunatityDiv);

    main.append(div);

    // console.log(el.currentQuntity)
  });
}


updateTotal()

function updateTotal(){
  let newTotal = 0;
  cart_arr.forEach(function(el){
    newTotal = newTotal + currentQuntity
  })

  total.innerText = `Totol Amount is ${newTotal}`
}



function removefun(item,i){
// console.log(item)
cart_arr.splice(i,1)
localStorage.setItem("cartData",JSON.stringify(cart_arr));
display(cart_arr)
updateTotal();
}

// `${}`

// let obj = {
//   a:10,
//   b:20
// }

// obj.c = 30;

// console.log(obj.b)



// let a = 5;

// if(!a){
//   console.log("ok")
// }