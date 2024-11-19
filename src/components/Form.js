import React from "react";

const Form = () => {
  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    const price = e.target.price.value;
    const date = e.target.date.value;
    const expense = {
      title,
      category,
      price,
      date,
    };
    let expenses = [];
    if (localStorage.getItem("expenses")) {
      expenses = JSON.parse(localStorage.getItem("expenses"));
    }
    expenses.push(expense);
    console.log(expenses);
    console.log(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    e.target.reset();
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-400 shadow-md rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-bold mb-2"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="entertainment">Entertainment</option>
            <option value="shopping">Shopping</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
