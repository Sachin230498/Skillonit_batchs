// Local Storage 

// Local storage in JavaScript provides a mechanism for web applications to store data locally within the user's browser. 

// only store strings
// 5mb to 10mb
// insecure
// no expiry date



// localStorage.setItem(key , value)
// localStorage.getItem(key).
// localStorage.removeItem(key)
// localStorage.clear()


let a = "Hello";

localStorage.setItem("name", a)

localStorage.setItem("abc", "hello how are you")

localStorage.setItem("num", 12245)

// let x =  localStorage.getItem("abc")

// console.log(x)


// let num = localStorage.getItem("num")
// console.log(typeof num)

// localStorage.removeItem("num")

localStorage.clear()