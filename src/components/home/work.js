import React from 'react';
import { WorkSample, Title } from './utils';
import baobab from '../../assets/images/baobab.png';
import healthid from '../../assets/images/healthid.png';

export const Work = () => {
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
  const baobabSkills = [
    'React.js', 'Webpack', 'Docker', 'React Router', 'ES6/2021', 'Bootstrap',
    'Context API'
  ];
  const healthIDSkills = [
    'React.js', 'Redux', 'Contax API', 'GraphQL',
    'Context API', 'SASS', 'User Experience'
  ];
  return <div className='work-wrapper'>
    <Title title='Work' />
    <WorkSample
      projectName='Baobab'
      sampleImg={baobab}
      projectDesc={baobabDesc}
      projectSkills={baobabSkills} />
    <WorkSample
      direction='left'
      projectName='HealthID'
      sampleImg={healthid}
      projectDesc={healthIDDesc}
      projectSkills={healthIDSkills} />
  </div>;
};

export default React.memo(Work);
