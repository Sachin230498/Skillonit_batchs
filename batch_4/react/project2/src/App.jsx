
// import './App.css'
import Effect3 from './components/Hooks/useEffect/Effect3'
import Effect1 from './components/Hooks/useEffect/Effect1'
import Effect2 from './components/Hooks/useEffect/Effect2'
import {BrowserRouter  ,Routes,Route, Link} from "react-router-dom"
import About from './components/abc/About'
import Contact from './components/abc/Contact'

function App() {


  return (
    <>
    <h1>React Router Dom</h1>
     <nav>
       <Link to="/">Home</Link>
       <Link to="/effect1">Effect-1</Link>
       <Link to="/effect2">Effect-2</Link>
       <Link to="/about">About</Link>
       <Link to="/contact">Contact</Link>
     </nav>

<Routes>
  <Route path='/effect1' element={<Effect1/>}   />
  <Route path='/effect2' element={<Effect2/>}   />
  <Route path='/about' element={<About/>}   />
  <Route path='/contact' element={<Contact/>}   />
  <Route path='*' element={<h1>Page not Found</h1>}   />

</Routes>
  
    </>
  )
}

export default App
