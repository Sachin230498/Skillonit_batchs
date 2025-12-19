// function greeting(name, callback){
//     console.log("Hii", name)
//     callback()
// }


// function bye(){
//     console.log("Bye , tc")
// }

// greeting("Ruapli",bye )






// function add(a,b){
//     console.log(a)
//     b();
// }


// function xyz(){
//     console.log(50)
// }



// add(10,xyz)

function askName(a){
    let name = "Rohan"
    a(name)
}


function greet(userName){
    console.log("Hello "+ userName + " Welcome")
}

askName(greet)