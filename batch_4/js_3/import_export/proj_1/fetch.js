let api = "https://fakestoreapi.com/products";

const getData = async(api)=>{
  let res  = await fetch(api)

  let data = await res.json()

  return data;
}


const display = (data) => {
  data.map((el) => {
    // console.log(el)
    let title = document.createElement("h1");
    title.innerText = el.title;
    let price = document.createElement("h3");
    price.innerText = el.price;
    let image = document.createElement("img");
    image.src = el.image;
    let div = document.createElement("div");

    div.append(image, title, price);
    main.append(div);
  });
};



export {getData,display};



// ternory operator
// destructuring
// callback, callback hell
// template literal
// arrow function
// import export
// es6 


