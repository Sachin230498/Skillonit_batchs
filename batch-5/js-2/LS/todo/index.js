let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let t = document.getElementById("task");
let p = document.getElementById("priority");

form.addEventListener("submit", getData);

let todo_arr = JSON.parse(localStorage.getItem("todo_arr")) || [];


display(todo_arr)

function getData() {
  event.preventDefault();
  let task = t.value;
  let priority = p.value;

  let todo_obj = {
    task,
    priority,
  };

  todo_arr.push(todo_obj);

  localStorage.setItem("todo_arr", JSON.stringify(todo_arr))
 
display(todo_arr);
//   console.log(todo_arr);
}



function display(data){
    tbody.innerHTML = null

data.map(function(el,index){
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = el.task;
    let col2 = document.createElement("td");
    col2.innerText = el.priority;
    if(el.priority == "High"){
        col2.style.backgroundColor = "red"
    }else if(el.priority=="Low"){
          col2.style.backgroundColor = "green";
    }
    let col3 = document.createElement("td");

    col3.addEventListener("click",function(){
deletfun(index)
    })
    col3.innerText = "Delete";
    col3.style.color = "white"
    col3.style.backgroundColor = "red"
    row.append(col1, col2, col3);
    tbody.append(row);
})

}


let arr = [12,2,66,78]

function deletfun(num){
todo_arr.splice(num,1)
localStorage.setItem("todo_arr", JSON.stringify(todo_arr));
display(todo_arr)

}





