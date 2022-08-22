import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';
import App from '../../components/App';
import HomePage from '../../components/home/homePage';

describe('Should render <App />', () => {
  let wrapper = shallow(<App />);
  let pathMap = {};
  it('Should render App component', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should show Home page component for / router', () => {
    pathMap = wrapper.find(Route);
    expect(pathMap.props().path).toBe('/');
    expect(pathMap.props().component).toBe(HomePage);
  });
});
