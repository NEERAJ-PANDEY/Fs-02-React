import React from 'react';
import Navbar from './Component/Navbar';
import Main from './Component/Main';
import Section2 from './Component/Section2';
import Section3 from './Component/Section3';
import Footer from './Component/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;
