let api = "https://fakestoreapi.com/products";
let main = document.getElementById("main")

// async awai

const getData = async()=>{
   let res = await fetch(api)
   let data =await res.json()
//    console.log(data)
display(data);
}

const display = (products)=>{
   products.map(({title,image,price})=>{
    main.innerHTML = `
    <div>
       <img src="${image}"/>
       <h1>${title}</h1>
       <h2>${price}</h2>
      </div> 
    `;
   })
}



getData()



// destructring

// let obj = {
//     a:11,
//     b:12,
//     c:13
// }


// const {a,b,c} = obj
// console.log(a,b,c)
