import { useState } from "react";
import "./App.css";

function App() {
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [number, setNumber] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");

  const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
  const symbols = "!@#$%^&*()_+/*-+?><.,~`";
  const numbers = "0123456789";

  let generatedPassword = upperCase;
  if (uppercase === true) {
    generatedPassword += upperCase;
  }
  if (lowercase === true) {
    generatedPassword += lowerCase;
  }
  if (symbol === true) {
    generatedPassword += symbols;
  }
  if (number === true) {
    generatedPassword += numbers;
  }

  const pswdClick = () => {
    var pwd = "";
    for (let i = 0; i < length; i++) {
      const password = Math.floor(Math.random() * generatedPassword.length);
      const generatedPswd = generatedPassword[password];
      pwd = pwd + generatedPswd;
    }
    setPassword(pwd);
  };

  function handleLowercase() {
    setLowercase(!lowercase);
  }
  function handleNumbers() {
    setNumber(!number);
  }
  function handleSymbols() {
    setSymbol(!symbol);
  }

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-xl font-bold m-3">Random Password Generator</h1>
      <div>
        <label htmlFor="length">Enter Password Length: </label>
        <input
          type="number"
          id="length"
          value={length}
          className="border-2 rounded p-0.5"
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lowercase">Include Lowercase </label>
        <input
          type="checkbox"
          id="lowercase"
          value={lowercase}
          onChange={handleLowercase}
        />
      </div>
      <div>
        <label htmlFor="symbols">Include Symbols </label>
        <input
          type="checkbox"
          id="symbols"
          value={symbol}
          onChange={handleSymbols}
        />
      </div>
      <div>
        <label htmlFor="Numbers">Include Numbers </label>
        <input
          type="checkbox"
          id="Numbers"
          value={number}
          onChange={handleNumbers}
        />
      </div>
      <button
        className="bg-slate-500 py-2 px-3 m-3 rounded text-white"
        onClick={pswdClick}
      >
        Generate Password
      </button>
      <div>
        <input
          type="text"
          className="rounded border-2 m-2 p-0.5 w-24"
          value={password}
        />
        <i
          className="fa-regular fa-copy cursor-pointer"
          onClick={copyPassword}
        ></i>
      </div>
    </div>
  );
}

export default App;
