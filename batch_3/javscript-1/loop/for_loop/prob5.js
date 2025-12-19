// print the avg from 1 to 5

// 1+2+3+4+5 = 15
// 15/5 = 3

let sum = 0;
let count = 0;
for(let i=1;i<=15;i++){
    // console.log(i)
    sum = sum+i;
    count++;
}

console.log(sum/count)




//c = 0  , i =1 , 1<=15 , s = 0+1 , s = 1  ,c= 1,  log(1/1) , 1
//c = 1  , i =2 , 2<=15 , s = 1+2 , s = 3 ,c= 2,  log(3/2) , 1.5
//c = 2  , i =3 , 3<=15 , s = 3+3, s = 6  ,c= 3,  log(6/3) , 2
//c = 3  , i =4 , 4<=15 , s = 6+4, s = 10  ,c= 4,  log(10/4) , 
//c = 4  , i =5 , 5<=15 , s = 10+5, s = 15  ,c= 5,  log(15/5) ,3 