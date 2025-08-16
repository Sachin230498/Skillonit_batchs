// Callback hell

function getBun(callback){
    console.log("🍞 Bun Ready")
    callback();
}


function addPatty(callback){
    console.log("Patty cooked and added")
    callback()
}

function addVaggies(callback){
    console.log("🍅 Vaggies added")
    callback();
}

function addSauceMayo(callback){
    console.log("🫙 Sauce and Mayo Added")
    callback()
}

function addButterCheese(callback){
    console.log("🧈 🧀 butter cheese added")
    callback()
}

function Baked(callback){
    console.log("🍔 Baked")
    callback()
}

function serveBurger(callback){
    console.log("🍔🍔🍔🍔🍔🍔 Burger Served")
    callback()
}


getBun(function(){
    addPatty(function(){
        addVaggies(function(){
            addSauceMayo(function(){
                addButterCheese(function(){
                    Baked(function(){
                        serveBurger(function(){
                            console.log("All is Happy now")
                        })
                    })
                })
            })
        })
    })
})
