import PropTypes from 'prop-types';
import Title from './utils';

export const Skills = ({ skillsRef }) => {
  return (
    <div ref={skillsRef}>
      <Title title='Skills' />
    </div>
  );
};

Skills.propTypes = {
  skillsRef: PropTypes.any
};

export default Skills;
