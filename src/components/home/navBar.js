import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { MenuRounded } from '@material-ui/icons';
import logo from '../../assets/images/logo.png';
import '../../assets/styles/index.css';

const NavBar = ({
  skillsRef,
  scrollToSection
}) => {

  const deskRef = useRef();

  const renderDeskMenu =  
    <div
      className='nav-items-wrapper desktopMenu'
      ref={deskRef}
    >
      <button
        className='nav-item'
        id='nav-item-contancts'
      >
        {'Contacts'}
      </button>
      <button
        className='nav-item'
        id='nav-item-work'
      >
        {'Work'}
      </button>
      <button
        className='nav-item'
        id='nav-item-skills'
        onClick={() => handleClick(skillsRef)}
      >
        {'Skills'}
      </button>
    </div>;

  const renderMobileMenu =  
    <div
      className='nav-items-wrapper mobileMenu'
      // ref={deskRef}
      id='menu'
      role='menu'
      aria-labelledby='menu-button'
    >
      <button
        className='nav-item'
        id='nav-item-contancts'
      >
        {'Contacts'}
      </button>
      <button
        className='nav-item'
        id='nav-item-work'
      >
        {'Work'}
      </button>
      <button
        className='nav-item'
        id='nav-item-skills'
        onClick={() => handleClick(skillsRef)}
      >
        {'Skills'}
      </button>
    </div>;

  const handleClick = (ref) => {
    scrollToSection(ref);
  };

  return (
    <div className='nav-bar'>
      <div className='logo-wrapper'>
        <img src={logo} alt='logo' className='logo' id='logo' />
      </div>
      <MenuRounded
        id='menu-button'
        role='button'
        className='menu-mobile'
        aria-aria-haspopup='true'
        aria-aria-controls='menu'
      />
      {renderMobileMenu}
      {renderDeskMenu}
    </div>
  );
};

NavBar.propTypes = {
  scrollToSection: PropTypes.func,
  skillsRef: PropTypes.any,
  workRef: PropTypes.any,
  setCurrentRef: PropTypes.func
};

export default NavBar;
