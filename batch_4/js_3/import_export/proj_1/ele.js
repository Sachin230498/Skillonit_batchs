import navbar from "./navbar.js";
let nav = document.getElementById("navbar");
let main = document.getElementById("main");
import { getData, display } from "./fetch.js";

let api = "https://fakestoreapi.com/products/category/electronics"

let a = navbar();

let data = await getData(api)

display(data)

// // console.log(a)

nav.innerHTML = a;
