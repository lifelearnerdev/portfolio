import React from 'react';
import PropTypes from 'prop-types';
import { WorkSample, Title } from './utils';
import ahMobile from '../../assets/images/ah.png';

export const Work = ({ workRef }) => {
  const baobabDesc = `After joining Deep Learning Indaba,
   I started working on the Baobab project that used internally within the
   organization. Here I developed a set of WYSIWYG form creators using React.js
    used by the company's admins to generate Application forms as well as
    Review forms.`;
  const healthIDDesc = `Working as an Associate Software Engineer, I joined the
  team at Lifestores Pharmacies to Build HealthID, which is an Inventory
   Management System. My first Task was to build pages ranging from business
    outlets orders and supplier information. We used React.js to develop the
    Frontend.`;
  const ahDesc = `Soon after joining Andela as a Full time Employee,
   I contributed to building a Medium like application, for Andela Internal use,
   where writers within the company express themselves through their peice of
   writing. Our 10 Developers team built this App using Node.js on the Backend
   and React.js on the Frontend.`;
  const portfolioDesc = `Wait...What? Yeeess, it the very work you're looking
   at. I included this here because of the love and care with which designed and
   and implemented this portfolio. I architectured this using React.js.`;
  const baobabSkills = [
    'React.js', 'Webpack', 'Docker', 'React Router', 'ES6/2021', 'Bootstrap',
    'Context API'
  ];
  const healthIDSkills = [
    'React.js', 'Redux', 'Contex API', 'GraphQL',
    'Context API', 'SASS', 'User Experience'
  ];
  const ahSkills = [
    'Node.js', 'PostgresQL', 'API Architecture', 'React.js',
    'Webpack', 'REST Endpoints', 'Authentication',
  ];
  const portfolioSkills = [
    'React.js', 'Webpack', 'Responsive Design', 'React Router', 'ES6/2021',
    'Graphics Design'
  ];
  return <div className='work-wrapper' ref={workRef}>
    <Title title='Work' />
    <WorkSample
      projectName='Baobab'
      projectDesc={baobabDesc}
      classes='work-img-div-baobab'
      projectLink='https://deeplearningindaba.com/2021'
      projectSkills={baobabSkills} />
    <WorkSample
      direction='left'
      projectName='HealthID'
      projectDesc={healthIDDesc}
      classes='work-img-div-healthid'
      projectLink='https://healthid-fe.herokuapp.com'
      projectSkills={healthIDSkills} />
    <WorkSample
      projectName='Authors Haven'
      projectDesc={ahDesc}
      classes='work-img-div-ah'
      mobile={ahMobile}
      projectLink='https://demeter-ah-frontend-staging.herokuapp.com'
      projectSkills={ahSkills} />
    <WorkSample
      direction='left'
      projectName='Portfolio'
      projectDesc={portfolioDesc}
      mobile={true}
      classes='work-img-div-portfolio'
      projectLink='https://healthid-fe.herokuapp.com'
      projectSkills={portfolioSkills} />
  </div>;
};

Work.propTypes = {
  workRef: PropTypes.any
};

export default React.memo(Work);
