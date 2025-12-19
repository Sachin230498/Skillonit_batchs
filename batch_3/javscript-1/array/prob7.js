//Problem 1 : Given an array print the position (starting with 1) and the element in a single line.



// let name=["Aman", "Ajay", "Varun", "Vijay"];


// for(let i=0;i<name.length;i++){
//     console.log(i+1, name[i])
// }



let arr = [1,2,8,9,12,15,45,88,16,20];
let sum = 0;

for(let i=0;i<arr.length;i++){
    // console.log(arr[i])
    if(arr[i]%2==0){
        // console.log(arr[i])
      sum =sum+arr[i]
    
    }
}

  console.log(sum);






// print even number from 1 to 10
// let sum = 0;
// for(let i=1;i<=10;i++){
//   if(i%2==0){
//     // console.log(i)
//     sum =sum+i
  
//   }
// }
//   console.log(sum);