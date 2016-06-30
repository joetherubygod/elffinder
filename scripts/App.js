import React, {Component} from 'react';
import Header from './Header';
import Content from './Content';
import User from './User';

export default class App extends Component {

  // mountnal loadold a usert
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
