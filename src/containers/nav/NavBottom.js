import React from 'react';
import ReactDOM from 'react-dom';
import HomeNavList from './HomeNavList.js';
import AppDown from './AppDown.js';
import Search from './Search.js';

export default class NavBottom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='nav-bottom pore row'>
      	<div className='container'>
      		<HomeNavList />
      		<AppDown />
      		<Search />
      	</div>
      </div>
    );
  }
}
