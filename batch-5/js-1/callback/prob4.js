// callback hell happens when we write too much nested callbacks
// hard to read
// hard to maintain
// hard to debug


function step1(cb){
    console.log("Step 1 is done")
    cb()
}

function step2(cb) {
  console.log("Step 2 is done");
  cb();
}

function step3(cb) {
  console.log("Step 3 is done");
  cb();
}

function step4() {
  console.log("Step 4 is done");
}

step1(function(){
    step2(function(){
        step3(function(){
            step4()
        })
    })
})



// function a(){
//     console.log("hello")
   
// }

// function b(){
//     console.log("bye")
// }

// a(function(){
//     b()
// })
