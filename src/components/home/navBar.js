import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MenuRounded } from '@material-ui/icons';
import { Menu, IconButton, MenuItem } from '@material-ui/core';
import logo from '../../assets/images/logo.png';
import '../../assets/styles/index.css';

const NavBar = ({
  skillsRef,
  scrollToSection,
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
        id='nav-item-work'>
        {'Work'}
      </button>
      <button
        className='nav-item'
        id='nav-item-contancts'>
        {'Contacts'}
      </button>
    </div>;

  const renderMobileMenu =  
    <Menu
      id='mobile-menu'
      anchorEl={anchorEl}
      open={open}
      onClose={handleMenuClose}>
      <MenuItem
        onClick={() => handleClick(skillsRef)}>
        <span className='nav-item'>{'Skills'}</span>
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}>
        <span className='nav-item'>{'Work'}</span>
      </MenuItem>
      <MenuItem
        onClick={handleMenuClose}>
        <span className='nav-item'>{'Contacts'}</span>
      </MenuItem>
    </Menu>;

  return (
    <div className='nav-bar'>
      <div className='logo-wrapper'>
        <img src={logo} alt='logo' className='logo' id='logo' />
      </div>
      <div className='mobile-menu-wrapper mobileMenu'>
        <IconButton
          edge='start'
          aria-haspopup='true'
          aria-controls='mobile-menu'
          onClick={handleMenuClick}
          className='mobileMenu'>
          <MenuRounded fontSize='large'/>
        </IconButton>
      </div>
      {renderMobileMenu}
      {renderDeskMenu}
    </div>
  );
};

NavBar.propTypes = {
  scrollToSection: PropTypes.func,
  skillsRef: PropTypes.any,
  workRef: PropTypes.any,
  setCurrentRef: PropTypes.func,
  currentRef: PropTypes.any
};

export default NavBar;
