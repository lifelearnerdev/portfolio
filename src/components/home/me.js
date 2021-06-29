import profileImg from '../../assets/images/profile.jpg';
import '../../assets/styles/index.css';

const Me = () => {
  return (
    <div className='me-main'>
      <div className='me-wrapper'>
        <div className='me-img-wrapper content'>
          <img id='profile' className='profile-img' src={profileImg} />
        </div>
        <h1 className='me-name'>
          {'Eric Malaba'}
        </h1>
        <p className='me-description content'>
          {'Software Engineer, Full-stack Web Developper\
           with focus to the front-end. Pationate about \
           Javascript and a Blockchain enthousiast.'}
        </p>
      </div>
    </div>
  );
};

export default Me;
