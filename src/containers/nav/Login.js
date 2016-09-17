import React from 'react';
import ReactDOM from 'react-dom';
import LoggedIn from './LoggedIn.js';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			login: this.props.login,
		};
	}

	render() {
		let login = this.state.login ? <LoggedIn /> : <a className='not-logged-in' href='javascript:;'>注册/登录</a>

		return (
			<div className='login-box pull-right'>
				{ login }
			</div>
		);
	}
}

Login.defaultProps = {
  login: true,
};

Login.propTypes = {
  login: React.PropTypes.bool.isRequired,
};