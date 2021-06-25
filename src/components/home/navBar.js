import React, { memo } from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';
import '../../assets/styles/index.css';

const NavBar = ({
  setCurrentRef,
  skillsRef
}) => {
  const handleSkillsClick = () => {
    setCurrentRef(skillsRef);
  };

  return (
    <div className='nav-bar'>
      <div className='logo-wrapper'>
        <img src={logo} alt='logo' className='logo' id='logo' />
      </div>
      <div className='nav-items-wrapper'>
        <button
          className='nav-item'
          onClick={handleSkillsClick}
        >
          {'Skills'}
        </button>
        <button className='nav-item'>
          {'Work'}
        </button>
        <button className='nav-item'>
          {'Contacts'}
        </button>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  setCurrentRef: PropTypes.func,
  skillsRef: PropTypes.element
};

export default memo(NavBar);
