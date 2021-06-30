import { shallow } from 'enzyme';
import Work from '../../../components/home/work';
import WorkSample from '../../../components/home/utils';
import baobab from '../../../assets/images/baobab.png';

describe('<Work />', () => {
  let wrapper = shallow(<Work />);
  it('should render the <Component /> compoenent', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should call the <WorkSample> component', () => {
    expect(wrapper.find(WorkSample).at(0).length).toBe(1);
  });
});

describe('<WorkSample>', () => {
  const projectName = 'Baobab';
  const projectDesc = 'After joining Deep Learning Indaba,\
  I started working on an  internal project called Baobab';
  const goToSite = 'https://deeplearning-indaba.com';
  let wrapper = shallow(<WorkSample sampleImg={baobab} />);
  it('should render the <WorkSample /> component', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should render an sample image', () => {
    expect(wrapper.find('img').prop('src')).toEqual(baobab);
  });
  it('should render project name', () => {
    expect(wrapper.find('#project-name')
      .at(0).props().children).toEqual(projectName);
  });
  it('should contain the project description', () => {
    expect(wrapper.find('#project-desc')
      .at(0).props().children).toEqual(projectDesc);
  });
  it('should contain the button to go to the site', () => {
    expect(wrapper.find('#go-to-site')
      .at(0).props().children).toEqual(goToSite);
  });
});
