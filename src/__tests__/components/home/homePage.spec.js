import { shallow } from 'enzyme';
import HomePage from '../../../components/home/homePage';

describe('Should render <HomePage />', () => {
  let wrapper = shallow(<HomePage />);
  it('It should render homw page content', () => {
    expect(wrapper.length).toBe(1);
  });
});
