import "./App.css";
import NavBar from "./Components/NavBar";

import React from "react";
import RestaurantsList from "./Components/RestaurantsList"; // adjust the path based on your project structure
import restaurants from "./assets/restaurant";

const App = () => {
  // Your restaurants data

  return (
    <div>
      <NavBar />
      <RestaurantsList restaurants={restaurants} />
    </div>
  );
};

export default App;
