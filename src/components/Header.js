import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <header className="header">
      <a href="/" className="white black-text center"><h1>ejam</h1></a>
      <ul className="side-menu">
        <li>
          <Link to='/add'><i className="material-icons add-deployment-btn black-text">add_box</i></Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
