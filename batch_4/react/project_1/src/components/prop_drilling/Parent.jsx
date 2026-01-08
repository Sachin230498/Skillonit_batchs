import React from 'react'
import Child1 from './Child1'

const Parent = (props) => {
  return (
    <div>
      <h2>Parent Comonent</h2>
      <Child1 message={props.massage} />
    </div>
  );
}

export default Parent