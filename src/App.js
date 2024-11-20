import React from "react";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import ExpenseTable from "./components/ExpenseTable";

const App = () => {
  return (
    <div>
      <NavBar />
      <Form />
      <ExpenseTable />
    </div>
  );
};

export default App;
