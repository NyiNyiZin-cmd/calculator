import { useState } from "react";
import Buttons from "./components/Buttons";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  const [output, setOutput] = useState(0);
  const [input, setInput] = useState(0);

  const handleCalculation = (value) => {
    switch (value) {
      case "C":
        setOutput(0);
        setInput(0);
        break;

      case "AC":
        input.length == 1 ? setInput(0) : setInput(input.slice(0, input.length - 1));
        break;

      case "=":
        try {
          let expression = input;
          if (expression.includes('%')) {
            expression = expression.replace(/%/g, '/100');
          }
          setOutput(eval(expression));
          setInput(0);
        } catch (e) {
          setOutput(e.message);
        }
        break;

      default:
        input == 0 ? setInput(value) : setInput(input + value);
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="w-full h-full md:h-auto md:w-[500px] lg:w-[600px] flex flex-col">
        <div className="flex-1 md:min-h-[300px] flex flex-col p-4">
          <div className="flex-1 flex flex-col justify-end bg-gray-900 rounded-t-3xl p-6">
            <Output output={output} />
            <Input input={input} />
          </div>
        </div>
        <div className="bg-gray-800 p-4 md:p-6 rounded-t-3xl shadow-2xl">
          <Buttons handleCalculation={handleCalculation} />
        </div>
      </div>
    </div>
  );
}

export default App;
