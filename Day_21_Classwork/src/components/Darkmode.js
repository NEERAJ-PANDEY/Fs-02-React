import React, { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = {
    background: darkMode ? "black" : "white",
    color: darkMode ? "white" : "black",
  };

  return (
    <div style={theme}>
      <h1>Dark Mode React App</h1>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default App;