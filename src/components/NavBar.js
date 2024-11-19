import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-white text-2xl font-bold">Expense Tracker</h1>
        </div>
        <div>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md font-semibold">
            Expense
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;