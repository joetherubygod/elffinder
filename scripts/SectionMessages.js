import React, {Component} from 'react';
import RenderMessages from './RenderMessages';

export default class SectionMessages extends Component {
  static propTypes = {
    isLoading: React.PropTypes.bool,
    msgs: React.PropTypes.array
  };
  render() {
    return (
      <div className="messages">
        <h2>Uzenetek</h2>
        { this.props.isLoading ? 'site is loading' : <RenderMessages msgs={this.props.msgs} /> }
      </div>
    );
  }
}
