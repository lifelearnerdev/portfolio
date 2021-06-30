import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { FiberManualRecordOutlined } from '@material-ui/icons';

export const Title = ({ title }) => {
  return (
    <div className='title-wrapper'>
      <h2 id='title'>
        {title}
      </h2>
      <div className='title-liner' />
    </div>
  );
};



export const SkillsCard = ({
  Icon,
  title,
  skills
}) => {
  const SkillsList = () => {
    return (
      <div className='card-list'>
        {skills.map(skill => 
          <div
            key={skill.id}
            style={{ fontSize: `${skill.size}rem` }}
            className='card-item'
          >
            {skill.label}
          </div>
        )}
      </div>
    );
  };
  return (
    <div className='card-wrapper'>
      <Icon fontSize='large' />
      <div id='card-title'>
        {title}
      </div>
      <SkillsList />
    </div>
  );
};

export const WorkSample = ({
  sampleImg,
  projectName,
  projectDesc,
  projectSkills,
  direction
}) => {
  const toggleButton =
  <IconButton style={direction === 'left'
    ? { float: 'left' } : { float: 'right' } }>
    <FiberManualRecordOutlined />
    <FiberManualRecordOutlined />
    <FiberManualRecordOutlined />
  </IconButton>;

  const withSample =
    <div className='work-with-sample'>
      <div className='work-img-div'>
        <img
          src={sampleImg}
          alt='sample image'
          className='sample-img' />
      </div>
      <span id='project-name'>
        {projectName}
      </span>
    </div>;
  const withDesc = 
    <div>
      <div>
        {projectName}
      </div>
      <div>
        {projectDesc}
      </div>
      <div>
        {projectSkills}
      </div>
      <button id='go-to-site'>
        {`go to ${projectName} site`}
      </button>
    </div>;
  return <div className='work-sample-wrapper'>
    {toggleButton}
    {withSample}
    {withDesc}
  </div>;
};

Title.propTypes = {
  title: PropTypes.string
};
SkillsCard.propTypes = {
  Icon: PropTypes.any,
  title: PropTypes.string.isRequired,
  skills: PropTypes.array
};
WorkSample.propTypes = {
  sampleImg: PropTypes.any,
  projectName: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  projectSkills: PropTypes.array.isRequired,
  direction: PropTypes.string
};
