import React from 'react';
import './Navbar.scss'
import UContainer from '../../Untils/UContainer';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <UContainer>
        <div className="navbar__container">
          <div className="navbar__logo"><Link to='/'>The Rick and Morty</Link></div>
          <ul className="navbar__list">
            <li className="navbar__link"><Link to='/'>Home</Link></li>
            <li className="navbar__link"><Link to='/episodes'>Episodes</Link></li>
            <li className="navbar__link"><Link to='/location'>Location</Link></li>
          </ul>
        </div>
      </UContainer>
    </div>
  );
}

export default Navbar;
