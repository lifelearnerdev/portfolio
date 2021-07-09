import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Facebook,
  Twitter,
  LinkedIn,
  GitHub
} from '@material-ui/icons';
import send from 'emailjs-com';
import {
  Title,
  SocialLogo
} from './utils';

export const Contacts = ({ contactsRef }) => {
  const [email, setEmail] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: ''
  });

  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };
  const handleSend = (e) => {
    e.preventDefault();
    send(
      'service_87l3eia',
      'template_9m7bgjo',
      email,
      'user_0q5QVnkGL7VdbxWnqjoad'
    );
  };
  return <div className='contacts-wrapper' ref={contactsRef}>
    <div>
      <Title title='Contacts' classes='contacts-title' />
    </div>
    <div className='social-links-wrapper'>
      <SocialLogo
        Logo={Facebook}
        tooltip='Facebook'
        color='#4267B2' />
      <SocialLogo
        Logo={Twitter}
        tooltip='Twitter'
        color='#1DA1F2' />
      <SocialLogo
        Logo={LinkedIn}
        tooltip='LinkedIn'
        color='#2867B2' />
      <SocialLogo
        Logo={GitHub}
        tooltip='GitHub'
        color='#211F1F' />
    </div>
    <div className='contact-form-wrapper'>
      <form onSubmit={handleSend}>
        <div>
          <input
            type='text'
            className='form-input'
            onChange={handleChange}
            id='name'
            placeholder='Name' />
        </div>
        <div>
          <input
            type='email'
            className='form-input'
            onChange={handleChange}
            id='email'
            placeholder='Email' />
        </div>
        <div>
          <textarea
            id='comments'
            className='form-input'
            onChange={handleChange}
            placeholder='Comments'>
          </textarea>
        </div>
        <div >
          <input
            type='submit'
            className='form-input'
            id='send'
            value='Send' />
        </div>
      </form>
    </div>
  </div>;
};

Contacts.propTypes = {
  contactsRef: PropTypes.any
};

export default React.memo(Contacts);
