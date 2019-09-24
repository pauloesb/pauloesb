import React from 'react';
import classes from './Body.module.css';
import Home from '../../pages/Home';
import History from '../../pages/History';

const body = () => {
  return (
    <main className={`${classes.Body} column is-full`}>
      <Home />
      <History />
    </main>
  );
};

export default body;
