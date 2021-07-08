import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MenuRounded } from '@material-ui/icons';
import { Menu, IconButton, MenuItem } from '@material-ui/core';
import logo from '../../assets/images/logo.png';
import '../../assets/styles/index.css';

const NavBar = ({
  skillsRef,
  workRef,
  contactsRef,
  scrollToSection,
  isVisible
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (ref) => {
    scrollToSection(ref);
  };

  const renderDeskMenu =  
    <div
      className='nav-items-wrapper desktopMenu'>
      <button
        className='nav-item'
        id='nav-item-skills'
        onClick={() => handleClick(skillsRef)}>
        {'Skills'}
      </button>
      <button
        className='nav-item'
        onClick={() => handleClick(workRef)}
        id='nav-item-work'>
        {'Work'}
      </button>
      <button
        className='nav-item'
        onClick={() => handleClick(contactsRef)}
        id='nav-item-contancts'>
        {'Contacts'}
      </button>
    </div>;

  const renderMobileMenu =  
    <Menu
      id='mobile-menu'
      anchorEl={anchorEl}
      open={open}
      style={{ top: '-1em', right: '-2em', width: '400px' }}
      onClose={handleMenuClose}>
      <MenuItem
        className='mobile-menu-item'
        onClick={() => handleClick(skillsRef)}>
        <span className='nav-item mobile-item'>{'Skills'}</span>
      </MenuItem>
      <MenuItem
        className='mobile-menu-item'
        onClick={() => handleClick(workRef)}>
        <span className='nav-item mobile-item'>{'Work'}</span>
      </MenuItem>
      <MenuItem
        className='mobile-menu-item'
        onClick={() => handleClick(contactsRef)}>
        <span className='nav-item mobile-item'>{'Contacts'}</span>
      </MenuItem>
    </Menu>;

  return <div className='nav'>
    <header style={isVisible ?
      { top: '0' } :
      { top: '-100px' }}
    className='nav-bar'>
      <div className='logo-wrapper'>
        <img src={logo} alt='logo' className='logo' id='logo' />
      </div>
      <div className='mobile-menu-wrapper mobileMenu'>
        <IconButton
          edge='start'
          aria-haspopup='true'
          aria-controls='mobile-menu'
          onClick={handleMenuClick}
          className='mobileMenu mobile-menu-btn'>
          <MenuRounded
            style={{ marginRight: '0.5em', fontSize: '2.3em' }}
            fontSize='large' />
        </IconButton>
      </div>
      {renderMobileMenu}
      {renderDeskMenu}
    </header>
    
  </div>;
};

NavBar.propTypes = {
  scrollToSection: PropTypes.func,
  skillsRef: PropTypes.any,
  workRef: PropTypes.any,
  setCurrentRef: PropTypes.func,
  currentRef: PropTypes.any,
  isVisible: PropTypes.any,
  contactsRef: PropTypes.any
};

export default NavBar;
