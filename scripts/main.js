import React, {Component} from 'react';

export default class Main extends Component {
  static propTypes = {
    children: React.PropTypes.object
  };
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
