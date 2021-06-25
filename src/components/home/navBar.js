import React, { memo } from 'react';
import logo from '../../assets/images/logo.png';
import '../../assets/styles/index.css';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <div className='logo-wrapper'>
        <img src={logo} alt='logo' className='logo' id='logo' />
      </div>
      <div className='nav-items-wrapper'>
        <span className='nav-item'>
          {'Skills'}
        </span>
        <span className='nav-item'>
          {'Work'}
        </span>
        <span className='nav-item'>
          {'Contacts'}
        </span>
      </div>
    </div>
  );
};

export default memo(NavBar);
