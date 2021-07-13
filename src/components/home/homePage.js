import React, { useRef, useEffect, useState } from 'react';
import NavBar from './navBar';
import Me from './me';
import Skills from './skills';
import Work from './work';
import { Contacts } from './contacts';

const HomePage = () => {
  const skillsRef = useRef();
  const workRef = useRef();
  const contactsRef = useRef();
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    const visible = prevScrollPos > currentScroll;
    setPrevScrollPos(currentScroll);
    setIsVisible(visible);
  };

  const scrollToSection = (ref) => {
    window.scrollTo(0, ref.current.offsetTop);
  };

  return <div className='main-wrapper'>
    <NavBar
      skillsRef={skillsRef}
      workRef={workRef}
      contactsRef={contactsRef}
      scrollToSection={scrollToSection}
      isVisible={isVisible}
    />
    <Me />
    <Skills skillsRef={skillsRef} />
    <Work workRef={workRef} />
    <Contacts contactsRef={contactsRef} />
  </div>;
};

export default React.memo(HomePage);
