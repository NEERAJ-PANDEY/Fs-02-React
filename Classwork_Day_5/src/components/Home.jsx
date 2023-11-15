import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Layout from "./Layout";

const Home = () => {
  return (
    <div>
      <img
        src="https://tse4.mm.bing.net/th?id=OIP.BkrParRzYN9sHoy15_fcnQHaFl&pid=Api&P=0&h=180"
        alt="Family wellness"
        className="navbar-logo"
      />
      <h1 className="class-title">Family Wellness</h1>
      <h2 className="class-title">Massage Therapy</h2>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
