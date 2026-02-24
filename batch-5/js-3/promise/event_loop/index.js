// Event loop is a system in js that manages

// when code should run
// in what order async tasks executes

// js is single threaded
// it can do only one task at a time

// Main Parts of Event loop

// There are 4 main parts of Event loop

// Call Stack
// Web Apis
// Callback Queue
// Microtask Queue
// Ṃacrotask
// Event Loop



// Call Stack  - Where code execute (sync)
            //    works like a Stack(LIFO) 
            //    one function runs at a time



// console.log("hello")
// console.log("hello 2")

// Web Apis/nodejs apis(Browser features)

// settimeout
// setinterval
// Dom event
// Fetch Api


// settimeout(
//     ()=>{},
//  time)   => web apis/node api => call back 


// promise


// Callback Queus

// micro task - promise,asyn await
// macro task - callback(settimout,dom,api)


// Event loop - Continously check: 
            // is call Stack empty
            // if yes => moves task from queues to stack





console.log("Start")

setTimeout(()=>{
    console.log("Timer Done")
},0)

Promise.resolve().then(()=>console.log("Promise Task"))

console.log("End")


// Call Stack - start , end

// web apis - callback

// queue - microtask(callback-5) ,macro(callback-2)

// event loop 
    //  callstack(0)
    // 












// LIFO last in first out , book rack
// FIFO first in first out , movie tickit row