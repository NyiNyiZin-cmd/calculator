const Buttons = ({ handleCalculation }) => {
  return (
    <div className="bg-gray-800 w-full grid grid-cols-4">
      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        C
      </button>
      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        (
      </button>
      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        )
      </button>
      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        AC
      </button>

      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        1
      </button>
      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        2
      </button>
      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        3
      </button>
      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        +
      </button>

      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        4
      </button>
      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        5
      </button>
      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        6
      </button>
      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        -
      </button>

      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        7
      </button>
      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        8
      </button>
      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        9
      </button>
      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        *
      </button>

      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        .
      </button>
      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        0
      </button>
      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        00
      </button>
      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        &divide;
      </button>

      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  "
      >
        %
      </button>
      <button
        onClick={(e) => handleCalculation(e.target.innerText)}
        className="p-4 text-white transition duration-300 hover:bg-gray-700  bg-amber-700 col-span-3"
      >
        =
      </button>
    </div>
  );
};

export default Buttons;
