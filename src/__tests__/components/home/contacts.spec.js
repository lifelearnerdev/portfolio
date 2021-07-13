import { shallow } from 'enzyme';
import { Facebook } from '@material-ui/icons';
import { Contacts } from '../../../components/home/contacts';
import { Title, SocialLogo } from '../../../components/home/utils';

describe('<Contacts />', () => {
  let wrapper = shallow(<Contacts />);
  it('should render the Contacts component', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should call the Title Component', () => {
    expect(wrapper.find(Title).length).toBe(1);
  });
  it('should  call 5 SocialLogo Components', () => {
    expect(wrapper.find(SocialLogo).length).toBe(4);
  });
  it('should render the contact form', () => {
    expect(wrapper.find('#name').prop('placeholder')).toEqual('Name');
    expect(wrapper.find('#email').prop('placeholder')).toEqual('Email');
    expect(wrapper.find('#comments').prop('placeholder')).toEqual('Comments');
    expect(wrapper.find('#send').prop('value')).toEqual('Send');
  });
  it('should call subsequent functions on buttons click', () => {
    const e = {
      preventDefault: jest.fn(),
      target: {
        name: 'from_name',
        value: 'eric'
      }
    };
    wrapper.find('input').at(0).prop('onChange')(e);
    wrapper.find('form').prop('onSubmit')(e);
  });
});

describe('<SocialLogo', () => {
  let wrapper = shallow(<SocialLogo Logo={Facebook} />);
  it('should be render', () => {
    expect(wrapper.length).toBe(1);
  });
});
