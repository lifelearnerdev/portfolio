import React, { useRef } from 'react';
import NavBar from './navBar';
import Me from './me';
import Skills from './skills';
import Work from './work';

const HomePage = () => {
  const skillsRef = useRef();
  const workRef = useRef();

  const scrollToSection = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  return (
    <>
      <div className='main-wrapper'>
        <NavBar
          skillsRef={skillsRef}
          workRef={workRef}
          scrollToSection={scrollToSection}
        />
        <Me />
        <Skills skillsRef={skillsRef} />
        <Work workRef={workRef} />
      </div>
    </>
  );
};

export default React.memo(HomePage);
