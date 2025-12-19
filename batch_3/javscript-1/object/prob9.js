// Problem4: Find the unique element in the array
//sp1: Find the occurance
let arr = [3, 2, 7, 7, 3, 4, 2];



let obj = {};


for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]]=1
    }else{
         obj[arr[i]]++
    }
}


// console.log(obj)

for(let key in obj){
    if(obj[key]==1){
 console.log(key)
    }
  
}

