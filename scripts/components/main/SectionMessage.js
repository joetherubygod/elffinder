import React, {Component} from 'react';
import moment from 'moment';

export default class RenderMessages extends Component {
  static propTypes = {
    msgs: React.PropTypes.array,
    userList: React.PropTypes.array
  };
  render(){
    if (this.props.userList.length === 0) {
      return null;
    }
    let mapped = this.props.msgs.map((msg) => {
      let seggfej = this.props.userList.filter(segg => segg.id === msg.user_id);
      let date = moment(msg.date, 'YYYY-MM-DD HH:mm:ss').fromNow();
      return (
        <div key={msg.id} className="message">
          <h3>{seggfej[0].name} - {date}</h3>
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
