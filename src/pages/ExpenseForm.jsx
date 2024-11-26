import React from "react";
import Heading from "../components/Heading";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

const ExpenseForm = ({ setExpenses, editIndex }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      amount: e.target.amount.value,
      date: e.target.date.value,
      category: e.target.category.value,
    };
    if (editIndex !== -1) {
      const updatedExpenses = JSON.parse(localStorage.getItem("expense")) || [];
      updatedExpenses[editIndex] = data;
      localStorage.setItem("expense", JSON.stringify(updatedExpenses));
      setExpenses(updatedExpenses);
      navigate("/table");
      return;
    }
    // Updating state
    setExpenses((prevExpenses) => [...prevExpenses, data]);
    // Fetching existing data from Local Storage
    const existingExpenses = JSON.parse(localStorage.getItem("expense")) || [];
    // Storing updated data in Local Storage
    localStorage.setItem(
      "expense",
      JSON.stringify([...existingExpenses, data])
    );
    navigate("/table");
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <Heading title={"Expense Tracker"} />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
};

export default ExpenseForm;
