import { shallow } from 'enzyme';
import NavBar from '../../../components/home/NavBar';
import logo from '../../../assets/images/logo.png';

describe('<NavBar />', () => {
  const skillsRef = <div>Skills</div>;
  const scrollToSection = jest.fn();
  const handleSkillsClick = jest.fn();
  let wrapper = shallow(<NavBar
    skillsRef={skillsRef}
    onClick={handleSkillsClick}
    scrollToSection={scrollToSection} />);
  
  it('should render <NavBar />', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should render the logo', () => {
    expect(wrapper.find('img').prop('src')).toEqual(logo);
  });

  it('should render three buttons in the nav bar', () => {
    const buttons = wrapper.find('button');
    expect(buttons.length).toBe(3);
  });
  it('should simulation skills button click', () => {
    wrapper.find('button').at(0).prop('onClick')();
  });
});
