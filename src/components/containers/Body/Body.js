import React from 'react';
import classes from './Body.module.css';
import Home from '../../pages/Home';

const body = () => {
  return (
    <main className={`${classes.Body} column is-full`}>
      <Home />
    </main>
  );
};

export default body;
