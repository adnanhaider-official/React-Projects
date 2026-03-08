import { useRef, useState } from "react"

function ExpenseForm({addExpense}) {
    const [title,setTitle] = useState("")
    const [amount,setAmount] = useState("")
    const titleRef = useRef()

    function handleSubmit(e){
        e.preventDefault()

        const newExpense = {
            id:Date.now(),
            title:title,
            amount:parseFloat(amount)
        } 
        addExpense(newExpense)
        setTitle('')
        setAmount('')
        titleRef.current.focus()
    }
    return (
        <div>
            <form className="expense-form" onSubmit={handleSubmit}>
                <input ref={titleRef} placeholder="Expense Title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <input placeholder="Amount ₹" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                <button type="submit">Add Expense</button>
            </form>
        </div>
    )
}

export default ExpenseForm
