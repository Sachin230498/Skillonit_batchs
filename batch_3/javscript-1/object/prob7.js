// What is the frequency of each element of the array

let arr = [7, 2, 7, 7, 3, 4, 2];
let obj = {};


for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]==undefined){
        obj[arr[i]] = 1;
    }else{
        obj[arr[i]]++;
    }
}


console.log(obj)

// obj[7] =1  ,  obj = {7:1}
// obj[2] = 1 ,  obj = {7:1, 2:1}
// obj[7] =2 ,   obj = {7:2, 2:1}
// obj[7] =3 ,   obj = {7:3, 2:1}
// obj[7] =3 ,   obj = {7:3, 2:1}
// obj[3] =1 ,   obj = {7:3, 2:1, 3:1}
// obj[4] =1 ,   obj = {7:3, 2:1, 3:1 , 4:1}
// obj[2] =2,   obj = {7:3, 2:2, 3:1 , 4:1}