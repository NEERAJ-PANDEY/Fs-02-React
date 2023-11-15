import React from "react";

const NavBar = () => {
  return (
    <div>
      <div className="container flex justify-around items-center">
        <div className="flex justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44nWiETCowcsEoKK-zgR6e9qjYt-5a1NPxw&usqp=CAU"
            alt="logo"
            className=" h-14"
          />
          <h3 className="text-xl font-bold ml-3">Geek Food</h3>
        </div>

        <ul className="flex nav">
          <li>Home</li>
          <li>Quotes</li>
          <li>Restaurants</li>
          <li>Food</li>
          <li>Contact</li>
        </ul>

        <div>
          <button className="border-2 bg-blue-600 py-2 rounded-xl px-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
