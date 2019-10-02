/* eslint-disable func-names */
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const reveal = App => {
  return function() {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animatePreScroll>
        <App />
      </ScrollAnimation>
    );
  };
};

export default reveal;
