const Button = ({ type, title, color, handleClick }) => {
  const colorClasses = {
    indigo: "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
    red: "bg-red-600 hover:bg-red-700 focus:ring-red-500",
    blue: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
  };

  return (
    <div className="text-center">
      <button
        onClick={handleClick}
        type={type}
        className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white mr-2 text ${
          colorClasses[color] ||
          "bg-green-600 hover:bg-green-700 focus:ring-green-500"
        }`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
