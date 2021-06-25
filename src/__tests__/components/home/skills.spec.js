import { shallow } from 'enzyme';
import { Skills } from '../../../components/home/skills';
import { Title } from '../../../components/home/utils';

describe('<Skills />', () => {
  let wrapper;
  const skillsRef = jest.fn();
  wrapper = shallow(<Skills skillsRef={skillsRef} />);
  it('should render the <Skills /> component', () => { 
    expect(wrapper.length).toBe(1);
  });
  it('should render the <Title /> with title Skills', () => {
    expect(wrapper.find(Title).at(0).prop('title')).toEqual('Skills');
  });
});

describe('<Title />', () => {
  let wrapper = shallow(<Title title='Skills' />);
  it('should render the <Title /> component', () => {
    expect(wrapper.find('h2').props().children).toEqual('Skills');
  });
});
