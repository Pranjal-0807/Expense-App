import React from "react";

const Input = ({ title, id, type }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {title}
      </label>
      <input
        type={type}
        id={id}
        placeholder={`Enter ${title.toLowerCase()}`}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out transform hover:scale-105"
      />
    </div>
  );
};

export default Input;
