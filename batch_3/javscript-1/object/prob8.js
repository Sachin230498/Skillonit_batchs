let str = "Skillonit";

// console.log(str[0])
let obj = {}

for(let i=0;i<str.length;i++){
    // console.log(str[i])
   if(obj[str[i]]==undefined){
    obj[str[i]]=1
   }else{
     obj[str[i]]++;
   }
}

console.log(obj)