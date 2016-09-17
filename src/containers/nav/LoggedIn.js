import React from 'react';
import UserNav from './UserNav.js';
import UserAvatar from './UserAvatar.js';

export default class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='logged-in pore'>
	      <UserAvatar />
	      <UserNav />
      </div>
    );
  }
}
