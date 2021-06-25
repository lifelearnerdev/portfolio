import React, { useRef, useState , useEffect } from 'React';
import NavBar from './navBar';
import Me from './me';
import Skills from './skills';

const HomePage = () => {
  const [currentRef, setCurrentRef] = useState();
  const skillsRef = useRef();
  const scrollToSection = (ref) => window.scrollTo(0, ref.current.offsetTo);

  useEffect(() => {
    scrollToSection(currentRef);
  }, [currentRef]);

  return (
    <>
      <div className='main-wrapper'>
        <NavBar
          skillsRef={skillsRef}
          setCurrentRef={setCurrentRef}
          scrollToSection={scrollToSection}
        />
        <Me />
        <Skills skillsRef={skillsRef} />
      </div>
    </>
  );
};

export default HomePage;
