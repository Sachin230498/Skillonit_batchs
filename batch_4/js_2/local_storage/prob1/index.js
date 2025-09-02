// local Storage => kind of DB  provided by browser

// localStorage.setItem(Key, value)
// localStorage.getItem(key)
// localStorage.removeItem(key)
// localStorage.clear()

// let a = "hello";


// localStorage.setItem("str", a)

// localStorage.setItem("abc", 12246)


// let b =  localStorage.getItem("str")

// console.log(b)


// let x = 50;
// let y = 100


// localStorage.setItem("num", x)
// localStorage.setItem("num1", y)


// let a =  localStorage.getItem("num")
// console.log(a)

// localStorage.removeItem("num1")


// json 

// JSON.stringify()
// JSON.parse()


let x = 100;

let arr = [1,2,3,4]  //  "[1,2,3,4]"
// console.log(arr)

// let b = JSON.stringify(arr)

localStorage.setItem("arr", JSON.stringify(arr))


let b = JSON.parse( localStorage.getItem("arr"))

console.log(b)


// let a =  JSON.stringify(x)

// console.log(b)

// console.log( JSON.parse(b) )