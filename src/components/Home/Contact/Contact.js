import React from 'react';
import emailjs from 'emailjs-com';
import apiKeys from './ApiKey';
import './contact.css';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    // e.preventDefault();
    emailjs
      .sendForm(
        `${apiKeys.SERVICE_ID}`,
        `${apiKeys.TEMPLATE_ID}`,
        e.target,
        `${apiKeys.USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='contact'>
      <h1 className='section-title'>CONTACT</h1>
      <div className='contact-form'>
        <form className='form col-md-6' onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-3'>
            <label className='form-label'>Your Name</label>
            <input
              {...register('name', { required: true })}
              className='form-control'
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className='mb-3'>
            <label className='form-label'>Subject</label>
            <input
              {...register('subject', { required: true })}
              className='form-control'
            />
            {errors.subject && <span>This field is required</span>}
          </div>

          <div className='mb-3'>
            <label className='form-label'>Email address</label>
            <input
              {...register('email', { required: true })}
              className='form-control'
            />
            {errors.email && <span>This field is required</span>}
          </div>

          <div className='mb-3'>
            <label className='form-label'>Message</label>
            <textarea
              className='form-control'
              {...register('message', { required: true })}
              rows='3'
            ></textarea>
            {errors.message && <span>This field is required</span>}
          </div>
          <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
