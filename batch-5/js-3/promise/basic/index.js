// Promise

// Creating a Promise


// let promise = new Promise(function(res,rej){
// //    async work
// })



// let promise = new Promise(function (res, rej) {
//    let success = false;

//    if(success){
//     res("Task Completed")
//    }else{
//     rej("Task Failed")
//    }
// });

// console.log(promise)



let data = true

let pro = new Promise(function(res,rej){
    setTimeout(()=>{
 if (data) {
   res("Done");
 } else {
   rej("Failed");
 }
    },2000)
   
})


// how to handle promise

// .then .catch

// .then() - when success , resolve
// .catch - when error


pro.then(function(res){
  console.log(res)
})

pro.catch(function(rej){
  console.log(rej)
})



