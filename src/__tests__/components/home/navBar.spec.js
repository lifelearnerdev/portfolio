import { shallow } from 'enzyme';
import NavBar from '../../../components/home/NavBar';

describe('Should render the Nav Bar', () => {
  let wrapper = shallow(<NavBar />);
  
  it('Should render <NavBar>', () => {
    expect(wrapper.length).toBe(1);
  });
});
