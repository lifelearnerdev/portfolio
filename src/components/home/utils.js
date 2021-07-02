import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { FiberManualRecordOutlined, Clear } from '@material-ui/icons';
import { useState } from 'react';

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
  projectName,
  projectDesc,
  projectSkills,
  direction,
  projectLink,
  mobile,
  classes
}) => {
  const [isDescriptionOn, setIsDescriptionOn] = useState(false);
  const [isHoverOn, setIsHoverOn] = useState(false);
  const [isDotsHover, setIsDotsHover] = useState(false);

  const handleToggleDesc = () => {
    setIsDescriptionOn(!isDescriptionOn);
  };

  const handleToggleHover = () => {
    setIsHoverOn(true);
  };

  const handleDotsHover = () => {
    setIsDotsHover(true);
  };

  const handleToggleLeave = () => {
    setIsHoverOn(false);
  };

  const handleDotsLeave = () => {
    setIsDotsHover(false);
  };

  const toggleButton =
    <div 
      className='sample-toggle-btn'
      style={direction
        ? {
          justifyContent: 'flex-start',
        } : {
          justifyContent: 'flex-end'
        } }
      onMouseLeave={handleDotsLeave}
      onMouseOver={handleDotsHover}>
      <IconButton
        onClick={handleToggleDesc}
        className='sample-icon-btn'
        style={direction
          ? {
            float: 'left',
            backgroundColor: 'transparent'
          } : {
            backgroundColor: 'transparent'
          } }
        disableFocusRipple={true}
        disableRipple>
        {isDescriptionOn
          ? <Clear fontSize='large' color='error' />
          : 
          <div
            className='sample-btns'>
            <div
              className='tree-dots'
              style={isHoverOn || isDotsHover
                ? { display: 'block' }
                : { display: 'none' }}>
              <FiberManualRecordOutlined
                fontSize='small'
                color='error' />
              <FiberManualRecordOutlined
                fontSize='small'
                color='error' />
              <FiberManualRecordOutlined
                fontSize='small'
                color='error' />
            </div>
          </div>
        }
      </IconButton>
    </div>;

  const withSample =
    !direction
      ? <div
        className='work-with-sample'
        onMouseLeave={handleToggleLeave}
        onMouseOver={handleToggleHover}>
        <div className={`work-img-div ${classes}`}>
          {mobile && <div className='work-img-div-mobile' />}
        </div>
        <div id='project-name'>
          {projectName}
        </div>
      </div> : <div
        className='work-with-sample'
        onMouseLeave={handleToggleLeave}
        onMouseOver={handleToggleHover}>
        <div id='project-name-left'>
          {projectName}
        </div>
        <div className={`work-img-div-left ${classes}`}>
          {mobile && <div className='work-img-div-mob-port' />}
        </div>
      </div>;
  const withDesc = 
    <div className='with-desc-wrapper'>
      <div className='work-desc'>
        <div className='work-project-name'>
          {projectName}
        </div>
        <div className='project-desc'>
          {projectDesc}
        </div>
        <div className='work-skills'>
          <div className='work-skills-container'>
            {projectSkills.map((skill, i) =>
              <div key={i}>{skill}</div>
            )}
          </div>
          <div className='work-divider' />
          <div className='go-to-site'>
            <a
              id='go-to-site'
              target='_blank'
              rel='noreferrer'
              href={projectLink}>
              {`Go to ${projectName} site`}
            </a>
          </div>
        </div>
      </div>
    </div>;

  return <div className={!direction
    ? 'work-sample-wrapper work-hide'
    : 'work-sample-wrapper '}>
    {toggleButton}
    {isDescriptionOn
      ? withDesc
      : withSample}
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
  projectName: PropTypes.string.isRequired,
  projectDesc: PropTypes.string.isRequired,
  projectSkills: PropTypes.array.isRequired,
  direction: PropTypes.string,
  projectLink: PropTypes.string,
  mobile: PropTypes.any,
  classes: PropTypes.string.isRequired
};
