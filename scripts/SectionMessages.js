import React, {Component} from 'react'
import RenderMessages from './RenderMessages';

export default class SectionMessages extends Component {
  render() {
    return (
      <div className="messages">
        <h2>Uzenetek</h2>
        <RenderMessages msgs={this.props.msgs} />
      </div>
    );
  }
}
