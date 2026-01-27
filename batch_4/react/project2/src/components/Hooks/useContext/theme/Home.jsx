import React, {useContext} from 'react'
import { ThemeContext } from './ThemeContext'

const Home = () => {
const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div style={{ background: theme === "light" ? "#fff" : "#111" }}>
      <h1>Current Theme : {theme} </h1>

      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
    </div>
  );
}

export default Home