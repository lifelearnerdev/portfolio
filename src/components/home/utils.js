import PropTypes from 'prop-types';

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

Title.propTypes = {
  title: PropTypes.string
};

SkillsCard.propTypes = {
  Icon: PropTypes.any,
  title: PropTypes.string.isRequired,
  skills: PropTypes.array
};
