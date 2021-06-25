import { shallow } from 'enzyme';
import Me from '../../../components/home/me';
import profileImg from '../../../assets/images/profile.jpg';

describe('<Me />', () => {
  let wrapper = shallow(<Me />);
  
  it('should render the <Me /> component', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render my profile image', () => {
    expect(wrapper.find('img').prop('src')).toEqual(profileImg);
  });
});
