import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Homepage from './components/Homepage/Homepage.js'
import About from './components/About/About.js'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <About />
    </div>
  );
}

export default App;
//build a route called signin that only jen knows(do regular auth bc there will be no signup form)
//make new post button available only if this.currentUser == user
