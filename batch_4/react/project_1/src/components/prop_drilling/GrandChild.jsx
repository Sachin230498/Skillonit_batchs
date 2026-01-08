import React from 'react'

const GrandChild = (props) => {
  return (
    <div>
      <h1>Grand Child</h1>
      <p>GrandChild : {props.message}</p>
    </div>
  );
}


export default GrandChild