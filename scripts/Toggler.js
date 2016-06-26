import React, {Component} from 'react'

export default class Toggler extends Component {
  render() {
    return (
      <div className="toggler" onClick={this.props.togglerClick}>
        <span className="glyphicon glyphicon-menu-up" aria-hidden="true"></span>
      </div>
    );
  }
}
