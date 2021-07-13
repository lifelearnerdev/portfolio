import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Facebook,
  Twitter,
  LinkedIn,
  GitHub
} from '@material-ui/icons';
import { send } from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import {
  Title,
  SocialLogo
} from './utils';
import 'react-toastify/dist/ReactToastify.css';

export const Contacts = ({ contactsRef }) => {
  const [email, setEmail] = useState({
    from_name: '',
    to_name: 'Eric',
    message: '',
    reply_to: ''
  });
  const sent = () => toast.success('Email sent! Thanks for your time');
  const error = () => toast
    .error('An error occured, please check your connection');

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
    ).then(() => {
      setEmail({
        from_name: '',
        to_name: 'Eric',
        message: '',
        reply_to: ''
      });
      sent();
    }).catch(() => {
      error();
    });
  };

  return <div className='contacts-wrapper' ref={contactsRef}>
    <div>
      <Title title='Contacts' classes='contacts-title' />
    </div>
    <div className='social-links-wrapper'>
      <SocialLogo
        Logo={Facebook}
        tooltip='Facebook'
        link='https://www.facebook.com/eubule.malaba'
        color='#4267B2' />
      <SocialLogo
        Logo={Twitter}
        tooltip='Twitter'
        link='https://twitter.com/malaba21'
        color='#1DA1F2' />
      <SocialLogo
        Logo={LinkedIn}
        tooltip='LinkedIn'
        link='https://www.linkedin.com/in/eric-malaba-87249b10a/'
        color='#2867B2' />
      <SocialLogo
        Logo={GitHub}
        tooltip='GitHub'
        link='https://github.com/Malaba6'
        color='#211F1F' />
    </div>
    <div className='contact-form-wrapper'>
      <form onSubmit={handleSend}>
        <div>
          <input
            type='text'
            className='form-input'
            name='from_name'
            onChange={handleChange}
            value={email.from_name}
            id='name'
            placeholder='Name' />
        </div>
        <div>
          <input
            type='email'
            className='form-input'
            name='reply_to'
            value={email.reply_to}
            onChange={handleChange}
            id='email'
            placeholder='Email' />
        </div>
        <div>
          <textarea
            id='comments'
            className='form-input'
            name='message'
            value={email.message}
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
        <ToastContainer />
      </form>
    </div>
  </div>;
};

Contacts.propTypes = {
  contactsRef: PropTypes.any
};

export default React.memo(Contacts);
