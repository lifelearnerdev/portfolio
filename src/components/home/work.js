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
  const ahDesc = `Soon after joining Andela as a Full-time Employee,
   I contributed to building a Medium like application, for Andela internal use
   where writers within the company express themselves through their piece of
   writing. Our 10 Developers team built this App using Node.js on the Backend
   and React.js on the Frontend.`;
  const siaDesc = `After joining Signalytics.ai as a Frontend Engineer,
  I started working on their e-commerce project. This is a rebate based
  application that allows customers to buy products via amazon and receive 
  a percentage in refund.`;
  const baobabSkills = [
    'React.js', 'Webpack', 'Docker', 'React Router', 'ES6/2021', 'Bootstrap',
    'Context API'
  ];
  const healthIDSkills = [
    'React.js', 'Redux', 'Context API', 'GraphQL',
    'Context API', 'SASS', 'User Experience'
  ];
  const ahSkills = [
    'Node.js', 'PostgresQL', 'API Architecture', 'React.js',
    'Webpack', 'REST Endpoints', 'Authentication',
  ];
  const siaSkills = [
    'React.js', 'Tailwind', 'Responsive Design', 'Pug', 'Docker',
    'Graphics Design', 'Payment Integration'
  ];
  return <div className='work-wrapper' ref={workRef}>
    <Title title='Work' />
    <WorkSample
      direction='left'
      projectName='Signalytics'
      projectDesc={siaDesc}
      classes='work-img-div-portfolio'
      projectLink='http://dashboard.signalytics.ai/'
      projectSkills={siaSkills} />
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
  </div>;
};

Work.propTypes = {
  workRef: PropTypes.any
};

export default React.memo(Work);
