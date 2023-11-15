import React from "react";
import { BrowserRouter, Router, Route } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" flex bg-white justify-around  items-center  p-3 navbar">
      <div className="flex justify-center items-center">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.qyk2UbY9NmFkYJuD6el_vAHaF7&pid=Api&P=0&h=180"
          alt="logo"
          className="w-20"
        />
        <span className="ml-2 text-xl font-bold text-gray-600">Geeks Food</span>
      </div>
      <div>
        <BrowserRouter>
          <div className="font-bold text-xl cursor-pointer">
            Home Quote Restaurants Foods Contact
          </div>
        </BrowserRouter>
      </div>
      <div>
        <button className="border-2 border-solid border-indigo-600 bg-indigo-500 text-white text-x rounded-xl py-2 px-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
