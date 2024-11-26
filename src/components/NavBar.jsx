import React from "react";
import { NavLink } from "react-router-dom";
import { items } from "../utils/helper";

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Expense Tracker</h1>
        <ul className="flex space-x-4">
          {items.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className="text-white hover:text-gray-200 transition duration-200"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
