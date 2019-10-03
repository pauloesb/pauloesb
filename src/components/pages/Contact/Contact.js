/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import classes from './Contact.module.css';
import reveal from '../../HOC/reveal';

const Contact = () => {
  const [form, setForm] = useState({
    name: null,
    email: null,
    message: null,
    sendingMessage: false
  });

  const handlerForm = event => {
    const newForm = { ...form };
    // eslint-disable-next-line default-case
    switch (event.target.id) {
      case 'name':
        setForm({ ...newForm, name: event.target.value });
        break;
      case 'email':
        setForm({ ...newForm, email: event.target.value });
        break;
      case 'message':
        setForm({ ...newForm, message: event.target.value });
        break;
    }
  };

  const sendMail = event => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div id="contact" className={`${classes.contactContainer} container`}>
      <h1 className="title">Contact</h1>
      <div className={classes.contactSubContainer}>
        <form
          onSubmit={sendMail}
          className={`${classes.contactForm} box column is-10`}
        >
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
                  onChange={handlerForm}
                />
              </div>
            </div>
            <div className="field column is-6">
              <label
                htmlFor="email"
                className={`${classes.contactLabel} label`}
              >
                E-mail
              </label>
              <div className="control">
                <input
                  id="email"
                  className="input"
                  type="email"
                  placeholder="E-mail"
                  onChange={handlerForm}
                />
              </div>
            </div>
          </div>
          <div className={`${classes.sideBySide} container is-flex`}>
            <div className="field column is-12">
              <label className={`${classes.contactLabel} label`}>Message</label>
              <textarea
                id="message"
                className="textarea"
                placeholder="Your message"
                onChange={handlerForm}
              />
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
    </div>
  );
};

export default reveal(Contact);
