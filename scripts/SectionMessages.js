import React, {Component} from 'react';
import SectionMessage from './SectionMessage';

export default class SectionMessages extends Component {
  static propTypes = {
    isLoading: React.PropTypes.bool,
    msgs: React.PropTypes.array
  };
  render() {
    return (
      <div className="messages">
        <h2>Uzenetek</h2>
        { this.props.isLoading ? 'site is loading' : <SectionMessage msgs={this.props.msgs} /> }
      </div>
    );
  }
}
