import React from 'react';
import { Link } from 'react-scroll';
import classes from './Sidebar.module.css';
import logo from '../../assets/logo.png';

const sidebar = () => {
  return (
    <section className={`${classes.Sidebar} is-fullheight is-narrow`}>
      <Link activeClass="active" to="home" spy smooth duration={500}>
        <figure className="image" style={{ padding: '0.5rem 2rem' }}>
          <img src={logo} alt="avatar" />
        </figure>
      </Link>
      <div className={`${classes.menuLinks} menu container has-text-centered`}>
        <hr />
        <ul>
          <li>
            <Link activeClass="active" to="history" spy smooth duration={500}>
              History
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="projects" spy smooth duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="skills" spy smooth duration={500}>
              My Skills
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="contact" spy smooth duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default sidebar;
