import { useEffect, useState } from 'react'
import {Routes,Route,Link} from "react-router-dom" 
import Dashboard from './components/Dashboard'
import AddExpenses from './components/AddExpenses'
import ExpenseList from './components/ExpenseList'

function App() {
  const [expenses,setExpenses] = useState([])

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem("expenses"))
  },[])

  useEffect(()=>{
    localStorage.setItem("expenses", JSON.stringify(expenses))
  },[expenses])



  return (
    <>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add</Link>
        <Link to="/list">List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard expenses={expenses} />} />
        <Route
          path="/add"
          element={
            <AddExpenses expenses={expenses} setExpenses={setExpenses} />
          }
        />
        <Route path="/list" element={<ExpenseList expenses={expenses} />} />
      </Routes>
    </>
  );
}

export default App
