import React from "react";

const Heading = ({ title }) => {
  return (
    <h1 className="text-4xl font-extrabold mb-8 text-center text-indigo-600 bg-gray-100 p-4 rounded-lg shadow-lg">
      {title}
    </h1>
  );
};

export default Heading;
