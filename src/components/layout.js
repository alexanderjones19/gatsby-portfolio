import React from 'react';
import '../assets/scss/main.scss';

import Header from './Header';

const Template = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default Template;
