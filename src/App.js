import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import About from './components/About/About.js';


function App() {
  return (
    <div className="App">

      <Navbar />
      <div className="front-page">
        <h1>  HOOOO </h1>
      </div>
      
      <About />
    </div>
  );
}

export default App;
//build a route called signin that only jen knows(do regular auth bc there will be no signup form)
//make new post button available only if this.currentUser == user
