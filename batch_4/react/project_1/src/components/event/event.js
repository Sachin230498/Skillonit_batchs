import React, { useState } from "react";

function handleClick() {
  alert("Button clicked");
}
function handleClick2(event) {
  console.log(event);
}

const add = (a) => {
  alert(a);
};

const App = () => {
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
    console.log(name);
  }

  return (
    <div>
      <h1>Event = An Event is an action done by the user</h1>
      <h2>Common user action</h2>
      <ul>
        <li>Clicking a button</li>
        <li>Typing in input box</li>
        <li>Submitting a form</li>
        <li>Pressing a key</li>
        <li>Hovering mouse</li>
      </ul>

      <button onClick={handleClick}>Click Me</button>

      <button onClick={() => alert("hello")}>Submit</button>

      <button
        onClick={() => {
          add(55);
        }}
      >
        Pass Data
      </button>
      <br></br>
      <button onClick={handleClick2}>Event Object</button>
      <br></br>
      <br></br>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
};

export default App;
