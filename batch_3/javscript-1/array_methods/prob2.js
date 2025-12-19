let str = ["a","b","c",1,2,3]

// for(let i=0;i<str.length;i++){
//     console.log(str)
// }

// map foreach

// str.map(function(el,index,array){
// console.log(array)
// })


// str.forEach(function(el,index,array){
// console.log(index)
// })


let arr = [1,2,3,4,5]

let x = arr.map(function(el,index,array){
    return el*2
 })

//  console.log(x)


 let y = arr.forEach(function(el,index,array){
    return el*2
 })

 console.log(y)

// function abc(){
//     return "Hello"
// }


// let x =  abc()
// console.log(x)