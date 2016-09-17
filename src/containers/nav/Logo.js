import React from 'react';
import ReactDOM from 'react-dom';

export default class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className='logo pull-left' href='/'>
      	<img className='logo-img' src={require('../../img/lieyunlogo.png')} alt='' />
      </a>
    );
  }
}
