// callback 


// function add(x,y,z){
//     console.log(x+y)
//     let a =  z(8,8)
//     console.log(a)
// }


// function sub(a,b){
//     return a-b
// }


// add(5,10,sub)
// add(function(){
//     console.log("bye")
// })



function step1(callback){
   console.log("Step 1 done")
   callback()
}

function step2(callback){
   console.log("Step 2 done")
   callback()
}


function step3(callback){
   console.log("Step 3 done")
   callback()
}


// step1(function(){
//     step2(function(){
//         step3(function(){
//             console.log("All step is done")
          
//         })
//     })
// })



// ṃake a pizza order

function orderPizza(callback){
  console.log("🍕 order Recived")
  callback()
}

function makeDough(callback){
    console.log("🍕 Dough Prepared")
    callback()
}


function addToppings(callback){
    console.log("Toppings Added")
    callback()
}

function BakePizza(callback){
    console.log("🔥 Pizza Baked")
    callback()
}


function Delivered(callback){
    console.log("🛵 Pizza delivered to customer")
    callback()
}


orderPizza(function(){
    makeDough(function(){
        addToppings(function(){
            BakePizza(function(){
                Delivered(function(){
                    console.log("✅ Customer is Happy !")
                })
            })
        })
    })
})