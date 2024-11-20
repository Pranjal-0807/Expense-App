import React from "react";
import ExpenseTable from "../components/ExpenseTable";

const ExpenseTablePage = ({ expenses, setExpenses }) => {
  // Delete an expense by index
  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };
  return <ExpenseTable expenses={expenses} onDeleteExpense={deleteExpense} />;
};

export default ExpenseTablePage;
