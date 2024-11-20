import React from "react";

const ExpenseForm = ({ handleSubmit }) => {
  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 shadow-md rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-bold text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter expense title"
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block font-bold text-gray-700 mb-1"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Shopping">Shopping</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-bold text-gray-700 mb-1">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Enter expense price"
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block font-bold text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
