import navbar from "./navbar.js";
import { getData, display } from "./fetch.js";
let nav = document.getElementById("navbar")
let api = "https://fakestoreapi.com/products";
let main = document.getElementById("main")


// navbar
let a =  navbar()
nav.innerHTML = a


// fetch data
let data = await getData(api)
display(data)

// console.log(a)