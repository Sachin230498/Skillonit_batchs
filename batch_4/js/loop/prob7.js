// reverse a number using for loop


  // 321

// let a = 11.9;


// console.log(Math.floor(a))

let rev = 0
for(let num = 123;num>0;num = Math.floor(num/10)){
let digit = num %10;
rev = rev *10+digit
}

console.log(rev)