import React from "react";
import Heading from "../components/Heading";
import Table from "../components/Table";
import { useNavigate } from "react-router-dom";

const ExpenseTable = ({ expenses, setExpenses, setEditIndex }) => {
  const navigate = useNavigate();

  const handleDelete = (index) => {
    const updatedItems = expenses.filter((_, i) => i !== index);
    localStorage.setItem("expense", JSON.stringify(updatedItems));
    setExpenses(updatedItems);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    navigate('/');
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <Heading title={"Expense Table"} />
        </div>
        <div className="p-6">
          <Table expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseTable;
