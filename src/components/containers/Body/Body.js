import React from 'react';
import classes from './Body.module.css';
import Home from '../../pages/Home';
import History from '../../pages/History';
import Projects from '../../pages/Projects';
import Skills from '../../pages/Skills';

const body = () => {
  return (
    <main className={`${classes.Body} column is-full`}>
      <Home />
      <History />
      <Projects />
      <Skills />
    </main>
  );
};

export default body;
