import React from 'react';
import classes from './Sidebar.module.css';
import logo from '../../assets/logo.png';

const sidebar = () => {
  return (
    <section className={`${classes.Sidebar} is-fullheight is-narrow`}>
      <a href="#home">
        <figure className="image" style={{ padding: '0.5rem 2rem' }}>
          <img src={logo} alt="avatar" />
        </figure>
      </a>
      <div className={`${classes.menuLinks} menu container has-text-centered`}>
        <hr />
        <ul>
          <li>
            <a href="#history">History</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="skills">My Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default sidebar;
