import React from 'react'



const App = () => {
  const data = false
  return (
    <div>
       {data || <h1>Hello react</h1> }
    </div>
  )
}



export default App