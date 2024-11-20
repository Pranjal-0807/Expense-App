import React from "react";

const ExpenseTable = ({ expenses, onDeleteExpense }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-gray-100 shadow-md rounded-md">
      {expenses.length > 0 ? (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Category</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Actions</th>
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
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => onDeleteExpense(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-600">
          No expenses found. Add some!
        </p>
      )}
    </div>
  );
};

export default ExpenseTable;
