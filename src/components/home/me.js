import profileImg from '../../assets/images/profile.JPG';
import '../../assets/styles/index.css';

const Me = () => <div className='me-main'>
  <div className='me-wrapper'>
    <div className='me-img-wrapper content'>
      <img id='profile' className='profile-img' src={profileImg} />
    </div>
    <h1 className='me-name'>
      {'Eric Malaba'}
    </h1>
    <p className='me-description content'>
      {'Software Engineer, Full-stack Web Developper\
           with focus on the front-end. Pationate about \
           Javascript and a Blockchain enthousiast.'}
    </p>
  </div>
</div>;

export default Me;
