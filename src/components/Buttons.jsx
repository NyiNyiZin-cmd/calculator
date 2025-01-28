function Buttons({ handleCalculation }) {
  const buttons = [
    "C", "AC", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "00", "0", ".", "="
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {buttons.map((btn, index) => (
        <button
          key={index}
          onClick={() => handleCalculation(btn)}
          className={`
            ${btn === "=" ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-700 hover:bg-gray-600"}
            ${["C", "AC"].includes(btn) ? "text-red-500" : "text-white"}
            ${["%", "/", "*", "-", "+"].includes(btn) ? "text-green-400" : ""}
            aspect-square rounded-2xl text-3xl font-semibold transition-all duration-200
            active:scale-95 shadow-lg flex items-center justify-center
          `}
        >
          {btn}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
