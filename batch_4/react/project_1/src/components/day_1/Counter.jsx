import React from 'react'

let count = 0

function incfun(){
  count++;
  console.log(count)
}

const state = () => {
  return (
    <div>
      <h1>{count} </h1>
      <button onClick={incfun}>click</button>

      <h1>State</h1>
      <h2>Kind of varibel to store,manange and change the data</h2>
      <p>
        In React, state is a built-in mechanism that allows components to
        manage, store, and track data that changes over time, typically due to
        user interactions or network responses
      </p>
    </div>
  );
}

export default state