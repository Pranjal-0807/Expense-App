import React from "react";
import ExpenseForm from "./pages/ExpenseForm";
import ExpenseTable from "./pages/ExpenseTable";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expense")) || []
  );
  const [editIndex, setEditIndex] = useState(-1);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ExpenseForm setExpenses={setExpenses} editIndex={editIndex} />} />
        <Route path="/table" element={<ExpenseTable expenses = {expenses} setExpenses={setExpenses} setEditIndex={setEditIndex} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
