import React from 'react';
import './Navbar.scss'
import UContainer from '../../Untils/UContainer';
import {NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <div className='navbar'>
      <UContainer>
        <div className="navbar__container">
          <div className="navbar__logo"><Link to='/'>The Rick and Morty</Link></div>
          <ul className="navbar__list">
            <li className="navbar__link"><NavLink to='/'>Home</NavLink></li>
            <li className="navbar__link"><NavLink to='/episodes'>Episodes</NavLink></li>
            <li className="navbar__link"><NavLink to='/location'>Location</NavLink></li>
          </ul>
        </div>
      </UContainer>
    </div>
  );
}

export default Navbar;
