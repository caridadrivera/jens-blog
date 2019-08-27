import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  //in articles, have list for health,
  //a post belongs to a user
  // post has a title, image and content

  render() {
    return (
      <div className="nav-container">
        <a href="#">HOME</a>
        <a href="#">ARTICLES</a>
        <a href="#about">ABOUT</a>
        <a href="#">CONTACT</a>
     </div>

    )
  }

}

export default Navbar;
