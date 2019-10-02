/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import classes from './Contact.module.css';
import reveal from '../../HOC/reveal';

const contact = () => {
  return (
    <div id="contact" className={`${classes.contactContainer} container`}>
      <h1 className="title">Contact</h1>
      <form className={`${classes.contactForm} box column is-7`}>
        <p className={`${classes.contactFormText} content`}>
          Send me a message to my personal email{' '}
          <a href="mailto:pauloesb@gmail.com">pauloesb@gmail.com</a> or send a
          message through the contact form below, let&#39;s talk and work
          together...
        </p>
        <div className={`${classes.sideBySide} container is-flex`}>
          <div className="field column is-6">
            <label htmlFor="name" className={`${classes.contactLabel} label`}>
              Name
            </label>
            <div className="control">
              <input
                id="name"
                className="input"
                type="text"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field column is-6">
            <label htmlFor="email" className={`${classes.contactLabel} label`}>
              E-mail
            </label>
            <div className="control">
              <input
                id="email"
                className="input"
                type="email"
                placeholder="E-mail"
              />
            </div>
          </div>
        </div>
        <div className={`${classes.sideBySide} container is-flex`}>
          <div className="field column is-12">
            <label className={`${classes.contactLabel} label`}>Message</label>
            <textarea className="textarea" placeholder="Your message" />
          </div>
        </div>
        <div
          className={`${classes.sideBySide} ${classes.btnSubmit} container is-flex`}
        >
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-link">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default reveal(contact);
