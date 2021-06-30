import React, { useRef } from 'react';
import NavBar from './navBar';
import Me from './me';
import Skills from './skills';
import Work from './work';

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
        <Work />
      </div>
    </>
  );
};

export default React.memo(HomePage);
