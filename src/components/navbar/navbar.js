import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {

  render() {
    return (
      <div className="nav-container">
        <a href="#">HOME</a>
        <a href="#">ARTICLES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT</a>
     </div>

    )
  }

}

export default Navbar;
