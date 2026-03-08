import { useEffect, useState } from 'react'
import './App.css'
import ExpenseForm from './ExpenseForm'
import ExpenseList from './ExpenseList'

function App() {
  const [expenses,setExpenses] = useState(()=>{
    const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(()=>{
    localStorage.setItem("expenses",JSON.stringify(expenses))
  },[expenses])

  function addExpense(expense){
    setExpenses((prev)=>[...prev,expense])
  }
  function deleteExpense(id){
    setExpenses(expenses.filter((item)=>item.id != id))
  }

  const totalAmount = expenses.reduce((sum,item)=>sum + item.amount,0)
  
  return (
    <div className="app-container">
      <h1>💰 Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} />
      <h3 className="total">Total Expense: ₹{totalAmount}</h3>
      <ExpenseList expenses={expenses} onDelete={deleteExpense}/>
    </div>
  )
}

export default App
