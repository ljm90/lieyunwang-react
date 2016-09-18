import React from 'react';
import HomeSubNavList from './HomeSubNavList.js'
import SubNavList from './SubNavList.js'

export default class HomeNavList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className='home-nav-list clearfix'>
	      <li className='nav-list-bar'>
		      <a className='nav-list-itme' href='javascript:;'>
			      资讯
			      <span className='fa fa-angle-down'></span>
		      </a>
		      <HomeSubNavList />
	      </li>
      	<li className='nav-list-bar'><a className='nav-list-itme' href='javascript:;'>东南亚</a></li>
      	<li className='nav-list-bar'><a className='nav-list-itme' href='javascript:;'>创投爆料</a></li>
      	<li className='nav-list-bar'><a className='nav-list-itme' href='javascript:;'>众筹</a></li>
      	<li className='nav-list-bar'><a className='nav-list-itme' href='javascript:;'>投融资</a></li>
      	<li className='nav-list-bar'><a className='nav-list-itme' href='javascript:;'>投资人</a></li>
      	<li className='nav-list-bar'><a className='nav-list-itme' href='javascript:;'>活动</a></li>
      	<li className='nav-list-bar pore'>
	      	<a className='nav-list-itme' href='javascript:;'>
		      	发现
		      	<span className='fa fa-angle-down'></span>
	      	</a>
	      	<SubNavList />
      	</li>
      </ul>
    );
  }
}
