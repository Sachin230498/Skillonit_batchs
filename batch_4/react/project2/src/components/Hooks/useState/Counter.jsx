// UseState Hook = To Store and Update Data inside a component

// syntex => const [state,setState] = useState(initialValue)

// State => current value
// setState => function to update value
// initialValue => starting value


import { useState } from "react";
import Hooks from "./Hooks";

function Counter(){

    const [count,setCount] = useState(55)
    const [name,setName] = useState("Priya")
    const [isLogin,SetIslogin] = useState(false)
    const [user, setUser] = useState({name:"",password:""})
 

    function incfun(){
        // count++
        setCount(count+1)
    }
  
    function decfun(){
        // count--
         setCount(count - 1);
    }

    function handleCahnge(e){
        setUser({
            ...user,
    [e.target.name]:e.target.value

        })
    }
  
    // let obj = {a:"",b:""}



    // let newobj = {...obj, a:"55", b:"54"}

    // console.log(newobj)


    return (
      <div>
        <div>
          <input type="text" name="name" placeholder="enter name" onChange={handleCahnge} />
          <input
            type="password"
            name = 
            "password"
            placeholder="enter password"
            onChange={handleCahnge}
          />

          <p>{user.name}</p>
          <p>{user.password}</p>
        </div>

        <br />
        <br />
        <h1>{count}</h1>
        <button onClick={incfun}>Increment</button>
        <button onClick={decfun}>Decrement</button>

        <br />
        <br />

        <h1>{name}</h1>
        <button onClick={() => setName("Pooja")}>change name</button>

        <br />
        <br />

        <button onClick={() => SetIslogin(!isLogin)}>
          {isLogin ? "Logout" : "Login"}
        </button>
      </div>
    );

}

export default Counter