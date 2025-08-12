let main = document.getElementById("main");

// let arr = ["Tushar", "Kanchan", "Suresh", "Vivek", "Pallavi", "Gourav"];
// let marks = [10,20,30,40,50,60]

let data = [
  {
    name: "Tushar",
    marks: 50,
    img: "https://cdn.pixabay.com/photo/2025/07/10/14/29/bearded-dragon-9706773_1280.jpg",
  },
  {
    name: "Kanchan",
    marks: 20,
    img: "https://cdn.pixabay.com/photo/2025/07/10/14/29/bearded-dragon-9706773_1280.jpg",
  },
  {
    name: "vivek",
    marks: 30,
    img: "https://cdn.pixabay.com/photo/2025/07/10/14/29/bearded-dragon-9706773_1280.jpg",
  },
  {
    name: "Pallavi",
    marks: 40,
    img: "https://cdn.pixabay.com/photo/2025/07/10/14/29/bearded-dragon-9706773_1280.jpg",
  },
  {
    name: "Gourav",
    marks: 60,
    img: "https://cdn.pixabay.com/photo/2025/07/10/14/29/bearded-dragon-9706773_1280.jpg",
  },
];

for (let i = 0; i < data.length; i++) {
  let h1 = document.createElement("h1");
  h1.innerText = data[i].name;

  let mark = document.createElement("h2");
  mark.innerText = data[i].marks;

  let img = document.createElement("img");
  img.src = data[i].img;

  let div = document.createElement("div");

  div.append(img, h1, mark);
  main.append(div);
}
