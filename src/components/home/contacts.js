import React from 'react';
import PropTypes from 'prop-types';
import {
  Facebook,
  Twitter,
  LinkedIn,
  GitHub
} from '@material-ui/icons';
import {
  Title,
  SocialLogo
} from './utils';

export const Contacts = ({ contactsRef }) => {
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
      <div>
        <input
          type='text'
          className='form-input'
          id='name'
          placeholder='Name' />
      </div>
      <div>
        <input
          type='email'
          className='form-input'
          id='email'
          placeholder='Email' />
      </div>
      <div>
        <textarea
          id='comments'
          className='form-input'
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
    </div>
  </div>;
};

Contacts.propTypes = {
  contactsRef: PropTypes.any
};

export default React.memo(Contacts);
