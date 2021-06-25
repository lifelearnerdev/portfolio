import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import App from '../../components/App';
import HomePage from '../../components/home/homePage';

describe('Should render <App />', () => {
  let wrapper = shallow(<App />);
  let pathMap = {};
  // beforeAll(() => {
  //   pathMap = wrapper.find(Route).reduce((pathMap, route) => {
  //     const routeProps = route.props();
  //     console.log('******** ', pathMap);
  //     pathMap[routeProps.path] = routeProps.component;
  //     return pathMap;
  //   });
  // });
  it('Should render App component', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should show Home page component for / router', () => {
    pathMap = wrapper.find(Route);
    console.log('****', pathMap.props());
    expect(pathMap.props().path).toBe('/');
    expect(pathMap.props().component).toBe(HomePage);
  });
});
