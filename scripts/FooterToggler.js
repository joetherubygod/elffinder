import React, {Component} from 'react';

export default class Toggler extends Component {
  static propTypes = {
    togglerClick: React.PropTypes.func
  };
  render() {
    return (
      <div className="toggler" onClick={this.props.togglerClick}>
        <span className="glyphicon glyphicon-menu-up" aria-hidden="true"></span>
      </div>
    );
  }
}
