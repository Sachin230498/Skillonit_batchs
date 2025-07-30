// count vowels in string

let str = "Iron Man";
let count = 0;

for(let i=0;i<str.length;i++){
    let chr = str[i].toLowerCase()
    // console.log(chr)
    if(chr === "a" || chr == "e" || chr === "i" || chr === "o" || chr === "u"){
        count++;
    }
}

console.log(count)




// c=0 , i=0,0<8, chr = i , if(i==a ), c=1
// c=1, i=1,1<8, chr = r,
// c=1, i=2,2<8, chr = o,c =2
