import React    from 'react';
import ReactDOM from 'react-dom';
import Nav      from '../containers/nav/Nav';
import Body     from '../containers/body/index';
import Footer   from '../containers/footer/footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
      	<Nav />
      </div>
    );
  }
}

