import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

function App() {
  const [budget, setBudget] = useState(0);
  const [budgetInput, setBudgetInput] = useState('');
  const [amountSpent, setAmountSpent] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setAmountSpent(amountSpent + expense.amount);
  };

  const deleteExpense = (index) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    setExpenses(newExpenses);
    setAmountSpent(amountSpent - expenses[index].amount);
  };

  const handleBudgetChange = (e) => {
    setBudgetInput(e.target.value);
  };

  const setNewBudget = () => {
    const budgetValue = parseFloat(budgetInput);
    if (!isNaN(budgetValue)) {
      setBudget(budgetValue);
      setBudgetInput(''); 
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Expense Tracker</h1>
      <div className="row">
        <div className="col-md-8">
          <ExpenseForm budget={budget} onAddExpense={addExpense} />
          <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5 className="my-0">Budget</h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">₹{budget}</h5>
              <div className="input-group mb-3">
                <input
                  type="number"
                  className="form-control"
                  value={budgetInput}
                  onChange={handleBudgetChange}
                  placeholder="Set your budget"
                />
                <button
                  className="btn btn-success"
                  onClick={setNewBudget}
                >
                  Set Budget
                </button>
              </div>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-header">
              <h5 className="my-0">Amount Spent</h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">₹{amountSpent}</h5>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-header">
              <h5 className="my-0">Remaining Balance</h5>
            </div>
            <div className="card-body">
              <h5 className="card-title">₹{budget - amountSpent}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
