import React, { useRef } from 'react';
import NavBar from './navBar';
import Me from './me';
import Skills from './skills';

const HomePage = () => {
  const skillsRef = useRef();

  const scrollToSection = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  return (
    <>
      <div className='main-wrapper'>
        <NavBar
          skillsRef={skillsRef}
          scrollToSection={scrollToSection}
        />
        <Me />
        <Skills skillsRef={skillsRef} />
      </div>
    </>
  );
};

export default React.memo(HomePage);
