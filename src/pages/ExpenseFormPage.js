import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import { useNavigate } from "react-router-dom";

const ExpenseFormPage = ({ expenses, setExpenses }) => {
  const navigate = useNavigate();

  // Add a new expense
  const addExpense = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  const handleSubmit = (e) => {
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

    addExpense(expense);
    navigate("/expenses");
  };
  return (
    <div>
      <ExpenseForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default ExpenseFormPage;
