

let form = document.getElementById("signup")
form.addEventListener("submit", signupfun)

let signup_arr = JSON.parse(localStorage.getItem("signupData")) || [];

function signupfun(){

    event.preventDefault()
    // console.log(form.name.value)
    let signup_obj = {
      name: form.name.value,
      username:form.username.value,
      mobile:form.mobile.value,
      password:form.password.value
    };

    signup_arr.push(signup_obj)
    localStorage.setItem("signupData",JSON.stringify(signup_arr) )
   alert("User Ragister Succesfull")
   window.location.href = "../html/login.html";
 
}



// function removeel(){

//     signup_arr.splice(3,1)

//      localStorage.setItem("singup_arr", JSON.stringify(signup_arr));

// }


// localStorage.clear()

// console.log(window.location.href)

// console.log(window.location.href)