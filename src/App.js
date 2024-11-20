import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ExpenseFormPage from "./pages/ExpenseFormPage";
import ExpenseTablePage from "./pages/ExpenseTablePage";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  // Load expenses from localStorage on mount
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <main className="container mx-auto mt-8 p-4">
        <Routes>
          {/* Define Routes */}
          <Route
            path="/"
            element={
              <ExpenseFormPage expenses={expenses} setExpenses={setExpenses} />
            }
          />
          <Route
            path="/expenses"
            element={
              <ExpenseTablePage expenses={expenses} setExpenses={setExpenses} />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
