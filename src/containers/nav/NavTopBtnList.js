import React from 'react';

export default class NavTopBtnList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='nav-btn-group pull-right clearfix'>
	      	<a className='btn-nav pull-left' href='javascript:;'>发布融资消息</a>
	      	<a className='btn-nav pull-left' href='javascript:;'>
	      		<span className='glyphicon glyphicon-plus'></span>
	      		寻求报道
	  		</a>
	      	<a className='btn-nav pull-left' href='javascript:;'>认证投资人</a>
	      	<a className='btn-nav pull-left' href='javascript:;'>寻求融资</a>
      </div>
    );
  }
}
