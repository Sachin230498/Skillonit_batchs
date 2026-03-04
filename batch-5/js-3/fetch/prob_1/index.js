// fetch
let main = document.getElementById("main")
let api = "https://jsonplaceholder.typicode.com/users";

let getData = fetch(api)

getData.then((res)=>{
       let b = res.json()
       b.then((data)=>{
          console.log(data)
          display(data)
       })
})




function display(data){
    data.map((el)=>{
 let name = document.createElement("h2");
 name.innerText = el.name
 let phone = document.createElement("h3");
 phone.innerText = el.phone
 let username = document.createElement("h1");
 username.innerText = el.username
 let line = document.createElement("hr")
 let div = document.createElement("div");

 div.append(username, name, phone,line);
 main.append(div);
    })
   
}
