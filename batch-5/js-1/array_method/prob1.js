// ṃap 
// forEach

// let arr = [1,2,5,6,8,9]


// arr.map(function(el,i,arr){
//    if(el%2==0){
//     console.log(el)
//    }
// })

// for(let i=0;i<arr.length;i++){
//     console.log(arr,arr[i],i)
// }

let arr = [1, 2, 5, 6, 8, 9];

let x =  arr.map(function(el,i,arr){
    return el
})

let y = arr.forEach(function (el, i, arr) {
  return el * 2;
});


console.log(x)