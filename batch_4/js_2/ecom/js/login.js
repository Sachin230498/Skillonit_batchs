let form = document.querySelector("form");

form.addEventListener("submit", login);

let signup_arr = JSON.parse(localStorage.getItem("singup_arr"));

function login() {
  event.preventDefault();

  let login_obj = {
    username: form.username.value,
    password: form.password.value,
  };

  let flag = false;

  signup_arr.map(function(el){
   if(login_obj.username === el.username){
      if(login_obj.password===el.password){
         flag = true;
         localStorage.setItem("login_data", el.name)
      }else{
        flag = "wrong"
      }
   }
  })

  if(flag === true){
    console.log("login")
    alert("Login succesfull");
    window.location.href = "../index.html";
  }else if(flag == "wrong"){
    alert("Wrong password")
  }else{
    alert("Wrong credential")
  }



}
