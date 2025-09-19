let api_key = "0be5cefa77367d7fea0e9652c1cc9677";
let api =
  "https://api.openweathermap.org/data/2.5/weather";

let input = document.querySelector("input")
let main = document.querySelector("#main")
  // ?q=bhopal&appid=a1bfecce397ccbb407a11b48df97c617&units=metric


const getData = async()=>{
  let cityname = input.value || "buldhana";
   let res = await fetch(`${api}?q=${cityname}&appid=${api_key}&units=metric`);
  //  console.log(res)
  let data = await res.json()
  display(data)
}

getData()

function display({name,main:{temp}}){
  //  console.log(data.name)
  //  console.log(data.main.temp)
  main.innerHTML = `<h1>${name}</h1>
                     <h2>${temp}</h2>
                     <iframe src="https://maps.google.com/maps?&hl=en&q=${name}&t=&z=14&ie=UTF8&iwloc=B&output=embed"></iframe>
                     `;

                  
}




