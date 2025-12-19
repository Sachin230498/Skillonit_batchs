// Array is a collaction of multiple data type  values stored in single variable

// let a = "Rahul";
// let b = "kumar";
// let c = 25

// syntex

// let arr = [el1, el2 ,el3 ...]

// let names = ["Rahul","Kumar","Priya","Aditi",25,true]

// index => position of array elements , its start from 0

// console.log(names[2])
// console.log(names[0])
// console.log(names[1])
// let x = names[4]
// console.log(x)



// let names = ["Rahul", "Kumar", "Priya", "Aditi", 25, true];
// let a = names.length-2  // 6-2   4
// let x = names[a]
// console.log(x)


// let arr = [12,45,78,11,88,92]
// console.log(arr[arr.length-2])  // 6-2 = 4


// let arr = [12, 45, 78, 11, 88, 92];

// push 
// pop
// shift
// unshift
// arr.push("hello",77)
// arr.pop()
// arr.pop()
// arr.pop()
// arr.shift()
// arr.unshift(76)
// console.log(arr)




// let arr = [10,45,78,12,46,92,36,88]
// let x = arr.length
// console.log(arr[2])
// console.log(x)

// for(let i=0; i<x;i++){
//   console.log(arr[i])
// }

// i=0, 0<8 , arr[0]  , clg(10)
// i=1, 1<8 , arr[1]  , clg(45)
// i=2, 2<8 , arr[2]  , clg(78)
// i=7, 7<8 , arr[7]  , clg(88)
// i=8, 8<8 




// let data = ["Rahul", "Akshay", "Priti", "Kumar","Neha",8,7,9,12,8]

// for(let i =0;i<data.length;i++){
//     console.log(data[i])
// }

// i=0 , 0<10 , clg(data[0]) , "Rahul" 
// i=1 , 1<10 , clg(data[1]) , "Akshay" 
// i=2 , 2<10 , clg(data[2]) , "Priti" 
// i=1 , 10<10 



let arr = [1,7,8,10,12,15,18,20,24,77,86,22]

// even no

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i])
    }
}

// i=0, 0<12 , if(1%2==0) 
// i=1, 1<12 , if(7%2==0) 
// i=2, 2<12 , if(8%2==0)  clg(8)
