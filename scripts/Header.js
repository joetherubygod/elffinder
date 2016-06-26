import React, {Component} from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="title"><h1>vagy ma?</h1></div>
        <div className="profile"><p className="navbar-text"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> {this.props.user.name}</p></div>
      </header>
    );
  }
}
