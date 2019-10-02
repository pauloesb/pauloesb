import React from 'react';
import classes from './Body.module.css';
import Home from '../../pages/Home';
import History from '../../pages/History';
import Projects from '../../pages/Projects';
import Skills from '../../pages/Skills';
import Contact from '../../pages/Contact';

const body = () => {
  return (
    <main className={`${classes.Body} column is-full`}>
      <Home />
      <History />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default body;
