import React from 'react';

export default class HomeNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className='nav-list clearfix'>
      <li className='nav-list-bar'><a className='nav-list-itme' href='javascript:;'>资讯<span className='glyphicon glyphicon-chevron-down'></span></a></li>
      	<li className='nav-list-bar'><a className='nav-list-itme' href='javascript:;'>东南亚</a></li>
      	<li className='nav-list-bar'><a className='nav-list-itme' href='javascript:;'>创投爆料</a></li>
      	<li className='nav-list-bar'><a className='nav-list-itme' href='javascript:;'>众筹</a></li>
      	<li className='nav-list-bar'><a className='nav-list-itme' href='javascript:;'>投融资</a></li>
      	<li className='nav-list-bar'><a className='nav-list-itme' href='javascript:;'>投资人</a></li>
      	<li className='nav-list-bar'><a className='nav-list-itme' href='javascript:;'>活动</a></li>
      	<li className='nav-list-bar'><a className='nav-list-itme' href='javascript:;'>发现<span className='glyphicon glyphicon-chevron-down'></span></a></li>
      </ul>
    );
  }
}
