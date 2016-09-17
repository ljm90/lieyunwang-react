import React from 'react';

export default class UserNav extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className='user-nav'>
				<li className='user-nav-bar'><a className='user-nav-itme' href='javascript:;'>用户名</a></li>
				<li className='user-nav-bar'><a className='user-nav-itme' href='javascript:;'>我的消息</a></li>
				<li className='user-nav-bar'><a className='user-nav-itme' href='javascript:;'>创建项目</a></li>
				<li className='user-nav-bar'><a className='user-nav-itme' href='javascript:;'>认证投资人</a></li>
				<li className='user-nav-bar'><a className='user-nav-itme' href='javascript:;'>我要投稿</a></li>
				<li className='user-nav-bar'><a className='user-nav-itme' href='javascript:;'>退出</a></li>
			</ul>
		);
	}
}
