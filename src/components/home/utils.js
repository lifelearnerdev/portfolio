import PropTypes from 'prop-types';

export const Title = ({ title }) => {
  return (
    <div className='title-wrapper'>
      <h2 id='title'>
        {title}
      </h2>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string
};

export default Title;
