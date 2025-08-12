let container = document.getElementById("container");

for (let i = 1; i <= 5; i++) {
  let h1 = document.createElement("h1");

  let pic = document.createElement("img");
  pic.src =
    "https://cdn.pixabay.com/photo/2022/06/20/20/36/car-7274571_1280.jpg";
  pic.style.width = "200px";

  h1.innerText = "Hello";

  let p = document.createElement("p");
  p.innerText = "I am para"

  let div = document.createElement("div")

  div.append(pic, h1,p);

  container.append(div)
}

// let h1 =  document.createElement("h1");
// let h2 =  document.createElement("h1");
// let h3 =  document.createElement("h1");
// let h4 =  document.createElement("h1");
// let h5 =  document.createElement("h1");
// h1.innerText = "I am heading tag";
// h2.innerText = "I am heading tag";
// h3.innerText = "I am heading tag";
// h4.innerText = "I am heading tag";
