import React from 'react';

export default class UserAvatar extends React.Component {
  	constructor(props) {
    	super(props);
    	this.state = {
			avatar: this.props.avatar,
			unread: this.props.unread,
		};
  	}

  render() {
  	let unread = this.state.unread ? <span className='unread'>{this.state.unread}</span> : ''
    return (
      <a className='user-avatar-box pore' href='javascript:;'>
      	<img className='user-avatar' src={this.state.avatar} alt='' />
      	{ unread }
      </a>
    );
  }
}

UserAvatar.defaultProps = {
  avatar: 'http://cdnu.lieyunwang.com/upload/user/1509/1443529993127746.png.thumb.jpg',
  unread: 0
};

UserAvatar.propTypes = {
  avatar: React.PropTypes.string.isRequired,
  unread: React.PropTypes.number.isRequired,
};