import React from 'react';

export default class SubNavList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className='sub-nav-list'>
	      <li className='sub-nav-list-bar'><a className='sub-nav-list-itme' href='javascript:;'>ONE</a></li>
	      <li className='sub-nav-list-bar'><a className='sub-nav-list-itme' href='javascript:;'>快讯</a></li>
	      <li className='sub-nav-list-bar'><a className='sub-nav-list-itme' href='javascript:;'>孵化器</a></li>
      </ul>
    );
  }
}
