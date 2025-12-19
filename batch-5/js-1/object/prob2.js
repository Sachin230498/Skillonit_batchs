let products = ["Back Case", "Earphones","Charger", "Data Cable", "Game pad"];
let search = "Earphones";
let isPresent;

for(let i=0;i<products.length;i++){
    if(products[i]==search){
      isPresent = search
      break
    }
    else{
     isPresent = null
    }
}

if(isPresent == null){
    console.log("Product not found")
}else{
    console.log("product found", isPresent)
}





// let isPresent;
// for (let i = 0; i <= products.length - 1; i++) {
//   if (products[i] == search) {
//     isPresent = search;
//     break;
//   } else {
//     isPresent = null;
//   }
// }

// if (isPresent == null) {
//   console.log("Not Found");
// } else {
//   console.log(isPresent, "Found");
// }
