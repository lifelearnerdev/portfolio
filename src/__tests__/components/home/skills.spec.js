import { shallow, mount } from 'enzyme';
import { Skills } from '../../../components/home/skills';
import {
  SkillsCard,
  Title } from '../../../components/home/utils';
import { Person } from '@material-ui/icons';

describe('<Skills />', () => {
  let wrapper;
  const skillsRef = jest.fn();
  wrapper = shallow(<Skills skillsRef={skillsRef} />);
  it('should render the <Skills /> component', () => { 
    expect(wrapper.length).toBe(1);
  });
  it('should call the <Title /> with title Skills', () => {
    expect(wrapper.find(Title).at(0).prop('title')).toEqual('Skills');
  });
  it('should call the <SkillsCard />', () => {
    expect(wrapper.find(SkillsCard).length).toBe(3);
  });
});

describe('<Title />', () => {
  let wrapper = shallow(<Title title='Skills' />);
  it('should render the <Title /> component', () => {
    expect(wrapper.length).toBe(1);
  });
});

describe('<SkillsCard />', () => {
  const title = 'User Experience';
  const skills = [
    {
      id: 1,
      label: 'HTML',
      size: 2
    }
  ];
  let wrapper = mount(
    <SkillsCard
      title={title}
      Icon={Person}
      skills={skills}
    />);
  it('should render the <SkillsCard /> component', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should contain card icon', () => {
    expect(wrapper.find(Person).length).toBe(1);
  });
  it('should contain card icon', () => {
    expect(wrapper.find('#card-title').props().children).toEqual(title);
  });
});
