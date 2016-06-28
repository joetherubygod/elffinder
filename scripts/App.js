import React, {Component} from 'react';
import Header from './Header';
import Content from './Content';
import User from './User';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
