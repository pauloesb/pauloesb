import React from 'react';
import classes from './Home.module.css';
import reveal from '../../HOC/reveal';
import photo from '../../assets/photo_side.png';

const home = () => (
  <div id="home" className={`${classes.welcomeContainer} container`}>
    <div
      className={`${classes.welcome} is-flex is-three-quarters is-offset-1 column`}
    >
      <figure className="image is-128x128">
        <img src={photo} alt="Author" />
      </figure>
      <h1 className="title">Paulo Borba</h1>
      <h2 className="subtitle">Software Engineer</h2>
      <p className="content">Enthusiastic Ruby on Rails / React Developer</p>
    </div>
  </div>
);

export default reveal(home);
