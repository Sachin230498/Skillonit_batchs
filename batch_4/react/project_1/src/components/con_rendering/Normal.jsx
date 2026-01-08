import React from 'react'
import Con1 from './Con1';
import Con2 from './Con2';

const Normal = () => {
  const isLoggedIn = true;

//   if(isLoggedIn){
//     return <Con1/>
//   }else{
//     return <Con2/>
//   }
return (
  <div>
    <h1>{isLoggedIn ? "Welcome User" : "Please Login"}</h1>
    <div>{isLoggedIn ? <Con1 /> : <Con2 />}</div>
  </div>
);
}

export default Normal