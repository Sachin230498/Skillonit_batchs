let form = document.getElementById("login");
form.addEventListener("submit", loginfun);

let signup_data = JSON.parse(localStorage.getItem("signupData"));
// console.log(signup_data)

function loginfun() {
  event.preventDefault();
  // console.log(form.name.value)
  let login_obj = {
    username: form.username.value,
    password: form.password.value,
  };

 let flag = false;
signup_data.map(function(el){
  if(login_obj.username==el.username){
    if( login_obj.password == el.password){
      flag = true
      localStorage.setItem("name",el.name )
    }else{
      flag = "wrong"
    } 
  }
})


if(flag==true){
  alert("login success")
  window.location.href = "../index.html";
}else if(flag=="wrong"){
  alert("wrong password")
}else{
  alert("wrong credential")
}


  // window.location.href = "../html/login.html";
}
