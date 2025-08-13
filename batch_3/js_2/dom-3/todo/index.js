let form = document.querySelector("form")
let tbody = document.querySelector("tbody")
let t = document.getElementById("task")
let p= document.getElementById("priority");

form.addEventListener("submit", getData)

 let todo_arr = [];

function getData(){
    event.preventDefault()

   let task = t.value;
   let priority = p.value;


   let obj = {
    task,
    priority
   }

   todo_arr.push(obj) 
   
   display(todo_arr);
}


function display(data){
    tbody.innerHTML = ""
data.map(function(el,index){
  // console.log(el)
     let row = document.createElement("tr")
     let col1 = document.createElement("td")
     col1.innerText = el.task;
     let col2 = document.createElement("td")
     col2.innerText = el.priority;
     let col3 = document.createElement("td")
     col3.innerText = "Delete"
     row.append(col1,col2,col3);
     tbody.append(row)
})
}






   