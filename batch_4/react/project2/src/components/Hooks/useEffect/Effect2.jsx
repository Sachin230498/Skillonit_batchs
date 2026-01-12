import React, { useEffect, useState } from 'react'

const Effect2 = () => {
const [count,setCount] = useState(0);

// console.log(document.title)


useEffect(()=>{
  console.log("count changed", count)
  document.title = `Counte: ${count}`;
},[count])

// effect runs only when count changes
// React compare old & new value

  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default Effect2