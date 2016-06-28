import React, {Component} from 'react';
import moment from 'moment';

export default class RenderMessages extends Component {
  static propTypes = {
    msgs: React.PropTypes.array
  };
  render(){
    let mapped = this.props.msgs.map((msg) => {
      let date = moment(msg.date, 'YYYY-MM-DD HH:mm:ss').fromNow();
      return (
        <div key={msg.id} className="message">
          <h3>{msg.user} - {date}</h3>
          <p>{msg.text}</p>
          <hr />
        </div>
      );
    });
    return (
      <div>
        {mapped}
      </div>
    );
  }
}
