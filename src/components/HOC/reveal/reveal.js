import React, { PureComponent } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const reveal = App => {
  return class extends PureComponent {
    render() {
      return (
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          animatePreScroll={false}
        >
          <App />
        </ScrollAnimation>
      );
    }
  };
};

export default reveal;
