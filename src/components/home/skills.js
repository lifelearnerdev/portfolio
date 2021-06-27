// import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Title, SkillsCard } from './utils';
import { Person, Airplay, StorageRounded } from '@material-ui/icons';

export const Skills = ({
  skillsRef,
}) => {
  const userSkills = [
    {
      id: 1,
      label: 'User stories',
      size: 1
    },
    {
      id: 2,
      label: 'Wire Framing',
      size: 1.8
    },
    {
      id: 3,
      label: 'Interface Design',
      size: 0.8,
    },
    {
      id: 4,
      label: 'Usability and User Research',
      size: 0.8,
    },
    {
      id: 5,
      label: 'Figma',
      size: 1.8
    },
  ];
  const feSkills = [
    {
      id: 1,
      label: 'HTML5',
      size: 1
    },
    {
      id: 2,
      label: 'CSS3',
      size: 1
    },
    {
      id: 3,
      label: 'Javascript',
      size: 1.3,
    },
    {
      id: 4,
      label: 'MV* Frameworks',
      size: 1,
    },
    {
      id: 5,
      label: 'React JS',
      size: 1.8
    },
    {
      id: 6,
      label: 'Redux',
      size: 1.3
    },
    {
      id: 18,
      label: 'Context API',
      size: 1.3
    },
    {
      id: 7,
      label: 'Next JS',
      size: 1
    },
    {
      id: 8,
      label: 'CSS Pre-Processors',
      size: 1
    },
    {
      id: 9,
      label: 'Node',
      size: 1.3
    },
    {
      id: 10,
      label: 'Cross-Browser Compatbility',
      size: 1.3
    },
    {
      id: 11,
      label: 'Docker',
      size: 1
    },
    {
      id: 12,
      label: 'ES2020',
      size: 1.3
    },
    {
      id: 13,
      label: 'Responsive Design',
      size: 1.8
    },
    {
      id: 16,
      label: 'Webpack',
      size: 1
    },
    {
      id: 17,
      label: 'TDD',
      size: 1.3
    },
    {
      id: 14,
      label: 'Material UI',
      size: 1.3
    },
    {
      id: 15,
      label: 'Bootstrap',
      size: 1
    },
  ];
  const beSkills = [
    {
      id: 1,
      label: 'Node JS',
      size: 1.8
    },
    {
      id: 2,
      label: 'MVC Frameworks',
      size: 1
    },
    {
      id: 3,
      label: 'API Architecture',
      size: 1.3,
    },
    {
      id: 4,
      label: 'Authentication',
      size: 1,
    },
    {
      id: 5,
      label: 'Docker',
      size: 1.3
    },
    {
      id: 6,
      label: 'REST Endpoints',
      size: 1.8
    },
    {
      id: 7,
      label: 'PostgresQL',
      size: 1
    },
    {
      id: 8,
      label: 'GraphQL',
      size: 1.3
    },
    {
      id: 11,
      label: 'TDD',
      size: 1.3
    },
    {
      id: 9,
      label: 'Python',
      size: 1
    },
    {
      id: 10,
      label: 'Flask',
      size: 0.8
    },
  ];

  return (
    <div
      ref={skillsRef}
      className='skills-wrapper'
    >
      <Title title='Skills' />
      <div className='skills-cards'>
        <SkillsCard
          Icon={Person}
          title='User Experience'
          skills={userSkills}
        />
        <SkillsCard
          Icon={Airplay}
          title='Front End'
          skills={feSkills}
        />
        <SkillsCard
          Icon={StorageRounded}
          title='Back End'
          skills={beSkills}
        />
      </div>
    </div>
  );
};

Skills.propTypes = {
  skillsRef: PropTypes.any
};

export default Skills;
