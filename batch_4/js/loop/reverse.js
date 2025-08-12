let num = 123
let rev = 0;


for(;num>0;num= Math.floor(num/10)){
   let digit = num%10;
   rev = rev * 10 + digit
}

console.log(rev)



// num = 123  , digit = 3 , rev= 0*10+3 , 3
// num = 12   , digit = 2 , rev = 3*10+2, 32
// num = 1  , digit = 1 ,rev = 32*10+1 , 321

