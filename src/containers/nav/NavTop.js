import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo.js';
import NavTopBtnList from './NavTopBtnList.js';
import Login from './Login.js';

export default class NavTop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
      	<Login />
      	<NavTopBtnList />
      	<Logo />
      </div>
    );
  }
}
