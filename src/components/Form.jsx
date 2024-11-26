import React from "react";
import Input from "./Input";
import DropDown from "./DropDown";
import Button from "./Button";

const Form = ({ handleSubmit }) => {
  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <Input title={"Expense Name"} type={"text"} id={"title"} />
        <Input title={"Amount"} type={"number"} id={"amount"} />
        <Input title={"Date"} type={"date"} id={"date"} />
        <DropDown title={"Category"} id={"category"} items={["Select Category","Food","Transport","Clothing","Rent","Others"]}/>
        <Button title={"Add Expense"} type="submit" color={"indigo"} />
      </form>
    </>
  );
};

export default Form;
