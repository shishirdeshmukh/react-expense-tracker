import React from 'react';

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <ul className="list-group">
      {expenses.map((expense, index) => (
        <li
          key={index}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {expense.description}
          <span className="badge bg-primary rounded-pill">₹{expense.amount}</span>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => onDeleteExpense(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;