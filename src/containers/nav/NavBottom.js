import React from 'react';
import ReactDOM from 'react-dom';
import HomeNav from './HomeNav.js';
import AppDown from './AppDown.js';
import Search from './Search.js';

export default class NavBottom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='nav-bottom row'>
      	<div className='container'>
      		<HomeNav />
      		<AppDown />
      		<Search />
      	</div>
      </div>
    );
  }
}
