let x = [1,3,5,8,10,12,14,16,18,22,25]


// print even no 
// for(let i=0; i<x.length; i++){
// console.log("index of", x[i], "is", i )
// }

for (let i = 0; i < x.length; i++) {
  if(x[i]%2==0){
    console.log("even no", x[i])
  }else{
    console.log("odd no",x[i])
  }
}