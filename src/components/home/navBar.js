import React, { memo } from 'react';
import logo from '../../assets/images/logo.png';

const NavBar = () => {
  return (
    <div className='nav-bar'>
      <img src={logo} alt='logo' />
      <div>
        <span>
          {'Skills'}
        </span>
        <span>
          {'Work'}
        </span>
        <span>
          {'Contact'}
        </span>
      </div>
    </div>
  );
};

export default memo(NavBar);
