function abc(a){
    console.log("hello first function")
    a();
}

function xyz(){
    console.log("Callback function")
}
// abc(xyz)
// callback function is a function that you pass as an arguments to another function and it runs after some work is completed


function greet(name,cb){
    console.log("Hello", name)
    cb()
}

function afteerGreet(){
    console.log("How are you ?")
}

greet("Rahul", afteerGreet);
