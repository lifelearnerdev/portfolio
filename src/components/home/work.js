import React from 'react';
import { WorkSample } from './utils';
import baobab from '../../assets/images/baobab.png';

export const Work = () => {
  const baobabDesc = `After joining Deep Learning Indaba,
   I started working on the Baobab project that used internally within the
   organization. Here I developed a set of WYSIWYG form creators using React.js
    used by the company's admins to generate Application forms as well as
    Review forms.`;
  const baobabSkills = [
    'React.js', 'Webpack', 'Docker', 'React Router', 'ES6/2021',
  ];
  return <div>
    <WorkSample
      projectName='Baobab'
      sampleImg={baobab}
      projectDesc={baobabDesc}
      projectSkills={baobabSkills} />
  </div>;
};

export default React.memo(Work);
