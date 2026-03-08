import ExpenseItem from "./ExpenseItem"

function ExpenseList({expenses,onDelete}) {
    if(expenses.length === 0){
        return <h2 className="no-expense">No Expenses yet</h2>
    }
    return (
        <div className="expense-list">
            {expenses.map((item)=>(
                <ExpenseItem  key={item.id} item={item} onDelete={onDelete}/>
            ))}
            
        </div>
    )
}

export default ExpenseList
