import React from 'react';
import ReactDOM from 'react-dom';
import './nav.less';

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={require('../../img/lieyunlogo.png')} alt='' />
                <div className='aaa'></div>
            </div>
        );
    }
}
