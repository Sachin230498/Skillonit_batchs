// Promise => return object ,constructor


let promise = new Promise(function(res,rej){
   if(5==4){
     res("got it")
   }else{
    rej("error")
   }
})

promise.then(function(res){
  console.log(res)
})

promise.catch(function(err){
console.log(err)
})

// console.log(promise)
