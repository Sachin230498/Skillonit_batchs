import React from 'react'
import ChildA from './ChildA';


let x = 22

const Parent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildA name="Rahul" age={x} />
     
      <ChildA name="Neha" age={25} />
    </div>
  );
}

export default Parent