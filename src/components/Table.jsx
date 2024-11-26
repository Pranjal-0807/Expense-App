import React from "react";
import Button from "./Button";

const Table = ({ expenses, handleDelete, handleEdit }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <tr>
            <th className="py-3 px-4 border-b border-gray-200">Expense Name</th>
            <th className="py-3 px-4 border-b border-gray-200">Amount</th>
            <th className="py-3 px-4 border-b border-gray-200">Date</th>
            <th className="py-3 px-4 border-b border-gray-200">Category</th>
            <th className="py-3 px-4 border-b border-gray-200">Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 transition duration-200">
              <td className="py-3 px-4 border-b border-gray-200 text-center ">{item.title}</td>
              <td className="py-3 px-4 border-b border-gray-200 text-center ">{item.amount}</td>
              <td className="py-3 px-4 border-b border-gray-200 text-center ">{item.date}</td>
              <td className="py-3 px-4 border-b border-gray-200 text-center ">{item.category}</td>
              <td className="py-3 px-4 border-b border-gray-200 text-center ">
                <Button title={"Delete"} color={"red"} handleClick={() => handleDelete(index)}/>
                <Button title={"Edit"} color={"blue"} handleClick={() => handleEdit(index)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
