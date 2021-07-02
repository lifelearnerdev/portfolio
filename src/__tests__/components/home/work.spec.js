import { shallow } from 'enzyme';
import Work from '../../../components/home/work';
import { WorkSample } from '../../../components/home/utils';

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
  const projectDesc = 'After joining Deep Learning Indaba';
  const projectLink = 'https://deeplearning-indaba.com';
  const projectSkills = ['Reactjs', 'nodeJS'];
  let wrapper = shallow(
    <WorkSample
      projectName={projectName}
      projectDesc={projectDesc}
      projectLink={projectLink}
      projectSkills={projectSkills}
      classes='css-class' />
  );
  it('should render the <WorkSample /> component', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should render an sample image', () => {
    expect(wrapper.find('.sample-toggle-btn').at(0).length).toBe(1);
    wrapper.find('.sample-toggle-btn').at(0).prop('onMouseOver')();
    wrapper.find('.sample-toggle-btn').at(0).prop('onMouseLeave')();
    wrapper.find('.sample-icon-btn').at(0).prop('onMouseLeave')();
    wrapper.update();
  });
  it('should render project name', () => {
    // expect(wrapper.find('#project-name')
    //   .at(0).props().children).toEqual(projectName);
  });
  it('should contain the project description', () => {
    // expect(wrapper.find('#project-desc')
    //   .at(0).props().children).toEqual(projectDesc);
  });
  it('should contain the button to go to the site', () => {
    // expect(wrapper.find('#go-to-site')
    //   .at(0).props().children).toEqual(`go to ${projectLink} site`);
  });
});
