// let animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

// let x = animals.lastIndexOf("Dodo", 1);
// console.log(x);




// write a function where pass 2 parametere and multipy it

// function multiply(a,b){
//     // console.log(a*b);
//     return a*b
// }

// let a = multiply(10,8)
// console.log(a)



// function greet(a,callback){
//     console.log("hello",a)
//     callback()
// }




// function bye(){
//     console.log("bye bye")
// }

// greet("Anu", bye);



// function add(a,b,c){
//    let d = c(8,5)
// //    console.log(a+b+d)
// }


// function sub(x,y){
//     return x-y
// }


// add(5,5,function(a,b){
//   console.log(a*b)
// })


function step1(callback){
    console.log("Step 1 done")
    callback();
}


function step2(callback){
    console.log("step 2 done")
    callback();
}

function step3(callback){
    console.log("step 3 done")
    callback();
}



// callback hell

step1(function(){
    step2(function(){
        step3(function(){
            console.log("All Steps are done")
        })
    })
})