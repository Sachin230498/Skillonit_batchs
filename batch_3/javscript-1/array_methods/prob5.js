// let num = [7, 8, 9,45,38 ,1, 2, 3];


let str = ["Suresh", "Tushar", "Vivek","Apple", "Sachin"]



// sort

// num.sort()

// str.sort()

// console.log(num)



// let num = [7, 8, 9, 45, 38, 1, 2, 3];

// num.sort(function(a,b){
//     return b-a
// })


// console.log(num)




let arr = [1,2,8,7,9,3,6,10]
let n = arr.length
// Bubble sort

for(let i=0;i<n;i++){
    for (let j = 0; j < n; j++) {
        if(arr[j]>arr[j+1]){
            // swap arr[j] and arr[j+1]
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}

console.log(arr)


// arr.sort(function(a,b){
//     return a-b
// })

// console.log(arr)




// for(let i=1;i<=5;i++){
//     console.log("********",i)
//     for (let j = 1; j <= 5; j++) {
//       console.log(j);
//     }
// }