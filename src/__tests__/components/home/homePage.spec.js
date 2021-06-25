import { shallow } from 'enzyme';
import HomePage from '../../../components/home/homePage';
import NavBar from '../../../components/home/navBar';
import Me from '../../../components/home/me';
// import { Skills } from '../../../components/home/skills'; 

describe('Should render <HomePage />', () => {
  let wrapper = shallow(<HomePage />);
  it('It should render home page content', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should call the NavBar component', () => {
    expect(wrapper.find(NavBar).length).toBe(1);
  });
  it('should call the Skills component', () => {
    expect(wrapper.find(Me).length).toBe(1);
  });
  // it('should call the Me component', () => {
  //   const skillsRef = jest.fn();
  //   expect(wrapper.find(Skills).length).toBe(1);
  //   expect(wrapper.find(Skills).at(0).prop('skillsRef')).toEqual(skillsRef);
  // });
});
