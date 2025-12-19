// undefined null


let products = ["Back Case", "Earphones", "Data Cable", "Game pad", "Charger"];

let search = "Basdasda";
let isPresent;


for(let i=0;i<products.length;i++){
    if(search==products[i]){
      isPresent = search
       break;
    }else{
        isPresent;
    }
}

if(isPresent){
    console.log("product is found", isPresent)
}else{
    console.log("not found",isPresent)
}