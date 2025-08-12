// undefined
// null
// let a;
// console.log(a)  // undefined

// let b = null;
// console.log(b)

let products = ["Back Case", "Earphones","Buds", "Data Cable", "Game pad", "Charger"];

let search = "Buds";
let x;

for(let i=0;i<products.length;i++){
    // console.log(products[i])
    if(products[i]==search){
       x = search;
       break;
    }else{
        x = null;
    }
}

// console.log(x)

if(x == null){
    console.log("Product Not Found")
}else{
    console.log(x,"Found")
}