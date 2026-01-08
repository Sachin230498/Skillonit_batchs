import React, { useState } from "react";

const Arr = () => {
  const [items, setItems] = useState([]);

  function addItem(){
    setItems([...items,"New Item-1"])
  }

  let data = ["Priya","Riya","Rahul","Abhinay","Aaditya"]

  return (
    <div>
      <button onClick={addItem}>Add</button>

      {items.map((el) => (
        <p>{el}</p>
      ))}

      
<br /><br />
      {data.map((el) => (
        <p>{el}</p>
      ))}
    </div>
  );
};

export default Arr;
