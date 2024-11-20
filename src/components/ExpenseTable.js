import React, { useState, useEffect } from "react";

const ExpenseTable = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("expenses")) {
      setExpenses(JSON.parse(localStorage.getItem("expenses")));
    }
  });

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-400 shadow-md rounded-md">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Title</th>
            <th className="py-2">Category</th>
            <th className="py-2">Price</th>
            <th className="py-2">Date</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{expense.title}</td>
              <td className="border px-4 py-2">{expense.category}</td>
              <td className="border px-4 py-2">{expense.price}</td>
              <td className="border px-4 py-2">{expense.date}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => {
                    const newExpenses = expenses.filter((_, i) => i !== index);
                    setExpenses(newExpenses);
                    localStorage.setItem(
                      "expenses",
                      JSON.stringify(newExpenses)
                    );
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
