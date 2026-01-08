import React from 'react'
import GrandChild from './GrandChild';


const Child1 = (props) => {
  return (
    <div>
      <h4>Hello child</h4>
      <GrandChild message={props.message} />
    </div>
  );
}

export default Child1