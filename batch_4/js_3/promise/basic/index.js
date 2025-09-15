// In JavaScript, a Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It provides a more structured and manageable way to handle asynchronous code compared to traditional callback functions, helping to avoid "callback hell."


// A Promise can be in one of three states:


// Pending: The initial state; the asynchronous operation is still in progress.
// Fulfilled (or Resolved): The operation completed successfully, and the Promise has a resulting value.
// Rejected: The operation failed, and the Promise has a reason for the failure (an error).


// let promise = new Promise(function(res,rej){
//                     if(5==4){
//                         res("Success")
//                     }else{
//                         rej("failed")
//                     }
//               });

// console.log(promise)




// let data = false;

// let promise = new Promise(function(res,rej){
//             //    data = true;
//                   if(data){
//                     res("abcd")
//                   }else{
//                     rej("bye")
//                   }      
//               })

// // then catch


// promise.then(function(res){
//     console.log("result is", res)
// })

// promise.catch(function(err){
//     // console.log(err)
// })


// console.log(promise)


let input = document.querySelector("input")
let img = document.querySelector("img")
let password = 123456;


function Checkfun(){
    let x = input.value;
    let promise = new Promise(function(res,rej){
                  if(password==x){
                    res("Password Match")
                  }else{
                    rej("wrong password")
                  }
    })

    promise.then(function(res){
        // console.log(res)
        img.src = "https://media.tenor.com/UVmpVqlpVhQAAAAM/yess-yes.gif";
    })
    .catch(function(err){
        console.log(err)
         img.src = "https://media.tenor.com/vLK4Mq3jiKIAAAAM/cat-no.gif";
    })
}

function Delayfun(){
img.src="https://loading.io/assets/mod/spinner/default/lg.gif"
setTimeout(Checkfun, 2000);
}

