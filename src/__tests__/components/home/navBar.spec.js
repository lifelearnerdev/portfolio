import { shallow } from 'enzyme';
import NavBar from '../../../components/home/NavBar';
import logo from '../../../assets/images/logo.png';

describe('<NavBar />', () => {
  let wrapper = shallow(<NavBar />);
  
  it('should render <NavBar>', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render the logo', () => {
    expect(wrapper.find('img').prop('src')).toEqual(logo);
  });
});
