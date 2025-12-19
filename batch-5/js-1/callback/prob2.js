function first(){
    console.log("hello")
}

function second(a ,b){
    console.log("bye", a)
    b()
}

second("Ram",first)  

