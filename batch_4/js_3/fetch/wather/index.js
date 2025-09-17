let api_key = "0be5cefa77367d7fea0e9652c1cc9677";
let api = "https://api.openweathermap.org/data/2.5/weather";
let cityinput = document.getElementById("city");
let cityname = document.getElementById("cityname");
let temperature = document.getElementById("temp");
let map = document.querySelector("iframe");

const getWeather = async () => {
  let res = await fetch(`${api}?&appid=${api_key}`);
  let data = await res.json();
  console.log(data)
};

getWeather()
