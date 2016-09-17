import React from 'react';
import ReactDOM from 'react-dom';
import NavTop from './NavTop.js';
import NavBootom from './NavBottom.js';
import './nav.less';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className='home-nav container-fluid'>
        <NavTop />
        <NavBootom />
      </nav>
    );
  }
}
