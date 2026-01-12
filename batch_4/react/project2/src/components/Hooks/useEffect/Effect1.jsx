import React, { useEffect } from "react";

const Effect1 = () => {


//   useEffect(() => {
//     console.log("Component render");
  
//   });


//   No dependency array
//   Runs after every render




//   useEffect(() => {
//     console.log("Component render 2");
//     console.log("hello")
//   },[]);

//   empty dependency array []
//   runs only once (on page load)
// very common for - api calls 




  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
};

export default Effect1;
