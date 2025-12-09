// Given an array , find the second largest number

function secondlargest(arr){
    let largest = arr[0];
   for (let i = 0; i < arr.length; i++) {
     if(arr[i]>largest){
        largest= arr[i]
     }
   }
   let second = null;
   for (let i = 0; i < arr.length; i++) {
     if(arr[i]<largest){
        if(second == null || arr[i]> second){
            second = arr[i]
        }
     }
   }
   console.log(second)
}


secondlargest([10,20,5,35,8])

// 10 < 35 
// s = 10


// 20 < 35 
//  20 > 10
// s = 20


// 5<35
// 5>20

